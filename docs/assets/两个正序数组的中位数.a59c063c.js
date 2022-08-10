const n=`<p>\u5BFB\u627E\u4E24\u4E2A\u6B63\u5E8F\u6570\u7EC4\u7684\u4E2D\u4F4D\u6570 <a href="https://leetcode-cn.com/problems/median-of-two-sorted-arrays/" target="_blank" rel="noopener noreferrer">leetcode</a></p>
<p><img src="https://pic.leetcode-cn.com/735ea8129ab5b56b7058c6286217fa4bb5f8a198e4c8b2172fe0f75b29a966cd-image.png" alt="-"></p>
<p>\u627E\u5230\u4E24\u4E2A\u6570\u7EC4\u7684\u524D 3 \u4E2A\uFF0C\u6839\u636E\u5C3E\u6570\u5927\u5C0F\u5224\u65AD\u9700\u8981\u820D\u5F03\u4E0B\u9762\u7684 1\uFF0C2\uFF0C3\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E00\u5B9A\u662F\u524D k \u5C0F\u7684\u6570\u5B57\u4E2D\u7684\u4E00\u90E8\u5206
\u8FD9\u6837 i \u8FD8\u662F 0\uFF0Cj \u53D8\u6210 3
<img src="https://pic.leetcode-cn.com/09b8649cd2b8bbea74f7f632b098fed5f8404530ff44b5a0b54a360b3cf7dd8f-image.png" alt="-"></p>
<p><img src="https://pic.leetcode-cn.com/3c89a8ea29f2e19057b57242c8bc37c5f09b6796b96c30f3d42caea21c12f294-image.png" alt="-"></p>
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
`;export{n as default};
