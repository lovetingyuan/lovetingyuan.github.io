### leetcode一些会员题

#### 340. 至多包含 K 个不同字符的最长子串

<p>给你一个字符串&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;和一个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;，请你找出&nbsp;<strong>至多&nbsp;</strong>包含<em>&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>k</em></code>&nbsp;个&nbsp;<strong>不同</strong>&nbsp;字符的最长</p><p>子串</p><p>，并返回该子串的长度。&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "eceba", k = 2
输出：3
解释：满足题目要求的子串是 "ece" ，长度为 3 。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "aa", k = 1
输出：2
解释：满足题目要求的子串是 "aa" ，长度为 2 。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= s.length &lt;= 5 * 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= k &lt;= 50</code></li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 滑动窗口
 用哈希表来记录窗口内不同字符以及对应的数量
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let left = 0
  let right = 0
  let max = 0
  if (k === 0) return 0
  const map = new Map()
  while (left <= right && right < s.length) {
    if (map.size <= k) {
      // 窗口合法，右指针继续移动
      const r = right++
      map.set(s[r], (map.get(s[r]) ?? 0) + 1)
    } else {
      // 不合法，窗口收缩
      const l = left++
      map.set(s[l], (map.get(s[l]) ?? 0) - 1)
      if (!map.get(s[l])) {
        // 没有s[l]这个字符了，从哈希表删除
        map.delete(s[l])
      }
    }
    if (map.size <= k) {
      // 如果窗口合法，记录可能的最大值
      max = Math.max(max, right - left)
    }
  }
  return max
}
```

:::

---

#### 772. 基本计算器 III

<p>实现一个基本的计算器来计算简单的表达式字符串。</p><p>表达式字符串只包含非负整数，算符&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">+</code>、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-</code>、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">*</code>、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">/</code>&nbsp;，左括号&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">(</code>&nbsp;和右括号&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">)</code>&nbsp;。整数除法需要&nbsp;<strong>向下截断</strong>&nbsp;。</p><p>你可以假定给定的表达式总是有效的。所有的中间结果的范围均满足&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[-231, 231 - 1]</code>&nbsp;。</p><p><strong>注意：</strong>你不能使用任何将字符串作为表达式求值的内置函数，比如&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">eval()</code>&nbsp;。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "1+1"
输出：2
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "6-4/2"
输出：4
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "2*(5+5*2)/3+(6/2+8)"
输出：21
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= s &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;由整数、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'+'</code>、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'-'</code>、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'*'</code>、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'/'</code>、<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'('</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">')'</code>&nbsp;组成</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;是一个&nbsp;<strong>有效的</strong>&nbsp;表达式</li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {string} s
 * @return {number}
 栈
 当遇到乘除时，总是先计算出来，结果入栈
 当遇到括号时，总是先把括号的结果计算出来，结果入栈
 */
var calculate = function (s) {
  const stack = []
  let num = ''
  s = '(' + s + ')' // 补个括号，统一处理
  for (let c of s) {
    if (c < 10) {
      num += c // 如果是数字，收集
    } else {
      if (num) {
        // 在处理符号之前，数字先入栈
        num = num - 0
        // 每当数字入栈的时候，我们都去判断栈顶是不是乘除，如果是就先计算结果
        if (stack.at(-1) === '/' || stack.at(-1) === '*') {
          const [op, a] = [stack.pop(), stack.pop()]
          // 这里向下取整不能用parseInt，例如 4 / 232424223 = 1.720991017360527e-8
          stack.push(op === '*' ? a * num : Math.trunc(a / num))
        } else {
          stack.push(num)
        }
        num = ''
      }
      if (c !== ')') {
        stack.push(c)
      } else {
        // 如果遇到括号结尾，我们就去计算括号内的表达式，由于乘除总是被立即处理，所以可以保证括号内都是加减
        let sum = 0
        while (true) {
          // 从后往前计算，( 1, -2, +3 )
          const n = stack.pop()
          const op = stack.pop()
          if (op === '(') {
            sum += n
            break
          }
          sum += op === '+' ? n : -n
        }
        // 判断栈顶是不是乘除，如果是就先计算结果
        if (stack.at(-1) === '/' || stack.at(-1) === '*') {
          const [op, a] = [stack.pop(), stack.pop()]
          stack.push(op === '*' ? a * sum : Math.trunc(a / sum))
        } else {
          stack.push(sum)
        }
      }
    }
  }
  return stack[0]
}
```

:::

---

#### 2417. 最近的公平整数

<p>给定一个&nbsp;<strong>正整数</strong>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>。</p><p>如果一个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;中的&nbsp;<strong>偶数&nbsp;</strong>位数与<strong>&nbsp;奇数</strong>&nbsp;位数相等，那么我们称&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;为公平整数。</p><p>返回&nbsp;<strong><em>大于或等于&nbsp;</em></strong><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code><em>&nbsp;的&nbsp;</em><strong><em>最小&nbsp;</em></strong><em>的公平整数。</em></p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: n = 2
输出: 10
解释: 大于等于 2 的最小的公平整数是 10。
10是公平整数，因为它的偶数和奇数个数相等 (一个奇数和一个偶数)。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: n = 403
输出: 1001
解释: 大于或等于 403 的最小的公平整数是 1001。
1001 是公平整数，因为它有相等数量的偶数和奇数 (两个奇数和两个偶数)。
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= n &lt;= 109</code></li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {number} n
 * @return {number}
 */
var closestFair = function (n) {
  let str = n + ''
  const len = str.length
  if (len % 2 === 1) {
    // 如果当前n的位数是奇数 显然答案是n + 1位的数字中第一个fair的数字
    let nextLen = len + 1
    let half = nextLen / 2
    let ret = '1' + '0'.repeat(half) + '1'.repeat(half - 1)
    return Number(ret)
  }
  let cnt = 0
  for (let i of str) {
    cnt += i % 2
  }
  if (cnt === len / 2)
    return n // 如果当前n已经fair了 直接返回它
  else return closestFair(n + 1) // 否则递归 直到遇到第一个fair的
}
```

:::

---

#### 1940. 排序数组之间的最长公共子序列

<p>给定一个由整数数组组成的数组<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">arrays</code>，其中<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">arrays[i]</code>是严格递增排序的，返回一个表示所有数组之间的最长公共子序列的整数数组。</p><p>子序列是从另一个序列派生出来的序列，删除一些元素或不删除任何元素，而不改变其余元素的顺序。</p><p><strong>示例1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: arrays = [[1,3,4],
&nbsp;              [1,4,7,9]]
输出: [1,4]
解释:&nbsp;这两个数组中的最长子序列是[1,4]。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: arrays = [[2,3,6,8],
&nbsp;              [1,2,3,5,6,7,10],
&nbsp;              [2,3,4,6,9]]
输出: [2,3,6]
解释:&nbsp;这三个数组中的最长子序列是[2,3,6]。
</pre><p><strong>示例 3:</strong></p><pre class="ql-syntax" spellcheck="false">输入: arrays = [[1,2,3,4,5],
&nbsp;              [6,7,8]]
输出: []
解释:&nbsp;这两个数组之间没有公共子序列。
</pre><p>&nbsp;</p><p><strong>限制条件:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">2 &lt;= arrays.length &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= arrays[i].length &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= arrays[i][j] &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">arrays[i]</code>&nbsp;是严格递增排序.</li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {number[][]} arrays
 * @return {number[]}
 */
var longestCommonSubsequence = function (arrays) {
  const list = arrays[0]
  const arrays2 = []
  for (let i = 1; i < arrays.length; i++) {
    arrays2.push(new Set(arrays[i]))
  }
  const result = []
  for (let n of list) {
    if (arrays2.every((v) => v.has(n))) {
      result.push(n)
    }
  }
  return result
}
```

:::

---

#### 2764. 数组是否表示某二叉树的前序遍历

<p>给定一个以&nbsp;<strong>0</strong>&nbsp;为起始索引的整数&nbsp;<strong>二维数组</strong>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nodes</code>&nbsp;，你的任务是确定给定的数组是否表示某个&nbsp;<strong>二叉</strong>&nbsp;树的&nbsp;<strong>前序</strong>&nbsp;遍历。</p><p>对于每个索引&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">i</code>&nbsp;，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nodes[i] = [id, parentId]</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">id</code>&nbsp;是索引&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">i</code>&nbsp;处节点的 id，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">parentId</code>&nbsp;是其在树中的父节点 id（如果该节点没有父节点，则&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">parentId = -1</code>&nbsp;）。</p><p>如果给定的数组表示某个树的前序遍历，则返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">true</code>&nbsp;，否则返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">false</code>&nbsp;。</p><p><strong>注意</strong>：树的&nbsp;<strong>前序</strong>&nbsp;遍历是一种递归的遍历方式，它首先访问当前节点，然后对左子节点进行前序遍历，最后对右子节点进行前序遍历。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nodes = [[0,-1],[1,0],[2,0],[3,2],[4,2]]
输出：true
解释：给定的 nodes 数组可以构成下面图片中的树。
我们可以验证这是树的前序遍历，首先访问节点 0，然后对左子节点进行前序遍历，即 [1] ，然后对右子节点进行前序遍历，即 [2,3,4] 。
</pre><p><span style="background-color: rgb(255, 255, 255);"><img src="https://assets.leetcode.com/uploads/2023/07/04/1.png"></span></p><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nodes = [[0,-1],[1,0],[2,0],[3,1],[4,1]]
输出：false
解释：给定的 nodes 数组可以构成下面图片中的树。
对于前序遍历，首先访问节点 0，然后对左子节点进行前序遍历，即 [1,3,4]，但是我们可以看到在给定的顺序中，2 位于 1 和 3 之间，因此它不是树的前序遍历。
</pre><p><span style="background-color: rgb(255, 255, 255);"><img src="https://assets.leetcode.com/uploads/2023/07/04/2.png"></span></p><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nodes.length &lt;= 105</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nodes[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= nodes[i][0] &lt;= 105</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-1 &lt;= nodes[i][1] &lt;= 105</code></li><li>生成的输入保证&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nodes</code>&nbsp;可以组成二叉树。</li></ul><p><br></p>

::: detail answer

```js
var isPreorder = function (nodes) {
  const stack = new Array()
  for (let i = 0; i < nodes.length; i++) {
    const [node, parent] = nodes[i]
    if (i === 0 || (i > 0 && parent === nodes[i - 1][0])) {
      stack.push(node)
    } else {
      let flag = false
      while (stack.length) {
        if (parent === stack.pop()) {
          flag = true
          break
        }
      }
      if (flag === false) {
        return false
      }
      stack.push(node)
    }
  }
  return true
}
```

:::

---

#### 2307. 检查方程中的矛盾之处

<p>给你一个由字符串二维数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">equations</code>&nbsp;和实数数组&nbsp;&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">values</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">equations[i] = [Ai, Bi]</code>，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">values[i]</code>&nbsp;表示&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Ai / Bi = values[i]</code>.。</p><p>确定方程中是否存在矛盾。<em>如果存在矛盾则返回&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>true</em></code><em>，否则返回&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>false</em></code>。</p><p><strong>注意</strong>:</p><ul><li>当检查两个数字是否相等时，检查它们的&nbsp;<strong>绝对差值&nbsp;</strong>是否小于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">10-5</code>.</li><li>生成的测试用例没有针对精度的用例，即使用&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">double</code>&nbsp;就足以解决问题。</li></ul><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: equations = [["a","b"],["b","c"],["a","c"]], values = [3,0.5,1.5]
输出: false
解释:
给定的方程为: a / b = 3, b / c = 0.5, a / c = 1.5
方程中没有矛盾。满足所有方程的一个可能的分配是:
a = 3, b = 1 和 c = 2.
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: equations = [["le","et"],["le","code"],["code","et"]], values = [2,5,0.5]
输出: true
解释:
给定的方程为: le / et = 2, le / code = 5, code / et = 0.5
根据前两个方程，我们得到 code / et = 0.4.
因为第三个方程是 code / et = 0.5, 所以矛盾。
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= equations.length &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">equations[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= Ai.length, Bi.length &lt;= 5</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Ai</code>,&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Bi</code>&nbsp;由小写英文字母组成。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">equations.length == values.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0.0 &lt; values[i] &lt;= 10.0</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">values[i]</code>&nbsp;小数点后最多 2 位。</li></ul><p><br></p>

---

<p><a href="https://leetcode.cn/problems/meeting-rooms-ii/" target="_blank" style="color: inherit;">253. 会议室 II</a></p><p>已解答</p><p><br></p><p>中等</p><p>相关标签</p><p>相关企业</p><p>提示</p><p><br></p><p>给你一个会议时间安排的数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">intervals</code>&nbsp;，每个会议时间都会包括开始和结束的时间&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">intervals[i] = [starti, endi]</code>&nbsp;，返回&nbsp;<em>所需会议室的最小数量</em>&nbsp;。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：intervals = [[0,30],[5,10],[15,20]]
输出：2
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：intervals = [[7,10],[2,4]]
输出：1
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;=&nbsp;intervals.length &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= starti &lt; endi &lt;= 106</code></li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {number[][]} intervals
 * @return {number}
 ----------
    -----
       -------
                ------
 */
var minMeetingRooms = function (intervals) {
  // 其实就是求所有的区间最大重叠数
  // intervals.sort((a, b) => a[0] - b[0])
  const map = {}
  for (let [a, b] of intervals) {
    map[a] ??= 0 // 一旦有会议开始我们就当前时间计数加一
    map[a]++
    map[b] ??= 0
    map[b]-- // 一旦有会议结束我们就当前时间计数减一
  }
  const keys = Object.keys(map)
  let count = 0
  let max = 1
  for (let k of keys) {
    // 按时间先后顺序来统计计数 （js中map key如果是数字会自动排序）
    count += map[k]
    max = Math.max(max, count)
  }
  return max
}
```

:::

---

#### 280. 摆动排序

<p>给你一个的整数数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>, 将该数组重新排序后使&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums[0] &lt;= nums[1] &gt;= nums[2] &lt;= nums[3]...</code>&nbsp;</p><p>输入数组总是有一个有效的答案。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [3,5,2,1,6,4]
输出：[3,5,1,6,2,4]
解释：[1,6,2,5,3,4]也是有效的答案
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [6,6,5,6,3,8]
输出：[6,6,5,6,3,8]
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nums.length &lt;= 5 * 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= nums[i] &lt;= 104</code></li><li><a href="https://leetcode.cn/problems/meeting-rooms-ii/" target="_blank" style="color: inherit;">输入的&nbsp;</a><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;保证至少有一个答案。</li></ul><p>&nbsp;</p><p><strong>进阶：</strong>你能在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">O(n)</code>&nbsp;时间复杂度下解决这个问题吗？</p>

::: detail answer

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    const last = nums[i - 1]
    if (i % 2) {
      if (last > nums[i]) {
        ;[nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
      }
    } else if (last < nums[i]) {
      ;[nums[i], nums[i - 1]] = [nums[i - 1], nums[i]]
    }
  }
  return nums
}
```

:::

---

#### 250. 统计同值子树

<p>给定一个二叉树，统计该二叉树数值相同的</p><p>子树</p><p>个数。同值子树是指该子树的所有节点都拥有相同的数值。</p><p><strong>示例：</strong></p><pre class="ql-syntax" spellcheck="false">输入: root = [5,1,5,5,5,null,5]

              5
             / \
            1   5
           / \   \
          5   5   5

输出: 4

</pre><p><br></p>

::: detail answer

```js
var countUnivalSubtrees = function (root) {
  if (!root) {
    return 0
  }
  let count = 0
  const isUnivalSubtree = (node) => {
    if (!node.left && !node.right) {
      count++
      return true
    }
    let isUnival = true
    if (node.left) {
      isUnival = isUnivalSubtree(node.left) && isUnival && node.left.val === node.val
    }
    if (node.right) {
      isUnival = isUnivalSubtree(node.right) && isUnival && node.right.val === node.val
    }
    if (isUnival) {
      count++
      return true
    } else {
      return false
    }
  }

  isUnivalSubtree(root)
  return count
}
```

:::

---

#### 159. 至多包含两个不同字符的最长子串

<p><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">给你一个字符串&nbsp;</span><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;，请你找出&nbsp;</span><strong style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">至多&nbsp;</strong><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">包含&nbsp;</span><strong style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">两个不同字符</strong><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;的最长</span><span style="background-color: rgb(240, 240, 240); font-size: 14px;">子串</span></p><p><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">，并返回该子串的长度。</span></p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "eceba"
输出：3
解释：满足题目要求的子串是 "ece" ，长度为 3 。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "ccaabbb"
输出：5
解释：满足题目要求的子串是 "aabbb" ，长度为 5 。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= s.length &lt;= 105</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;由英文字母组成</li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {string} s
 * @return {number}
 滑动窗口
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  let left = 0
  let right = 0
  let max = 0
  const map = new Map() // 保存窗口内的字符及其个数
  while (left <= right && right < s.length) {
    if (map.size <= 2) {
      const r = right++
      map.set(s[r], (map.get(s[r]) ?? 0) + 1)
    } else {
      const l = left++
      map.set(s[l], (map.get(s[l]) ?? 0) - 1)
      if (!map.get(s[l])) {
        map.delete(s[l])
      }
    }
    if (map.size <= 2) {
      max = Math.max(max, right - left)
    }
  }
  return max
}
```

:::

---

#### 186. 反转字符串中的单词 II

<p>给你一个字符数组&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">s</code>&nbsp;，反转其中&nbsp;<strong>单词</strong>&nbsp;的顺序。</p><p><strong>单词</strong>&nbsp;的定义为：单词是一个由非空格字符组成的序列。<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">s</code>&nbsp;中的单词将会由单个空格分隔。</p><p>必须设计并实现&nbsp;<strong>原地</strong>&nbsp;解法来解决此问题，即不分配额外的空间。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = ["t","h","e"," ","s","k","y"," ","i","s"," ","b","l","u","e"]
输出：["b","l","u","e"," ","i","s"," ","s","k","y"," ","t","h","e"]
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = ["a"]
输出：["a"]
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">1 &lt;= s.length &lt;= 105</code></li><li><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">s[i]</code>&nbsp;可以是一个英文字母（大写或小写）、数字、或是空格&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">' '</code>&nbsp;。</li><li><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">s</code>&nbsp;中至少存在一个单词</li><li><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">s</code>&nbsp;不含前导或尾随空格</li><li>题目数据保证：<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">s</code>&nbsp;中的每个单词都由单个空格分隔</li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    ;[s[left], s[right]] = [s[right], s[left]]
    left++
    right--
  }
  for (let i = 0; i < s.length; ) {
    let j = i
    while (j < s.length) {
      if (s[j] === ' ') {
        break
      }
      j++
    }
    let left = i
    let right = j - 1
    while (left < right) {
      ;[s[left], s[right]] = [s[right], s[left]]
      left++
      right--
    }
    i = j + 1
  }
  return s
}
```

:::

---

#### 2204. 无向图中到环的距离

<p>给定一个正整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>，表示一个&nbsp;<strong>连通无向图</strong>&nbsp;中的节点数，该图&nbsp;<strong>只包含一个&nbsp;</strong>环。节点编号为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code>&nbsp;~&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n - 1</code>(<strong>含</strong>)。</p><p>你还得到了一个二维整数数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">edges</code>，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">edges[i] = [node1i, node2i]</code>&nbsp;表示有一条&nbsp;<strong>双向&nbsp;</strong>边连接图中的&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">node1i</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">node2i</code>。</p><p>两个节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;之间的距离定义为从&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;到&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;所需的&nbsp;<strong>最小边数</strong>。</p><p>返回<em>一个长度为&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>n</em></code><em>&nbsp;的整数数组&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>answer</em></code><em>，其中&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">answer[i]</code><em>&nbsp;是第&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>i</em></code><em>&nbsp;个节点与环中任何节点之间的最小距离</em>。</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: n = 7, edges = [[1,2],[2,4],[4,3],[3,1],[0,1],[5,2],[6,5]]
给输出: [1,0,0,0,0,1,2]
解释:
节点 1, 2, 3, 和 4 来自环。
0 到 1 的距离是 1。
1 到 1 的距离是 0。
2 到 2 的距离是 0。
3 到 3 的距离是 0。
4 到 4 的距离是 0。
5 到 2 的距离是 1。
6 到 2 的距离是 2。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: n = 9, edges = [[0,1],[1,2],[0,2],[2,6],[6,7],[6,8],[0,3],[3,4],[3,5]]
你输出: [0,0,0,1,2,2,1,2,2]
解释:
节点 0, 1, 和 2 来自环.
0 到 0 的距离是 0。
1 到 1 的距离是 0。
2 到 2 的距离是 0。
3 到 1 的距离是 1。
4 到 1 的距离是 2。
5 到 1 的距离是 2。
6 到 2 的距离是 1。
7 到 2 的距离是 2。
8 到 2 的距离是 2。
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">3 &lt;= n &lt;= 105</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">edges.length == n</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">edges[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= node1i, node2i &lt;= n - 1</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">node1i != node2i</code></li><li>图是连通的。</li><li>这个图只有一个环。</li><li>任何顶点对之间最多只有一条边。</li></ul>

::: detail answer

```js
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var distanceToCycle = function (n, edges) {
  //统计无向图中所有点到环路点的最近距离
  //1、dfs求出无向图中的环
  //邻接矩阵-无向图
  const graph = new Array(n).fill(0).map(() => new Array())
  for (let [x, y] of edges) {
    graph[x].push(y)
    graph[y].push(x)
  }

  //单源DFS
  let cycle = []
  let process = new Array(n).fill(false) //判圈剪枝：正在进行
  let path = []
  function dfs(cur, pre) {
    if (cycle.length) return //代表已经找到环路
    if (process[cur]) return (cycle = path.slice(path.indexOf(cur)))
    process[cur] = true
    path.push(cur)
    for (let next of graph[cur]) if (next !== pre) dfs(next, cur)
    process[cur] = false
    path.pop(cur)
  }
  dfs(0, null)

  //多源BFS
  var res = new Array(n).fill(0)
  var queue = []
  var visited = new Array(n).fill(false)
  for (let num of cycle) {
    queue.push(num)
    visited[num] = true //代表已经入队
  }
  var dist = 0
  var queue2 = []
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      //1、出队
      const x = queue[i]
      //2、计数
      res[x] = dist
      //3、入队
      for (let y of graph[x]) {
        if (visited[y]) continue //如果已经访问过，返回
        visited[y] = true
        queue2.push(y)
      }
    }
    queue = queue2
    queue2 = []
    dist++
  }
  return res
}
```

:::

---

#### 1136. 并行课程

<p>给你一个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>&nbsp;，表示编号从&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>&nbsp;到&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>&nbsp;的&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>&nbsp;门课程。另给你一个数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">relations</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">relations[i] = [prevCoursei, nextCoursei]</code>&nbsp;，表示课程&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">prevCoursei</code>&nbsp;和课程&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nextCoursei</code>&nbsp;之间存在先修关系：课程&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">prevCoursei</code>&nbsp;必须在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nextCoursei</code>&nbsp;之前修读完成。</p><p>在一个学期内，你可以学习&nbsp;<strong>任意数量</strong>&nbsp;的课程，但前提是你已经在&nbsp;<strong>上</strong>&nbsp;一学期修读完待学习课程的所有先修课程。</p><p>请你返回学完全部课程所需的&nbsp;<strong>最少</strong>&nbsp;学期数。如果没有办法做到学完全部这些课程的话，就返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-1</code>。</p><p>&nbsp;</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：n = 3, relations = [[1,3],[2,3]]
给输出：2
解释：上图表示课程之间的关系图：
在第一学期，可以修读课程 1 和 2 。
在第二学期，可以修读课程 3 。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：n = 3, relations = [[1,2],[2,3],[3,1]]
定输出：-1
解释：没有课程可以学习，因为它们互为先修课程。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= n &lt;= 5000</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= relations.length &lt;= 5000</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">relations[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= prevCoursei, nextCoursei &lt;= n</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">prevCoursei != nextCoursei</code></li><li>所有&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[prevCoursei, nextCoursei]</code>&nbsp;<strong>互不相同</strong></li></ul>

::: detail answer

```js
var minimumSemesters = function (n, relations) {
  const graph = {}
  const queue = []
  const inDegree = Array.from({ length: n + 1 }).fill(0)
  for (const [prereq, course] of relations) {
    if (!graph[prereq]) graph[prereq] = []
    graph[prereq].push(course)
    inDegree[course]++
  }
  //graph存储了所有的课程，其中 先修课程 => 才能修的课程
  //也就是图论中的 先修的课 -> 指向 后修的课
  // console.log(graph)
  //{ '1': [ 3 ], '2': [ 3 ], '3': [] }
  //inDegree 是在图里指向这个点的edge数
  //在本题中代表了每门课需要的前修课程的数量
  //对应关系是 index => 前修课数量
  //比如 inDegree[3] = 2代表第三门课前修课程数量要求是2
  // console.log(inDegree)
  //[ 0, 0, 0, 2 ]

  //同样的利用了课程是数字的便利...
  //这里建造一个queue，第一层先学习不要前置课程的
  for (let course = 1; course <= n; course++) {
    if (inDegree[course] === 0) queue.push(course)
  }

  let semester = 0

  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let prereq = queue.shift()
      //这里要注意要加上if graph[prereq]
      //因为声明inDegree 的时候是默认所有都是0
      //但是可能n = 10 但relations里没有关于10这门课程的信息
      if (graph[prereq]) {
        for (let course of graph[prereq]) {
          inDegree[course]-- //得到还剩下的prereq的数量
          if (inDegree[course] === 0) queue.push(course)
        }
      }
    }
    semester++
  }

  //如果经历过这门多学期还有不能学的，那就说明没办法学到这门课程
  //也就是说图中某处有环
  for (const course of inDegree) {
    if (course > 0) return -1
  }
  return semester
}
```

:::

---

#### 681. 最近时刻

<p>给定一个形如&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">"HH:MM"</code>&nbsp;表示的时刻&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">time</code>&nbsp;，利用当前出现过的数字构造下一个距离当前时间最近的时刻。每个出现数字都可以被无限次使用。</p><p>你可以认为给定的字符串一定是合法的。例如，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">"01:34"</code>&nbsp;和&nbsp;&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">"12:09"</code>&nbsp;是合法的，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">“1:34”</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">“12:9”</code>&nbsp;是不合法的。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: "19:34"
输出: "19:39"
解释: 利用数字 1, 9, 3, 4 构造出来的最近时刻是 19:39，是 5 分钟之后。
结果不是 19:33 因为这个时刻是 23 小时 59 分钟之后。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: "23:59"
输出: "22:22"
解释: 利用数字 2, 3, 5, 9 构造出来的最近时刻是 22:22。
答案一定是第二天的某一时刻，所以选择可构造的最小时刻。
</pre><ul><li><br></li></ul>

::: detail answer

```js
/**
 * @param {string} time
 * @return {string}
 */
const nextClosestTime = function (time) {
  const [hour, minute] = time.split(':')
  const nums = new Set()
  for (const num of time) {
    if (num === ':') continue
    nums.add(num)
  }

  const timestmap = hour * 60 + +minute
  const max = 23 * 60 + 59
  for (let t = timestmap + 1; t <= max; t++) {
    const ans = convert(t, nums)
    if (ans) return ans
  }
  for (let t = 0; t < timestmap; t++) {
    const ans = convert(t, nums)
    if (ans) return ans
  }
  return time

  function convert(time, nums) {
    const m = time % 60
    const h = Math.trunc(time / 60)
    if ((h < 10 || m < 10) && !nums.has('0')) return false
    for (const c of m + '' + h) {
      if (!nums.has(c)) return false
    }
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m)
  }
}
```

:::

---

#### 774. 最小化去加油站的最大距离

<p>整数数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">stations</code>&nbsp;表示&nbsp;<strong>水平数轴</strong>&nbsp;上各个加油站的位置。给你一个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;。</p><p>请你在数轴上增设&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;个加油站，新增加油站可以位于&nbsp;<strong>水平数轴</strong>&nbsp;上的任意位置，而不必放在整数位置上。</p><p>设&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">penalty()</code>&nbsp;是：增设&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;个新加油站后，<strong>相邻</strong>&nbsp;两个加油站间的最大距离。</p><p><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">请你返回&nbsp;</span><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">penalty()</code><strong style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;</strong><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">可能的最小值。与实际答案误差在&nbsp;</span><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">10-6</code><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;范围内的答案将被视作正确答案。</span></p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：stations = [1,2,3,4,5,6,7,8,9,10], k = 9
输出：0.50000
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：stations = [23,24,36,39,46,56,57,65,84,98], k = 1
输出：14.00000
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">10 &lt;= stations.length &lt;= 2000</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= stations[i] &lt;= 108</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">stations</code>&nbsp;按&nbsp;<strong>严格递增</strong>&nbsp;顺序排列</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= k &lt;= 106</code></li></ul><p><br></p>

::: detail answer

```js
/**
 * @param {number[]} stations
 * @param {number} k
 * @return {number}
 */

const check = (arr, dist, k) => {
  let c = 0
  for (let i = 1; i < arr.length; i++) {
    c += ((arr[i] - arr[i - 1]) / dist) >> 0
  }
  return c > k
}

var minmaxGasDist = function (stations, k) {
  let left = 0,
    right = 1e8
  while (right - left > 1e-6) {
    const mid = (left + right) / 2
    if (check(stations, mid, k)) left = mid
    else right = mid
  }
  return left
}
```

:::

---

#### 489. 扫地机器人

<p>房间中的某个位置上有一个机器人，你需要控制它清扫房间。房间被建模为一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m x n</code>&nbsp;的二进制网格，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code>&nbsp;表示单元格中有障碍物，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>&nbsp;表示空单元格。</p><p>机器人从一个未知的空单元格开始出发，并且你无法访问网格，但你可以使用给定的 API&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Robot</code>&nbsp;控制机器人。</p><p>你的任务是使用机器人清扫整个房间（即清理房间中的每个空单元格）。机器人具有四个给定的API，可以前进、向左转或向右转。每次转弯 90 度。</p><p>当机器人试图移动到一个存在障碍物的单元格时，它的碰撞传感器会检测到障碍物，并停留在当前单元格。</p><p>设计一个算法，使用下述 API 清扫整个房间：</p><pre class="ql-syntax" spellcheck="false">interface Robot {
&nbsp; // 若下一个单元格为空，则返回 true ，并移动至该单元格。
&nbsp; // 若下一个单元格为障碍物，则返回 false ，并停留在当前单元格。
&nbsp; boolean move();

// 在调用 turnLeft/turnRight 后机器人会停留在当前单元格。
&nbsp; // 每次转弯 90 度。
&nbsp; void turnLeft();
&nbsp; void turnRight();

// 清理当前单元格。
void clean();
}

</pre><p><strong>注意</strong>&nbsp;扫地机器人的初始方向向上。你可以假定网格的四周都被墙包围。</p><p>&nbsp;</p><p><strong>自定义测试：</strong></p><p>输入只用于初始化房间和机器人的位置。你需要「盲解」这个问题。换而言之，你必须在对房间和机器人位置一无所知的情况下，只使用 4 个给出的 API 解决问题。&nbsp;</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：room = [[1,1,1,1,1,0,1,1],[1,1,1,1,1,0,1,1],[1,0,1,1,1,1,1,1],[0,0,0,1,0,0,0,0],[1,1,1,1,1,1,1,1]], row = 1, col = 3
整输出：Robot cleaned all rooms.
解释：
房间内的所有单元格用 0 或 1 填充。
0 表示障碍物，1 表示可以通过。
机器人从 row=1, col=3 的初始位置出发。
在左上角的一行以下，三列以右。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：room = [[1]], row = 0, col = 0
输出：Robot cleaned all rooms.
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m == room.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n == room[i].length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= m &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= n &lt;= 200</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">room[i][j]</code>&nbsp;为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code>&nbsp;或&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>.</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= row &lt;&nbsp;m</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= col &lt; n</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">room[row][col] == 1</code></li><li>所有空单元格都可以从起始位置出发访问到。</li></ul>

::: detail answer

```js
/**
 * // This is the robot's control interface.
 * // You should not implement it, or speculate about its implementation
 * function Robot() {
 *     // Returns true if the cell in front is open and robot moves into the cell.
 *     // Returns false if the cell in front is blocked and robot stays in the current cell.
 *     @return {boolean}
 *     this.move = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnLeft = function() {
 *         ...
 *     };
 *
 *     // Robot will stay in the same cell after calling turnLeft/turnRight.
 *     // Each turn will be 90 degrees.
 *     @return {void}
 *     this.turnRight = function() {
 *         ...
 *     };
 *
 *     // Clean the current cell.
 *     @return {void}
 *     this.clean = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {Robot} robot
 * @return {void}
 */
var cleanRoom = function (robot) {
  let map = new Map()

  dfs([0, 0], 0, map, robot)
  return map.size
}

function dfs(position = [], dir, map = new Map(), robot) {
  const [posX, posY] = position
  const key = `${posX}_${posY}`
  if (!map.has(key)) {
    map.set(key, [])
  }
  map.get(key).push(dir)
  robot.clean()
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]
  for (let i = 0; i < 4; i++) {
    let curDirectionIndex = (dir + i) % 4
    let [dx, dy] = directions[curDirectionIndex]
    let newX = posX + dx
    let newY = posY + dy
    const newPositionKey = `${newX}_${newY}`
    if (!map.has(newPositionKey) && robot.move()) {
      dfs([newX, newY], curDirectionIndex, map, robot)
      goBack(robot)
    }
    robot.turnRight()
  }
}

function goBack(robot) {
  robot.turnRight()
  robot.turnRight()
  robot.move()
  robot.turnLeft()
  robot.turnLeft()
}
```

:::

---

#### 255. 验证二叉搜索树的前序遍历序列

<p>给定一个&nbsp;<strong>无重复元素</strong>&nbsp;的整数数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">preorder</code>&nbsp;，&nbsp;<em>如果它是以二叉搜索树的</em><strong><em>先序遍历</em></strong><em>排列&nbsp;</em>，返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">true</code>&nbsp;。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/03/12/preorder-tree.jpg"></p><pre class="ql-syntax" spellcheck="false">输入: preorder = [5,2,1,3,6]
输出: true
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入: preorder = [5,2,6,1,3]
输出: false
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= preorder.length &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= preorder[i] &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">preorder</code>&nbsp;中&nbsp;<strong>无重复元素</strong></li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[]} preorder
 * @return {boolean}
 */
var verifyPreorder = function (preorder) {
  const inorder = preorder.slice().sort((a, b) => a - b)
  let invalid = false
  let used = []
  const produce = (start, end, rootIndex) => {
    if (invalid) {
      return
    }

    if (start > end || rootIndex >= preorder.length) {
      return null
    }
    if (used[rootIndex]) {
      invalid = true
      return
    }
    used[rootIndex] = true
    const root = {
      val: preorder[rootIndex],
      left: null,
      right: null
    }
    if (start === end) {
      return root
    }
    const index = inorder.indexOf(root.val)
    // 左子树的根结点就是当前先序根结点的下一个
    root.left = produce(start, index - 1, rootIndex + 1)
    if (root.left && root.val < root.left.val) {
      invalid = true
      return
    }
    // 右子树的根结点则要从当前先序根节点往后数左子树的节点个数的下一个
    root.right = produce(index + 1, end, rootIndex + index - start + 1)

    if (root.right && root.val > root.right.val) {
      invalid = true
    }
    return root
  }
  produce(0, preorder.length - 1, 0)
  return !invalid
}
```

:::

---

#### 1490. 克隆 N 叉树

<p>给定一棵 N 叉树的根节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">root</code>&nbsp;，返回该树的<a href="https://baike.baidu.com/item/%E6%B7%B1%E6%8B%B7%E8%B4%9D/22785317?fr=aladdin" target="_blank"><strong>深拷贝</strong></a>（克隆）。</p><p>N 叉树的每个节点都包含一个值（&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">int</code>&nbsp;）和子节点的列表（&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">List[Node]</code>&nbsp;）。</p><pre class="ql-syntax" spellcheck="false">class Node {
    public int val;
    public List&lt;Node&gt; children;
}
</pre><p><em>N 叉树的输入序列用层序遍历表示，每组子节点用 null 分隔（见示例）。</em></p><p>&nbsp;</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png"></p><pre class="ql-syntax" spellcheck="false">输入：root = [1,null,3,2,4,null,5,6]
输出：[1,null,3,2,4,null,5,6]
</pre><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png"></p><pre class="ql-syntax" spellcheck="false">输入：root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出：[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li>给定的 N 叉树的深度小于或等于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1000</code>。</li><li>节点的总个数在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[0,&nbsp;10^4]</code>&nbsp;之间</li><li><br></li></ul>

::: detail answer

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function (root) {
  const copy = (node) => {
    if (!node) {
      return null
    }
    const children = []
    const newNode = new Node(node.val, children)
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]
      children.push(copy(child))
    }
    return newNode
  }
  return copy(root)
}
```

:::

---

#### 642. 设计搜索自动补全系统

<p>为搜索引擎设计一个搜索自动补全系统。用户会输入一条语句（最少包含一个字母，以特殊字符&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'#'</code>&nbsp;结尾）。</p><p>给定一个字符串数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">sentences</code>&nbsp;和一个整数数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">times</code>&nbsp;，长度都为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">sentences[i]</code>&nbsp;是之前输入的句子，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">times[i]</code>&nbsp;是该句子输入的相应次数。对于除&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">‘#’</code>&nbsp;以外的每个输入字符，返回前&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">3</code>&nbsp;个历史热门句子，这些句子的前缀与已经输入的句子的部分相同。</p><p>下面是详细规则：</p><ul><li>一条句子的热度定义为历史上用户输入这个句子的总次数。</li><li>返回前&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">3</code>&nbsp;的句子需要按照热度从高到低排序（第一个是最热门的）。如果有多条热度相同的句子，请按照 ASCII 码的顺序输出（ASCII 码越小排名越前）。</li><li>如果满足条件的句子个数少于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">3</code>&nbsp;，将它们全部输出。</li><li>如果输入了特殊字符，意味着句子结束了，请返回一个空集合。</li></ul><p>实现&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">AutocompleteSystem</code>&nbsp;类：</p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">AutocompleteSystem(String[] sentences, int[] times):</code>&nbsp;使用数组<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">sentences</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">times</code>&nbsp;对对象进行初始化。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">List&lt;String&gt; input(char c)</code>&nbsp;表示用户输入了字符&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">c</code>&nbsp;。</li><li class="ql-indent-1">如果&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">c == '#'</code>&nbsp;，则返回空数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[]</code>&nbsp;，并将输入的语句存储在系统中。</li><li class="ql-indent-1">返回前&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">3</code>&nbsp;个历史热门句子，这些句子的前缀与已经输入的句子的部分相同。如果少于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">3</code>&nbsp;个匹配项，则全部返回。</li></ul><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入
["AutocompleteSystem", "input", "input", "input", "input"]
[[["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]], ["i"], [" "], ["a"], ["#"]]
输出
[null, ["i love you", "island", "i love leetcode"], ["i love you", "i love leetcode"], [], []]

解释
AutocompleteSystem obj = new AutocompleteSystem(["i love you", "island", "iroman", "i love leetcode"], [5, 3, 2, 2]);
obj.input("i"); // return ["i love you", "island", "i love leetcode"]. There are four sentences that have prefix "i". Among them, "ironman" and "i love leetcode" have same hot degree. Since ' ' has ASCII code 32 and 'r' has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.
obj.input(" "); // return ["i love you", "i love leetcode"]. There are only two sentences that have prefix "i ".
obj.input("a"); // return []. There are no sentences that have prefix "i a".
obj.input("#"); // return []. The user finished the input, the sentence "i a" should be saved as a historical sentence in system. And the following input will be counted as a new search.

</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n == sentences.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n == times.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= n &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= sentences[i].length &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= times[i] &lt;= 50</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">c</code>&nbsp;是小写英文字母，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'#'</code>, 或空格&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">' '</code></li><li>每个被测试的句子将是一个以字符&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'#'</code>&nbsp;结尾的字符&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">c</code>&nbsp;序列。</li><li>每个被测试的句子的长度范围为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1,200]</code>&nbsp;</li><li>每个输入句子中的单词用单个空格隔开。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">input</code>&nbsp;最多被调用&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">5000</code>&nbsp;次</li><li><br></li></ul>

::: detail answer

```js
class Trie {
  constructor(sentences, times) {
    this.dictionary = {}
    this.curNode = null
    for (let i = 0, len = sentences.length; i < len; i++) this.insert(sentences[i], times[i])
  }

  insert(word, time) {
    let node = this.dictionary
    for (const c of word) {
      if (!node[c]) node[c] = { isEnd: false, word: null, time: 0 }
      node = node[c]
    }
    node['isEnd'] = true
    node['word'] = word
    node['time'] += time
  }

  dfs(node, ans) {
    if (!node) return
    if (node['isEnd']) ans.push(node)
    for (let p in node) {
      if (p != 'word' && p != 'time' && p != 'isEnd') this.dfs(node[p], ans)
    }
  }
}

class AutocompleteSystem {
  constructor(sentences, times) {
    this.trie = new Trie(sentences, times)
    this.cur = ''
    this.flag = true
  }

  input(c) {
    if (c == '#') {
      this.trie.insert(this.cur, 1)
      this.cur = ''
      this.trie.curNode = null
      this.flag = true //表示当前输入在字典树中没有符合的串，你再输入别的也不会有什么东西出来
      return []
    }

    this.cur += c
    let ans = []

    if (!this.flag) return []

    if (!this.trie.curNode) {
      this.trie.curNode = this.trie.dictionary[c]
      this.trie.dfs(this.trie.curNode, ans)
      if (!this.trie.curNode) this.flag = false
    } else {
      this.trie.dfs(this.trie.curNode[c], ans)
      this.trie.curNode = this.trie.curNode[c]
      if (!this.trie.curNode) this.flag = false
    }

    return ans
      .sort((a, b) => {
        if (a.time == b.time) {
          return a.word > b.word ? 1 : -1
        }
        return b.time - a.time
      })
      .map((val) => val['word'])
      .slice(0, 3)
  }
}
```

:::

---

#### 2291. 最大股票收益

<p>给你两个下标从&nbsp;<strong>0</strong>&nbsp;开始的数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">present</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">future</code>&nbsp;，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">present[i]</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">future[i]</code>&nbsp;分别代表第&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">i</code>&nbsp;支股票现在和将来的价格。每支股票你最多购买&nbsp;<strong>一次</strong>&nbsp;，你的预算为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">budget</code>&nbsp;。</p><p>求最大的收益。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：present = [5,4,6,2,3], future = [8,5,4,3,5], budget = 10
输出：6
解释：你可以选择购买第 0,3,4 支股票获得最大收益：6 。总开销为：5 + 2 + 3 = 10 , 总收益是: 8 + 3 + 5 - 10 = 6 。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：present = [2,2,5], future = [3,4,10], budget = 6
输出：5
解释：你可以选择购买第 2 支股票获得最大收益：5 。总开销为：5 , 总收益是: 10 - 5 = 5 。
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：present = [3,3,12], future = [0,3,15], budget = 10
输出：0
解释：你无法购买唯一一支正收益股票 2 ，因此你的收益是 0 。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n == present.length == future.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= n &lt;= 1000</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= present[i], future[i] &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= budget &lt;= 1000</code></li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[]} present
 * @param {number[]} future
 * @param {number} budget
 * @return {number}
 */
var maximumProfit = function (present, future, budget) {
  let dp = Array(budget + 1).fill(0)

  for (let i = 0; i < present.length; i++) {
    for (let j = budget; j >= present[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - present[i]] + future[i] - present[i])
    }
  }
  return dp[budget]
}
```

:::

---

#### 624. 数组列表中的最大距离

<p>给定&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m</code>&nbsp;个数组，每个数组都已经按照升序排好序了。现在你需要从两个不同的数组中选择两个整数（每个数组选一个）并且计算它们的距离。两个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;之间的距离定义为它们差的绝对值&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">|a-b|</code>&nbsp;。你的任务就是去找到最大距离</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：
[[1,2,3],
 [4,5],
 [1,2,3]]
输出： 4
解释：
一种得到答案 4 的方法是从第一个数组或者第三个数组中选择 1，同时从第二个数组中选择 5 。
</pre><p>&nbsp;</p><p><strong>注意：</strong></p><ol><li>每个给定数组至少会有 1 个数字。列表中至少有两个非空数组。</li><li><strong>所有</strong>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m</code>&nbsp;个数组中的数字总数目在范围 [2, 10000] 内。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m</code>&nbsp;个数组中所有整数的范围在 [-10000, 10000] 内。</li></ol><ul><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function (arrays) {
  let [min1, min2, max1, max2] = [[Infinity], [Infinity], [-Infinity], [-Infinity]]

  for (let i = 0; i < arrays.length; i++) {
    const min = arrays[i][0]
    const max = arrays[i].at(-1)
    if (min <= min1[0]) {
      min2 = min1
      min1 = [min, i]
    } else if (min < min2[0]) {
      min2 = [min, i]
    }
    if (max >= max1[0]) {
      max2 = max1
      max1 = [max, i]
    } else if (max > max2[0]) {
      max2 = [max, i]
    }
  }
  const getmax = (a, b) => (a[1] !== b[1] ? Math.abs(a[0] - b[0]) : 0)
  return Math.max(getmax(min1, max1), getmax(min2, max1), getmax(min1, max2), getmax(min2, max2))
}
```

:::

---

#### 1066. 校园自行车分配 II

<p>在由 2D 网格表示的校园里有&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>&nbsp;位工人（<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">worker</code>）和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m</code>&nbsp;辆自行车（<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">bike</code>），<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n &lt;= m</code>。所有工人和自行车的位置都用网格上的 2D 坐标表示。</p><p>我们为每一位工人分配一辆专属自行车，使每个工人与其分配到的自行车之间的&nbsp;<strong>曼哈顿距离</strong>&nbsp;最小化。</p><p>返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">每个工人与分配到的自行车之间的曼哈顿距离的最小可能总和</code>&nbsp;。</p><p><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">p1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">p2</code>&nbsp;之间的&nbsp;<strong>曼哈顿距离</strong>&nbsp;为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Manhattan(p1, p2) = |p1.x - p2.x| + |p1.y - p2.y|</code>。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2019/03/06/1261_example_1_v2.png"></p><pre class="ql-syntax" spellcheck="false">输入：workers = [[0,0],[2,1]], bikes = [[1,2],[3,3]]
输出：6
解释：
自行车 0 分配给工人 0，自行车 1 分配给工人 1 。分配得到的曼哈顿距离都是 3, 所以输出为 6 。
</pre><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2019/03/06/1261_example_2_v2.png"></p><pre class="ql-syntax" spellcheck="false">输入：workers = [[0,0],[1,1],[2,0]], bikes = [[1,0],[2,2],[2,1]]
输出：4
解释：
先将自行车 0 分配给工人 0，再将自行车 1 分配给工人 1（或工人 2），自行车 2 给工人 2（或工人 1）。如此分配使得曼哈顿距离的总和为 4。
</pre><p><strong>示例 3:</strong></p><pre class="ql-syntax" spellcheck="false">输入：workers = [[0,0],[1,0],[2,0],[3,0],[4,0]], bikes = [[0,999],[1,999],[2,999],[3,999],[4,999]]
输出：4995
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n == workers.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m == bikes.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= n &lt;= m &lt;= 10</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">workers[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">bikes[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= workers[i][0], workers[i][1], bikes[i][0], bikes[i][1] &lt; 1000</code></li><li>所有的工人和自行车的位置都是&nbsp;<strong>不同</strong>&nbsp;的。</li><li><br></li></ul>

::: detail answer

```js
var assignBikes = function (workers, bikes) {
  const n = workers.length
  const m = bikes.length
  let prev = new Map()
  prev.set(0, 0)
  for (let i = 0; i < n; i++) {
    let current = new Map()
    for (let j = 0; j < m; j++) {
      for (let [k, v] of prev) {
        if (k & (1 << j)) continue
        let key = k | (1 << j)
        let w = workers[i],
          b = bikes[j]
        let value = Math.abs(w[0] - b[0]) + Math.abs(w[1] - b[1]) + v
        if (!current.has(key)) {
          current.set(key, value)
        } else {
          current.set(key, Math.min(current.get(key), value))
        }
      }
    }
    prev = current
  }
  let ans = Infinity
  for (let [k, v] of prev) {
    ans = Math.min(v, ans)
  }
  return ans
}
```

:::

---

#### 758. 字符串中的加粗单词

<p>给定一个关键词集合&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">words</code>&nbsp;和一个字符串&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>，将所有&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;中出现的关键词&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">words[i]</code>&nbsp;加粗。所有在标签&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">&lt;b&gt;</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">&lt;b&gt;</code>&nbsp;中的字母都会加粗。</p><p>加粗后返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;。返回的字符串需要使用尽可能少的标签，当然标签应形成有效的组合。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: words = ["ab","bc"], s = "aabcd"
输出: "a&lt;b&gt;abc&lt;/b&gt;d"
解释: 注意返回 "a&lt;b&gt;a&lt;b&gt;b&lt;/b&gt;c&lt;/b&gt;d" 会使用更多的标签，因此是错误的。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: words = ["ab","cb"], s = "aabcd"
输出: "a&lt;b&gt;ab&lt;/b&gt;cd"
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= s.length &lt;= 500</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= words.length &lt;= 50</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= words[i].length &lt;= 10</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">words[i]</code>&nbsp;由小写英文字母组成</li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {string[]} words
 * @param {string} s
 * @return {string}
 */
var boldWords = function (words, s) {
  if (!words.length) {
    return s
  }
  const intervals = []
  const findword = (word) => {
    // 查找单词匹配的位置
    if (word.length > s.length) {
      return
    }
    let start = 0
    let j = start
    while (j <= s.length - word.length) {
      let i = 0
      while (i < word.length) {
        if (word[i] === s[j]) {
          i++
          j++
        } else {
          break
        }
      }
      if (i === word.length) {
        intervals.push([j - word.length, j - 1])
      }
      j = ++start
    }
  }
  const mergeranges = () => {
    // 合并区间
    if (!intervals.length) {
      return []
    }
    const ranges = intervals.sort((a, b) => a[0] - b[0])
    const result = []
    let [left, right] = ranges[0]
    for (let i = 1; i < ranges.length; i++) {
      const [ll, rr] = ranges[i]
      if (ll > right + 1) {
        result.push([left, right])
        left = ll
        right = rr
      } else if (rr > right) {
        right = rr
      }
    }
    result.push([left, right])
    return result
  }
  for (const word of words) {
    findword(word)
  }
  if (!intervals.length) {
    return s
  }
  const list = mergeranges()
  const result = []
  let i = 0
  for (const [a, b] of list) {
    result.push(s.substring(i, a))
    result.push('<b>')
    result.push(s.substring(a, b + 1))
    result.push('</b>')
    i = b + 1
  }
  if (i < s.length) {
    result.push(s.substring(i, s.length))
  }
  return result.join('')
}
```

:::

---

#### 1101. 彼此熟识的最早时间

<p>在一个社交圈子当中，有&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>&nbsp;个人。每个人都有一个从&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code>&nbsp;到&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n - 1</code>&nbsp;的唯一编号。我们有一份日志列表&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">logs</code>，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">logs[i] = [timestampi, xi, yi]</code>&nbsp;表示&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">xi</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">yi</code>&nbsp;将在同一时间&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestampi</code>&nbsp;成为朋友。</p><p>友谊是&nbsp;<strong>相互</strong>&nbsp;的。也就是说，如果&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;是朋友，那么&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;也是朋友。同样，如果&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;是朋友，或者&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;朋友的朋友 ，那么&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">b</code>&nbsp;是熟识友。</p><p>返回圈子里所有人之间都熟识的最早时间。如果找不到最早时间，就返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-1</code>&nbsp;。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：logs = [[20190101,0,1],[20190104,3,4],[20190107,2,3],[20190211,1,5],[20190224,2,4],[20190301,0,3],[20190312,1,2],[20190322,4,5]], N = 6
输出：20190301
解释：
第一次结交发生在 timestamp = 20190101，0 和 1 成为好友，社交朋友圈如下 [0,1], [2], [3], [4], [5]。
第二次结交发生在 timestamp = 20190104，3 和 4 成为好友，社交朋友圈如下 [0,1], [2], [3,4], [5].
第三次结交发生在 timestamp = 20190107，2 和 3 成为好友，社交朋友圈如下 [0,1], [2,3,4], [5].
第四次结交发生在 timestamp = 20190211，1 和 5 成为好友，社交朋友圈如下 [0,1,5], [2,3,4].
第五次结交发生在 timestamp = 20190224，2 和 4 已经是好友了。
第六次结交发生在 timestamp = 20190301，0 和 3 成为好友，大家都互相熟识了。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]], n = 4
输出: 3
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">2 &lt;= n &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= logs.length &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">logs[i].length == 3</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= timestampi&nbsp;&lt;= 109</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= xi, yi&nbsp;&lt;= n - 1</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">xi&nbsp;!= yi</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestampi</code>&nbsp;中的所有时间戳&nbsp;<strong>均不同</strong></li><li>所有的对&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">(xi, yi)</code>&nbsp;在输入中最多出现一次</li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[][]} logs
 * @param {number} n
 * @return {number}
 */
var earliestAcq = function (logs, n) {
  class UF {
    constructor(n) {
      this.count = n
      this.parent = Array(n)
      for (let i = 0; i < n; i++) {
        this.parent[i] = i
      }
    }
    unio(p, q) {
      let pRoot = this.find(p)
      let qRoot = this.find(q)
      if (pRoot == qRoot) {
        return
      }
      this.parent[pRoot] = qRoot
      // 联通份量--
      this.count--
    }
    find(p) {
      if (this.parent[p] != p) {
        this.parent[p] = this.find(this.parent[p])
      }
      return this.parent[p]
    }
  }
  let uf = new UF(n)
  logs.sort((a, b) => a[0] - b[0])
  for (let val of logs) {
    let time = val[0]
    let p = val[1]
    let q = val[2]
    uf.unio(p, q)
    if (uf.count == 1) {
      return time
    }
  }
  return -1
}
```

:::

---

#### 1166. 设计文件系统

<p>你需要设计一个文件系统，你可以创建新的路径并将它们与不同的值关联。</p><p>路径的格式是一个或多个连接在一起的字符串，形式为：&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">/</code>&nbsp;，后面跟着一个或多个小写英文字母。例如，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">" /leetcode"</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">"/leetcode/problems"</code>&nbsp;是有效路径，而空字符串&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">""</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">"/"</code>&nbsp;不是。</p><p>实现&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">FileSystem</code>&nbsp;类:</p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">bool createPath(string path, int value)</code>&nbsp;创建一个新的&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">path</code>&nbsp;，并在可能的情况下关联一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">value</code>&nbsp;，然后返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">true</code>&nbsp;。如果路径<strong>已经存在</strong>或其父路径<strong>不存在</strong>，则返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">false</code>&nbsp;。</li><li>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">int get(string path)</code>&nbsp;返回与&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">path</code>&nbsp;关联的值，如果路径不存在则返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-1</code>&nbsp;。</li></ul><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：
["FileSystem","create","get"]
[[],["/a",1],["/a"]]
输出：
[null,true,1]
解释：
FileSystem fileSystem = new FileSystem();

fileSystem.create("/a", 1); // 返回 true
fileSystem.get("/a"); // 返回 1

</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：
["FileSystem","createPath","createPath","get","createPath","get"]
[[],["/leet",1],["/leet/code",2],["/leet/code"],["/c/d",1],["/c"]]
输出：
[null,true,true,2,false,-1]
解释：
FileSystem fileSystem = new FileSystem();

fileSystem.createPath("/leet", 1); // 返回 true
fileSystem.createPath("/leet/code", 2); // 返回 true
fileSystem.get("/leet/code"); // 返回 2
fileSystem.createPath("/c/d", 1); // 返回 false 因为父路径 "/c" 不存在。
fileSystem.get("/c"); // 返回 -1 因为该路径不存在。

</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li>对两个函数的调用次数加起来小于等于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">104</code>&nbsp;</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">2 &lt;= path.length &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= value &lt;= 109</code>&nbsp;</li><li><br></li></ul>

::: detail answer

```js
var FileSystem = function () {
  this.map = new Map()
  this.map.set('/', -1)
}

/**
 * @param {string} path
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.createPath = function (path, value) {
  const key = '/' + path.split('/').slice(1, -1).join('/')
  if (this.map.has(key) && !this.map.has(path)) {
    this.map.set(path, value)
    return true
  }
  return false
}

/**
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function (path) {
  return this.map.get(path) ?? -1
}

/**
 * Your FileSystem object will be instantiated and called as such:
 * var obj = new FileSystem()
 * var param_1 = obj.createPath(path,value)
 * var param_2 = obj.get(path)
 */
```

:::

---

#### 759. 员工空闲时间

<p>给定员工的&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">schedule</code>&nbsp;列表，表示每个员工的工作时间。</p><p>每个员工都有一个非重叠的时间段&nbsp;&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Intervals</code>&nbsp;列表，这些时间段已经排好序。</p><p>返回表示&nbsp;<em>所有&nbsp;</em>员工的&nbsp;<strong>共同，正数长度的空闲时间&nbsp;</strong>的有限时间段的列表，同样需要排好序。</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]
输出：[[3,4]]
解释：
共有 3 个员工，并且所有共同的
空间时间段是 [-inf, 1], [3, 4], [10, inf]。
我们去除所有包含 inf 的时间段，因为它们不是有限的时间段。
</pre><p>&nbsp;</p><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]
输出：[[5,6],[7,9]]
</pre><p>&nbsp;</p><p>（尽管我们用&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[x, y]</code>&nbsp;的形式表示&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Intervals</code>&nbsp;，内部的对象是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Intervals</code>&nbsp;而不是列表或数组。例如，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">schedule[0][0].start = 1, schedule[0][0].end = 2</code>，并且&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">schedule[0][0][0]</code>&nbsp;是未定义的）</p><p>而且，答案中不包含 [5, 5] ，因为长度为 0。</p><p>&nbsp;</p><p><strong>注：</strong></p><ol><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">schedule</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">schedule[i]</code>&nbsp;为长度范围在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1, 50]</code>的列表。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= schedule[i].start &lt; schedule[i].end &lt;= 10^8</code>。</li></ol><ul><li><br></li></ul>

::: detail answer

```js
function employeeFreeTime(schedule) {
  const open = 0,
    close = 1,
    events = []
  for (let employee of schedule) {
    for (let iv of employee) {
      events.push([iv.start, open])
      events.push([iv.end, close])
    }
  }
  events.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]))
  const res = []

  let prev = -1,
    bal = 0
  for (let event of events) {
    //event[0] = time, event[1] = command
    if (bal === 0 && prev >= 0) {
      res.push(new Interval(prev, event[0]))
    }
    bal += event[1] === open ? 1 : -1
    prev = event[0]
  }
  return res
}
```

:::

---

### 1197. 进击的骑士

<p>一个坐标可以从&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-infinity</code>&nbsp;延伸到&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">+infinity</code>&nbsp;的&nbsp;<strong>无限大的</strong>&nbsp;棋盘上，你的&nbsp;<strong>骑士&nbsp;</strong>驻扎在坐标为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[0, 0]</code>&nbsp;的方格里。</p><p>骑士的走法和中国象棋中的马相似，走 “日” 字：即先向左（或右）走 1 格，再向上（或下）走 2 格；或先向左（或右）走 2 格，再向上（或下）走 1 格。</p><p>每次移动，他都可以按图示八个方向之一前进。</p><p><img src="https://assets.leetcode.com/uploads/2018/10/12/knight.png"></p><p>返回&nbsp;<em>骑士前去征服坐标为&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>[x, y]</em></code><em>&nbsp;的部落所需的最小移动次数</em>&nbsp;。本题确保答案是一定存在的。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：x = 2, y = 1
输出：1
解释：[0, 0] → [2, 1]
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：x = 5, y = 5
输出：4
解释：[0, 0] → [2, 1] → [4, 2] → [3, 4] → [5, 5]
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-300 &lt;= x, y &lt;= 300</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= |x| + |y| &lt;= 300</code></li><li><br></li></ul>

::: detail answer

```js
// 双向BFS
// * 通过 visited 剪枝，因为重走已经访问过的节点，既不会发现新路径，也不会得到更短的路径
// * 二维 (x, y) 降维成一维 k
var minKnightMoves = function (x, y) {
  if (x === 0 && y === 0) return 0
  const DELTA = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1]
  ]
  // NOTICE:
  // |x| + |y| <= 300  -> |x| <= 300, |y| <= 300
  // 虽然终点 (x, y) 满足 |x| <= 300, |y| <= 300
  // 但是从终点出发可以往8个方向走，经过的点不一定满足该条件，所以要来留出空间以免哈希碰撞，即 LIMIT * 2
  // 测试用例 assert(minKnightMoves(-34, -156), 78)
  const LIMIT = 300
  const reduceDimension = (x, y) => (x + LIMIT) * LIMIT * 2 + (y + LIMIT) // 先偏移，确保大于等于0，再降维
  let queue1 = [[0, 0]],
    queue2 = [[x, y]]
  // 入队时记录为访问过
  let visited1 = new Set([reduceDimension(0, 0)])
  let visited2 = new Set([reduceDimension(x, y)])
  // 目前走了几步，每层
  let step = 1
  while (queue1.length && queue2.length) {
    if (queue1.length > queue2.length) {
      ;[queue1, queue2, visited1, visited2] = [queue2, queue1, visited2, visited1]
    }
    // 分层遍历
    let prevLevelLength = queue1.length
    while (prevLevelLength--) {
      const [prevI, prevJ] = queue1.shift()
      for (const [di, dj] of DELTA) {
        const [i, j] = [prevI + di, prevJ + dj]
        const k = reduceDimension(i, j)
        if (visited1.has(k)) continue
        if (visited2.has(k)) {
          return step
        }
        queue1.push([i, j])
        visited1.add(k)
      }
    }
    // 分层自增
    step++
  }
  return step
}
```

:::

---

#### 666. 路径总和 IV

<p>对于一棵深度小于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">5</code>&nbsp;的树，可以用一组三位十进制整数来表示。对于每个整数：</p><ul><li>百位上的数字表示这个节点的深度&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">d</code>，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= d&nbsp;&lt;= 4</code>。</li><li>十位上的数字表示这个节点在当前层所在的位置&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">P</code>，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= p&nbsp;&lt;= 8</code>。位置编号与一棵满二叉树的位置编号相同。</li><li>个位上的数字表示这个节点的权值&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">v</code>，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= v&nbsp;&lt;= 9</code>。</li></ul><p>给定一个包含三位整数的&nbsp;<strong>升序&nbsp;</strong>数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;，表示一棵深度小于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">5</code>&nbsp;的二叉树，请你返回&nbsp;<em>从根到所有叶子结点的路径之和&nbsp;</em>。</p><p><strong>保证&nbsp;</strong>给定的数组表示一个有效的连接二叉树。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/04/30/pathsum4-1-tree.jpg"></p><pre class="ql-syntax" spellcheck="false">输入: nums = [113, 215, 221]
输出: 12
解释: 列表所表示的树如上所示。
路径和 = (3 + 5) + (3 + 1) = 12.
</pre><p><strong>示例 2：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/04/30/pathsum4-2-tree.jpg"></p><pre class="ql-syntax" spellcheck="false">输入: nums = [113, 221]
输出: 4
解释: 列表所表示的树如上所示。
路径和 = (3 + 1) = 4.
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nums.length &lt;= 15</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">110 &lt;= nums[i] &lt;= 489</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;表示深度小于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">5</code>&nbsp;的有效二叉树</li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pathSum = function (nums) {
  const n = nums.length
  const nodes = Array(n + 1)
  for (const num of nums) {
    let index = Math.pow(2, Math.floor(num / 100) - 1) + (Math.floor(num / 10) % 10) - 1
    nodes[index] = num % 10
  }
  let ans = 0
  const dfs = (i, sum) => {
    if (nodes[i] === undefined) {
      return
    }
    const val = nodes[i]
    const left = i << 1,
      right = left + 1
    sum += val
    if (nodes[left] == undefined && nodes[right] === undefined) {
      ans += sum
      return
    }
    dfs(left, sum)
    dfs(right, sum)
  }
  dfs(1, 0)
  return ans
}
```

:::

---

#### 1868. 两个行程编码数组的积

<p><strong>行程编码（Run-length encoding）</strong>是一种压缩算法，能让一个含有许多段<strong>连续重复</strong>数字的整数类型数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;以一个（通常更小的）二维数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded</code>&nbsp;表示。每个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded[i] = [vali, freqi]</code>&nbsp;表示&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;中第&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">i</code>&nbsp;段重复数字，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">vali</code>&nbsp;是该段重复数字，重复了&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">freqi</code>&nbsp;次。</p><ul><li>例如，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums = [1,1,1,2,2,2,2,2]</code>&nbsp;可表示称行程编码数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded = [[1,3],[2,5]]</code>&nbsp;。对此数组的另一种读法是“三个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>&nbsp;，后面有五个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">2</code>&nbsp;”。</li></ul><p>两个行程编码数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2</code>&nbsp;的积可以按下列步骤计算：</p><ol><li>将&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2</code>&nbsp;分别<strong>扩展</strong>成完整数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums2</code>&nbsp;。</li><li>创建一个新的数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">prodNums</code>&nbsp;，长度为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums1.length</code>&nbsp;并设&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">prodNums[i] = nums1[i] * nums2[i]</code>&nbsp;。</li><li>将&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">prodNums</code>&nbsp;<strong>压缩</strong>成一个行程编码数组并返回之。</li></ol><p>给定两个<strong>行程编码</strong>数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2</code>&nbsp;，分别表示完整数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums2</code>&nbsp;。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums2</code>&nbsp;的<strong>长度相同</strong>。&nbsp;每一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1[i] = [vali, freqi]</code>&nbsp;表示&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums1</code>&nbsp;中的第&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">i</code>&nbsp;段，每一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2[j] = [valj, freqj]</code>&nbsp;表示&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums2</code>&nbsp;中的第&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">j</code>&nbsp;段。</p><p>返回<em>&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2</code>&nbsp;的<strong>乘积</strong>。</p><p><strong>注：</strong>行程编码数组需压缩成可能的<strong>最小</strong>长度。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: encoded1 = [[1,3],[2,3]], encoded2 = [[6,3],[3,3]]
输出: [[6,6]]
解释n: encoded1 扩展为 [1,1,1,2,2,2] ，encoded2 扩展为 [6,6,6,3,3,3]。
prodNums = [6,6,6,6,6,6]，压缩成行程编码数组 [[6,6]]。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: encoded1 = [[1,3],[2,1],[3,2]], encoded2 = [[2,3],[3,3]]
输出: [[2,3],[6,1],[9,2]]
解释: encoded1 扩展为 [1,1,1,2,3,3] ，encoded2 扩展为 [2,2,2,3,3,3]。
prodNums = [2,2,2,6,9,9]，压缩成行程编码数组 [[2,3],[6,1],[9,2]]。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= encoded1.length, encoded2.length &lt;= 105</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2[j].length == 2</code></li><li>对于每一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1[i]</code>，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= vali, freqi &lt;= 104</code>&nbsp;&nbsp;</li><li>对于每一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2[j]</code>，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= valj, freqj &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">encoded2</code>&nbsp;表示的完整数组长度相同。</li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[][]} encoded1
 * @param {number[][]} encoded2
 * @return {number[][]}
 */
var findRLEArray = function (encoded1, encoded2) {
  let res = []
  let point1 = 0,
    point2 = 0
  let len1 = encoded1.length,
    len2 = encoded2.length
  let cur = encoded1[0][0] * encoded2[0][0],
    qty = 0
  while (point1 < len1 && point2 < len2) {
    // 判断是否push入结果
    // 如果和之前的积结果不一样，直接push进入res
    // 如果和之前的积结果一样，增加数量，暂时不push
    let min = Math.min(encoded1[point1][1], encoded2[point2][1])
    if (encoded1[point1][0] * encoded2[point2][0] === cur) {
      qty += min
    } else {
      res.push([cur, qty])
      qty = min
      cur = encoded1[point1][0] * encoded2[point2][0]
    }
    // 判断哪个指针前进
    if (encoded1[point1][1] == encoded2[point2][1]) {
      point1++
      point2++
    } else if (encoded1[point1][1] > encoded2[point2][1]) {
      encoded1[point1][1] -= encoded2[point2][1]
      point2++
    } else {
      encoded2[point2][1] -= encoded1[point1][1]
      point1++
    }
  }
  res.push([cur, qty])
  return res
}
```

:::

---

#### 644. 子数组最大平均数 II

<p>给你一个包含&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n</code>&nbsp;个整数的数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;，和一个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;。</p><p>请你找出<strong>&nbsp;长度大于等于</strong>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;且含最大平均值的连续子数组。并输出这个最大平均值。任何计算误差小于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">10-5</code>&nbsp;的结果都将被视为正确答案。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [1,12,-5,-6,50,3], k = 4
输出：12.75000
解释：
- 当长度为 4 的时候，连续子数组平均值分别为 [0.5, 12.75, 10.5] ，其中最大平均值是 12.75 。
- 当长度为 5 的时候，连续子数组平均值分别为 [10.4, 10.8] ，其中最大平均值是 10.8 。
- 当长度为 6 的时候，连续子数组平均值分别为 [9.16667] ，其中最大平均值是 9.16667 。
当取长度为 4 的子数组（即，子数组 [12, -5, -6, 50]）的时候，可以得到最大的连续子数组平均值 12.75 ，所以返回 12.75 。
根据题目要求，无需考虑长度小于 4 的子数组。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [5], k = 1
输出：5.00000
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n == nums.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= k &lt;= n &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-104 &lt;= nums[i] &lt;= 104</code></li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let min = Math.min(...nums),
    max = Math.max(...nums)
  while (Math.abs(max - min) > 0.00001) {
    let mid = (max - min) / 2 + min
    if (check(mid)) {
      min = mid
    } else {
      max = mid
    }
  }

  return min

  function check(mid) {
    let sum = 0,
      prev = 0
    for (let i = 0; i < k; i++) {
      sum += nums[i] - mid
    }

    if (sum >= 0) {
      return true
    }

    let min_sum = 0
    for (let i = k; i < nums.length; i++) {
      sum += nums[i] - mid
      prev += nums[i - k] - mid

      min_sum = Math.min(min_sum, prev)
      if (sum - min_sum >= 0) {
        return true
      }
    }

    return false
  }
}
```

:::

---

#### 267. 回文排列 II

<p>给定一个字符串&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;，返回&nbsp;<em>其重新排列组合后可能构成的所有回文字符串，并去除重复的组合</em>&nbsp;。</p><p>你可以按&nbsp;<strong>任意顺序</strong>&nbsp;返回答案。如果&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;不能形成任何回文排列时，则返回一个空列表。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入: s = "aabb"
输出: ["abba", "baab"]
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入: s = "abc"
输出: []
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= s.length &lt;= 16</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;仅由小写英文字母组成</li><li><br></li></ul>

::: detail answer

```js
var generatePalindromes = function (s) {
  const map = new Map()
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], (map.get(s[i]) || 0) + 1)
  }
  let singleChar = ''
  for (const [c, count] of map.entries()) {
    if (count % 2 === 1) {
      if (singleChar !== '') return []
      singleChar = c
    }
  }
  if (singleChar !== '') {
    map.set(singleChar, map.get(singleChar) - 1)
  }
  // 回溯法拼接回文串
  const res = []
  function walk(path) {
    if (path.length === s.length) {
      res.push(path)
      return
    }
    for (const [c, count] of map.entries()) {
      if (count < 2) continue
      map.set(c, map.get(c) - 2)
      walk(`${c}${path}${c}`)
      map.set(c, map.get(c) + 2)
    }
  }
  walk(singleChar)
  return res
}
```

:::

---

#### 1231. 分享巧克力

<p>你有一大块巧克力，它由一些甜度不完全相同的小块组成。我们用数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">sweetness</code>&nbsp;来表示每一小块的甜度。</p><p>你打算和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">K</code>&nbsp;名朋友一起分享这块巧克力，所以你需要将切割&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">K</code>&nbsp;次才能得到&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">K+1</code>&nbsp;块，每一块都由一些&nbsp;<strong>连续&nbsp;</strong>的小块组成。</p><p>为了表现出你的慷慨，你将会吃掉&nbsp;<strong>总甜度最小</strong>&nbsp;的一块，并将其余几块分给你的朋友们。</p><p>请找出一个最佳的切割策略，使得你所分得的巧克力&nbsp;<strong>总甜度最大</strong>，并返回这个&nbsp;<strong>最大总甜度</strong>。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：sweetness = [1,2,3,4,5,6,7,8,9], K = 5
输出：6
解释：你可以把巧克力分成 [1,2,3], [4,5], [6], [7], [8], [9]。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：sweetness = [5,6,7,8,9,1,2,3,4], K = 8
输出：1
解释：只有一种办法可以把巧克力分成 9 块。
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：sweetness = [1,2,2,1,2,2,1,2,2], K = 2
输出：5
解释：你可以把巧克力分成 [1,2,2], [1,2,2], [1,2,2]。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= K &lt;&nbsp;sweetness.length &lt;= 10^4</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= sweetness[i] &lt;= 10^5</code></li><li><br></li></ul>

::: detail answer

```js
var maximizeSweetness = function (sweetness, k) {
  // 初始化左右边界。
  // left = 1 并且 right = total 甜度 / number of people.
  let numberOfPeople = k + 1
  let left = Math.min(...sweetness)
  let right = Math.floor(sweetness.reduce((x, y) => x + y) / numberOfPeople)

  while (left < right) {
    // 获取左右边界之前的中间值索引。
    // cur_sweetness 表示当前人的总甜度。
    // people_with_chocolate 表示有一块巧克力甜度大于等于 mid 的人数。
    const mid = Math.floor((left + right + 1) / 2)
    let curSweetness = 0
    let peopleWithChocolate = 0

    // 开始为当前人分配块。
    for (const s of sweetness) {
      curSweetness += s

      // 当他的总甜度不小于 mid，说明我们
      // 已经结束了对他的分配，继续处理下一个人
      if (curSweetness >= mid) {
        peopleWithChocolate += 1
        curSweetness = 0
      }
    }

    // 检查我们是否成功给了每个人一块甜度不小于 mid 的巧克力
    // 并且缩小一半搜索范围。
    if (peopleWithChocolate >= numberOfPeople) {
      left = mid
    } else {
      right = mid - 1
    }
  }

  // 一旦左右边界相遇，我们找到了目标值
  // 就是我们能够得到的最大甜度。
  return right
}
```

:::

---

#### 251. 展开二维向量

<p>请设计并实现一个能够展开二维向量的迭代器。该迭代器需要支持&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">next</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">hasNext</code>&nbsp;两种操作。</p><p>&nbsp;</p><p><strong>示例：</strong></p><pre class="ql-syntax" spellcheck="false">Vector2D iterator = new Vector2D([[1,2],[3],[4]]);

iterator.next(); // 返回 1
iterator.next(); // 返回 2
iterator.next(); // 返回 3
iterator.hasNext(); // 返回 true
iterator.hasNext(); // 返回 true
iterator.next(); // 返回 4
iterator.hasNext(); // 返回 false

</pre><p>&nbsp;</p><p><strong>注意：</strong></p><ol><li>请记得&nbsp;<strong>重置&nbsp;</strong>在 Vector2D 中声明的类变量（静态变量），因为类变量会&nbsp;<strong>在多个测试用例中保持不变</strong>，影响判题准确。请&nbsp;<a href="https://support.leetcode-cn.com/hc/kb/section/1071534/" target="_blank">查阅</a>&nbsp;这里。</li><li>你可以假定&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">next()</code>&nbsp;的调用总是合法的，即当&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">next()</code>&nbsp;被调用时，二维向量总是存在至少一个后续元素。</li></ol><ul><li><br></li></ul>

::: detail answer

```js
var Vector2D = function (vec) {
  this.nums = []
  for (const v of vec) {
    this.nums.push(...v)
  }
  this.position = 0
}

Vector2D.prototype.next = function () {
  let result = this.nums[this.position]
  this.position++
  return result
}

Vector2D.prototype.hasNext = function () {
  return this.position < this.nums.length
}
```

:::

---

#### 1522. N 叉树的直径

<p>给定一棵&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">N 叉树</code>&nbsp;的根节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">root</code>&nbsp;，计算这棵树的直径长度。</p><p>N 叉树的直径指的是树中任意两个节点间路径中<strong>&nbsp;最长&nbsp;</strong>路径的长度。这条路径可能经过根节点，也可能不经过根节点。</p><p><em>（N 叉树的输入序列以层序遍历的形式给出，每组子节点用 null 分隔）</em></p><p>&nbsp;</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/07/19/sample_2_1897.png"></p><pre class="ql-syntax" spellcheck="false">输入：root = [1,null,3,2,4,null,5,6]
输出：3
解释：直径如图中红线所示。
</pre><p><strong>示例 2：</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2020/07/19/sample_1_1897.png"></strong></p><pre class="ql-syntax" spellcheck="false">输入：root = [1,null,2,null,3,4,null,5,null,6]
输出：4
</pre><p><strong>示例 3：</strong></p><p><img src="https://assets.leetcode.com/uploads/2020/07/19/sample_3_1897.png"></p><pre class="ql-syntax" spellcheck="false">输入: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出: 7
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li>N 叉树的深度小于或等于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1000</code>&nbsp;。</li><li>节点的总个数在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[0,&nbsp;10^4]</code>&nbsp;间。</li><li><br></li></ul>

::: detail answer

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var diameter = function (root) {
  let max = 0
  const dfs = (node) => {
    if (node.children.length === 0) {
      return 1
    }
    let max1 = 0
    let max2 = 0
    for (let child of node.children) {
      const length = dfs(child)
      if (length >= max1) {
        max2 = max1
        max1 = length
      } else if (length > max2) {
        max2 = length
      }
    }
    max = Math.max(max, max1 + max2)
    return Math.max(max1, max2) + 1
  }
  dfs(root)
  return max
}
```

:::

---

#### 362. 敲击计数器

<p>设计一个敲击计数器，使它可以统计在过去&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">5</code>&nbsp;分钟内被敲击次数。（即过去&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">300</code>&nbsp;秒）</p><p>您的系统应该接受一个时间戳参数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestamp</code>&nbsp;(单位为&nbsp;<strong>秒</strong>&nbsp;)，并且您可以假定对系统的调用是按时间顺序进行的(即&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestamp</code>&nbsp;是单调递增的)。几次撞击可能同时发生。</p><p>实现&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">HitCounter</code>&nbsp;类:</p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">HitCounter()</code>&nbsp;初始化命中计数器系统。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">void hit(int timestamp)</code>&nbsp;记录在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestamp</code>&nbsp;(&nbsp;<strong>单位为秒</strong>&nbsp;)发生的一次命中。在同一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestamp</code>&nbsp;中可能会出现几个点击。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">int getHits(int timestamp)</code>&nbsp;返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestamp</code>&nbsp;在过去 5 分钟内(即过去&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">300</code>&nbsp;秒)的命中次数。</li></ul><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入：
["HitCounter", "hit", "hit", "hit", "getHits", "hit", "getHits", "getHits"]
[[], [1], [2], [3], [4], [300], [300], [301]]
输出：
[null, null, null, null, 3, null, 4, 3]

解释：
HitCounter counter = new HitCounter();
counter.hit(1);// 在时刻 1 敲击一次。
counter.hit(2);// 在时刻 2 敲击一次。
counter.hit(3);// 在时刻 3 敲击一次。
counter.getHits(4);// 在时刻 4 统计过去 5 分钟内的敲击次数, 函数返回 3 。
counter.hit(300);// 在时刻 300 敲击一次。
counter.getHits(300); // 在时刻 300 统计过去 5 分钟内的敲击次数，函数返回 4 。
counter.getHits(301); // 在时刻 301 统计过去 5 分钟内的敲击次数，函数返回 3 。

</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= timestamp &lt;= 2 * 109</code></li><li>所有对系统的调用都是按时间顺序进行的（即&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">timestamp</code>&nbsp;是单调递增的）</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">hit</code>&nbsp;and&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">getHits&nbsp;</code>最多被调用&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">300</code>&nbsp;次</li></ul><p>&nbsp;</p><ul><li><strong>进阶:</strong>&nbsp;如果每秒的敲击次数是一个很大的数字，你的计数器可以应对吗？</li></ul>

::: detail answer

```js
var HitCounter = function () {
  this.a = []
}

const f = (arr, t) => {
  let l = 0,
    r = arr.length
  while (l < r) {
    const mid = (l + r) >> 1
    if (arr[mid] > t) r = mid
    else l = mid + 1
  }
  return l
}

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.a.push(timestamp)
}

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  return f(this.a, timestamp) - f(this.a, timestamp - 300)
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
```

:::

---

#### 254. 因子的组合

<p>整数可以被看作是其因子的乘积。</p><p>例如：</p><pre class="ql-syntax" spellcheck="false">8 = 2 x 2 x 2;
  = 2 x 4.
</pre><p>请实现一个函数，该函数接收一个整数&nbsp;<em>n</em>&nbsp;并返回该整数所有的因子组合。</p><p><strong>注意：</strong></p><ol><li>你可以假定&nbsp;<em>n</em>&nbsp;为永远为正数。</li><li>因子必须大于 1 并且小于&nbsp;<em>n</em>。</li></ol><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入: 1
输出: []
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入: 37
输出: []
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入: 12
输出:
[
  [2, 6],
  [2, 2, 3],
  [3, 4]
]
</pre><p><strong>示例 4:</strong></p><pre class="ql-syntax" spellcheck="false">输入: 32
输出:
[
  [2, 16],
  [2, 2, 8],
  [2, 2, 2, 4],
  [2, 2, 2, 2, 2],
  [2, 4, 4],
  [4, 8]
]
</pre><ul><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number} n
 * @return {number[][]}
 */

var getFactors = function (n) {
  const res = []

  let flag = false
  function getFactor(list, x) {
    for (let i = 2; i <= Math.pow(x, 0.5); i++) {
      const arr = [...list]
      if (arr[arr.length - 1] > i) continue
      if (x % i === 0) {
        arr.push(i)
        arr.push(x / i)
        res.push([...arr])
        arr.pop()
        getFactor(arr, x / i)
      }
    }
  }
  getFactor([], n)
  return res
}
```

:::

---

#### 1150. 检查一个数是否在数组中占绝大多数

<p>给出一个按&nbsp;<strong>非递减</strong>&nbsp;顺序排列的数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>，和一个目标数值&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">target</code>。假如数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;中绝大多数元素的数值都等于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">target</code>，则返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">True</code>，否则请返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">False</code>。</p><p>所谓占绝大多数，是指在长度为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">N</code>&nbsp;的数组中出现必须<strong>&nbsp;超过&nbsp;</strong><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><strong>N/2</strong></code>&nbsp;<strong>次</strong>。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [2,4,5,5,5,5,5,6,6], target = 5
输出：true
解释：
数字 5 出现了 5 次，而数组的长度为 9。
所以，5 在数组中占绝大多数，因为 5 次 &gt; 9/2。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [10,100,101,101], target = 101
输出：false
解释：
数字 101 出现了 2 次，而数组的长度是 4。
所以，101 不是 数组占绝大多数的元素，因为 2 次 = 4/2。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nums.length &lt;= 1000</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nums[i] &lt;= 10^9</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= target &lt;= 10^9</code></li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var isMajorityElement = function (nums, target) {
  let l = 0,
    r = nums.length - 1
  while (l <= r) {
    let mid = Math.floor((l + r) / 2)
    if (nums[mid] >= target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return r + 1 < nums.length / 2 && nums[l + Math.floor(nums.length / 2)] == target
}
```

:::

---

#### 1650. 二叉树的最近公共祖先 III

<p>给定一棵二叉树中的两个节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">p</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">q</code>，返回它们的最近公共祖先节点（LCA）。</p><p>每个节点都包含其父节点的引用（指针）。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Node</code>&nbsp;的定义如下：</p><pre class="ql-syntax" spellcheck="false">class Node {
    public int val;
    public Node left;
    public Node right;
    public Node parent;
}
</pre><p>根据<a href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank">维基百科中对最近公共祖先节点的定义</a>：“两个节点 p 和 q 在二叉树 T 中的最近公共祖先节点是后代节点中既包括 p&nbsp;又包括&nbsp;q&nbsp;的最深节点（我们允许<strong>一个节点为自身的一个后代节点</strong>）”。一个节点 x&nbsp;的后代节点是节点&nbsp;x 到某一叶节点间的路径中的节点 y。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
给输出: 3
解释: 节点 5 和 1 的最近公共祖先是 3。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
出输出: 5
解释: 节点 5 和 4 的最近公共祖先是 5，根据定义，一个节点可以是自身的最近公共祖先。
</pre><p><strong>示例 3:</strong></p><pre class="ql-syntax" spellcheck="false">输入: root = [1,2], p = 1, q = 2
输出: 1
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li>树中节点个数的范围是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[2, 105]</code>。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-109 &lt;= Node.val &lt;= 109</code></li><li>所有的&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Node.val</code>&nbsp;都是<strong>互不相同</strong>的。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">p != q</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">p</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">q</code>&nbsp;存在于树中。</li></ul>

::: detail answer

```js
/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function (p, q) {
  let start1 = p
  let start2 = q
  while (p != q) {
    p = p.parent ? p.parent : start2
    q = q.parent ? q.parent : start1
  }
  return p
}
```

:::

---

#### 1272. 删除区间

<p>实数集合可以表示为若干不相交区间的并集，其中每个区间的形式为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[a, b)</code>（左闭右开），表示满足&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">a &lt;= x &lt; b</code>&nbsp;的所有实数&nbsp;&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">x</code>&nbsp;的集合。如果某个区间&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[a, b)</code>&nbsp;中包含实数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">x</code>&nbsp;，则称实数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">x</code>&nbsp;在集合中。</p><p>给你一个&nbsp;<strong>有序的</strong>&nbsp;不相交区间列表&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">intervals</code>&nbsp;。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">intervals</code>&nbsp;表示一个实数集合，其中每一项&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">intervals[i] = [ai, bi]</code>&nbsp;都表示一个区间&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[ai, bi)</code>&nbsp;。再给你一个要删除的区间&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">toBeRemoved</code>&nbsp;。</p><p>返回&nbsp;<em>一组实数，该实数表示</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>intervals</em></code><em>&nbsp;中&nbsp;</em><strong><em>删除</em></strong><em>&nbsp;了&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>toBeRemoved</em></code><em>&nbsp;的部分</em>&nbsp;。<em>换句话说，返回实数集合，并满足集合中的每个实数&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>x</em></code><em>&nbsp;都在&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>intervals</em></code><em>&nbsp;中，但不在&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>toBeRemoved</em></code><em>&nbsp;中。你的答案应该是一个如上所述的&nbsp;</em><strong><em>有序的</em></strong><em>&nbsp;不相连的间隔列表&nbsp;。</em></p><p>&nbsp;</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：intervals = [[0,2],[3,4],[5,7]], toBeRemoved = [1,6]
给输出：[[0,1],[6,7]]
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：intervals = [[0,5]], toBeRemoved = [2,3]
定输出：[[0,2],[3,5]]
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：intervals = [[-5,-4],[-3,-2],[1,2],[3,5],[8,9]], toBeRemoved = [-1,4]
输出：[[-5,-4],[-3,-2],[4,5],[8,9]]
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= intervals.length &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-109 &lt;= ai &lt; bi &lt;= 109</code></li></ul>

::: detail answer

```js
/**
 * @param {number[][]} intervals
 * @param {number[]} toBeRemoved
 * @return {number[][]}
 */
var removeInterval = function (intervals, toBeRemoved) {
  const [start, end] = toBeRemoved
  if (!intervals.length || start >= intervals.at(-1)[1] || end <= intervals[0][0]) {
    return intervals
  }
  const findLeft = (target) => {
    let left = 0
    let right = intervals.length - 1
    // if (target <= intervals[0][1]) return 0
    // if (target >= intervals.at(-1)) return intervals.length - 1
    while (left < right) {
      // if (left === right) return left
      // console.log(1111, left, right)
      const mid = Math.floor((left + right) / 2)
      // if (intervals[mid][0] === target) return mid
      if (target <= intervals[mid][1]) {
        if (target > (intervals[mid - 1]?.[1] ?? -Infinity)) {
          return mid
        }
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    return right
  }

  const findRight = (target) => {
    let left = 0
    let right = intervals.length - 1
    // if (target <= intervals[0][1]) return 0
    // if (target >= intervals.at(-1)) return intervals.length - 1
    while (left < right) {
      // if (left === right) return left
      // console.log(1111, left, right)
      const mid = Math.floor((left + right) / 2)
      // if (intervals[mid][0] === target) return mid
      if (target >= intervals[mid][0]) {
        if (target < (intervals[mid + 1]?.[0] ?? Infinity)) {
          return mid
        }
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
    return left
  }
  const left = findLeft(start)
  const right = findRight(end)
  if (left > right) return intervals
  let leftPart = null
  let rightPart = null
  if (intervals[left][0] < start) {
    leftPart = [intervals[left][0], start]
  }
  if (intervals[right][1] > end) {
    rightPart = [end, intervals[right][1]]
  }
  intervals.splice(left, right - left + 1)
  if (rightPart) {
    intervals.splice(left, 0, rightPart)
  }
  if (leftPart) {
    intervals.splice(left, 0, leftPart)
  }
  return intervals
}
```

:::

---

#### 339. 嵌套列表加权和

<p>给定一个嵌套的整数列表&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nestedList</code>&nbsp;，每个元素要么是整数，要么是列表。同时，列表中元素同样也可以是整数或者是另一个列表。</p><p>整数的&nbsp;<strong>深度</strong>&nbsp;是其在列表内部的嵌套层数。例如，嵌套列表&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1,[2,2],[[3],2],1]</code>&nbsp;中每个整数的值就是其深度。</p><p>请返回该列表按深度加权后所有整数的总和。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/01/14/nestedlistweightsumex1.png"></p><pre class="ql-syntax" spellcheck="false">输入：nestedList = [[1,1],2,[1,1]]
输出：10
解释：因为列表中有四个深度为 2 的 1 ，和一个深度为 1 的 2。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nestedList = [1,[4,[6]]]
实输出：27
解释：一个深度为 1 的 1，一个深度为 2 的 4，一个深度为 3 的 6。所以，1 + 4*2 + 6*3 = 27。
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nestedList = [0]
输出：0
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nestedList.length &lt;= 50</code></li><li>嵌套列表中整数的值在范围&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[-100, 100]</code>&nbsp;内</li><li>任何整数的最大&nbsp;<strong>深度</strong>&nbsp;都小于或等于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">50</code></li></ul>

::: detail answer

```js
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function (nestedList) {
  const helper = (xs, depth) => {
    return xs.isInteger()
      ? xs.getInteger() * depth
      : xs.getList().reduce((prev, cur) => prev + helper(cur, depth + 1), 0)
  }
  return nestedList.reduce((prev, cur) => prev + helper(cur, 1), 0)
}
```

:::

---

#### 439. 三元表达式解析器

<p>给定一个表示任意嵌套三元表达式的字符串&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">expression</code>&nbsp;，求值并返回其结果。</p><p>你可以总是假设给定的表达式是有效的，并且只包含数字，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'?'</code>&nbsp;，&nbsp;&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">':'</code>&nbsp;，&nbsp;&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'T'</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'F'</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'T'</code>&nbsp;为真，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'F'</code>&nbsp;为假。表达式中的所有数字都是&nbsp;<strong>一位</strong>&nbsp;数(即在&nbsp;<strong>[0,9]&nbsp;</strong>范围内)。</p><p>条件表达式从右到左分组(大多数语言中都是这样)，表达式的结果总是为数字&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'T'</code>&nbsp;或&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'F'</code>&nbsp;。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入： expression = "T?2:3"
输出： "2"
解释： 如果条件为真，结果为 2；否则，结果为 3。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入： expression = "F?1:T?4:5"
输出： "4"
解释： 条件表达式自右向左结合。使用括号的话，相当于：
 "(F ? 1 : (T ? 4 : 5))" --&gt; "(F ? 1 : 4)" --&gt; "4"
or "(F ? 1 : (T ? 4 : 5))" --&gt; "(T ? 4 : 5)" --&gt; "4"
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入： expression = "T?T?F:5:3"
输出： "F"
解释： 条件表达式自右向左结合。使用括号的话，相当于：
"(T ? (T ? F : 5) : 3)" --&gt; "(T ? F : 3)" --&gt; "F"
"(T ? (T ? F : 5) : 3)" --&gt; "(T ? F : 5)" --&gt; "F"
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">5 &lt;= expression.length &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">expression</code>&nbsp;由数字,&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'T'</code>,&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'F'</code>,&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'?'</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">':'</code>&nbsp;组成</li><li><strong>保证&nbsp;</strong>了表达式是一个有效的三元表达式，并且每个数字都是&nbsp;<strong>一位数</strong>&nbsp;</li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  const stack = []
  for (let i = expression.length - 1; i >= 0; i--) {
    stack.push(expression[i])
    while (stack.at(-2) === '?') {
      // 注意要逆序入栈，遇到问号就去求解并且将结果继续入栈
      const condition = stack.pop()
      stack.pop()
      const left = stack.pop()
      stack.pop()
      const right = stack.pop()
      stack.push(condition === 'T' ? left : right)
    }
  }
  return stack[0]
}
```

:::

---

#### 490. 迷宫

<p><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">由空地（用&nbsp;</span><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;表示）和墙（用&nbsp;</span><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;表示）组成的迷宫&nbsp;</span><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">maze</code><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;中有一个球。球可以途经空地向</span><strong style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">&nbsp;上、下、左、右&nbsp;</strong><span style="background-color: rgb(240, 240, 240); font-size: 14px; color: rgb(38, 38, 38);">四个方向滚动，且在遇到墙壁前不会停止滚动。当球停下时，可以选择向下一个方向滚动。</span></p><p>给你一个大小为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m x n</code>&nbsp;的迷宫&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">maze</code>&nbsp;，以及球的初始位置&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">start</code>&nbsp;和目的地&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">destination</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">start = [startrow, startcol]</code>&nbsp;且&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">destination = [destinationrow, destinationcol]</code>&nbsp;。请你判断球能否在目的地停下：如果可以，返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">true</code>&nbsp;；否则，返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">false</code>&nbsp;。</p><p>你可以&nbsp;<strong>假定迷宫的边缘都是墙壁</strong>（参考示例）。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [4,4]
给输出：true
解释：一种可能的路径是 : 左 -&gt; 下 -&gt; 左 -&gt; 下 -&gt; 右 -&gt; 下 -&gt; 右。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：maze = [[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]], start = [0,4], destination = [3,2]
定输出：false
解释：不存在能够使球停在目的地的路径。注意，球可以经过目的地，但无法在那里停驻。
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：maze = [[0,0,0,0,0],[1,1,0,0,1],[0,0,0,0,0],[0,1,0,0,1],[0,1,0,0,0]], start = [4,3], destination = [0,1]
输出：false
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">m == maze.length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">n == maze[i].length</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= m, n &lt;= 100</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">maze[i][j]</code>&nbsp;is&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code>&nbsp;or&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>.</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">start.length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">destination.length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= startrow, destinationrow &lt;= m</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= startcol, destinationcol &lt;= n</code></li><li>球和目的地都在空地上，且初始时它们不在同一位置</li><li>迷宫&nbsp;<strong>至少包括 2 块空地</strong></li></ul>

::: detail answer

```js
var hasPath = function (maze, start, destination) {
  const row = maze.length
  const col = maze[0].length
  const set = new Set() //记录从上一格走到下一格的路径
  function dfs(i, j, lastI, lastJ) {
    if (set.has(lastI + '-' + lastJ + '-' + i + '-' + j)) return false //不允许重复的走 从上一格到下一格;
    const [nextI, nextJ] = [i + (i - lastI), j + (j - lastJ)] //确定沿着同一个方向走到下一个格子
    set.add(lastI + '-' + lastJ + '-' + i + '-' + j)

    if (nextI < 0 || nextJ < 0 || nextI >= row || nextJ >= col || maze[nextI][nextJ] === 1) {
      //如果下一格出界或撞墙
      if (i === destination[0] && j === destination[1]) return true //如果这次格子刚好是目标格子 直接true 结束递归;

      let flag = false
      //否则如果垂直方向上有空格 就沿着垂直方向继续行走;
      if (nextI === i) {
        //nextI === i 说明上一步不是上下方向,这次就走上下方向
        if (i + 1 < row && maze[i + 1][j] === 0) flag ||= dfs(i + 1, j, i, j)
        if (i - 1 >= 0 && maze[i - 1][j] === 0) flag ||= dfs(i - 1, j, i, j)
      } else {
        //同理
        if (maze[i][j + 1] === 0) flag ||= dfs(i, j + 1, i, j)
        if (maze[i][j - 1] === 0) flag ||= dfs(i, j - 1, i, j)
      }
      return flag
    }
    return dfs(nextI, nextJ, i, j) //如果下一格没有出界或撞墙, 就继续沿同一个方向走
  }
  //初始分别从4个方向走
  return (
    dfs(start[0], start[1], start[0] - 1, start[1]) ||
    dfs(start[0], start[1], start[0] + 1, start[1]) ||
    dfs(start[0], start[1], start[0], start[1] - 1) ||
    dfs(start[0], start[1], start[0], start[1] + 1)
  )
}
```

:::

---

#### 1055. 形成字符串的最短路径

<p>对于任何字符串，我们可以通过删除其中一些字符（也可能不删除）来构造该字符串的&nbsp;<strong>子序列</strong>&nbsp;。(例如，<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">“ace”</code>&nbsp;是&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">“abcde”</code>&nbsp;的子序列，而&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">“aec”</code>&nbsp;不是)。</p><p>给定源字符串&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">source</code>&nbsp;和目标字符串&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">target</code>，返回&nbsp;<em>源字符串&nbsp;</em><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);"><em>source</em></code><em>&nbsp;中能通过串联形成目标字符串&nbsp;</em><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">target</code>&nbsp;<em>的&nbsp;</em><strong><em>子序列</em></strong><em>&nbsp;的最小数量&nbsp;</em>。如果无法通过串联源字符串中的子序列来构造目标字符串，则返回&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">-1</code>。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：source = "abc", target = "abcbc"
输出：2
解释：目标字符串 "abcbc" 可以由 "abc" 和 "bc" 形成，它们都是源字符串 "abc" 的子序列。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：source = "abc", target = "acdbc"
输出：-1
解释：由于目标字符串中包含字符 "d"，所以无法由源字符串的子序列构建目标字符串。
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：source = "xyz", target = "xzyxz"
输出：3
解释：目标字符串可以按如下方式构建： "xz" + "y" + "xz"。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">1 &lt;= source.length, target.length &lt;= 1000</code></li><li><code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">source</code>&nbsp;和&nbsp;<code style="background-color: rgba(0, 10, 32, 0.03); color: rgba(38, 38, 38, 0.75);">target</code>&nbsp;仅包含英文小写字母。</li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {string} source
 * @param {string} target
 * @return {number}
 */
var shortestWay = function (source, target) {
  let i = 0
  let j = 0
  let count = 0
  while (true) {
    let jj = j
    while (i < source.length && j < target.length) {
      if (source[i] === target[j]) {
        i++
        j++
      } else {
        i++
      }
    }
    if (j === target.length) {
      count++
      return count
    }
    if (j === jj) {
      return -1
    }
    count++
    i = 0
  }
  return count
}
```

:::

---

#### 1100. 长度为 K 的无重复字符子串

<p>给你一个字符串&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">S</code>，找出所有长度为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">K</code>&nbsp;且不含重复字符的子串，请你返回全部满足要求的子串的&nbsp;<strong>数目</strong>。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：S = "havefunonleetcode", K = 5
输出：6
解释：
这里有 6 个满足题意的子串，分别是：'havef','avefu','vefun','efuno','etcod','tcode'。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：S = "home", K = 5
输出：0
解释：
注意：K 可能会大于 S 的长度。在这种情况下，就无法找到任何长度为 K 的子串。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ol><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= S.length &lt;= 10^4</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">S</code>&nbsp;中的所有字符均为小写英文字母</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= K &lt;= 10^4</code></li></ol><ul><li><br></li></ul>

::: detail answer

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var numKLenSubstrNoRepeats = function (s, k) {
  if (k > s.length || k > 26) {
    return 0
  }
  if (k === 1) {
    return s.length
  }
  const map = {}
  let count = 0

  let hassame = false
  for (let i = 0; i < k; i++) {
    const c = s[i]
    if (c in map) {
      hassame = true
      map[c]++
    } else {
      map[c] = 1
    }
  }
  if (!hassame) {
    count++
  }
  let left = 0
  let right = k
  while (right < s.length) {
    map[s[left]]--
    if (map[s[left]] === 0) {
      delete map[s[left]]
    }
    if (!(s[right] in map)) {
      map[s[right]] = 1
    } else {
      map[s[right]]++
    }
    if (Object.values(map).every((v) => v === 1)) {
      count++
    }
    left++
    right++
  }
  return count
}
```

:::

---

#### 314. 二叉树的垂直遍历

<p>给你一个二叉树的根结点，返回其结点按&nbsp;<strong>垂直方向</strong>（从上到下，逐列）遍历的结果。</p><p>如果两个结点在同一行和列，那么顺序则为&nbsp;<strong>从左到右</strong>。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：root = [3,9,20,null,null,15,7]
给输出：[[9],[3,15],[20],[7]]
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：root = [3,9,8,4,0,1,7]
你输出：[[4],[9],[3,0,1],[8],[7]]
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：root = [3,9,8,4,0,1,7,null,null,null,2,5]
一输出：[[4],[9,5],[3,0,1],[8,2],[7]]
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li>树中结点的数目在范围&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[0, 100]</code>&nbsp;内</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-100 &lt;= Node.val &lt;= 100</code></li></ul>

::: detail anwser

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function (root) {
  const result = []
  const nodes = new Map()
  let minx = 0
  const dfs = (node, x, y) => {
    if (!node) {
      return
    }
    minx = Math.min(x, minx)
    nodes.set(node, [x, y])
    dfs(node.left, x - 1, y + 1)
    dfs(node.right, x + 1, y + 1)
  }
  dfs(root, 0, 0)
  for (const [node, [x, y]] of nodes) {
    const index = x - minx
    result[index] ??= {}
    result[index][y] ??= []
    result[index][y].push(node.val)
  }
  return result.map((map) => {
    return Object.values(map).flat()
  })
}
```

:::

---

#### 487. 最大连续1的个数 II

<p>给定一个二进制数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;，如果最多可以翻转一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code>&nbsp;，则返回数组中连续&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>&nbsp;的最大个数。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [1,0,1,1,0]
输出：4
解释：翻转第一个 0 可以得到最长的连续 1。
&nbsp;    当翻转以后，最大连续 1 的个数为 4。
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [1,0,1,1,0,1]
输出：4
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nums.length &lt;= 105</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums[i]</code>&nbsp;不是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0</code>&nbsp;就是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>.</li></ul><p>&nbsp;</p><ul><li><strong>进阶：</strong>如果输入的数字是作为<strong>&nbsp;无限流&nbsp;</strong>逐个输入如何处理？换句话说，内存不能存储下所有从流中输入的数字。您可以有效地解决吗？</li></ul>

::: detail answer

```js
/**
 * @param {number[]} nums
 * @return {number}
 滑动窗口，不过只允许里面最多有一个0
 */
var findMaxConsecutiveOnes = function (nums) {
  let left = 0
  let right = 0
  let max = 1
  let zeroindex = -1
  while (left <= right && right < nums.length) {
    if (nums[right] === 1) {
      max = Math.max(max, right - left + 1)
      right++
    } else if (zeroindex === -1) {
      zeroindex = right
      max = Math.max(max, right - left + 1)
      right++
    } else {
      left = zeroindex + 1
      zeroindex = right
      right++
    }
  }
  return max
}
```

:::

---

#### 1644. 二叉树的最近公共祖先 II

<p>给定一棵二叉树的根节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>root</span></code>，返回给定节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>p</span></code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>q</span></code>&nbsp;的最近公共祖先（LCA）节点。如果&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>p</span></code>&nbsp;或&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>q</span></code>&nbsp;之一<strong>&nbsp;不存在</strong>&nbsp;于该二叉树中，返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>null</span></code>。树中的每个节点值都是互不相同的。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p>根据<a href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank"><span>维基百科中对最近公共祖先节点的定义</span></a>：“两个节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>p</span></code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>q</span></code>&nbsp;在二叉树&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>T</span></code>&nbsp;中的最近公共祖先节点是<strong>&nbsp;后代节点&nbsp;</strong>中既包括&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>p</span></code>&nbsp;又包括&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>q</span></code>&nbsp;的最深节点（我们允许<strong>&nbsp;一个节点为自身的一个后代节点&nbsp;</strong>）”。一个节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>x</span></code>&nbsp;的<strong>&nbsp;后代节点&nbsp;</strong>是节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>x</span></code>&nbsp;到某一叶节点间的路径中的节点&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>y</span></code>。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p><strong>示例 1:</strong><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><pre class="ql-syntax" spellcheck="false">输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1</pre><pre class="ql-syntax" spellcheck="false">给输出： 3</pre><pre class="ql-syntax" spellcheck="false">解释： 节点 5 和 1 的共同祖先节点是 3。</pre><p><strong>示例 2:</strong><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p><img src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png"><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><pre class="ql-syntax" spellcheck="false">输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4</pre><pre class="ql-syntax" spellcheck="false">输出： 5</pre><pre class="ql-syntax" spellcheck="false">解释： 节点 5 和 4 的共同祖先节点是 5。根据共同祖先节点的定义，一个节点可以是自身的后代节点。</pre><p><strong>示例 3:</strong><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p><img src="https://assets.leetcode.com/uploads/2018/12/14/binarytree.png"><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><pre class="ql-syntax" spellcheck="false">输入： root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 10</pre><pre class="ql-syntax" spellcheck="false">输出： null</pre><pre class="ql-syntax" spellcheck="false">解释： 节点 10 不存在于树中，所以返回 null。</pre><p>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p><strong>提示:</strong><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><ul><li>树中节点个数的范围是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>[1, 104]</span></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></li></ul><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>-109 &lt;= Node.val &lt;= 109</span></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></li></ul><ul><li>所有节点的值&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>Node.val</span></code>&nbsp;<strong>互不相同</strong><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></li></ul><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><span>p != q</span></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></li></ul><p>&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p>

::: detail answer

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let ans = null
  dfs(root, p, q)
  return ans

  function dfs(root, p, q) {
    if (!root) return false
    const flag1 = dfs(root.left, p, q)
    const flag2 = dfs(root.right, p, q)
    const flag3 = root === p || root === q
    if (flag1 + flag2 + flag3 === 2 && ans === null) ans = root
    return flag1 || flag2 || flag3
  }
}
```

:::

---

#### 1060. 有序数组中的缺失元素

<p>现有一个按&nbsp;<strong>升序</strong>&nbsp;排列的整数数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;，其中每个数字都&nbsp;<strong>互不相同</strong>&nbsp;。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p>给你一个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;，请你找出并返回从数组最左边开始的第&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;个缺失数字。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [4,7,9,10], k = 1
输出：5
解释：第一个缺失数字为 5 。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [4,7,9,10], k = 3
输出：8
解释：缺失数字有 [5,6,8,...]，因此第三个缺失数字为 8 。
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：nums = [1,2,4], k = 3
输出：6
解释：缺失数字有 [3,5,6,7,...]，因此第三个缺失数字为 6 。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nums.length &lt;= 5 * 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= nums[i] &lt;= 107</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">nums</code>&nbsp;按&nbsp;<strong>升序</strong>&nbsp;排列，其中所有元素&nbsp;<strong>互不相同</strong>&nbsp;。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= k &lt;= 108</code></li></ul><p>&nbsp;</p><p><strong>进阶：</strong>你可以设计一个对数时间复杂度（即，<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">O(log(n))</code>）的解决方案吗？<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p>

::: detail answer

```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 二分查找，但是二分查找的是当前缺失的数字的数目
 */
var missingElement = function (nums, k) {
  let left = 0
  let right = nums.length - 1

  const getmisscount = (index) => {
    return nums[index] - nums[0] - index
  }
  let target = null // 表示缺失的数字就在nums[target]和nums[target+1]之间

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    const misscount = getmisscount(mid)
    if (misscount >= k) {
      // 注意等于时，这个例子 [6,7,10,11,19,21,23] k=2
      right = mid - 1
    } else {
      target = mid
      left = mid + 1
    }
  }

  return nums[target] + (k - getmisscount(target))
}
```

:::

---

#### 426. 将二叉搜索树转化为排序的双向链表

<p>将一个&nbsp;<strong>二叉搜索树</strong>&nbsp;就地转化为一个&nbsp;<strong>已排序的双向循环链表</strong>&nbsp;。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p>对于双向循环列表，你可以将左右孩子指针作为双向循环链表的前驱和后继指针，第一个节点的前驱是最后一个节点，最后一个节点的后继是第一个节点。</p><p>特别地，我们希望可以&nbsp;<strong>就地</strong>&nbsp;完成转换操作。当转化完成以后，树中节点的左指针需要指向前驱，树中节点的右指针需要指向后继。还需要返回链表中最小元素的指针。</p><p>&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：root = [4,2,5,1,3]

现输出：[1,2,3,4,5]

解释：下图显示了转化后的二叉搜索树，实线表示后继关系，虚线表示前驱关系。

</pre><p>有<strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：root = [2,1,3]
输出：[1,2,3]
</pre><p><strong>示例 3：</strong></p><pre class="ql-syntax" spellcheck="false">输入：root = []
输出：[]
解释：输入是空树，所以输出也是空链表。
</pre><p><strong>示例 4：</strong></p><pre class="ql-syntax" spellcheck="false">输入：root = [1]
输出：[1]
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-1000 &lt;= Node.val &lt;= 1000</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Node.left.val &lt; Node.val &lt; Node.right.val</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Node.val</code>&nbsp;的所有值都是独一无二的</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= Number of Nodes &lt;= 2000</code></li></ul>

::: detail answer

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maximumAverageSubtree = function (root) {
  let maxmean = 0
  const getmean = (node) => {
    // console.log(node.val, max)
    if (!node) {
      return [0, 0]
    }
    const [leftsum, leftcount] = getmean(node.left)
    const [rightsum, rightcount] = getmean(node.right)
    const sum = leftsum + rightsum + node.val
    const count = leftcount + rightcount + 1
    maxmean = Math.max(maxmean, sum / count)
    return [sum, count]
  }
  getmean(root)
  return maxmean
}
```

:::

---

#### 428. 序列化和反序列化 N 叉树

<p>序列化是指将一个数据结构转化为位序列的过程，因此可以将其存储在文件中或内存缓冲区中，以便稍后在相同或不同的计算机环境中恢复结构。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p>设计一个序列化和反序列化 N 叉树的算法。一个 N 叉树是指每个节点都有不超过 N 个孩子节点的有根树。序列化 / 反序列化算法的算法实现没有限制。你只需要保证 N 叉树可以被序列化为一个字符串并且该字符串可以被反序列化成原树结构即可。</p><p>例如，你需要序列化下面的&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">3-叉</code>&nbsp;树。</p><p>&nbsp;</p><p><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png"></p><p>&nbsp;</p><p>为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1 [3[5 6] 2 4]]</code>。你不需要以这种形式完成，你可以自己创造和实现不同的方法。</p><p>或者，您可以遵循 LeetCode 的层序遍历序列化格式，其中每组孩子节点由空值分隔。</p><p><img src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png"></p><p>例如，上面的树可以序列化为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</code></p><p>你不一定要遵循以上建议的格式，有很多不同的格式，所以请发挥创造力，想出不同的方法来完成本题。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
输出: [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: root = [1,null,3,2,4,null,5,6]
输出: [1,null,3,2,4,null,5,6]
</pre><p><strong>示例 3:</strong></p><pre class="ql-syntax" spellcheck="false">输入: root = []
输出: []
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li>树中节点数目的范围是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[0,&nbsp;104]</code>.</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= Node.val &lt;= 104</code></li><li>N 叉树的高度小于等于&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1000</code></li><li>不要使用类成员 / 全局变量 / 静态变量来存储状态。你的序列化和反序列化算法应是无状态的。</li><li><br></li></ul>

::: detail answer

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

class Codec {
  constructor() {}

  /**
   * @param {Node|null} root
   * @return {string}
   */
  // Encodes a tree to a single string.
  serialize = function (root) {
    const encode = (node) => {
      if (!node) {
        return ''
      }
      let str = node.val + ''
      if (!node.children.length) {
        return str
      }
      const children = []
      for (let i = 0; i < node.children.length; i++) {
        children.push(encode(node.children[i]))
      }
      return `${str}(${children})`
    }
    return encode(root)
  }

  /**
   * @param {string} data
   * @return {Node|null}
   */
  // Decodes your encoded data to tree.
  deserialize = function (data) {
    if (!data) {
      return null
    }
    const parentmap = {}
    const stack = []
    for (let i = 0; i < data.length; i++) {
      if (data[i] === '(') {
        stack.push(i)
      } else if (data[i] === ')') {
        parentmap[stack.pop()] = i
      }
    }
    const findcomma = (start, end) => {
      let commaindexlist = [] // 表示分割每个子节点的逗号的位置
      while (start < end) {
        let leftparentindex
        let commaindex
        for (let i = start; i < end; i++) {
          if (commaindex || leftparentindex) {
            break
          }
          if (data[i] === '(' && !leftparentindex) {
            leftparentindex = i
          }
          if (data[i] === ',' && !commaindex) {
            commaindex = i
          }
        }
        if (leftparentindex) {
          commaindex = parentmap[leftparentindex] + 1
        }
        if (commaindex && commaindex !== end) {
          // 我们只统计逗号的位置
          commaindexlist.push(commaindex)
          start = commaindex + 1
        } else {
          break
        }
      }
      return commaindexlist
    }
    const decode = (start, end) => {
      // 下面按照 1(2(3,4,5),6(7),8,9(10,11)) 举例
      let num = ''
      let leftparentindex // 表示1后面那个左括号的位置
      for (let i = start; i <= end; i++) {
        if (data[i] !== '(') {
          num += data[i]
        } else {
          leftparentindex = i
          break
        }
      }
      const node = new Node(num - 0, [])
      if (!leftparentindex) {
        // 表示当前区间只有数字，也就是叶子节点
        return node
      }
      // 表示2后面那个左括号的位置，这个左括号可能是不存在的，如果存在，那么逗号的位置就在其对应的右括号的下一个
      let firstleftparentindex
      const commaindexklist = findcomma(leftparentindex + 1, end)
      const children = []
      let left = leftparentindex + 1
      for (const comma of commaindexklist) {
        children.push(decode(left, comma - 1))
        left = comma + 1
      }
      children.push(decode(left, end - 1))
      node.children = children
      return node
    }
    return decode(0, data.length - 1)
  }
}

// Your Codec object will be instantiated and called as such:
// Codec codec = new Codec();
// codec.deserialize(codec.serialize(root));
```

:::

---

#### 549. 二叉树最长连续序列 II

<p>给定二叉树的根&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">root</code>&nbsp;，返回树中<strong>最长连续路径</strong>的长度。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p><strong>连续路径</strong>是路径中相邻节点的值相差&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1</code>&nbsp;的路径。此路径可以是增加或减少。</p><ul><li>例如，&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1,2,3,4]</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[4,3,2,1]</code>&nbsp;都被认为有效，但路径&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1,2,4,3]</code>&nbsp;无效。</li></ul><p>另一方面，路径可以是子-父-子顺序，不一定是父子顺序。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/03/14/consec2-1-tree.jpg"></p><pre class="ql-syntax" spellcheck="false">输入: root = [1,2,3]
输出: 2
解释: 最长的连续路径是 [1, 2] 或者 [2, 1]。
</pre><p>&nbsp;</p><p><strong>示例 2:</strong></p><p><img src="https://assets.leetcode.com/uploads/2021/03/14/consec2-2-tree.jpg"></p><pre class="ql-syntax" spellcheck="false">输入: root = [2,1,3]
输出: 3
解释: 最长的连续路径是 [1, 2, 3] 或者 [3, 2, 1]。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li>树上所有节点的值都在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">[1, 3 * 104]</code>&nbsp;范围内。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-3 * 104&nbsp;&lt;= Node.val &lt;= 3 * 104</code></li><li><br></li></ul>

::: detail answer

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function (root) {
  let maxlen = 1
  const getmaxlen = (node) => {
    let leftincmaxlen = 1
    let leftdecmaxlen = 1
    let rightincmaxlen = 1
    let rightdecmaxlen = 1
    if (node.left) {
      const [leftinclen, leftdeclen] = getmaxlen(node.left)
      if (node.val + 1 === node.left.val) {
        leftincmaxlen = Math.max(leftincmaxlen, leftinclen + 1)
      }
      if (node.val - 1 === node.left.val) {
        leftdecmaxlen = Math.max(leftdecmaxlen, leftdeclen + 1)
      }
    }
    if (node.right) {
      const [rightinclen, rightdeclen] = getmaxlen(node.right)

      if (node.val + 1 === node.right.val) {
        rightincmaxlen = Math.max(rightincmaxlen, rightinclen + 1)
      }
      if (node.val - 1 === node.right.val) {
        rightdecmaxlen = Math.max(rightdecmaxlen, rightdeclen + 1)
      }
    }
    maxlen = Math.max(
      maxlen,
      leftincmaxlen - 1 + rightdecmaxlen,
      leftdecmaxlen - 1 + rightincmaxlen
    )
    return [Math.max(leftincmaxlen, rightincmaxlen), Math.max(leftdecmaxlen, rightdecmaxlen)]
  }
  getmaxlen(root)
  return maxlen
}
```

:::

---

#### 651. 四个键的键盘

<p>假设你有一个特殊的键盘包含下面的按键：<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">A</code>：在屏幕上打印一个&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">'A'</code>。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Ctrl-A</code>：选中整个屏幕。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Ctrl-C</code>：复制选中区域到缓冲区。</li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">Ctrl-V</code>：将缓冲区内容输出到上次输入的结束位置，并显示在屏幕上。</li></ul><p>现在，<em>你可以&nbsp;</em><strong><em>最多</em></strong><em>&nbsp;按键&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>n</em></code><em>&nbsp;次（使用上述四种按键），返回屏幕上最多可以显示&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>'A'</em></code><em>&nbsp;的个数&nbsp;</em>。</p><p>&nbsp;</p><p><strong>示例 1:</strong></p><pre class="ql-syntax" spellcheck="false">输入: n = 3
输出: 3
解释:
我们最多可以在屏幕上显示三个'A'通过如下顺序按键：
A, A, A
</pre><p><strong>示例 2:</strong></p><pre class="ql-syntax" spellcheck="false">输入: n = 7
输出: 9
解释:
我们最多可以在屏幕上显示九个'A'通过如下顺序按键：
A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V
</pre><p>&nbsp;</p><p><strong>提示:</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= n &lt;= 50</code></li><li><br></li></ul>

::: detail anwser

```js
/**
 * @param {number} n
 * @return {number}
 * 动态规划
 可以这样考虑，最后一次操作肯定是按下A或者粘贴操作
 如果是按下A，那么就是上一次的数量+1；
 但是只能前几次依靠按下A来增加数量，后面肯定是一直复制粘贴才是最快增长的
 考虑最后一次操作是V，那么再前面有可能是A+C，或者是A+C+V
 即：ACV，ACVV，ACVVV，ACVVVV等
 实际我们只需要比较前三种情况即可，因为AC占用两次机会，一直粘贴较早的结果那是累加，但是一直ACV的话那是2的指数增长
 显然我们要追求指数增长
 */
var maxA = function (n) {
  const dp = [1, 2, 3, 4, 5]
  for (let i = 5; i < n; i++) {
    dp[i] = Math.max(
      dp[i - 3] * 2, // ACV
      dp[i - 4] * 3, // ACVV
      dp[i - 5] * 4 // ACVVV
    )
  }
  return dp[n - 1]
}
```

:::

---

#### 340. 至多包含 K 个不同字符的最长子串

<p>给你一个字符串&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">s</code>&nbsp;和一个整数&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">k</code>&nbsp;，请你找出&nbsp;<strong>至多&nbsp;</strong>包含<em>&nbsp;</em><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"><em>k</em></code>&nbsp;个&nbsp;<strong>不同</strong>&nbsp;字符的最长<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p>子串</p><p>，并返回该子串的长度。&nbsp;</p><p><strong>示例 1：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "eceba", k = 2
输出：3
解释：满足题目要求的子串是 "ece" ，长度为 3 。
</pre><p><strong>示例 2：</strong></p><pre class="ql-syntax" spellcheck="false">输入：s = "aa", k = 1
输出：2
解释：满足题目要求的子串是 "aa" ，长度为 2 。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= s.length &lt;= 5 * 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">0 &lt;= k &lt;= 50</code></li><li><br></li></ul>

::: detail answer

```js
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 滑动窗口
 用哈希表来记录窗口内不同字符以及对应的数量
 */
var lengthOfLongestSubstringKDistinct = function (s, k) {
  let left = 0
  let right = 0
  let max = 0
  if (k === 0) return 0
  const map = new Map()
  while (left <= right && right < s.length) {
    if (map.size <= k) {
      // 窗口合法，右指针继续移动
      const r = right++
      map.set(s[r], (map.get(s[r]) ?? 0) + 1)
    } else {
      // 不合法，窗口收缩
      const l = left++
      map.set(s[l], (map.get(s[l]) ?? 0) - 1)
      if (!map.get(s[l])) {
        // 没有s[l]这个字符了，从哈希表删除
        map.delete(s[l])
      }
    }
    if (map.size <= k) {
      // 如果窗口合法，记录可能的最大值
      max = Math.max(max, right - left)
    }
  }
  return max
}
```

:::

---

#### 2548. 填满背包的最大价格

<p>给定一个二维整数数组&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">items</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">items[i] = [pricei, weighti]</code>&nbsp;表示第&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">i</code>&nbsp;个物品的价格和重量。<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);"></code></p><p>还给定一个&nbsp;<strong>正</strong>&nbsp;整数容量&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">capacity</code>&nbsp;。</p><p>每个物品可以分成两个部分，比率为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">part1</code>&nbsp;和&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">part2</code>&nbsp;，其中&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">part1 + part2 == 1</code>&nbsp;。</p><ul><li>第一个物品的重量是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">weighti * part1</code>&nbsp;，价格是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">pricei * part1</code>&nbsp;。</li><li>同样，第二个物品的重量是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">weighti * part2</code>&nbsp;，价格是&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">pricei * part2</code>&nbsp;。</li></ul><p>使用给定的物品，返回填满容量为&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">capacity</code>&nbsp;的背包所需的&nbsp;<strong>最大总价格</strong>&nbsp;。如果无法填满背包，则返回&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">-1</code>&nbsp;。与实际答案的差距在&nbsp;<code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">10-5</code>&nbsp;以内的&nbsp;<strong>实际答案</strong>&nbsp;将被视为接受。</p><p>&nbsp;</p><p><strong>示例 1 ：</strong></p><pre class="ql-syntax" spellcheck="false">输入：items = [[50,1],[10,8]], capacity = 5
输出：55.00000
解释：
我们将第二个物品分成两个部分，part1 = 0.5，part2 = 0.5。
第一个物品的价格和重量分别为 5 和 4 。同样地，第二个物品的价格和重量也是 5 和 4 。
经过操作后，数组 items 变为 [[50,1],[5,4],[5,4]] 。
为了填满容量为 5 的背包，我们取价格为 50 的第一个元素和价格为 5 的第二个元素。
可以证明，55.0 是我们可以达到的最大总价值。
</pre><p><strong>示例 2 ：</strong></p><pre class="ql-syntax" spellcheck="false">输入：items = [[100,30]], capacity = 50
输出：-1.00000
解释：无法用给定的物品装满背包。
</pre><p>&nbsp;</p><p><strong>提示：</strong></p><ul><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= items.length &lt;= 105</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">items[i].length == 2</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= pricei, weighti &lt;= 104</code></li><li><code style="color: rgba(38, 38, 38, 0.75); background-color: rgba(0, 10, 32, 0.03);">1 &lt;= capacity &lt;= 109</code></li><li><br></li></ul>

::: detail answer

```js
const maxPrice = (items, capacity) => {
  items.sort((a, b) => b[1] / b[0] - a[1] / a[0])
  let price = 0
  for (let i = 0; i < items.length; i++) {
    const [p, c] = items[i]
    if (c >= capacity) {
      return price + (p * capacity) / c
    }
    price += p
    capacity -= c
  }
  return -1
}
```

:::

---
