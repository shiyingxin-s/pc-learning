const path = require('path')
const fs = require('fs')
const lessToJs = require('less-vars-to-js')
import { defineConfig } from 'umi'
import px2rem from 'postcss-plugin-px2rem'


//判断只有在生产模式才开启
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV)

const prod = IS_PROD ? {
  extraBabelPlugins: [IS_PROD ? 'transform-remove-console' : ''],
  plugins: ['@alitajs/hd'],
  hd: {},
  extraPostCSSPlugins: [
    px2rem({
      rootValue: 256,//开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为1920，所以1920*100/750=256
      propBlackList: ['*'],//这些属性不需要转换
      selectorBlackList: []//
    })
  ]
} : {}

export default defineConfig({
  ...prod,
  exportStatic: false,
  antd: {},
  dynamicImport: {
    loading: '@/components/Loading/index'
  },
  title: '习标格',
  esbuild: {},
  autoprefixer: {},
  targets: {
    chrome: 79,
    firefox: false,
    safari: false,
    edge: false,
    ios: false,
    ie: 11,
  },
  hash: true,
  theme: lessToJs(fs.readFileSync(path.join('./src/theme/default.less'), 'utf8')),
  sass: {
    implementation: require('node-sass'),
    sassOptions: {
      includePaths: ['./src/theme/']
    }
  },
  cssModulesTypescriptLoader: {},
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
    // 默认为 false，且必须 设置 false，否则 plugin-dva 会重复加载 model
    skipModelValidate: false
  },
  nodeModulesTransform: { type: 'none' }, // 编译提速
  ignoreMomentLocale: true,
  externals: {
    Ripple: 'window.Ripple'
  },
  devServer: {
    compress: true,
  },
  // chunks: ['vendors', 'umi'],
  chunks: ['react', 'vendors', 'umi'],
  chainWebpack(config, { webpack }) {
    config.merge({
      optimization: {
        splitChunks: {
          cacheGroups: {
            react: {
              name: 'react',
              chunks: 'all',
              test: ({ resource }) => /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|moment|antd|@ant-design|react-player|video-react)[\\/]/.test(resource),
              priority: 12,
            },
            vendors: {
              name: 'vendors',
              chunks: 'all',
              test: /[\\/]node_modules[\\/]/,
              priority: 10,
            },
          }
        }
      }
    })
  }
})
