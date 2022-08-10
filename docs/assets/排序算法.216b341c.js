const n=`<h2>\u5FEB\u6392\uFF0C\u5806\u6392\uFF0C\u5F52\u5E76\u6392\u5E8F</h2>
<blockquote>
<p>\u5173\u4E8E\u7B97\u6CD5\u7684js\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003<a href="https://github.com/trekhleb/javascript-algorithms/blob/master/README.zh-CN.md" target="_blank" rel="noopener noreferrer">javascript-algorithms</a>\uFF0C\u8FD9\u91CC\u9762\u6709\u76F8\u5F53\u4E30\u5BCC\u7684\u57FA\u4E8EJavaScript\u7684\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\u5B9E\u73B0\u3002</p>
</blockquote>
<table>
<thead>
<tr>
<th>\u6392\u5E8F\u7B97\u6CD5</th>
<th>\u5E73\u5747\u65F6\u95F4\u590D\u6742\u5EA6</th>
<th>\u6700\u574F\u65F6\u95F4\u590D\u6742\u5EA6</th>
<th>\u7A7A\u95F4\u590D\u6742\u5EA6</th>
<th>\u662F\u5426\u7A33\u5B9A</th>
</tr>
</thead>
<tbody>
<tr>
<td>\u5192\u6CE1\u6392\u5E8F</td>
<td>O\uFF08n2\uFF09</td>
<td>O\uFF08n2\uFF09</td>
<td>O\uFF081\uFF09</td>
<td>\u662F</td>
</tr>
<tr>
<td>\u9009\u62E9\u6392\u5E8F</td>
<td>O\uFF08n2\uFF09</td>
<td>O\uFF08n2\uFF09</td>
<td>O\uFF081\uFF09</td>
<td>\u4E0D\u662F</td>
</tr>
<tr>
<td>\u76F4\u63A5\u63D2\u5165\u6392\u5E8F</td>
<td>O\uFF08n2\uFF09</td>
<td>O\uFF08n2\uFF09</td>
<td>O\uFF081\uFF09</td>
<td>\u662F</td>
</tr>
<tr>
<td>\u5F52\u5E76\u6392\u5E8F</td>
<td>O(nlogn)</td>
<td>O(nlogn)</td>
<td>O\uFF08n\uFF09</td>
<td>\u662F</td>
</tr>
<tr>
<td>\u5FEB\u901F\u6392\u5E8F</td>
<td>O(nlogn)</td>
<td>O\uFF08n2\uFF09</td>
<td>O\uFF08logn\uFF09</td>
<td>\u4E0D\u662F</td>
</tr>
<tr>
<td>\u5806\u6392\u5E8F</td>
<td>O(nlogn)</td>
<td>O(nlogn)</td>
<td>O\uFF081\uFF09</td>
<td>\u4E0D\u662F</td>
</tr>
<tr>
<td>\u5E0C\u5C14\u6392\u5E8F</td>
<td>O(nlogn)</td>
<td>O\uFF08ns\uFF09</td>
<td>O\uFF081\uFF09</td>
<td>\u4E0D\u662F</td>
</tr>
<tr>
<td>\u8BA1\u6570\u6392\u5E8F</td>
<td>O(n+k)</td>
<td>O(n+k)</td>
<td>O(n+k)</td>
<td>\u662F</td>
</tr>
<tr>
<td>\u57FA\u6570\u6392\u5E8F</td>
<td>O(N\u2217M)</td>
<td>O(N\u2217M)</td>
<td>O(M)</td>
<td>\u662F</td>
</tr>
</tbody>
</table>
<p>\u5FEB\u6392\uFF0C\u5806\u6392\uFF0C\u5F52\u5E76\u6392\u5E8F\u662F\u4F17\u591A\u6392\u5E8F\u7B97\u6CD5\u91CC\u65F6\u95F4\u590D\u6742\u5EA6\u548C\u7A7A\u95F4\u590D\u6742\u5EA6\u6BD4\u8F83\u597D\u7684\u4E09\u79CD\uFF0C\u5B83\u4EEC\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u90FD\u662FO(nlogn)\u3002</p>
<p>\u5176\u4E2D\u5F52\u5E76\u6392\u5E8F\u7684\u7A7A\u95F4\u590D\u6742\u5EA6\u5BF9\u6570\u7EC4\u6765\u8BB2\u662FOn\uFF0C\u53EF\u4EE5\u901A\u8FC7\u201C\u624B\u6447\u7B97\u6CD5\u201D\u964D\u4E3AO\uFF081\uFF09\uFF0C\u4F46\u4F1A\u589E\u52A0\u8FD0\u884C\u65F6\u95F4\uFF1B\u5BF9\u94FE\u8868\u5219\u662FOlogn\uFF0C\u53EF\u4EE5\u901A\u8FC7\u9012\u5F52\u6539\u5FAA\u73AF\u964D\u4F4E\u4E3AO\uFF081\uFF09\u3002</p>
<p>\u5FEB\u6392\u548C\u5F52\u5E76\u6392\u5E8F\u90FD\u662F\u5206\u6CBB\u7B97\u6CD5\u7684\u5178\u578B\u5E94\u7528\uFF0C\u5806\u6392\u5E8F\u662F\u4F18\u5148\u961F\u5217\u7684\u4E00\u79CD\u5E94\u7528\u3002</p>
<p>\u5176\u4E2D\u5FEB\u6392\u7684\u5B9E\u9645\u6027\u80FD\u8868\u73B0\u901A\u5E38\u662F\u6700\u597D\u7684\uFF0C\u4F46\u5982\u679C\u539F\u672C\u6570\u636E\u5C31\u6BD4\u8F83\u6709\u5E8F\u90A3\u4E48\u5FEB\u6392\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4F1A\u9000\u5316\uFF0C\u8FD9\u79CD\u60C5\u51B5\u53EF\u4EE5\u91C7\u7528\u968F\u673A\u5316\u9009\u53D6\u6807\u5B9A\u503C\u7684\u65B9\u6CD5\u89C4\u907F\u3002</p>
<p>\u4E0B\u9762\u662F\u7528JS\u5B9E\u73B0\u7684\u4E09\u79CD\u6392\u5E8F\u7B97\u6CD5\u4EE3\u7801\uFF1A</p>
<ul>
<li>\u5FEB\u901F\u6392\u5E8F</li>
</ul>
<pre><code class="language-javascript">// \u8FD9\u662F\u4E2A\u9012\u5F52\u7684\u8FC7\u7A0B\uFF0C\u6BCF\u6B21\u6211\u4EEC\u9009\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A\u6807\u5B9A\u503C
// \u7136\u540E\u4E00\u6B21\u904D\u5386\u4F7F\u5F97\u6240\u6709\u5C0F\u4E8E\u6807\u5B9A\u503C\u7684\u5143\u7D20\u90FD\u4F4D\u4E8E\u5B83\u7684\u5DE6\u8FB9\uFF0C\u5927\u4E8E\u5B83\u7684\u503C\u4F4D\u4E8E\u5B83\u7684\u53F3\u8FB9
// \u4E0A\u9762\u8FD9\u4E2A\u8FC7\u7A0B\u662F\u5FEB\u6392\u7684\u6838\u5FC3\uFF0C\u901A\u5E38\u6709\u4E09\u79CD\u65B9\u5F0F\u53EF\u4EE5\u5B9E\u73B0\uFF1A\u9996\u5C3E\u6307\u9488\u3001\u524D\u540E\u6307\u9488\u3001\u6316\u5751\u6CD5
// \u7136\u540E\u9012\u5F52\u5DE6\u53F3\u4E24\u4E2A\u5B50\u6570\u7EC4\u8FDB\u884C\u4E0A\u9762\u7684\u8FC7\u7A0B\uFF0C\u8FD9\u91CC\u91C7\u7528\u4E86\u539F\u5730\u7B97\u6CD5

// \u9996\u5C3E\u6307\u9488\u6CD5
function quickSort (array, startIndex = 0, endIndex = array.length - 1) {
  if (endIndex &lt;= startIndex) return array
  const target = array[startIndex] // \u9009\u7B2C\u4E00\u4E2A\u503C\u4F5C\u4E3A\u6807\u5B9A\u503C\uFF0C\u4E5F\u53EF\u4EE5\u9009\u6700\u540E\u7684\u503C
  let left = startIndex, right = endIndex
  while (left &lt; right) {
    // right\u6307\u9488\u627E\u5230\u7B2C\u4E00\u4E2A\u5C0F\u4E8E\u6807\u5B9A\u503C\u7684\u503C\uFF0Cleft\u6307\u9488\u627E\u5230\u7B2C\u4E00\u4E2A\u5927\u4E8E\u6807\u5B9A\u503C\u7684\u503C\u7136\u540E\u4EA4\u6362
    if (array[left] &gt; target &amp;&amp; array[right] &lt; target) {
      [array[left], array[right]] = [array[right], array[left]]
    } else {
      // \u6CE8\u610F\u8FD9\u91CC\u4E00\u5B9A\u8981\u5148\u5224\u65AD\u53F3\u8FB9\u7684\u6307\u9488\uFF0C\u56E0\u4E3A\u9009\u4E86\u6700\u5DE6\u8FB9\u7684\u4F5C\u4E3A\u6807\u5B9A\u503C
      array[right] &gt;= target ? right-- : left++
    }
  }
  [array[left], array[startIndex]] = [target, array[left]]
  quickSort(array, startIndex, left - 1)
  quickSort(array, left + 1, endIndex)
  return array
}

// \u524D\u540E\u6307\u9488\u6CD5
function quickSort (array, startIndex = 0, endIndex = array.length - 1) {
  if (endIndex &lt;= startIndex) return array
  const target = array[endIndex] // \u9009\u6700\u540E\u8FB9\u7684\u503C\u4F5C\u4E3A\u6807\u5B9A\u503C\uFF0C\u4E5F\u53EF\u4EE5\u9009\u7B2C\u4E00\u4E2A
  let j = startIndex // j\u8868\u793A\u7B49\u5F85\u4EA4\u6362\u7684\u4F4D\u7F6E
  for (let i = startIndex; i &lt;= endIndex; i++) {
    if (array[i] &lt;= target) { // \u5982\u679C\u9047\u5230\u6BD4\u6807\u5B9A\u503C\u5C0F\u6216\u7B49\u4E8E\u7684\u503C\u5C31\u4E0Ej\u5904\u7684\u5143\u7D20\u4EA4\u6362\u5E76\u4E14j + 1
      [array[i], array[j]] = [array[j], array[i]]
      j++
    }
  }
  quickSort(array, startIndex, j - 2)
  quickSort(array, j, endIndex)
  return array
}
</code></pre>
<ul>
<li>\u5806\u6392\u5E8F</li>
</ul>
<pre><code class="language-javascript">// \u9996\u5148\u8981\u5C06\u6570\u7EC4\u6784\u9020\u6210\u5927/\u5C0F\u6839\u5806\uFF0C\u6839\u8282\u70B9\u4E3A\u6700\u5927\u503C\u6216\u6700\u5C0F\u503C\u7684\u4E8C\u53C9\u6811\u7ED3\u6784
// \u7136\u540E\u4F9D\u6B21\u53D6\u6839\u8282\u70B9\u548C\u672B\u5C3E\u8282\u70B9\u4EA4\u6362\uFF0C\u4EA4\u6362\u4E4B\u540E\u9700\u8981\u4FDD\u6301\u5F53\u524D\u7684\u6570\u7EC4\u4F9D\u65E7\u662F\u5806
var maxheapsort = (list) =&gt; {
  // maxheapit \u7528\u6765\u4F7F\u4EE5\u67D0\u4E2A\u8282\u70B9\u4E3A\u6839\u8282\u70B9\u7684\u5B50\u6811\u6210\u4E3A\u5927\u6839\u5806
  const maxheapit = (parentindex, heapsize) =&gt; {
    const leftindex = parentindex * 2 + 1
    const rightindex = leftindex + 1
    // \u6BD4\u8F83\u7236\u8282\u70B9\uFF0C\u5DE6\u53F3\u5B50\u8282\u70B9\u8FD9\u4E09\u4E2A\uFF0C\u9009\u6700\u5927\u7684\u90A3\u4E2A\u4F5C\u4E3A\u65B0\u7684\u7236\u8282\u70B9
    // \u5982\u679C\u662F\u5B50\u8282\u70B9\u505A\u4E86\u7236\u8282\u70B9\uFF0C\u90A3\u4E48\u5C31\u8981\u7EE7\u7EED\u7EF4\u62A4\u90A3\u4E2A\u5B50\u8282\u70B9\u6210\u4E3A\u5806
    let maxindex = leftindex &lt; heapsize &amp;&amp; list[leftindex] &gt; list[parentindex] ? leftindex : parentindex
    maxindex = rightindex &lt; heapsize &amp;&amp; list[rightindex] &gt; list[maxindex] ? rightindex : maxindex
    if (maxindex !== parentindex) {
      [list[parentindex], list[maxindex]] = [list[maxindex], list[parentindex]]
      maxheapit(maxindex, heapsize)
    }
  }
  let heapsize = list.length
  // \u81EA\u5E95\u5411\u4E0A\u6784\u9020\u5927\u6839\u5806\uFF0C\u5C31\u4ECE\u6700\u540E\u7684\u7236\u8282\u70B9\u5F00\u59CB\u5411\u524D\u904D\u5386
  for (let i = Math.floor(list.length / 2) - 1; i &gt;= 0; i--) {
    maxheapit(i, heapsize)
  }
  // \u4F9D\u6B21\u4EA4\u6362\u6839\u8282\u70B9\u5230\u9996\u4F4D\uFF0C\u7136\u540E\u7EF4\u62A4\u5927\u6839\u5806\u6027\u8D28
  for (let i = heapsize - 1; i &gt;= 0; i--) {
    [list[i], list[0]] = [list[0], list[i]]
    maxheapit(0, --heapsize)
  }
  return list
}
</code></pre>
<ul>
<li>\u5F52\u5E76\u6392\u5E8F</li>
</ul>
<pre><code class="language-javascript">// \u540C\u6837\u662F\u9012\u5F52\u7684\u8FC7\u7A0B\uFF0C\u628A\u6570\u7EC4\u5206\u6210\u5DE6\u53F3\u4E24\u5217\u5206\u522B\u5F52\u5E76\u6392\u5E8F
// \u7136\u540E\u5408\u5E76\u5DE6\u53F3\u4E24\u4E2A\u6709\u5E8F\u6570\u7EC4\u4E3A\u65B0\u7684\u6570\u7EC4\u5E76\u8FD4\u56DE
function mergeSort (array, start = 0, end = array.length - 1) {
  if (array.length &lt;= 1) return array
  if (end === start) return [array[start]]
  const middle = Math.floor((end - start) / 2) + start
  const left = mergeSort(array, start, middle)
  const right = mergeSort(array, middle + 1, end)
  const merged = []
  let i = 0, j = 0
  while (i &lt; left.length || j &lt; right.length) {
    if (i &lt; left.length &amp;&amp; j &lt; right.length) {
      merged.push(left[i] &gt; right[j] ? right[j++] : left[i++])
    } else {
      merged.push(i &lt; left.length ? left[i++] : right[j++])
    }
  }
  return merged
}
</code></pre>
<p>\u7531\u4E8E\u9012\u5F52\u5728\u8FD0\u884C\u4E2D\u6709\u5176\u81EA\u8EAB\u7684\u5207\u6362\u3001\u8C03\u7528\u4EE5\u53CA\u6808\u7A7A\u95F4\u5F00\u9500\uFF0C\u6240\u4EE5\u6211\u4EEC\u8FD8\u53EF\u4EE5\u7528\u975E\u9012\u5F52\u7684\u5F62\u5F0F\u5B9E\u73B0\u4E0A\u9762\u7684\u5F52\u5E76\u6392\u5E8F\u7B97\u6CD5\uFF08\u524D\u63D0\u662F\u7B97\u6CD5\u672C\u8EAB\u80FD\u6BD4\u8F83\u5BB9\u6613\u7684\u5C06\u9012\u5F52\u6539\u4E3A\u5FAA\u73AF\u8FED\u4EE3\u5E76\u4E14\u4E0D\u4F1A\u5BF9\u4EE3\u7801\u53EF\u8BFB\u6027\u4EA7\u751F\u592A\u5927\u7684\u5F71\u54CD\uFF09</p>
<pre><code class="language-javascript">// \u5FAA\u73AF\u7684\u5F62\u5F0F\u5B9E\u73B0\u5F52\u5E76\u6392\u5E8F\uFF0C\u6B64\u65F6\u6211\u4EEC\u9700\u8981\u6309\u7167\u201C\u81EA\u5E95\u5411\u4E0A\u201D\u7684\u65B9\u5411\u6C42\u89E3\u95EE\u9898
function mergeSort(array) {
  const length = array.length
  let i = 0, len = 1, merged = [] // len\u7EF4\u62A4\u6BCF\u6B21\u7684\u5408\u5E76\u533A\u95F4\u957F\u5EA6
  while (len &lt; length) {
    while (i &lt; length) {
      let [a, b, c, d] = [i, i + len, i + len, i + len * 2]
      if (b &gt;= length) c = b = length - 1
      if (d &gt; length) d = length
      while (a &lt; b || c &lt; d) {
        if (a &lt; b &amp;&amp; c &lt; d) {
          merged[i++] = array[a] &lt; array[c] ? array[a++] : array[c++]
        } else {
          merged[i++] = a &lt; b ? array[a++] : array[c++]
        }
      }
    }
    [array, merged] = [merged, array] // \u8FD9\u91CC\u53EA\u4F7F\u7528\u4E86\u4E00\u4E2AOn\u7684\u989D\u5916\u6570\u7EC4
    len = len * 2, i = 0
  }
  return array
}
</code></pre>
`;export{n as default};
