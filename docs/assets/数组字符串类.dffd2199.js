const n=`
</div></details>
<details><summary>\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217<a href="https://leetcode-cn.com/problems/longest-increasing-subsequence/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<ul>
<li>\u52A8\u6001\u89C4\u5212\uFF0Cdp[i] \u8868\u793A\u4EE5 nums[i] \u8FD9\u4E2A\u6570\u7ED3\u5C3E\u7684\u6700\u957F\u9012\u589E\u5B50\u5E8F\u5217\u7684\u957F\u5EA6</li>
<li>dp[i+1]\u5C31\u662F\u5728 dp[0] \u5230 dp[i]\u627E\u6BD4 nums[i+1]\u5C0F\u7684\u6570\u518D\uFF0B 1</li>
</ul>

</div></details>
<details><summary>\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217<a href="https://leetcode-cn.com/problems/longest-common-subsequence/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u4E24\u4E2A\u5B57\u7B26\u4E32 s1 \u548C s2\uFF0C\u8BF7\u4F60\u627E\u51FA\u4ED6\u4EEC\u4FE9\u7684\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\uFF0C\u8FD4\u56DE\u8FD9\u4E2A\u5B50\u5E8F\u5217\u7684\u957F\u5EA6</p>
<ul>
<li>\u4E8C\u7EF4\u52A8\u6001\u89C4\u5212\uFF0Cdp[i][j] \u8868\u793A s1 \u524D i \u4E2A\u5B57\u7B26\u548C s2 \u524D j \u4E2A\u5B57\u7B26\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217</li>
</ul>

</div></details>
<details><summary>\u65E0\u91CD\u590D\u5B57\u7B26\u6700\u957F\u5B50\u4E32<a href="https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32 s \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u4E0D\u542B\u6709\u91CD\u590D\u5B57\u7B26\u7684<strong>\u6700\u957F\u5B50\u4E32</strong>\u7684\u957F\u5EA6\u3002</p>
<ul>
<li>\u6ED1\u52A8\u7A97\u53E3\uFF0C\u53F3\u4FA7\u5411\u524D\uFF0C\u5982\u679C\u6709\u91CD\u590D\u5B57\u7B26\uFF0C\u5DE6\u4FA7\u5411\u524D\uFF0C\u76F4\u5230\u6CA1\u6709\u91CD\u590D\u5B57\u7B26\uFF0C\u7136\u540E\u91CD\u590D\u4E0A\u8FF0\u8FC7\u7A0B</li>
</ul>

</div></details>
<details><summary>\u5B57\u7B26\u4E32\u6392\u5217<a href="https://leetcode-cn.com/problems/permutation-in-string/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u5B9A\u4E24\u4E2A\u5B57\u7B26\u4E32 s1, s2, \u5224\u65AD s2 \u662F\u5426\u5305\u542B s1 \u7684\u4E00\u79CD\u6392\u5217</p>
<ul>
<li>\u6ED1\u52A8\u7A97\u53E3\uFF0C\u601D\u8DEF\u8DDF\u4E0A\u9762\u4E00\u6837\uFF0C\u53EA\u662F\u8981\u4FDD\u8BC1\u7A97\u53E3\u5927\u5C0F\u662F\u56FA\u5B9A\u7684\uFF08s1 \u957F\u5EA6\uFF09\uFF0C\u53E6\u5916\u5C31\u662F\u5224\u65AD\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u6EE1\u8DB3\u91CD\u6392\u540E\u76F8\u540C</li>
</ul>

</div></details>
<details><summary>\u6700\u957F\u91CD\u590D\u5B50\u6570\u7EC4<a href="https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u6709\u4E24\u4E2A\u6570\u7EC4\uFF0C\u8FD4\u56DE \u4E24\u4E2A\u6570\u7EC4\u4E2D \u516C\u5171\u7684 \u3001\u957F\u5EA6\u6700\u957F\u7684\u5B50\u6570\u7EC4\u7684\u957F\u5EA6</p>
<ul>
<li>\u52A8\u6001\u89C4\u5212\uFF0C\u8DDF\u6700\u957F\u516C\u5171\u5B50\u4E32\u662F\u4E00\u6837\u7684</li>
<li>\u6ED1\u52A8\u7A97\u53E3\uFF0C\u5148\u56FA\u5B9A\u6570\u7EC4 a\uFF0C\u7136\u540E\u8BA9\u6570\u7EC4 b \u5728 a \u4E0A\u6ED1\u52A8\uFF0C\u5BFB\u627E\u6700\u957F\u516C\u5171\u5B50\u6570\u7EC4\uFF0C\u7136\u540E\u518D\u56FA\u5B9A b\uFF0C\u8BA9 a \u5728 b \u4E0A\u6ED1\u52A8</li>
</ul>

</div></details>
<details><summary>\u4E58\u79EF\u6700\u5927\u5B50\u6570\u7EC4<a href="https://leetcode-cn.com/problems/maximum-product-subarray/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u6709\u4E00\u4E2A\u6574\u6570\u6570\u7EC4\uFF08\u6B63\u6570\u8D1F\u6570\u90FD\u53EF\u80FD\u6709\uFF09\uFF0C\u6C42\u5176\u4E2D\u4E58\u79EF\u6700\u5927\u7684\u975E\u7A7A\u8FDE\u7EED\u5B50\u6570\u7EC4\u7684\u4E58\u79EF</p>
<ul>
<li>\u52A8\u6001\u89C4\u5212\uFF0C\u4F46\u662F\u8981\u7EF4\u62A4\u4E24\u4E2A\u503C\uFF0C\u6700\u5927\u7684\u6B63\u6570\u548C\u6700\u5C0F\u7684\u8D1F\u6570\uFF0C\u9ED8\u8BA4\u4E3A 0 <a href="https://leetcode-cn.com/submissions/detail/304987832/" target="_blank" rel="noopener noreferrer">\u9898\u89E3</a></li>
</ul>

</div></details>
<details><summary>\u56DE\u6587\u5B50\u4E32\u7684\u6570\u76EE<a href="https://leetcode-cn.com/problems/palindromic-substrings/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u4E2D\u6240\u6709\u56DE\u6587\u5B50\u4E32\u7684\u6570\u76EE\uFF08\u5373\u4F7F\u5B50\u4E32\u5185\u5BB9\u76F8\u540C\u4F46\u662F\u4F4D\u7F6E\u4E0D\u540C\u4ECD\u7B97\u4E0D\u540C\u7ED3\u679C\uFF09</p>
<ul>
<li>\u4E2D\u5FC3\u6269\u5C55\uFF0C\u6BCF\u4E2A\u5B57\u7B26\u90FD\u662F\u56DE\u6587\u7684\uFF0C\u7136\u540E\u5411\u4E24\u8FB9\u6269\u5C55\u5224\u65AD\uFF1B\u6BCF\u4E24\u4E2A\u76F8\u540C\u7684\u5B57\u7B26\u662F\u56DE\u6587\u7684\uFF0C\u7136\u540E\u4E5F\u662F\u518D\u6269\u5C55</li>
</ul>

</div></details>
<details><summary>\u6700\u957F\u56DE\u6587\u5B50\u5E8F\u5217<a href="https://leetcode-cn.com/problems/longest-palindromic-subsequence/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u5B9A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u8FD4\u56DE\u6700\u957F\u56DE\u6587<strong>\u5B50\u5E8F\u5217</strong>\u7684\u957F\u5EA6</p>
<ul>
<li>\u52A8\u6001\u89C4\u5212\uFF0Cdp[i][j]\u8868\u793A\u4ECE i \u5230 j \u5E76\u4E14\u4EE5 i\uFF0Cj \u7ED3\u5C3E\u7684\u5B57\u4E32\u4E2D\u6700\u957F\u7684\u56DE\u6587\u5B50\u5E8F\u5217\uFF0C\u7136\u540E\u5411\u5916\u6269\u5C55</li>
<li>\u9700\u8981\u6CE8\u610F\u7684\u662F\u904D\u5386\u7684\u987A\u5E8F</li>
<li>\u4E5F\u53EF\u4EE5\u8F6C\u6362\u4E00\u4E0B\uFF0C\u5C06\u539F\u5B57\u7B26\u4E32 s \u53CD\u8F6C\u4E3A s1\uFF0C\u5C31\u7B49\u4EF7\u4E8E\u6C42\u4E8C\u8005\u7684\u6700\u957F\u516C\u5171\u5B50\u5E8F\u5217\u4E86</li>
</ul>

</div></details>
<details><summary>\u5206\u5272\u7B49\u548C\u5B50\u96C6<a href="https://leetcode-cn.com/problems/partition-equal-subset-sum/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u6709\u4E00\u4E2A\u53EA\u5305\u542B\u6B63\u6574\u6570\u7684\u975E\u7A7A\u6570\u7EC4 nums\uFF0C\u5224\u65AD\u662F\u5426\u80FD\u591F\u5206\u6210\u4E24\u4E2A\u52A0\u548C\u76F8\u7B49\u7684\u5B50\u96C6</p>
<ul>
<li>\u52A8\u6001\u89C4\u5212\uFF0C\u5176\u5B9E\u5C31\u662F\u5B50\u96C6\u80CC\u5305\u95EE\u9898</li>
<li>dp[i][j] \u8868\u793A\u524D i \u4E2A\u6570\u5B57\u80FD\u5426\u53D6\u5F97 j \u7684\u52A0\u548C\uFF0C\u7279\u522B\u7684\u5F53 j=0 \u7684\u65F6\u5019\u4E3A true</li>
</ul>

</div></details>
<details><summary>\u6700\u957F\u56DE\u6587\u5B50\u4E32<a href="https://leetcode-cn.com/problems/longest-palindromic-substring/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u6709\u4E00\u4E2A\u53EA\u5305\u542B\u6B63\u6574\u6570\u7684\u975E\u7A7A\u6570\u7EC4 nums\uFF0C\u5224\u65AD\u662F\u5426\u80FD\u591F\u5206\u6210\u4E24\u4E2A\u52A0\u548C\u76F8\u7B49\u7684\u5B50\u96C6</p>
<ul>
<li>\u4E2D\u5FC3\u6269\u5C55</li>
<li>\u52A8\u6001\u89C4\u5212\uFF0C\u4E8C\u7EF4\uFF0Cdp[i][j] \u8868\u793A i \u5230 j \u7684\u5B50\u4E32\u662F\u5426\u662F\u56DE\u6587\uFF0C\u8FD9\u6837 dp[i+1][j-1]\u5982\u679C\u662F\u90A3\u4E48 dp[i][j]\u5C31\u4E5F\u662F\uFF0C\u6CE8\u610F\u904D\u5386\u987A\u5E8F\u4EE5\u53CA\u5904\u7406 i=j \u548C j-i=1 \u7684\u7279\u6B8A\u60C5\u51B5</li>
</ul>

</div></details>
<details><summary>\u6700\u5927\u5B50\u6570\u7EC4\u548C<a href="https://leetcode-cn.com/problems/maximum-subarray/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<ul>
<li>\u52A8\u6001\u89C4\u5212\uFF0Cdp[i]\u8868\u793A\u4EE5 i \u7ED3\u5C3E\u7684\u5B50\u6570\u7EC4\u7684\u6700\u5927\u52A0\u548C</li>
</ul>

</div></details>
<details><summary>\u548C\u4E3A k \u7684\u5B50\u6570\u7EC4\u4E2A\u6570<a href="https://leetcode-cn.com/problems/subarray-sum-equals-k/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<ul>
<li>\u524D\u7F00\u548C\uFF0C\u53EF\u4EE5\u548C\u54C8\u5E0C\u8868\u914D\u5408\u5C06\u590D\u6742\u5EA6\u964D\u4E3A O(n)\uFF0C\u7EDF\u8BA1\u6709\u591A\u5C11\u524D\u7F00\u548C\u7B49\u4E8E\u524D\u7F00\u548C-k</li>
</ul>

</div></details>
<details><summary>\u5BFB\u627E\u91CD\u590D\u6570<a href="https://leetcode-cn.com/problems/find-the-duplicate-number/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u5B9A\u4E00\u4E2A\u5305\u542B \xA0n + 1 \u4E2A\u6574\u6570\u7684\u6570\u7EC4 \xA0nums \uFF0C\u5176\u6570\u5B57\u90FD\u5728 \xA0[1, n]\xA0 \u8303\u56F4\u5185\uFF08\u5305\u62EC 1 \u548C n\uFF09\uFF0C\u53EF\u77E5\u81F3\u5C11\u5B58\u5728\u4E00\u4E2A\u91CD\u590D\u7684\u6574\u6570\u3002\u5047\u8BBE nums \u53EA\u6709 \u4E00\u4E2A\u91CD\u590D\u7684\u6574\u6570 \uFF0C\u8FD4\u56DE \xA0 \u8FD9\u4E2A\u91CD\u590D\u7684\u6570 \u3002\u7A7A\u95F4\u590D\u6742\u5EA6\u5FC5\u987B\u4E3A O(1)</p>
<ul>
<li>\u4E8C\u8FDB\u5236\u6CD5\uFF0C\u4E8C\u5206\u67E5\u627E\u6CD5\uFF0C\u5FEB\u6162\u6307\u9488\u6CD5</li>
<li>\u5FEB\u6162\u6307\u9488\u5C31\u662F nums[i]\u5F53\u4F5C\u4E0B\u4E00\u4E2A\u4F4D\u7F6E\uFF0C\u53EA\u662F\u5FEB\u6307\u9488\u4E00\u6B21\u8D70\u4E24\u6B65\uFF0C\u4E8C\u8005\u76F8\u9047\u540E\uFF0C\u5FEB\u6307\u9488\u56DE\u5230\u8D77\u70B9\uFF0C\u4E8C\u8005\u518D\u540C\u65F6\u79FB\u52A8\u76F4\u5230\u76F8\u9047\u5C31\u662F\u91CD\u590D\u7684\u6570\u5B57</li>
</ul>

</div></details>
<details><summary>\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570<a href="https://leetcode-cn.com/problems/first-missing-positive/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u4F60\u4E00\u4E2A\u672A\u6392\u5E8F\u7684\u6574\u6570\u6570\u7EC4 nums \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u6CA1\u6709\u51FA\u73B0\u7684\u6700\u5C0F\u7684\u6B63\u6574\u6570\u3002
\u8BF7\u4F60\u5B9E\u73B0\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n) \u5E76\u4E14\u53EA\u4F7F\u7528\u5E38\u6570\u7EA7\u522B\u989D\u5916\u7A7A\u95F4\u7684\u89E3\u51B3\u65B9\u6848\u3002</p>
<ul>
<li>
<p>\u7F6E\u6362\uFF0C\u539F\u5730\u54C8\u5E0C</p>
</li>
<li>
<p>\u628A 1 - nums.length \u4E4B\u95F4\u7684\u6570\u5B57\u653E\u5230\u5BF9\u5E94\u7684\u4F4D\u7F6E\u4E0A\uFF0C\u90A3\u4E48\u7B2C\u4E00\u4E2A\u4E0D\u6EE1\u8DB3 nums[i] === i + 1 \u7684\u4F4D\u7F6E\u5C31\u662F\u7B2C\u4E00\u4E2A\u7F3A\u5931\u7684\u6B63\u6570</p>
<pre><code class="language-js">var firstMissingPositive = function (nums) {
  const len = nums.length
  for (let i = 0; i &lt; len; i++) {
    // \u5C06nums[i]\u653E\u5230\u5BF9\u5E94\u7684\u4F4D\u7F6E
    let n = nums[i]
    while (n &gt; 0 &amp;&amp; n &lt;= len &amp;&amp; nums[n - 1] !== n) {
      ;[nums[n - 1], nums[i]] = [n, nums[n - 1]]
      n = nums[i] // \u6CE8\u610F\u8FD9\u91CC\u8981\u4E00\u76F4\u4EA4\u6362\u76F4\u5230\u653E\u7F6E\u5230\u6B63\u786E\u7684\u4F4D\u7F6E
    }
  }
  // \u904D\u5386\u662F\u5426\u662F\u5BF9\u5E94\u4F4D\u7F6E
  for (let i = 0; i &lt; len; i++) {
    if (nums[i] !== i + 1) {
      return i + 1
    }
  }
  return len + 1
}
</code></pre>
</li>
</ul>

</div></details>
<details><summary>\u6700\u957F\u8FDE\u7EED\u5B50\u5E8F\u5217<a href="https://leetcode-cn.com/problems/longest-consecutive-sequence/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u5B9A\u4E00\u4E2A\u672A\u6392\u5E8F\u7684\u6574\u6570\u6570\u7EC4 nums \uFF0C\u627E\u51FA\u6570\u5B57\u8FDE\u7EED\u7684\u6700\u957F\u5E8F\u5217\uFF08\u4E0D\u8981\u6C42\u5E8F\u5217\u5143\u7D20\u5728\u539F\u6570\u7EC4\u4E2D\u8FDE\u7EED\uFF09\u7684\u957F\u5EA6\u3002O(n)</p>
<ul>
<li>\u54C8\u5E0C\u8868</li>
</ul>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
</div></details>
`;export{n as default};
