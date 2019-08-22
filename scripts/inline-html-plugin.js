/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SVGSpriter = require('svg-sprite')
const fs = require('fs')
const path = require('path')

module.exports = class InlintManifestPlugin {
  apply (compiler) {
    const name = 'inline-manifest-plugin'
    compiler.hooks.compilation.tap(name, compilation => {
      // (
      //   HtmlWebpackPlugin.getHooks
      //     ? HtmlWebpackPlugin.getHooks(compilation).alterAssetTags
      //     : compilation.hooks.htmlWebpackPluginAlterAssetTags
      // ).tapAsync(
      //   name,
      //   (data, cb) => { this.inlineManifest(compilation, data, cb) }
      // );
      (
        HtmlWebpackPlugin.getHooks
          ? HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution
          : compilation.hooks.htmlWebpackPluginAfterHtmlProcessing
      ).tapAsync(
        name,
        (data, cb) => { this.inlineSvgSprite(data, cb) }
      )
    })
  }
  inlineSvgSprite (data, cb) {
    const spriter = new SVGSpriter({
      mode: {
        inline: true,
        symbol: true
      },
      svg: {
        xmlDeclaration: false,
        rootAttributes: {
          hidden: true
        }
      }
    })
    const src = path.join(__dirname, '../src/assets/svg')
    fs.readdirSync(src).forEach(file => {
      const filePath = path.join(src, file)
      if (file.endsWith('.svg')) {
        spriter.add(filePath, file, fs.readFileSync(filePath, 'utf8'))
      }
    })
    spriter.compile((error, result) => {
      if (error) {
        return cb(error)
      }
      data.html = data.html
        .replace(/<!--\[if svgSprite\]><!\[endif\]-->/, result.symbol.sprite.contents.toString())
      cb()
    })
  }
}
