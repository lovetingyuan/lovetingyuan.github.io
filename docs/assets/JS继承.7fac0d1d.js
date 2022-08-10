const t=`<h2>JavaScript\u7EE7\u627F\u5B9E\u73B0</h2>
<h3>ES5\u7684\u5B9E\u73B0</h3>
<pre><code class="language-javascript">function Parent (name) {
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
</code></pre>
<h3>ES6</h3>
<p>\u5BF9\u6BD4\u4E8EES6\u89C4\u8303\u4E2D\u7684class\u7EE7\u627F\uFF0C\u4E0A\u9762\u7684\u5B9E\u73B0\u662F\u5C11\u4E86\u4E00\u4E9B\u7EC6\u8282\u7684\uFF0C\u770B\u770BBabel\u600E\u4E48\u5F25\u8865\u7684</p>
<pre><code class="language-javascript">class Parent {
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
</code></pre>
<p>Babel:</p>
<pre><code class="language-javascript">
var Parent = /*#__PURE__*/function () {
  // static\u7684\u65B9\u6CD5\u76F4\u63A5\u6302\u5230Parent\u4E0A\uFF0C\u4F46\u662F\u662F\u4E0D\u53EF\u679A\u4E3E\u7684
  _createClass(Parent, null, [{
    key: &quot;staticMethod&quot;,
    value: function staticMethod() {}
  }]);
  function Parent(a) {
    _classCallCheck(this, Parent); // \u68C0\u67E5Parent\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528
    // \u5B9A\u4E49\u5B9E\u4F8B\u5C5E\u6027
    _defineProperty(this, &quot;instanceProp&quot;, 'instance');
    this.a = a;
  }
  // \u5C06\u539F\u578B\u65B9\u6CD5\u653E\u5230Parent\u7684\u539F\u578B\u5BF9\u8C61\u4E0A\uFF0C\u8FD9\u91CC\u7684\u65B9\u6CD5\u90FD\u662F\u4E0D\u53EF\u679A\u4E3E\u7684
  _createClass(Parent, [{
    key: &quot;protoMethod&quot;,
    value: function protoMethod() {
      return 'parent proto';
    }
  }]);
  return Parent;
}();
// \u5C06\u9759\u6001\u5C5E\u6027\u6302\u5230Parent\u6784\u9020\u65B9\u6CD5\u4E0A
_defineProperty(Parent, &quot;staticProp&quot;, 'static');

var Child = /*#__PURE__*/function (_Parent) {
  // _inherits\u5B9E\u73B0\u4E86\u4E24\u6761\u7EE7\u627F\u8DEF\u5F84
  // \u4E00\u662F\u539F\u578B\u7EE7\u627F\uFF0C\u548CES5\u4E00\u6837\uFF0C\u5373 Child.prototype = Object.create(Parent.prototype, {...
  // \u4E8C\u662F\u6784\u9020\u65B9\u6CD5\u7684\u539F\u578B\u7EE7\u627F\uFF0C\u5373 Child.__proto__ = _Parent\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5Object.getPrototypeOf(Child) === Parent\uFF0C\u90A3\u5982\u679C\u4E0D\u5B58\u5728\u7EE7\u627F\uFF0C\u90A3__proto__\u81EA\u7136\u6307\u5411\u7684\u662FFunction.prototype
  _inherits(Child, _Parent);
  // function _createSuper(Derived) {
  //   var hasNativeReflectConstruct = _isNativeReflectConstruct();
  //   return function _createSuperInternal() {
  //     // \u83B7\u53D6\u5230\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5
  //     var Super = _getPrototypeOf(Derived), result;
  //     if (hasNativeReflectConstruct) {
  //       var NewTarget = _getPrototypeOf(this).constructor;
  //       result = Reflect.construct(Super, arguments, NewTarget);
  //     } else {
  //       result = Super.apply(this, arguments);
  //     }
  //     if (result &amp;&amp; (_typeof(result) === &quot;object&quot; || typeof result === &quot;function&quot;)) {
  //       return result;
  //     }
  //     return _assertThisInitialized(this);
  //   };
  // }
  // \u521B\u5EFA\u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\uFF0C\u8FD9\u91CC\u662F\u5BF9\u7236\u7C7B\u6784\u9020\u65B9\u6CD5\u505A\u4E86\u5305\u88C5\uFF0C\u4E0A\u9762\u8FD9\u6BB5\u6CE8\u91CA\u7ED9\u51FA\u4E86_createSuper\u7684\u5177\u4F53\u5B9E\u73B0
  var _super = _createSuper(Child);
  // \u9759\u6001\u65B9\u6CD5\u6302\u5230Child\u4E0A
  _createClass(Child, null, [{
    key: &quot;childStaticMethod&quot;,
    value: function childStaticMethod() {
      // \u8FD9\u91CC\u8C03\u7528\u7684\u662F\u7236\u7C7B\u7684\u65B9\u6CD5
      _get(_getPrototypeOf(Child), &quot;staticMethod&quot;, this).call(this);
    }
  }]);
  function Child(a, b) {
    var _this;
    _classCallCheck(this, Child);
    // \u7236\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\u5728\u5B50\u7C7B\u7684\u4E0A\u4E0B\u6587\u8C03\u7528\uFF0C\u8FD9\u91CC\u4F1A\u4F18\u5148\u4F7F\u7528Reflect.construct()
    // \u4F7F\u7528Reflect\u53EF\u4EE5\u5B9E\u73B0\u5148\u521B\u5EFA\u7236\u7C7B\u5B9E\u4F8B\u5BF9\u8C61\u7684\u6548\u679C\uFF0C\u800C\u4E0D\u662F\u62FF\u7740\u8FD9\u91CC\u7684this\u53BB\u8C03\u7528\u7236\u7C7B\u6784\u9020\u65B9\u6CD5\uFF0C\u53E6\u4E00\u4E2A\u597D\u5904\u662F\u53EF\u4EE5\u5B9E\u73B0new.target
    // \u5F53\u7136\u4E0D\u652F\u6301Reflect\u5C31\u53EA\u80FDsuper.call(this)\u4E86
    _this = _super.call(this, a);
    // \u5224\u65AD_this\u4E00\u5B9A\u8981\u5B58\u5728\uFF0C\u4EE3\u8868super\u8981\u5148\u88AB\u8C03\u7528\u624D\u80FD\u7528this\uFF0C\u7136\u540E\u5B9A\u4E49\u5B9E\u4F8B\u5C5E\u6027
    _defineProperty(_assertThisInitialized(_this), &quot;instanceChild&quot;, 'instance');
    _this.b = b;
    return _this;
  }
  _createClass(Child, [{
    key: &quot;protoMethod&quot;,
    value: function protoMethod() {
      _get(_getPrototypeOf(Child.prototype), &quot;protoMethod&quot;, this).call(this);
    }
  }, { // getter \u5C5E\u6027\u662F\u6302\u5728\u5230\u539F\u578B\u5BF9\u8C61\u4E0A\u7684
    key: &quot;getterProp&quot;,
    get: function get() {}
  }]);
  return Child;
}(Parent);
_defineProperty(Child, &quot;staticChild&quot;, 'static');
</code></pre>
<p>Babel\u4F1A\u5C3D\u91CF\u6309\u7167\u89C4\u8303\u53BB\u5B9E\u73B0\uFF0C\u7531\u6B64\u53EF\u4EE5\u770B\u51FAES6\u7EE7\u627F\u5E26\u6765\u7684\u53D8\u5316\uFF1A</p>
<ul>
<li>ES6\u5728\u5B9E\u73B0\u539F\u578B\u7EE7\u627F\u7684\u540C\u65F6\u4E5F\u4F1A\u5B9E\u73B0\u6784\u9020\u65B9\u6CD5\u7684\u7EE7\u627F\uFF0C\u6240\u4EE5\u7236\u7C7B\u4E0A\u7684static\u5C5E\u6027\u5B50\u7C7B\u4E5F\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE</li>
<li>ES6\u5728\u8C03\u7528super\u7684\u65F6\u5019\u662F\u5148\u5B9E\u4F8B\u5316\u7236\u7C7B\uFF0C\u7136\u540E\u7236\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\u5728\u5B50\u7C7B\u7684\u6784\u9020\u65B9\u6CD5\u4E0A\u64CD\u4F5C\uFF0CES5\u662F\u53CD\u8FC7\u6765\uFF0CES6\u8FD9\u6837\u505A\u4E3B\u8981\u76EE\u7684\u662F\u4E3A\u4E86\u4FDD\u7559\u7236\u7C7B\u7684\u4E00\u4E9B\u5185\u90E8\u5C5E\u6027\u548C\u64CD\u4F5C\uFF0C\u6BD4\u5982\u7EE7\u627F\u5185\u7F6E\u5BF9\u8C61\u65F6\uFF0C\u5982Array\uFF0C\u90A3<code>class MyArray extends Array {}</code>\uFF0C\u8FD9\u91CC\u5B9E\u4F8B\u5316MyArray\u540E\u8C03\u7528push\u90A3\u4E48\u5B83\u7684length\u662F\u4F1A\u53D8\u5316\u7684\uFF0CES5\u65E0\u6CD5\u505A\u5230\u8FD9\u4E00\u70B9
<blockquote>
<p>\u5B50\u7C7B\u81EA\u5DF1\u7684this\u5BF9\u8C61\uFF0C\u5FC5\u987B\u5148\u901A\u8FC7\u7236\u7C7B\u7684\u6784\u9020\u51FD\u6570\u5B8C\u6210\u5851\u9020\uFF0C\u5F97\u5230\u4E0E\u7236\u7C7B\u540C\u6837\u7684\u5B9E\u4F8B\u5C5E\u6027\u548C\u65B9\u6CD5\uFF0C\u7136\u540E\u518D\u5BF9\u5176\u8FDB\u884C\u52A0\u5DE5\uFF0C\u52A0\u4E0A\u5B50\u7C7B\u81EA\u5DF1\u7684\u5B9E\u4F8B\u5C5E\u6027\u548C\u65B9\u6CD5
Array\u6784\u9020\u51FD\u6570\u6709\u4E00\u4E2A\u5185\u90E8\u5C5E\u6027[[DefineOwnProperty]]\uFF0C\u7528\u6765\u5B9A\u4E49\u65B0\u5C5E\u6027\u65F6\uFF0C\u66F4\u65B0length\u5C5E\u6027\uFF0C\u8FD9\u4E2A\u5185\u90E8\u5C5E\u6027\u65E0\u6CD5\u5728\u5B50\u7C7B\u83B7\u53D6\uFF0C\u5BFC\u81F4\u5B50\u7C7B\u7684length\u5C5E\u6027\u884C\u4E3A\u4E0D\u6B63\u5E38\u3002</p>
</blockquote>
</li>
<li>ES6\u7684\u539F\u578B\u65B9\u6CD5\u548C\u9759\u6001\u65B9\u6CD5\u90FD\u662F<strong>\u4E0D\u53EF\u679A\u4E3E</strong>\u7684\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u4E5F\u90FD\u6CA1\u6709\u539F\u578B\u5BF9\u8C61\uFF1BES6\u652F\u6301getter\uFF0C\u4F46\u662F\u662F<strong>\u5728\u539F\u578B\u5BF9\u8C61\u4E0A</strong>\u5B9A\u4E49set\uFF1Bclass\u5FC5\u987B\u7528new\u8C03\u7528\uFF0C\u9ED8\u8BA4\u542F\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u7C7B\u540D\u5177\u6709\u6682\u65F6\u6027\u6B7B\u533A\u7B49\u7B49</li>
</ul>
<h3>super</h3>
<p>\u989D\u5916\u8BF4\u4E00\u4E0B<code>super</code>\uFF0Csuper\u672C\u8EAB\u662F\u4E2A\u5173\u952E\u5B57\uFF0C\u4F46\u662F\u5728\u4EE3\u7801\u4E0A\u5B83\u5374\u65E0\u6CD5\u72EC\u7ACB\u4F7F\u7528\uFF08\u5355\u72EC\u4F7F\u7528<code>super</code>\u65F6\u5B83\u4EC0\u4E48\u4E5F\u4E0D\u4EE3\u8868\uFF09\uFF0C\u5408\u6CD5\u7684\u53EA\u6709\u4E24\u79CD\u8BBF\u95EE\u5F62\u5F0F\uFF1A</p>
<ul>
<li>\u4F5C\u4E3A\u65B9\u6CD5\u6765\u8C03\u7528\uFF0C\u6B64\u65F6\u53EA\u80FD\u51FA\u73B0\u5728\u5B50\u7C7B\u6784\u9020\u65B9\u6CD5\u4E2D\uFF0C\u4E5F\u5C31\u662F\u5FC5\u987B\u5148\u8C03\u7528super\u624D\u80FD\u4F7F\u7528this\uFF1B</li>
<li>\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u201C\u5BF9\u8C61\u201D\u6765\u4F7F\u7528\uFF1A
<ul>
<li>\u5728\u539F\u578B\u65B9\u6CD5\uFF08\u5305\u62EC\u6784\u9020\u65B9\u6CD5\u548Cgetter\uFF09\u4E2D\uFF1A
<ul>
<li>\u8BBF\u95EEsuper\u7684\u5C5E\u6027\u65F6\u5982<code>super.a</code>\uFF0C\u8FD9\u65F6\u7684super<strong>\u4EE3\u8868\u7684\u662Fthis</strong>\uFF0C\u4E5F\u5C31\u662F\u5B50\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61</li>
<li>\u8BBF\u95EEsuper\u4E0A\u7684\u65B9\u6CD5\u65F6\u5B83\u4EE3\u8868\u7684\u662F<strong>\u7236\u7C7B\u7684\u539F\u578B\u5BF9\u8C61</strong>\uFF0C\u5982<code>super.parentMethod()</code>\uFF0C\u8FD9\u91CC\u7684parentMethod\u4E2D\u7684this\u6307\u5411\u7684\u662F\u5B50\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61</li>
</ul>
</li>
<li>\u5728\u9759\u6001\u65B9\u6CD5\u4E2D\u8BBF\u95EEsuper\u65F6\u5B83\u4EE3\u8868\u7684\u662F<strong>\u7236\u7C7B\u672C\u8EAB</strong>\uFF0C\u5982<code>super.staticParentMethod()</code>\uFF0C\u8FD9\u91CC\u7684staticParentMethod\u4E2D\u7684this\u6307\u5411\u7684\u662F\u5B50\u7C7B\u672C\u8EAB</li>
</ul>
</li>
</ul>
<p>\u4E0D\u80FD\u4EE5\u53D8\u91CF\u6216\u8005\u5BF9\u8C61\u7684\u773C\u5149\u53BB\u770B\u5F85super\uFF0Csuper\u6709\u81EA\u5DF1\u7684\u884C\u4E8B\u51C6\u5219\u3002</p>
`;export{t as default};
