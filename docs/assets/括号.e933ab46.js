const e=`
</div></details>
<details><summary>\u6700\u957F\u6709\u6548\u62EC\u53F7<a href="https://leetcode-cn.com/problems/longest-valid-parentheses/" target="_blank" style="margin-left: 20px">leetcode</a></summary><div class="details-content">
<ul>
<li>\u52A8\u6001\u89C4\u5212</li>
<li>dp[i]\u8868\u793A\u4EE5 i \u7ED3\u5C3E\u7684\u6700\u957F\u6709\u6548\u62EC\u53F7\u7684\u957F\u5EA6\uFF0C\u9700\u8981\u8003\u8651\u4EE5<code>()</code>\u548C<code>))</code>\u7ED3\u5C3E\u7684\u4E24\u79CD\u60C5\u51B5</li>
<li><code>()</code>\u5C31\u5F88\u597D\u5224\u65AD <code>dp[i] = dp[i - 2] + 2</code></li>
<li><code>))</code>\u7A0D\u5FAE\u590D\u6742\u4E00\u4E9B\uFF0C\u5982\u679C <code>s[i\u2212dp[i\u22121]\u22121] = '('</code>, \u90A3\u4E48 <code>dp[i] = dp[i\u22121] + dp[i\u2212dp[i\u22121]\u22122] + 2</code></li>
</ul>
</div></details>
`;export{e as default};
