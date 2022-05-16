var n=`
</div></details>
<details><summary>\u63A5\u96E8\u6C34<a href="https://leetcode-cn.com/problems/trapping-rain-water/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/22/rainwatertrap.png" alt="-"></p>
<pre><code class="language-js">var trap = function (height) {
  const left = []
  const right = []
  let leftMax = 0
  let rightMax = 0
  const len = height.length
  // \u6728\u6876\u7406\u8BBA\uFF0C\u627E\u5230\u8F83\u77ED\u7684\u90A3\u4E2A\u8FB9\u754C
  for (let i = 0, j = len - 1; i &lt; len; i++, j--) {
    leftMax = Math.max(height[i], leftMax)
    left.push(leftMax)
    rightMax = Math.max(height[j], rightMax)
    right[j] = rightMax
  }
  let sum = 0
  for (let i = 0; i &lt; height.length; i++) {
    sum += Math.min(left[i], right[i]) - height[i]
  }
  return sum
}
</code></pre>

</div></details>
<details><summary>\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570<a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u8981\u6C42\u65F6\u95F4\u590D\u6742\u5EA6 O(log(m+n))\uFF0C\u7528\u4E8C\u5206\u67E5\u627E\uFF0C\u5047\u8BBE\u4E00\u4E2A\u6570\u7EC4\u6709 5 \u4E2A \u53E6\u4E00\u4E2A\u6709 8 \u4E2A\uFF0C\u90A3\u4E48\u4E2D\u4F4D\u6570\u5C31\u662F\u7B2C 7 \u5927\u7684\u6570\u5B57\uFF0C\u6211\u4EEC\u5206\u522B\u5728\u4E24\u4E2A\u6570\u7EC4\u4E2D\u5BFB\u627E\u524D 3 \u5C0F\u7684\u6570\uFF0C\u7136\u540E\u901A\u8FC7\u6BD4\u8F83\u5C3E\u6570\u6765\u6392\u9664\u4E00\u7EC4\u524D 3 \u5C0F\u7684\u6570\uFF0C\u5C31\u8FD9\u6837\u4E0D\u65AD\u6392\u9664\u76F4\u5230\u6392\u9664\u5230\u7B2C 7 \u4F4D\u6570\u5B57</p>
<pre><code class="language-js">var findMedianSortedArrays = function (nums1, nums2) {
  let k = Math.ceil((nums1.length + nums2.length) / 2)
  // \u4E0B\u9762\u7684\u4EFB\u52A1\u5C31\u662F\u627E\u5230\u524Dk\u5C0F\u7684\u6570\uFF0C\u7B56\u7565\u5C31\u662F\u627E\u4E24\u4E2A\u6570\u7EC4\u524Dk/2\u5C0F\u7684\u6570\uFF0C\u7136\u540E\u901A\u8FC7\u6BD4\u8F83\u5C3E\u6570\u51B3\u5B9A\u6392\u9664\u54EA\u4E2Ak/2
  // \u7136\u540E\u6162\u6162\u7F29\u5C0Fk
  const isOdd = (nums1.length + nums2.length) % 2
  let [i, j] = [0, 0]
  while (true) {
    if (k === 1) {
      if (i === nums1.length) {
        return isOdd ? nums2[j] : (nums2[j] + nums2[j + 1]) / 2
      }
      if (j === nums2.length) {
        return isOdd ? nums1[i] : (nums1[i] + nums1[i + 1]) / 2
      }
      if (isOdd) {
        return Math.min(nums1[i], nums2[j])
      }
      if (nums1[i] &lt;= nums2[j]) {
        if (i + 1 &lt; nums1.length) {
          // \u5076\u6570\u957F\u5EA6\u7684\u8BDD\u8981\u4EA4\u53C9\u5BF9\u6BD4\u53D6\u6700\u5C0F\u7684\u4E24\u4E2A\u503C\u7684\u5E73\u5747\u503C
          return (nums1[i] + Math.min(nums1[i + 1], nums2[j])) / 2
        }
        return (nums1[i] + nums2[j]) / 2
      } else {
        if (j + 1 &lt; nums2.length) {
          return (nums2[j] + Math.min(nums2[j + 1], nums1[i])) / 2
        }
        return (nums2[j] + nums1[i]) / 2
      }
    }
    const half = Math.floor(k / 2)
    const [lastI, lastJ] = [i + half - 1, j + half - 1]
    if (lastI &gt;= nums1.length) {
      j += half
    } else if (lastJ &gt;= nums2.length) {
      i += half
    } else if (nums1[lastI] &lt;= nums2[lastJ]) {
      i += half
    } else {
      j += half
    }
    k -= half
  }
}
</code></pre>

</div></details>
<details><summary>\u5206\u53D1\u7CD6\u679C<a href="https://leetcode-cn.com/problems/candy/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>n \u4E2A\u5B69\u5B50\u7AD9\u6210\u4E00\u6392\u3002\u7ED9\u4F60\u4E00\u4E2A\u6574\u6570\u6570\u7EC4 ratings \u8868\u793A\u6BCF\u4E2A\u5B69\u5B50\u7684\u8BC4\u5206\u3002\u76F8\u90BB\u7684\u5B69\u5B50\u5F97\u5206\u9AD8\u7684\u8981\u591A\u62FF\u4E00\u9897\u7CD6\u679C\uFF0C\u4F46\u662F\u6BCF\u4E2A\u5B69\u5B50\u90FD\u81F3\u5C11\u5F97\u6709\u4E00\u9897\u7CD6\u679C\uFF0C\u95EE\u6700\u5C11\u9700\u8981\u51C6\u5907\u591A\u5C11\u7CD6\u679C</p>
<pre><code class="language-js">var candy = function (ratings) {
  // \u4E24\u6B21\u904D\u5386\uFF0C\u4ECE\u5DE6\u904D\u5386\uFF0C\u5F97\u5206\u9AD8\u7684\u7CD6\u679C\u5C31+1\uFF0C\u5426\u5219\u53EA\u7ED9\u4E00\u9897
  // \u4ECE\u53F3\u904D\u5386\uFF0C\u89C4\u5219\u662F\u4E00\u6837\u7684\uFF0C\u7136\u540E\u4E24\u6B21\u904D\u5386\u5206\u7ED9\u76F8\u540C\u5B69\u5B50\u6570\u91CF\u8F83\u591A\u7684\u7CD6\u679C\u5C31\u662F\u6700\u7EC8\u5E94\u8BE5\u7ED9\u4ED6\u7684\u7CD6\u679C
  const left = []
  const right = []
  const len = ratings.length
  for (let i = 0, j = len - 1; i &lt; len; i++, j--) {
    if (i === 0) {
      left[i] = 1
      right[j] = 1
    } else {
      left[i] = ratings[i] &gt; ratings[i - 1] ? left[i - 1] + 1 : 1
      right[j] = ratings[j] &gt; ratings[j + 1] ? right[j + 1] + 1 : 1
    }
  }
  return left.reduce((a, b, i) =&gt; {
    return a + Math.max(left[i], right[i])
  }, 0)
}
</code></pre>

</div></details>
<details><summary>\u6700\u957F\u6709\u6548\u62EC\u53F7<a href="https://leetcode-cn.com/problems/longest-valid-parentheses/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u52A8\u6001\u89C4\u5212\uFF0C\u5B9A\u4E49 dp[i] \u8868\u793A\u4EE5\u4E0B\u6807 i \u5B57\u7B26\u7ED3\u5C3E\u7684\u6700\u957F\u6709\u6548\u62EC\u53F7\u7684\u957F\u5EA6\uFF0C\u7136\u540E\u8003\u8651\u4E24\u79CD\u60C5\u51B5\uFF1A<code>....()</code>\u548C<code>....))</code>\uFF0C
\u5177\u4F53\u53EF\u4EE5\u53BB\u770B\u529B\u6263</p>
<p>\u4E0B\u9762\u7684\u89E3\u6CD5\u662F\u81EA\u5DF1\u60F3\u51FA\u7684\uFF0C\u5C31\u662F\u6BCF\u4E2A\u5408\u6CD5\u7684\u5B50\u4E32\u81F3\u5C11\u662F<code>()</code>\uFF0C\u8003\u5BDF\u6BCF\u4E2A<code>()</code>\u7136\u540E\u4E0D\u65AD\u6269\u5C55\u5B83\uFF0C
\u6269\u5C55\u7684\u65F6\u5019\u8BB0\u5F55\u6700\u5927\u957F\u5EA6\uFF0C\u9700\u8981\u6CE8\u610F\u7684\u662F\u5982\u679C\u524D\u540E\u90FD\u6709\u5408\u6CD5\u7684\u5B50\u4E32\u90A3\u4E48\u5B83\u4EEC\u9700\u8981\u5408\u5E76\u6210\u5927\u5B50\u4E32</p>
<pre><code class="language-js">var longestValidParentheses = function (s) {
  const map = {}
  let max = 0
  const extend = (i, j) =&gt; {
    if (i in map &amp;&amp; j in map) return
    // \u9700\u8981\u5408\u5E76\u524D\u540E\u6709\u6548\u7684\u5B50\u4E32
    i = Math.min(i, map[j] ?? s.length, map[i - 1] ?? s.length)
    j = Math.max(j, map[i] || 0, map[j + 1] || 0)
    ;[map[i], map[j]] = [j, i]
    max = Math.max(max, j - i + 1)
    const [a, b] = [i - 1, j + 1]
    // \u4E0D\u9700\u8981\u5904\u7406 [j+1,j+2]\u548C[i-2,i-1]\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u603B\u4F1A\u88AB\u5904\u7406\u5230
    if (a &gt;= 0 &amp;&amp; b &lt; s.length &amp;&amp; s[a] === '(' &amp;&amp; s[b] === ')') {
      extend(a, b)
    }
  }
  for (let i = 0; i &lt; s.length; i++) {
    if (s[i] === '(' &amp;&amp; s[i + 1] === ')') {
      extend(i, i + 1)
    }
  }
  return max
}
</code></pre>

</div></details>
<details><summary>\u7F3A\u5931\u7684\u7B2C\u4E00\u4E2A\u6B63\u6570<a href="https://leetcode-cn.com/problems/first-missing-positive/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u4F60\u4E00\u4E2A\u672A\u6392\u5E8F\u7684\u6574\u6570\u6570\u7EC4 nums \uFF0C\u8BF7\u4F60\u627E\u51FA\u5176\u4E2D\u6CA1\u6709\u51FA\u73B0\u7684\u6700\u5C0F\u7684\u6B63\u6574\u6570\u3002O(n)</p>
<p><code>[3,4,-1,1]</code> -&gt; <code>[1,-1,3,4]</code>\uFF0C\u601D\u8DEF\u5C31\u662F\u4E0D\u65AD\u4EA4\u6362\uFF0C\u8BA9\u5143\u7D20\u5904\u5728\u5B83\u503C\u5BF9\u5E94\u7684\u4E0B\u6807\u5904\uFF0C\u8FD9\u6837\u7B2C\u4E00\u4E2A\u4E0D\u6EE1\u8DB3\u503C\u548C\u4E0B\u6807\u76F8\u7B49\u7684\u90A3\u4E2A\u4F4D\u7F6E\u5C31\u662F\u7B54\u6848</p>
<pre><code class="language-js">var firstMissingPositive = function (nums) {
  const len = nums.length
  for (let i = 0; i &lt; len; i++) {
    // \u5C06nums[i]\u653E\u5230\u5BF9\u5E94\u7684\u4F4D\u7F6E
    let n = nums[i]
    while (n &gt; 0 &amp;&amp; n &lt;= len &amp;&amp; nums[n - 1] !== n) {
      ;[nums[n - 1], nums[i]] = [n, nums[n - 1]]
      n = nums[i]
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

</div></details>
<details><summary>\u7F16\u8F91\u8DDD\u79BB<a href="https://leetcode-cn.com/problems/edit-distance/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7ED9\u4F60\u4E24\u4E2A\u5355\u8BCD word1 \u548C word2\uFF0C \u8BF7\u8FD4\u56DE\u5C06 word1 \u8F6C\u6362\u6210 word2 \u6240\u4F7F\u7528\u7684\u6700\u5C11\u64CD\u4F5C\u6570</p>
<p>\u7ECF\u5178\u52A8\u6001\u89C4\u5212\uFF0Cdp[i][j] \u8868\u793A word1 \u524D<strong>i \u4E2A</strong>\u5B57\u7B26\u548C word2 \u524D <strong>j \u4E2A</strong>\u5B57\u7B26\u6700\u5C0F\u7F16\u8F91\u8DDD\u79BB</p>
<pre><code class="language-js">var minDistance = function (word1, word2) {
  const dp = []
  for (let i = 0; i &lt;= word1.length; i++) {
    dp[i] = [i]
  }
  for (let j = 0; j &lt;= word2.length; j++) {
    dp[0][j] = j
  }
  for (let i = 1; i &lt;= word1.length; i++) {
    for (let j = 1; j &lt;= word2.length; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]) + 1
      }
    }
  }
  return dp[word1.length][word2.length]
}
</code></pre>

</div></details>
<details><summary>\u6570\u7EC4\u4E2D\u7684\u9006\u5E8F\u5BF9\u4E2A\u6570<a href="https://leetcode-cn.com/problems/shu-zu-zhong-de-ni-xu-dui-lcof/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u5728\u6570\u7EC4\u4E2D\u7684\u4E24\u4E2A\u6570\u5B57\uFF0C\u5982\u679C\u524D\u9762\u4E00\u4E2A\u6570\u5B57\u5927\u4E8E\u540E\u9762\u7684\u6570\u5B57\uFF0C\u5219\u8FD9\u4E24\u4E2A\u6570\u5B57\u7EC4\u6210\u4E00\u4E2A\u9006\u5E8F\u5BF9\uFF0C\u6C42\u6240\u6709\u9006\u5E8F\u5BF9\u4E2A\u6570</p>
<p>\u91C7\u7528\u5F52\u5E76\u6392\u5E8F\uFF08\u4E0B\u9762\u4F7F\u7528\u7684\u8FED\u4EE3\u6CD5\uFF0C\u4E5F\u53EF\u4EE5\u7528\u9012\u5F52\uFF09\uFF0C\u5728\u5F52\u5E76\u7684\u65F6\u5019\u53EF\u4EE5\u7EDF\u8BA1\u9006\u5E8F\u5BF9\u7684\u6570\u91CF\uFF0C\u56E0\u4E3A\u5F52\u5E76\u4E0D\u4F1A\u6539\u53D8\u5143\u7D20\u7684\u987A\u5E8F\u5374\u53EF\u4EE5\u6BD4\u8F83\u5927\u5C0F\uFF08\u800C\u4E14\u6D88\u9664\u4E86\u66B4\u529B\u6CD5\u4E2D\u4EA7\u751F\u7684\u91CD\u590D\u6BD4\u8F83\uFF09</p>
<pre><code class="language-js">var reversePairs = function (nums) {
  let len = 1
  let count = 0
  while (len &lt; nums.length) {
    let start = 0
    while (start &lt; nums.length - len) {
      const [a, b, c, d] = [start, start + len - 1, start + len, Math.min(start + len * 2 - 1, nums.length - 1)]
      let [i, j] = [a, c]
      const merged = []
      while (i &lt;= b &amp;&amp; j &lt;= d) {
        if (nums[i] &gt; nums[j]) {
          // \u8FD9\u91CC\u4E0D\u80FD\u5305\u542B\u7B49\u4E8E\uFF0C\u5982 1 3, 2 3\uFF0C\u5305\u542B\u7B49\u4E8E\u4F1A\u4E22\u63893-2\u8FD9\u4E00\u5BF9
          merged.push(nums[j])
          j++
        } else {
          merged.push(nums[i])
          // \u5173\u952E\u5728\u8FD9\u91CC\uFF0C\u5982\u679Ci\u6BD4j\u5C0F\uFF0C\u8BF4\u660Ei\u6BD4j\u4E4B\u524D\u7684\u90FD\u5927\uFF0C\u90A3\u4E48j\u4E4B\u524D\u7684\u6570\u5B57\u90FD\u80FD\u7EC4\u6210\u4E00\u4E2A\u9006\u5E8F\u5BF9
          count += j - c
          i++
        }
      }
      while (i &lt;= b) {
        merged.push(nums[i++])
        count += j - c // \u5982\u679Cj\u8D70\u5B8C\u4E86\uFF0C\u90A3\u4E48\u8BF4\u660E\u90FD\u6BD4i\u5C0F\uFF0C\u90A3\u90FD\u53EF\u4EE5\u662F\u9006\u5E8F\u5BF9
      }
      while (j &lt;= d) {
        merged.push(nums[j++])
      }
      for (let k = a; k &lt;= d; k++) {
        nums[k] = merged[k - a]
      }
      start += len * 2
    }
    len *= 2
  }
  return count
}
</code></pre>
<p>\u8FD9\u4E2A\u9898\u6709\u4E2A\u5F88\u7C7B\u4F3C\u7684\u9898\u76EE\uFF1A<a href="https://leetcode-cn.com/problems/count-of-smaller-numbers-after-self/" target="_blank" rel="noopener noreferrer">\u8BA1\u7B97\u53F3\u4FA7\u5C0F\u4E8E\u5F53\u524D\u5143\u7D20\u7684\u4E2A\u6570</a>\uFF0C\u8FD9\u4E2A\u5C31\u662F\u9700\u8981\u5177\u4F53\u7EDF\u8BA1\u6BCF\u4E2A\u6570\u62E5\u6709\u7684\u9006\u5E8F\u5BF9\u7684\u4E2A\u6570\uFF0C\u53EA\u9700\u8981\u5728\u4E0A\u9762\u7684\u57FA\u7840\u4E0A\uFF0C\u5728\u8BA1\u7B97 count \u7684\u65F6\u5019\u6309\u7167\u5BF9\u5E94\u6570\u5B57\u7684\u4F4D\u7F6E\u8BB0\u5F55\u4E0B\u9006\u5E8F\u5BF9\u6570</p>

</div></details>
<details><summary>\u57FA\u672C\u8BA1\u7B97\u5668<a href="https://leetcode-cn.com/problems/basic-calculator/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u7528\u6808\u5C31\u884C\u4E86\uFF0C\u9047\u5230<code>)</code>\u7684\u65F6\u5019\uFF0C\u5C31\u9700\u8981\u8BA1\u7B97\u51FA\u62EC\u53F7\u5185\u7684\u503C\u4E86</p>
<pre><code class="language-js">var calculate = function (s) {
  const stack = []
  let num = ''
  s = '(' + s + ')' // \u7EDF\u4E00\u5F62\u5F0F
  for (let c of s) {
    if (c === ' ') {
      if (num) {
        stack.push(+num)
        num = ''
      }
      continue
    }
    if (c === '+' || c === '(') {
      if (num) {
        stack.push(+num)
        num = ''
      }
      stack.push(c)
    } else if (c === '-') {
      if (num) {
        stack.push(+num)
        num = ''
      }
      // \u51CF\u53F7\u65E2\u53EF\u4EE5\u662F\u8FD0\u7B97\u7B26\u53C8\u53EF\u4EE5\u662F\u8D1F\u6570\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9700\u8981\u5BF9\u8D1F\u6570\u7684\u60C5\u51B5\u7279\u6B8A\u5904\u7406\u4E0B
      // \u65B9\u6CD5\u5C31\u662F\u5982\u679C\u51CF\u53F7\u524D\u9762\u4E0D\u662F\u6570\u5B57\uFF0C\u90A3\u4E48\u5B83\u5C31\u662F\u8D1F\u6570\u7B26\u53F7\uFF0C\u5728\u524D\u9762\u8865\u4E00\u4E2A0\u628A\u5B83\u8F6C\u6362\u4E3A\u8FD0\u7B97\u7B26\uFF0C\u65B9\u4FBF\u8BA1\u7B97
      if (typeof stack[stack.length - 1] !== 'number') {
        stack.push(0)
      }
      stack.push(c)
    } else if (c === ')') {
      if (num) {
        stack.push(+num)
        num = ''
      }
      // \u5F53\u9047\u5230\u53F3\u62EC\u53F7\u65F6\uFF0C\u9700\u8981\u8BA1\u7B97\u51FA\u62EC\u53F7\u5185\u7684\u8868\u8FBE\u5F0F\u7684\u503C\u7136\u540E\u5165\u6808
      // \u8FD9\u91CC\u76F8\u5F53\u4E8E\u4ECE\u540E\u5411\u524D\u8BA1\u7B97\u4E00\u4E2A\u666E\u901A\u8868\u8FBE\u5F0F
      let sum = 0
      while (true) {
        const item = stack.pop()
        const op = stack.pop()
        if (op === '(') {
          sum += item
          break
        }
        sum += item * (op === '+' ? 1 : -1)
      }
      stack.push(sum)
    } else {
      num += c
    }
  }
  return stack[0]
}
</code></pre>

</div></details>
<details><summary>\u6ED1\u52A8\u7A97\u53E3\u6700\u5927\u503C<a href="https://leetcode-cn.com/problems/sliding-window-maximum/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<p>\u5728\u7A97\u53E3\u6ED1\u52A8\u7684\u8FC7\u7A0B\u4E2D\u540C\u65F6\u7EF4\u62A4\u4E00\u4E2A\u5355\u8C03\u9012\u51CF\u961F\u5217\uFF0C<strong>\u961F\u5217\u4FDD\u5B58\u5143\u7D20\u7684\u4E0B\u6807</strong>\u3002\u5F53\u6DFB\u52A0\u5143\u7D20\u65F6\uFF0C\u9700\u8981\u628A\u961F\u5217\u4E2D\u5C0F\u4E8E\u8BE5\u5143\u7D20\u7684\u5143\u7D20\u90FD\u79FB\u9664\u6389\u4FDD\u8BC1\u961F\u5217\u9012\u51CF\uFF1B\u540C\u65F6\u4ECE\u961F\u9996\u5224\u65AD\u5143\u7D20\u662F\u5426\u5728\u5F53\u524D\u7A97\u53E3\u5185\uFF0C\u4E0D\u5728\u7684\u8BDD\u5C31\u79FB\u9664\u6389\uFF1B\u4E0A\u9762\u4E24\u4E2A\u52A8\u4F5C\u4FDD\u8BC1\u4E86\u961F\u5217\u4E2D\u7684\u5143\u7D20\u9012\u51CF\u5E76\u4E14\u90FD\u5728\u5F53\u524D\u7A97\u53E3\u5185\uFF0C\u7136\u540E\u8BB0\u5F55\u961F\u9996\u5143\u7D20\u4F5C\u4E3A\u89E3\u96C6\u5C31\u53EF\u4EE5\u4E86\u3002</p>
<pre><code class="language-js">var maxSlidingWindow = function (nums, k) {
  // \u961F\u5217\u6570\u7EC4\uFF08\u5B58\u653E\u7684\u662F\u5143\u7D20\u4E0B\u6807\uFF0C\u4E3A\u4E86\u53D6\u503C\u65B9\u4FBF\uFF09
  const q = []
  // \u7ED3\u679C\u6570\u7EC4
  const ans = []
  for (let i = 0; i &lt; nums.length; i++) {
    // \u82E5\u961F\u5217\u4E0D\u4E3A\u7A7A\uFF0C\u4E14\u5F53\u524D\u5143\u7D20\u5927\u4E8E\u7B49\u4E8E\u961F\u5C3E\u6240\u5B58\u4E0B\u6807\u7684\u5143\u7D20\uFF0C\u5219\u5F39\u51FA\u961F\u5C3E
    while (q.length &amp;&amp; nums[i] &gt;= nums[q[q.length - 1]]) {
      q.pop()
    }
    // \u5165\u961F\u5F53\u524D\u5143\u7D20\u4E0B\u6807
    q.push(i)
    // \u5224\u65AD\u5F53\u524D\u6700\u5927\u503C\uFF08\u5373\u961F\u9996\u5143\u7D20\uFF09\u662F\u5426\u5728\u7A97\u53E3\u4E2D\uFF0C\u82E5\u4E0D\u5728\u4FBF\u5C06\u5176\u51FA\u961F
    while (q[0] &lt;= i - k) {
      q.shift()
    }
    // \u5F53\u8FBE\u5230\u7A97\u53E3\u5927\u5C0F\u65F6\u4FBF\u5F00\u59CB\u5411\u7ED3\u679C\u4E2D\u6DFB\u52A0\u6570\u636E
    if (i &gt;= k - 1) ans.push(nums[q[0]])
  }
  return ans
}
</code></pre>
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
