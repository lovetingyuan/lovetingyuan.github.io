/* eslint-disable */
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SVGSpriter = require('svg-sprite')
const fs = require('fs')
const path = require('path')

module.exports = class CustomHtmlPlugin {
  constructor(options) {
    this.svgSpriteDir = options.svgSpriteDir
  }
  apply (compiler) {
    const name = 'inline-manifest-plugin'
    compiler.hooks.compilation.tap(name, compilation => {
      (
        HtmlWebpackPlugin.getHooks
          ? HtmlWebpackPlugin.getHooks(compilation).alterAssetTags
          : compilation.hooks.htmlWebpackPluginAlterAssetTags
      ).tapAsync(
        name,
        (data, cb) => { cb() }
      );
      (
        HtmlWebpackPlugin.getHooks
          ? HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution
          : compilation.hooks.htmlWebpackPluginAfterHtmlProcessing
      ).tapAsync(
        name,
        (data, cb) => {
          this.inlineSvgSprite(data, cb)
        }
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
    fs.readdirSync(this.svgSpriteDir).forEach(file => {
      const filePath = path.join(this.svgSpriteDir, file)
      if (file.endsWith('.svg')) {
        spriter.add(filePath, file, fs.readFileSync(filePath, 'utf8'))
      }
    })
    spriter.compile((error, result) => {
      if (error) return cb(error)
      data.html = data.html.replace(
        /<svg-sprite.+<\/svg-sprite>/,
        result.symbol.sprite.contents.toString()
      )
      cb()
    })
  }
}
