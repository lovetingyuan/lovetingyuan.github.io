var t=`<h2>BFC\u5757\u7EA7\u683C\u5F0F\u4E0A\u4E0B\u6587</h2>
<p>\u5728<a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context">MDN</a>\u4E0A\u67E5\u770B</p>
<p>BFC\u662FWeb\u9875\u9762\u7684\u53EF\u89C6CSS\u6E32\u67D3\u7684\u4E00\u90E8\u5206\uFF0C\u662F\u5757\u76D2\u5B50\u7684\u5E03\u5C40\u8FC7\u7A0B\u53D1\u751F\u7684\u533A\u57DF\uFF0C\u4E5F\u662F\u6D6E\u52A8\u5143\u7D20\u4E0E\u5176\u4ED6\u5143\u7D20\u4EA4\u4E92\u7684\u533A\u57DF\u3002</p>
<p>\u4F7F\u4E00\u4E2A\u5143\u7D20\u5F62\u6210BFC\u7684\u65B9\u5F0F\u6709\uFF1A</p>
<ul>
<li>\u6839\u5143\u7D20(html)</li>
<li>\u6D6E\u52A8\u5143\u7D20\uFF08\u5143\u7D20\u7684 float \u4E0D\u662F none\uFF09</li>
<li>\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF08\u5143\u7D20\u7684 position \u4E3A absolute \u6216 fixed\uFF09</li>
<li>\u884C\u5185\u5757\u5143\u7D20\uFF08\u5143\u7D20\u7684 display \u4E3A inline-block\uFF09</li>
<li>\u8868\u683C\u5355\u5143\u683C\uFF08\u5143\u7D20\u7684 display\u4E3A table-cell\uFF0CHTML\u8868\u683C\u5355\u5143\u683C\u9ED8\u8BA4\u4E3A\u8BE5\u503C\uFF09</li>
<li>\u8868\u683C\u6807\u9898\uFF08\u5143\u7D20\u7684 display \u4E3A table-caption\uFF0CHTML\u8868\u683C\u6807\u9898\u9ED8\u8BA4\u4E3A\u8BE5\u503C\uFF09</li>
<li>\u533F\u540D\u8868\u683C\u5355\u5143\u683C\u5143\u7D20\uFF08\u5143\u7D20\u7684 display\u4E3A table\u3001table-row\u3001 table-row-group\u3001table-header-group\u3001table-footer-group\uFF08\u5206\u522B\u662FHTML * table\u3001row\u3001tbody\u3001thead\u3001tfoot\u7684\u9ED8\u8BA4\u5C5E\u6027\uFF09\u6216 inline-table\uFF09</li>
<li>overflow \u503C\u4E0D\u4E3A visible \u7684\u5757\u5143\u7D20</li>
<li>display \u503C\u4E3A flow-root \u7684\u5143\u7D20</li>
<li>contain \u503C\u4E3A layout\u3001content\u6216 paint \u7684\u5143\u7D20</li>
<li>\u5F39\u6027\u5143\u7D20\uFF08display\u4E3A flex \u6216 inline-flex\u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09</li>
<li>\u7F51\u683C\u5143\u7D20\uFF08display\u4E3A grid \u6216 inline-grid \u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09</li>
<li>\u591A\u5217\u5BB9\u5668\uFF08\u5143\u7D20\u7684 column-count \u6216 column-width \u4E0D\u4E3A auto\uFF0C\u5305\u62EC column-count \u4E3A 1\uFF09</li>
<li>column-span \u4E3A all \u7684\u5143\u7D20\u59CB\u7EC8\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684BFC\uFF0C\u5373\u4F7F\u8BE5\u5143\u7D20\u6CA1\u6709\u5305\u88F9\u5728\u4E00\u4E2A\u591A\u5217\u5BB9\u5668\u4E2D\uFF08\u6807\u51C6\u53D8\u66F4\uFF0CChrome bug\uFF09\u3002</li>
</ul>
<hr>
<p><strong>Advertisement :)</strong></p>
<ul>
<li><strong><a href="https://nodeca.github.io/pica/demo/">pica</a></strong> - high quality and fast image
resize in browser.</li>
<li><strong><a href="https://github.com/nodeca/babelfish/">babelfish</a></strong> - developer friendly
i18n with plurals support and easy syntax.</li>
</ul>
<p>You will like those projects!</p>
<hr>
<h1>h1 Heading 8-)</h1>
<h2>h2 Heading</h2>
<h3>h3 Heading</h3>
<h4>h4 Heading</h4>
<h5>h5 Heading</h5>
<h6>h6 Heading</h6>
<h2>Horizontal Rules</h2>
<hr>
<hr>
<hr>
<h2>Typographic replacements</h2>
<p>Enable typographer option to see result.</p>
<p>\xA9 \xA9 \xAE \xAE \u2122 \u2122 \xA7 \xA7 \xB1</p>
<p>test\u2026 test\u2026 test\u2026 test?.. test!..</p>
<p>!!! ??? ,  \u2013 \u2014</p>
<p>\u201CSmartypants, double quotes\u201D and \u2018single quotes\u2019</p>
<h2>Emphasis</h2>
<p><strong>This is bold text</strong></p>
<p><strong>This is bold text</strong></p>
<p><em>This is italic text</em></p>
<p><em>This is italic text</em></p>
<p><s>Strikethrough</s></p>
<h2>Blockquotes</h2>
<blockquote>
<p>Blockquotes can also be nested\u2026</p>
<blockquote>
<p>\u2026by using additional greater-than signs right next to each other\u2026</p>
<blockquote>
<p>\u2026or with spaces between arrows.</p>
</blockquote>
</blockquote>
</blockquote>
<h2>Lists</h2>
<p>Unordered</p>
<ul>
<li>Create a list by starting a line with <code>+</code>, <code>-</code>, or <code>*</code></li>
<li>Sub-lists are made by indenting 2 spaces:
<ul>
<li>Marker character change forces new list start:
<ul>
<li>Ac tristique libero volutpat at</li>
</ul>
<ul>
<li>Facilisis in pretium nisl aliquet</li>
</ul>
<ul>
<li>Nulla volutpat aliquam velit</li>
</ul>
</li>
</ul>
</li>
<li>Very easy!</li>
</ul>
<p>Ordered</p>
<ol>
<li>
<p>Lorem ipsum dolor sit amet</p>
</li>
<li>
<p>Consectetur adipiscing elit</p>
</li>
<li>
<p>Integer molestie lorem at massa</p>
</li>
<li>
<p>You can use sequential numbers\u2026</p>
</li>
<li>
<p>\u2026or keep all the numbers as <code>1.</code></p>
</li>
</ol>
<p>Start numbering with offset:</p>
<ol start="57">
<li>foo</li>
<li>bar</li>
</ol>
<h2>Code</h2>
<p>Inline <code>code</code></p>
<p>Indented code</p>
<pre><code>// Some comments
line 1 of code
line 2 of code
line 3 of code
</code></pre>
<p>Block code \u201Cfences\u201D</p>
<pre><code>Sample text here...
</code></pre>
<p>Syntax highlighting</p>
<pre><code class="language-js">var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
</code></pre>
<h2>Tables</h2>
<table>
<thead>
<tr>
<th>Option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td>engine</td>
<td>engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td>ext</td>
<td>extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<p>Right aligned columns</p>
<table>
<thead>
<tr>
<th style="text-align:right">Option</th>
<th style="text-align:right">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:right">data</td>
<td style="text-align:right">path to data files to supply the data that will be passed into templates.</td>
</tr>
<tr>
<td style="text-align:right">engine</td>
<td style="text-align:right">engine to be used for processing templates. Handlebars is the default.</td>
</tr>
<tr>
<td style="text-align:right">ext</td>
<td style="text-align:right">extension to be used for dest files.</td>
</tr>
</tbody>
</table>
<h2>Links</h2>
<p><a href="http://dev.nodeca.com">link text</a></p>
<p><a href="http://nodeca.github.io/pica/demo/" title="title text!">link with title</a></p>
<p>Autoconverted link <a href="https://github.com/nodeca/pica">https://github.com/nodeca/pica</a> (enable linkify to see)</p>
<h2>Images</h2>
<p><img src="https://octodex.github.com/images/minion.png" alt="Minion">
<img src="https://octodex.github.com/images/stormtroopocat.jpg" alt="Stormtroopocat" title="The Stormtroopocat"></p>
<p>Like links, Images also have a footnote style syntax</p>
<p><img src="https://octodex.github.com/images/dojocat.jpg" alt="Alt text" title="The Dojocat"></p>
<p>With a reference later in the document defining the URL location:</p>
<h2>Plugins</h2>
<p>The killer feature of <code>markdown-it</code> is very effective support of
<a href="https://www.npmjs.org/browse/keyword/markdown-it-plugin">syntax plugins</a>.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-emoji">Emojies</a></h3>
<blockquote>
<p>Classic markup: :wink: :crush: :cry: :tear: :laughing: :yum:</p>
<p>Shortcuts (emoticons): :-) :-( 8-) ;)</p>
</blockquote>
<p>see <a href="https://github.com/markdown-it/markdown-it-emoji#change-output">how to change output</a> with twemoji.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-sub">Subscript</a> / <a href="https://github.com/markdown-it/markdown-it-sup">Superscript</a></h3>
<ul>
<li>19^th^</li>
<li>H~2~O</li>
</ul>
<h3><a href="https://github.com/markdown-it/markdown-it-ins">&lt;ins&gt;</a></h3>
<p>++Inserted text++</p>
<h3><a href="https://github.com/markdown-it/markdown-it-mark">&lt;mark&gt;</a></h3>
<p>==Marked text==</p>
<h3><a href="https://github.com/markdown-it/markdown-it-footnote">Footnotes</a></h3>
<p>Footnote 1 link[^first].</p>
<p>Footnote 2 link[^second].</p>
<p>Inline footnote^[Text of inline footnote] definition.</p>
<p>Duplicated footnote reference[^second].</p>
<p>[^first]: Footnote <strong>can have markup</strong></p>
<pre><code>and multiple paragraphs.
</code></pre>
<p>[^second]: Footnote text.</p>
<h3><a href="https://github.com/markdown-it/markdown-it-deflist">Definition lists</a></h3>
<p>Term 1</p>
<p>:   Definition 1
with lazy continuation.</p>
<p>Term 2 with <em>inline markup</em></p>
<p>:   Definition 2</p>
<pre><code>    { some code, part of Definition 2 }

Third paragraph of definition 2.
</code></pre>
<p><em>Compact style:</em></p>
<p>Term 1
~ Definition 1</p>
<p>Term 2
~ Definition 2a
~ Definition 2b</p>
<h3><a href="https://github.com/markdown-it/markdown-it-abbr">Abbreviations</a></h3>
<p>This is HTML abbreviation example.</p>
<p>It converts \u201CHTML\u201D, but keep intact partial entries like \u201CxxxHTMLyyy\u201D and so on.</p>
<p>*[HTML]: Hyper Text Markup Language</p>
<h3><a href="https://github.com/markdown-it/markdown-it-container">Custom containers</a></h3>
<p>::: warning
<em>here be dragons</em>
:::</p>
`;export{t as default};
