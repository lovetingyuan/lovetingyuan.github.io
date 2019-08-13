const Path = require('path')
const t = require('@babel/types')

const visitor = {
  CallExpression (path) {
    if (path.node.callee.type === 'Import') {
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

module.exports = function addAsyncChunkName () {
  return {
    visitor
  }
}
