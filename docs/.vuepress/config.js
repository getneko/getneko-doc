import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

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
  })
})
