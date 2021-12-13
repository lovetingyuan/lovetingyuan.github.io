[meta]: <typescript> (title: 'Typescript高阶类型', keywords: 'high, senior, type', date: '2020-08-03')

### TypeScript高阶类型

Typescript的一个强大之处在于它支持通过泛型以及一些关键字和操作符对类型本身进行编程。

TypeScript语言本身就内置的一些高阶类型，利用它们可以方便的实现类型编程：

借助于下面要介绍的工具类型，可以实现一些其他常用的工具类型，例如[`type-fest`](https://github.com/sindresorhus/type-fest)以及[`utility-types`](https://github.com/piotrwitek/utility-types), [`ts-toolbelt`](https://github.com/millsp/ts-toolbelt) 都是一些不错的实现，值得参考。

```typescript
// 类型T的所有属性都变为可选的
type Partial<T> = {
    [P in keyof T]?: T[P];
};

// T的所有属性都变成必选的
type Required<T> = {
    [P in keyof T]-?: T[P];
};

// T所有的属性都变成只读的
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

```typescript
// 从T中选择若干特定名称的属性组成新类型
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
// 例子：从类型中只选取函数类型的属性组成新类型
    type PickFunc<T> = Pick<T, {
        [k in keyof T]: T[k] extends (...args: any) => any ? k : never
    }[keyof T]>

// K作为键，T作为类型值组成的新类型（keyof any的值是string | number | symbol）
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
// 例子
    type AnyObject = Record<string, any>
    const x: Record<'home' | 'about' | 'contact', { title: string }> = {
        about: { title: 'about' },
        contact: { title: 'contact' },
        home: { title: 'home' },
    };

// 从类型T中去除属于类型U的类型所得到的剩余类型，T通常是联合类型
type Exclude<T, U> = T extends U ? never : T;
// 例子
    type T0 = Exclude<"a" | "b" | "c", "a">;  // "b" | "c"
    type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  // "c"
    type T2 = Exclude<string | number | (() => void), Function>;  // string | number

// 和Exclude相反，Extract表示将类型T中不属于U的类型去除
type Extract<T, U> = T extends U ? T : never;
// 例子
    type T0 = Extract<"a" | "b" | "c", "a" | "f">;  // "a"
    type T1 = Extract<string | number | (() => void), Function>;  // () => void

// 表示去除T中名称属于K的那些属性
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// 例子
    const todo: Omit<{
        title: string;
        description: string;
        completed: boolean;
    }, 'description'> = {
        title: 'Clean room',
        completed: false,
    };

// 去除掉T中的null和undefined
type NonNullable<T> = T extends null | undefined ? never : T;
// 例子
    type T0 = NonNullable<string | number | undefined>;  // string | number
    type T1 = NonNullable<string[] | null | undefined>;  // string[]
```

```typescript
// 获取函数的参数类型，以元组的形式返回
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
// 例子
    declare function f1(arg: { a: number, b: string }): void
    type T0 = Parameters<() => string>;  // []
    type T1 = Parameters<(s: string) => void>;  // [string]
    type T2 = Parameters<typeof f1>;  // [{ a: number, b: string }]

// 获取构造方法的参数类型列表
type ConstructorParameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never;
// 例子
    type T0 = ConstructorParameters<ErrorConstructor>;  // [(string | undefined)?]
    type T1 = ConstructorParameters<FunctionConstructor>;  // string[]
    type T2 = ConstructorParameters<{
        new (a: string, b?: number): {}
    }>;  // [string, (number | undefined)?]

// 获取函数的返回类型
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
// 例子
    declare function f1(): { a: number, b: string }
    type T0 = ReturnType<() => string>;  // string
    type T1 = ReturnType<(s: string) => void>;  // void
    type T2 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
    type T3 = ReturnType<typeof f1>;  // { a: number, b: string }

// 返回构造类型T的实例类型
type InstanceType<T extends new (...args: any) => any> = T extends new (...args: any) => infer R ? R : any;
// 例子
    class C {
        x = 0;
        y = 0;
    }
    type T0 = InstanceType<typeof C>;  // C
    type T1 = InstanceType<Function>;  // Error

// 获取函数的this类型，这个需要--strictFunctionTypes配置项开启才能用
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any ? U : unknown;
// 例子
    function toHex(this: Number) {
        return this.toString(16);
    }
    function numberToString(n: ThisParameterType<typeof toHex>) {
        return toHex.apply(n);
    }

// 去除函数的this类型
type OmitThisParameter<T> = unknown extends ThisParameterType<T> ? T : T extends (...args: infer A) => infer R ? (...args: A) => R : T;
// 例子
    function toHex(this: Number) {
        return this.toString(16);
    }
    const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(5);

```

