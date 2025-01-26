const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    }
  },
  publicPath: './',

  // 添加 chainWebpack 配置
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = '雪之妍 - 专业内衣品牌官方网站'
      args[0].meta = {
        keywords: '雪之妍,雪之妍内衣,文胸,内衣,家居服,睡衣,塑身衣',
        description: '雪之妍内衣官方网站，专注于为女性提供优质内衣产品，包括文胸、内裤、家居服、睡衣等系列产品。',
        author: '雪之妍',
        'og:title': '雪之妍 - 专业内衣品牌官方网站',
        'og:description': '雪之妍内衣官方网站，专注于为女性提供优质内衣产品。',
        'og:type': 'website',
        'og:url': 'https://您的域名',
        'og:image': 'https://您的域名/logo.jpg'
      }
      return args
    })
  }
})

