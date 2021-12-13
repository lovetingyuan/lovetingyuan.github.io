[meta]: <javascript> (title: 'JavaScript继承实现', keywords: 'extends, prototype', date: '2020-8-25')

## JavaScript继承实现

### ES5的实现
```javascript
function Parent (name) {
  this.name = name
}
Parent.prototype.getName = function getName () { return this.name }

function Child (name, age) {
  Parent.call(this, name)
  this.age = age
}
Child.prototype = Object.create(Parent.prototype, {
  constructor: {
    writable: true, configurable: true, enumerable: false,
    value: Child
  }
})
Child.prototype.getAge = function getAge () { return this.age }
```

### ES6

对比于ES6规范中的class继承，上面的实现是少了一些细节的，看看Babel怎么弥补的
```javascript
class Parent {
  static staticProp = 'static'
  static staticMethod() {}
  constructor (a) { this.a = a }
  instanceProp = 'instance'
  protoMethod() { console.log(this) }
}

class Child extends Parent {
  static staticChild = 'static'
  instanceChild = 'instance'
  static childStaticMethod () {
    super.staticMethod()
  }
  constructor(a, b) {
    super(a)
  	this.b = b
  }
  get getterProp() {}
  protoMethod() { super.protoMethod() }
}
```

Babel: 
```javascript

var Parent = /*#__PURE__*/function () {
  // static的方法直接挂到Parent上，但是是不可枚举的
  _createClass(Parent, null, [{
    key: "staticMethod",
    value: function staticMethod() {}
  }]);
  function Parent(a) {
    _classCallCheck(this, Parent); // 检查Parent不能直接调用
    // 定义实例属性
    _defineProperty(this, "instanceProp", 'instance');
    this.a = a;
  }
  // 将原型方法放到Parent的原型对象上，这里的方法都是不可枚举的
  _createClass(Parent, [{
    key: "protoMethod",
    value: function protoMethod() {
      return 'parent proto';
    }
  }]);
  return Parent;
}();
// 将静态属性挂到Parent构造方法上
_defineProperty(Parent, "staticProp", 'static');

var Child = /*#__PURE__*/function (_Parent) {
  // _inherits实现了两条继承路径
  // 一是原型继承，和ES5一样，即 Child.prototype = Object.create(Parent.prototype, {...
  // 二是构造方法的原型继承，即 Child.__proto__ = _Parent，这样就可以Object.getPrototypeOf(Child) === Parent，那如果不存在继承，那__proto__自然指向的是Function.prototype
  _inherits(Child, _Parent);
  // function _createSuper(Derived) {
  //   var hasNativeReflectConstruct = _isNativeReflectConstruct();
  //   return function _createSuperInternal() {
  //     // 获取到父类的构造方法
  //     var Super = _getPrototypeOf(Derived), result;
  //     if (hasNativeReflectConstruct) {
  //       var NewTarget = _getPrototypeOf(this).constructor;
  //       result = Reflect.construct(Super, arguments, NewTarget);
  //     } else {
  //       result = Super.apply(this, arguments);
  //     }
  //     if (result && (_typeof(result) === "object" || typeof result === "function")) {
  //       return result;
  //     }
  //     return _assertThisInitialized(this);
  //   };
  // }
  // 创建父类的构造方法，这里是对父类构造方法做了包装，上面这段注释给出了_createSuper的具体实现
  var _super = _createSuper(Child);
  // 静态方法挂到Child上
  _createClass(Child, null, [{
    key: "childStaticMethod",
    value: function childStaticMethod() {
      // 这里调用的是父类的方法
      _get(_getPrototypeOf(Child), "staticMethod", this).call(this);
    }
  }]);
  function Child(a, b) {
    var _this;
    _classCallCheck(this, Child);
    // 父类的构造方法在子类的上下文调用，这里会优先使用Reflect.construct()
    // 使用Reflect可以实现先创建父类实例对象的效果，而不是拿着这里的this去调用父类构造方法，另一个好处是可以实现new.target
    // 当然不支持Reflect就只能super.call(this)了
    _this = _super.call(this, a);
    // 判断_this一定要存在，代表super要先被调用才能用this，然后定义实例属性
    _defineProperty(_assertThisInitialized(_this), "instanceChild", 'instance');
    _this.b = b;
    return _this;
  }
  _createClass(Child, [{
    key: "protoMethod",
    value: function protoMethod() {
      _get(_getPrototypeOf(Child.prototype), "protoMethod", this).call(this);
    }
  }, { // getter 属性是挂在到原型对象上的
    key: "getterProp",
    get: function get() {}
  }]);
  return Child;
}(Parent);
_defineProperty(Child, "staticChild", 'static');
```

Babel会尽量按照规范去实现，由此可以看出ES6继承带来的变化：

* ES6在实现原型继承的同时也会实现构造方法的继承，所以父类上的static属性子类也可以直接访问
* ES6在调用super的时候是先实例化父类，然后父类的实例对象在子类的构造方法上操作，ES5是反过来，ES6这样做主要目的是为了保留父类的一些内部属性和操作，比如继承内置对象时，如Array，那`class MyArray extends Array {}`，这里实例化MyArray后调用push那么它的length是会变化的，ES5无法做到这一点
  > 子类自己的this对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，加上子类自己的实例属性和方法
  > Array构造函数有一个内部属性[[DefineOwnProperty]]，用来定义新属性时，更新length属性，这个内部属性无法在子类获取，导致子类的length属性行为不正常。
* ES6的原型方法和静态方法都是**不可枚举**的，这些方法也都没有原型对象；ES6支持getter，但是是**在原型对象上**定义set；class必须用new调用，默认启用严格模式，类名具有暂时性死区等等

### super

额外说一下`super`，super本身是个关键字，但是在代码上它却无法独立使用（单独使用`super`时它什么也不代表），合法的只有两种访问形式：
* 作为方法来调用，此时只能出现在子类构造方法中，也就是必须先调用super才能使用this；
* 也可以作为“对象”来使用：
  * 在原型方法（包括构造方法和getter）中：
    * 访问super的属性时如`super.a`，这时的super**代表的是this**，也就是子类的实例对象
    * 访问super上的方法时它代表的是**父类的原型对象**，如`super.parentMethod()`，这里的parentMethod中的this指向的是子类的实例对象
  * 在静态方法中访问super时它代表的是**父类本身**，如`super.staticParentMethod()`，这里的staticParentMethod中的this指向的是子类本身

不能以变量或者对象的眼光去看待super，super有自己的行事准则。
