import { defaultTheme, defineUserConfig } from 'vuepress'


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
    theme: defaultTheme({
        docsRepo: 'https://github.com/getneko/getneko-doc',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/-/edit/:branch/:path',
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
                navbar: [
                    {
                        text: '首页',
                        link: '/zh/',
                    }, {
                        text: 'test',
                        link: '/test'
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
                ]
            },
            '/': {
                
                selectLanguageName: 'English',
                selectLanguageText: 'Language',
                navbar: [
                    {
                        text: 'home',
                        link: '/',
                    }, {
                        text: 'test',
                        link: '/test'
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
                ]
            },
        }
    })
})