import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { sitemapPlugin } from '@vuepress/plugin-sitemap'

export default defineUserConfig({
  locales: {
      '/': {
      lang: 'en-US',
      title: 'getneko',
      description: 'A minimalist API management tool',
      },
      '/zh/': {
          lang: 'zh-CN',
          title: 'getneko',
          description: '一个极简的api管理工具',
      }
  },
  bundler: viteBundler(),
  theme: defaultTheme({
      docsRepo: 'https://github.com/getneko/getneko-doc',
  docsBranch: 'main',
  docsDir: 'docs',
  editLinkPattern: ':repo/edit/:branch/:path',
  contributors:false,
      locales: {
          '/zh/': {
              
              selectLanguageName: '简体中文',
              selectLanguageText: '选择语言',
              notFound: [
                  '这里什么都没有',
                  '我们怎么到这来了？',
                  '这是一个 404 页面',
                  '看起来我们进入了错误的链接',
                ],
                editLinkText: '在 GitHub 上编辑此页',
              navbar: [
                  {
                      text: '首页',
                      link: '/zh/',
                  }, {
                      text: '服务端',
                      link: '/zh/server/'
                  },
                  {
                      text: 'github',
                      children:[
                          {
                              text:'服务端',
                              link:'https://github.com/getneko/getneko'
                          },
                          {
                              text:'桌面客户端',
                              link:'https://github.com/getneko/getneko-desktop'
                          }
                      ]
                  }
              ],
              sidebar:{
                "/zh/server/":[
                    {
                    text: "安装",
                    children: [
                        "/zh/server/needs.md"
                        ,"/zh/server/bin.md",
                        "/zh/server/source.md",
                    ]
                },{
                    text: "二次开发",
                    children: [
                        "/zh/server/errcode.md",
                        "/zh/server/files.md"
                    ]
                },{
                    text:"帮助",
                    children:[
                        "/zh/server/questions.md",
                        "/zh/server/needhelp.md"
                    ]
                }
            ]
              }
          },
          '/': {
              
              selectLanguageName: 'English',
              selectLanguageText: 'Language',
              navbar: [
                  {
                      text: 'home',
                      link: '/',
                  }, {
                      text: 'server',
                      link: '/server/'
                  },
                  {
                      text: 'github',
                      children:[
                          {
                              text:'server',
                              link:'https://github.com/getneko/getneko'
                          },
                          {
                              text:'desktop client',
                              link:'https://github.com/getneko/getneko-desktop'
                          }
                      ]
                  }
              ],
              sidebar:{
                "/server/":[
                    {
                    text: "Install",
                    children: [
                        "/server/needs.md"
                        ,"/server/bin.md",
                        "/server/source.md",
                    ]
                },{
                    text: "Secondary development",
                    children: [
                        "/server/errcode.md",
                        "/server/files.md"
                    ]
                },{
                    text:"help",
                    children:[
                        "/server/questions.md",
                        "/server/needhelp.md"
                    ]
                }
            ]
              }
          },
      }
  }),
  plugins: [
    docsearchPlugin({
      appId: 'WLKFBMC7SA',
      apiKey: 'd1a259028a1ce9551327b2fc9c241567',
      indexName: 'getneko',
      locales: {
        '/zh/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    sitemapPlugin({
        hostname: 'https://www.getneko.top'
      }),
  ],
})
