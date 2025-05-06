import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      title: 'PLUS-WAVE\'s Blog',
      lang: 'zh-CN',
      description: 'PLUS-WAVE\'s Blog Site',
    },
    '/en/': {
      title: 'PLUS-WAVE\'s Blog',
      lang: 'en-US',
      description: 'PLUS-WAVE\'s Blog Site',
    },
  },
  head: [
    [
      'link',{ rel: 'icon', href: '/icon/favicon.ico' }
    ]
  ],
  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://plus-wave.github.io/',
    // copyright: 'CC-BY-NC-SA-4.0',

    contributors: {
      mode: 'inline',
      info: [
        {
          name: 'Jiawei Wang',
        }
      ]
    },

    autoFrontmatter: {
      permalink: true, // 是否生成永久链接
      createTime: true, // 是否生成创建时间
      title: true, // 是否生成标题
    },
    
    plugins: {
      git: true,

      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        // 强烈建议预设代码块高亮语言，插件默认加载所有语言会产生不必要的时间开销
        languages: ["bash","makefile","python","cpp","javascript","html","c","c++"],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      markdownImage: {
        // figure: true,
        lazyload: true,
        mark: true,
        size: true,
    },
      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'PLUS-WAVE/PLUS-WAVE.github.io',
        repoId: 'R_kgDONTjEgw',
        category: 'Announcements',
        categoryId: 'DIC_kwDONTjEg84CkjoX',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },

      docsearch: {
        appId: 'KUAFAFDPE6', 
        apiKey: '9e98e45cdde339a2d430ce277cc2937a', 
        indexName: 'plus-waveio', 
      },
    },
  }),
})
