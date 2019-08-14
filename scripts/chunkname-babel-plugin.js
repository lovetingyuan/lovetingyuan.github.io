const Path = require('path')

module.exports = function addAsyncChunkName ({ types: t }) {
  return {
    visitor: {
      CallExpression (path) {
        if (t.isImport(path.node.callee)) {
          const chunkPathNode = path.node.arguments[0]
          if (chunkPathNode.leadingComments && chunkPathNode.leadingComments.length) return
          const chunkName = Path.basename(chunkPathNode.value).split('.')[0].toLowerCase()
          t.addComment(
            chunkPathNode,
            'leading',
            `webpackChunkName: ${JSON.stringify('async-' + chunkName)}`
          )
        }
      }
    }
  }
}
