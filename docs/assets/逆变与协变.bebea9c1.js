const e=`<h3>\u9006\u53D8\u4E0E\u534F\u53D8</h3>
<p>ts \u4F7F\u7528 extends \u5173\u952E\u5B57\u6765\u8868\u793A\u4E24\u4E2A\u7C7B\u578B\u662F\u5426\u517C\u5BB9</p>
<p>\u6BD4\u5982 <code>A extends B</code> \u5982\u679C\u901A\u8FC7\u8868\u793A A \u662F B \u7684\u201C\u5B50\u7C7B\u578B\u201D\uFF0C\u90A3\u4E48<code>b: B = a: A</code>\u5C31\u4E0D\u4F1A\u62A5\u9519\uFF0C\u8FD9\u5C31\u662F\u534F\u53D8\uFF0C\u4E0B\u9762\u662F\u534F\u53D8\u7684\u4E00\u4E9B\u4F8B\u5B50\uFF1A</p>
<pre><code class="language-ts">type A = {
  a: string
}

type B = {
  a: string
  b?: number
}

type C = {
  a: string
  b: number
}

type R1 = B extends A ? true : false // true
type R2 = A extends B ? true : false // true
type R3 = C extends A ? true : false // true
type R4 = C extends B ? true : false // true
type R5 = A extends C ? true : false // false
type R6 = B extends C ? true : false // false

type D = 'a' | 'b'
type E = 'a' | 'b' | 'c' // \u6CE8\u610F\u5728\u6CDB\u578B\u4E2D\u4F1A\u81EA\u52A8\u5206\u53D1

type R7 = D extends E ? true : false // true
</code></pre>
<p>\u5BF9\u4E8E\u51FD\u6570\u7C7B\u578B\u6765\u8BF4\uFF0C\u60C5\u51B5\u4F1A\u7A0D\u5FAE\u6709\u4E9B\u590D\u6742\uFF0C
\u4F8B\u5982\u6709\u4E09\u4E2A\u7C7B\u578B\uFF1A <code>WhiteDog extends Dog extends Animal</code>\uFF0C\u90A3\u4E48\u8BF7\u95EE <code>(d: Dog) =&gt; Dog</code> \u7684\u5B50\u7C7B\u578B\u662F\u4EC0\u4E48\u5462\uFF1F</p>
<ol>
<li><code>(d: WhiteDog) =&gt; WhiteDog</code></li>
<li><code>(d: WhiteDog) =&gt; Animal</code></li>
<li><code>(d: Animal) =&gt; Animal</code></li>
<li><code>(d: Animal) =&gt; WhiteDog</code></li>
</ol>
<p>\u5728 ts \u4E2D\uFF0C\u601D\u8003\u5B50\u7C7B\u578B\u6700\u597D\u662F\u5C06\u5176\u4EE3\u5165\u5230\u771F\u5B9E\u7684\u8FD0\u884C\u573A\u666F\u4E2D\uFF0C\u770B\u8FD0\u884C\u8D77\u6765\u662F\u5426\u5B89\u5168</p>
<p>\u6211\u4EEC\u5047\u8BBE\u6709\u4E00\u4E2A\u65B9\u6CD5 f\uFF0C\u63A5\u53D7\u4E0A\u9762\u7684\u51FD\u6570\u4F5C\u4E3A\u56DE\u8C03\uFF0C<code>f(cb: (d: Dog) =&gt; Dog) =&gt; void</code>
\u90A3\u4E48\uFF0C1-4 \u54EA\u4E2A\u65B9\u6CD5\u53EF\u4EE5\u5B89\u5168\u7684\u4F20\u9012\u7ED9 f \u5462\uFF1F</p>
<p>f \u5728\u8C03\u7528 cb \u7684\u65F6\u5019\uFF0C\u4F1A\u81F3\u5C11\u4F20\u9012\u7ED9\u5B83 Dog \u7C7B\u578B\u4F5C\u4E3A\u53C2\u6570\uFF0C\u6216\u8005\u662F\u66F4\u5177\u4F53\u7684 dog\uFF0C\u6BD4\u5982 WhiteDog \u6216\u8005 LittleDog\uFF0C\u5982\u679C\u6B64\u65F6\u4F20\u9012\u7ED9 f \u7684 cb \u53C2\u6570\u7C7B\u578B\u662F WhiteDog\uFF0C\u90A3\u4E48\u5C31\u4F1A\u62A5\u9519\uFF0C\u56E0\u4E3A\u5B9E\u9645 f \u4E0D\u4E00\u5B9A\u4F1A\u4F20\u9012 WhiteDog \u7ED9\u5B83\uFF0C\u4F46\u5982\u679C\u4F20\u9012\u7ED9 f \u7684 cb \u53C2\u6570\u7C7B\u578B\u662F Animal\uFF0C\u90A3\u4E48\u5C31\u6CA1\u95EE\u9898\uFF0C\u56E0\u4E3A Dog \u6216\u8005\u66F4\u5177\u4F53\u7684 dog \u6C38\u8FDC\u90FD\u662F Animal\uFF0C\u8FD9\u5C31\u662F\u9006\u53D8</p>
<p>\u540C\u7406\uFF0C<strong>\u53C2\u6570\u5C11\u7684\u65B9\u6CD5\u53EF\u4EE5\u8D4B\u7ED9\u53C2\u6570\u591A\u7684\u65B9\u6CD5</strong></p>
<p>\u518D\u770B cb \u7684\u8FD4\u56DE\u503C\uFF0Cf \u4F1A\u4F7F\u7528 cb \u7684\u8FD4\u56DE\u503C\uFF0C\u5E76\u4E14\u8BA4\u4E3A\u5B83\u81F3\u5C11\u662F\u4E2A Dog\uFF0C\u5982\u679C\u6B64\u65F6 cb \u7684\u8FD4\u56DE\u503C\u662F Animal \u5C31\u4F1A\u51FA\u9519\uFF0C\u56E0\u4E3A Animal \u53EF\u4E0D\u4E00\u5B9A\u4F1A\u53EB\uFF0C\u8FD9\u7B26\u5408\u534F\u53D8</p>
<p>\u6240\u4EE5\u7EFC\u4E0A\u6240\u8FF0\uFF0C\u53EA\u6709 4 \u662F\u53EF\u4EE5\u5B89\u5168\u4F20\u7ED9 f \u7684\uFF0C<strong>\u4E00\u4E2A\u65B9\u6CD5\u7684\u5B50\u7C7B\u578B\uFF0C\u5176\u53C2\u6570\u5E94\u8BE5\u66F4\u5BBD\u6CDB\uFF0C\u8FD4\u56DE\u503C\u5E94\u8BE5\u66F4\u5177\u4F53</strong></p>
<p>\u6700\u540E\u770B\u4E00\u4E0B\u5269\u4F59\u53C2\u6570\u548C\u53EF\u9009\u53C2\u6570\u7684\u60C5\u51B5\uFF1A</p>
<pre><code class="language-ts">let optionalParams = (one?: number, tow?: number) =&gt; void 0
let requiredParams = (one: number, tow: number) =&gt; void 0
let restParams = (...args: number[]) =&gt; void 0
requiredParams = optionalParams // ok
restParams = optionalParams // ok
/**
 * \u4E0D\u80FD\u5C06\u7C7B\u578B\u201C(...args: number[]) =&gt; undefined\u201D\u5206\u914D\u7ED9\u7C7B\u578B\u201C(one?: number | undefined, tow?: number | undefined) =&gt; undefined\u201D\u3002
  \u53C2\u6570\u201Cargs\u201D\u548C\u201Cone\u201D \u7684\u7C7B\u578B\u4E0D\u517C\u5BB9\u3002
    \u4E0D\u80FD\u5C06\u7C7B\u578B\u201Cnumber | undefined\u201D\u5206\u914D\u7ED9\u7C7B\u578B\u201Cnumber\u201D\u3002
      \u4E0D\u80FD\u5C06\u7C7B\u578B\u201Cundefined\u201D\u5206\u914D\u7ED9\u7C7B\u578B\u201Cnumber\u201D\u3002ts(2322)
*/
optionalParams = restParams // ts(2322)
optionalParams = requiredParams // ts(2322)
restParams = requiredParams // ok\uFF0C\u89C1\u4E0B\u65B9\u89E3\u91CA
requiredParams = restParams // ok
</code></pre>
<p>\u5176\u4E2D\uFF0C\u5BF9\u4E8E <code>restParams = requiredParams</code>\u4E4B\u6240\u4EE5\u6210\u7ACB\u662F\u56E0\u4E3A\uFF0C\u867D\u7136 rest \u53C2\u6570\u5728\u8BED\u4E49\u4E0A\u8868\u793A\u53EF\u4EE5\u4F20\u6216\u4E0D\u4F20\u6216\u4F20\u4EFB\u610F\u4E2A\u6570\uFF0C\u4F46\u662F\u5728\u7C7B\u578B\u68C0\u67E5\u65B9\u9762\u5E76\u4E0D\u80FD\u5B8C\u5168\u7167\u642C\u8FD0\u884C\u65F6\u7684\u8BED\u4E49\u3002\u53EF\u4EE5\u8003\u8651\u7EA6\u675F\u51FD\u6570\u7C7B\u578B\u7684\u6CDB\u578B\u65F6\u7684\u5199\u6CD5 <code>&lt;F extends (...args: number[]) =&gt; any&gt;</code></p>
<h3>\u4F8B\u5B50</h3>
<p>\u5C06\u8054\u5408\u7C7B\u578B\u8F6C\u4E3A\u4EA4\u53C9\u7C7B\u578B <a href="https://github.com/type-challenges/type-challenges/blob/main/questions/00055-hard-union-to-intersection/README.md" target="_blank" rel="noopener noreferrer">\u9898\u76EE</a></p>
<pre><code class="language-ts">// expected to be 'foo' &amp; 42 &amp; true
type I = UnionToIntersection&lt;'foo' | 42 | true&gt;
</code></pre>

</div></details>
<details><summary>answer</summary><div class="details-content">
<pre><code class="language-ts">// your answers
type UnionToIntersection&lt;U&gt; = (U extends unknown ? (arg: U) =&gt; unknown : never) extends (arg: infer P) =&gt; unknown
  ? P
  : never
</code></pre>
</div></details>
`;export{e as default};
