var t=`<h3>TypeScript \u9AD8\u9636\u7C7B\u578B</h3>
<p>TypeScript \u7684\u4E00\u4E2A\u5F3A\u5927\u4E4B\u5904\u5728\u4E8E\u5B83\u652F\u6301\u901A\u8FC7\u6CDB\u578B\u4EE5\u53CA\u4E00\u4E9B\u5173\u952E\u5B57\u548C\u64CD\u4F5C\u7B26\u5BF9\u7C7B\u578B\u672C\u8EAB\u8FDB\u884C\u7F16\u7A0B\u3002</p>
<p>TypeScript \u8BED\u8A00\u672C\u8EAB\u5C31\u5185\u7F6E\u7684\u4E00\u4E9B\u9AD8\u9636\u7C7B\u578B\uFF0C\u5229\u7528\u5B83\u4EEC\u53EF\u4EE5\u65B9\u4FBF\u7684\u5B9E\u73B0\u7C7B\u578B\u7F16\u7A0B\uFF1A</p>
<p>\u501F\u52A9\u4E8E\u4E0B\u9762\u8981\u4ECB\u7ECD\u7684\u5DE5\u5177\u7C7B\u578B\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u4E00\u4E9B\u5176\u4ED6\u5E38\u7528\u7684\u5DE5\u5177\u7C7B\u578B\uFF0C\u4F8B\u5982</p>
<ul>
<li><a href="https://github.com/sindresorhus/type-fest" target="_blank" rel="noopener noreferrer"><code>type-fest</code></a></li>
<li><a href="https://github.com/piotrwitek/utility-types" target="_blank" rel="noopener noreferrer"><code>utility-types</code></a></li>
<li><a href="https://github.com/millsp/ts-toolbelt" target="_blank" rel="noopener noreferrer"><code>ts-toolbelt</code></a></li>
<li><a href="https://github.com/andnp/SimplyTyped" target="_blank" rel="noopener noreferrer"><code>SimplyTyped</code></a></li>
</ul>
<p>\u53E6\u5916 github \u4E0A\u6709\u4E2A\u7C7B\u578B\u4F53\u64CD\u7684\u9898\u76EE\u6311\u6218\u5217\u8868<a href="https://github.com/type-challenges/type-challenges" target="_blank" rel="noopener noreferrer"><code>type-challenges</code></a>\uFF0C\u91CC\u9762\u6709\u4E0D\u540C\u96BE\u5EA6\u7684\u9898\u76EE\u53EF\u4EE5\u89E3\u7B54</p>
<h4>\u4E00\u4E9B\u5185\u7F6E\u5DE5\u5177\u7C7B\u578B\u7684\u5B9E\u73B0</h4>
<pre><code class="language-typescript">// \u7C7B\u578BT\u7684\u6240\u6709\u5C5E\u6027\u90FD\u53D8\u4E3A\u53EF\u9009\u7684
type Partial&lt;T&gt; = {
  [P in keyof T]?: T[P]
}

// T\u7684\u6240\u6709\u5C5E\u6027\u90FD\u53D8\u6210\u5FC5\u9009\u7684
type Required&lt;T&gt; = {
  [P in keyof T]-?: T[P]
}

// T\u6240\u6709\u7684\u5C5E\u6027\u90FD\u53D8\u6210\u53EA\u8BFB\u7684
type Readonly&lt;T&gt; = {
  readonly [P in keyof T]: T[P]
}
</code></pre>
<pre><code class="language-typescript">// \u4ECET\u4E2D\u9009\u62E9\u82E5\u5E72\u7279\u5B9A\u540D\u79F0\u7684\u5C5E\u6027\u7EC4\u6210\u65B0\u7C7B\u578B
type Pick&lt;T, K extends keyof T&gt; = {
  [P in K]: T[P]
}
// \u4F8B\u5B50\uFF1A\u4ECE\u7C7B\u578B\u4E2D\u53EA\u9009\u53D6\u51FD\u6570\u7C7B\u578B\u7684\u5C5E\u6027\u7EC4\u6210\u65B0\u7C7B\u578B
type PickFunc&lt;T&gt; = Pick&lt;
  T,
  {
    [k in keyof T]: T[k] extends (...args: any) =&gt; any ? k : never
  }[keyof T]
&gt;

// K\u4F5C\u4E3A\u952E\uFF0CT\u4F5C\u4E3A\u7C7B\u578B\u503C\u7EC4\u6210\u7684\u65B0\u7C7B\u578B\uFF08keyof any\u7684\u503C\u662Fstring | number | symbol\uFF09
type Record&lt;K extends keyof any, T&gt; = {
  [P in K]: T
}
// \u4F8B\u5B50
type AnyObject = Record&lt;string, any&gt;
const x: Record&lt;'home' | 'about' | 'contact', { title: string }&gt; = {
  about: { title: 'about' },
  contact: { title: 'contact' },
  home: { title: 'home' },
}

// \u4ECE\u7C7B\u578BT\u4E2D\u53BB\u9664\u5C5E\u4E8E\u7C7B\u578BU\u7684\u7C7B\u578B\u6240\u5F97\u5230\u7684\u5269\u4F59\u7C7B\u578B\uFF0CT\u901A\u5E38\u662F\u8054\u5408\u7C7B\u578B
type Exclude&lt;T, U&gt; = T extends U ? never : T
// \u4F8B\u5B50
type T0 = Exclude&lt;'a' | 'b' | 'c', 'a'&gt; // &quot;b&quot; | &quot;c&quot;
type T1 = Exclude&lt;'a' | 'b' | 'c', 'a' | 'b'&gt; // &quot;c&quot;
type T2 = Exclude&lt;string | number | (() =&gt; void), Function&gt; // string | number

// \u548CExclude\u76F8\u53CD\uFF0CExtract\u8868\u793A\u5C06\u7C7B\u578BT\u4E2D\u4E0D\u5C5E\u4E8EU\u7684\u7C7B\u578B\u53BB\u9664
type Extract&lt;T, U&gt; = T extends U ? T : never
// \u4F8B\u5B50
type T0 = Extract&lt;'a' | 'b' | 'c', 'a' | 'f'&gt; // &quot;a&quot;
type T1 = Extract&lt;string | number | (() =&gt; void), Function&gt; // () =&gt; void

// \u8868\u793A\u53BB\u9664T\u4E2D\u540D\u79F0\u5C5E\u4E8EK\u7684\u90A3\u4E9B\u5C5E\u6027
type Omit&lt;T, K extends keyof any&gt; = Pick&lt;T, Exclude&lt;keyof T, K&gt;&gt;
// \u4F8B\u5B50
const todo: Omit&lt;
  {
    title: string
    description: string
    completed: boolean
  },
  'description'
&gt; = {
  title: 'Clean room',
  completed: false,
}

// \u53BB\u9664\u6389T\u4E2D\u7684null\u548Cundefined
type NonNullable&lt;T&gt; = T extends null | undefined ? never : T
// \u4F8B\u5B50
type T0 = NonNullable&lt;string | number | undefined&gt; // string | number
type T1 = NonNullable&lt;string[] | null | undefined&gt; // string[]
</code></pre>
<pre><code class="language-typescript">// \u83B7\u53D6\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B\uFF0C\u4EE5\u5143\u7EC4\u7684\u5F62\u5F0F\u8FD4\u56DE
type Parameters&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: infer P) =&gt; any ? P : never
// \u4F8B\u5B50
declare function f1(arg: { a: number; b: string }): void
type T0 = Parameters&lt;() =&gt; string&gt; // []
type T1 = Parameters&lt;(s: string) =&gt; void&gt; // [string]
type T2 = Parameters&lt;typeof f1&gt; // [{ a: number, b: string }]

// \u83B7\u53D6\u6784\u9020\u65B9\u6CD5\u7684\u53C2\u6570\u7C7B\u578B\u5217\u8868
type ConstructorParameters&lt;T extends new (...args: any) =&gt; any&gt; = T extends new (...args: infer P) =&gt; any ? P : never
// \u4F8B\u5B50
type T0 = ConstructorParameters&lt;ErrorConstructor&gt; // [(string | undefined)?]
type T1 = ConstructorParameters&lt;FunctionConstructor&gt; // string[]
type T2 = ConstructorParameters&lt;{
  new (a: string, b?: number): {}
}&gt; // [string, (number | undefined)?]

// \u83B7\u53D6\u51FD\u6570\u7684\u8FD4\u56DE\u7C7B\u578B
type ReturnType&lt;T extends (...args: any) =&gt; any&gt; = T extends (...args: any) =&gt; infer R ? R : any
// \u4F8B\u5B50
declare function f1(): { a: number; b: string }
type T0 = ReturnType&lt;() =&gt; string&gt; // string
type T1 = ReturnType&lt;(s: string) =&gt; void&gt; // void
type T2 = ReturnType&lt;&lt;T extends U, U extends number[]&gt;() =&gt; T&gt; // number[]
type T3 = ReturnType&lt;typeof f1&gt; // { a: number, b: string }

// \u8FD4\u56DE\u6784\u9020\u7C7B\u578BT\u7684\u5B9E\u4F8B\u7C7B\u578B
type InstanceType&lt;T extends new (...args: any) =&gt; any&gt; = T extends new (...args: any) =&gt; infer R ? R : any
// \u4F8B\u5B50
class C {
  x = 0
  y = 0
}
type T0 = InstanceType&lt;typeof C&gt; // C
type T1 = InstanceType&lt;Function&gt; // Error

// \u83B7\u53D6\u51FD\u6570\u7684this\u7C7B\u578B\uFF0C\u8FD9\u4E2A\u9700\u8981--strictFunctionTypes\u914D\u7F6E\u9879\u5F00\u542F\u624D\u80FD\u7528
type ThisParameterType&lt;T&gt; = T extends (this: infer U, ...args: any[]) =&gt; any ? U : unknown
// \u4F8B\u5B50
function toHex(this: Number) {
  return this.toString(16)
}
function numberToString(n: ThisParameterType&lt;typeof toHex&gt;) {
  return toHex.apply(n)
}

// \u53BB\u9664\u51FD\u6570\u7684this\u7C7B\u578B
type OmitThisParameter&lt;T&gt; = unknown extends ThisParameterType&lt;T&gt;
  ? T
  : T extends (...args: infer A) =&gt; infer R
  ? (...args: A) =&gt; R
  : T
// \u4F8B\u5B50
function toHex(this: Number) {
  return this.toString(16)
}
const fiveToHex: OmitThisParameter&lt;typeof toHex&gt; = toHex.bind(5)
</code></pre>
`;export{t as default};
