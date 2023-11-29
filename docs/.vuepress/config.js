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
        locales: {
            '/zh/': {
                
                selectLanguageName: '简体中文',
                selectLanguageText: '选择语言',
                navbar: [
                    {
                        text: '首页',
                        link: '/zh/',
                    }, {
                        text: 'test',
                        link: '/test'
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
                    }
                ]
            },
        }
    })
})