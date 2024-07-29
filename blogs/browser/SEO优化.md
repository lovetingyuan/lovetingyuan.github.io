### SEO优化

Search Engine Optimization（搜索引擎优化）的几条原则：

1. title标签
2. meta标签 `<meta name="description" content="这是description的内容">`
3. meta `og` 标签，是Facebook提出的一种网页元信息（Meta Information）标记协议，例如`<meta property="og:title" content="tingyuan" />`，其它的还有`og:type`, `og:url`, `og:image`等，详情可以查看[这里](https://ogp.me)
4. html语义化。如h1-h6,img[alt],结构相关的标签,特定内容相关的标签等，并且保持页面结构清晰有序，内容合理排布，重要的内容尽量靠前（关键词分析）
5. 站点地图sitemap。它通常是一个xml文件，可以在robots.txt中添加，例如`Sitemap: https://yourwebsite.com/sitemap.xml`，有的搜索引擎支持手动配置
6. 保证内链清晰有效，外链保证质量且不可滥用。内链尽量使用自然语言而非随机字母数字，注重在面包屑、菜单等地方的合理设置
7. 数据结构化标记。结构化数据常用的有三种形式：JSON-LD，Microdata和RDFa，它们可以被搜索引擎解析从而呈现更具体更结构化的内容（如富媒体搜索结果）。例如[`JSON-LD`](https://json-ld.org/)就是在页面添加 type 为 `application/ld+json`的script标签，通过json数据来更精细的描述网站的结构和信息；[`Microdata`](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata)是html标准的一部分，它提供了诸如`itemscope`, `itemtype`, `itemprop`等元素全局属性来实现对离散的页面内容的结构化追踪；`RDFa`也提供了诸如`resource`, `typeof`, `property`等元素属性来做标记。[参考](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data?hl=zh-cn)
8. 保持网站高性能以及全站https，有条件的SPA可以添加SSR的支持
9. 用一些seo优化和分析工具，随时保持对SEO效果的关注
10. 做推广

> https://exposureninja.com/wp-content/uploads/2016/10/How-To-Get-To-The-Top-of-Google-2022.pdf

> https://developers.google.com/search/docs/essentials?hl=zh-cn

> https://ahrefs.com/seo
