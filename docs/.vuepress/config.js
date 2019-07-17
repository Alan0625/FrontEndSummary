module.exports = {
  base:'/FrontEndSummary/',
  title: 'FE-Summary',
  description: '前端知识总结',
  // 为每个代码块显示行号
  markdown: {
    lineNumbers: false
  },
  themeConfig: {
    nav: [
      { text: 'HTML', link: '/html/' },
      { text: 'CSS', link: '/css/' },
      { text: 'JS', link: '/js/' },
      { text: 'HTTP', link: '/http/' },
      { text: 'ES6', link: '/es6/' },
      { text: 'Blog', link: 'https://alan0625.github.io/' },
      { text: 'Github', link: 'https://github.com/Alan0625/' },
    ],
    sidebar: [
      {
        title: 'HTML',
        collapsable: false,
        children: [
          '/html/'
        ]
      },
      {
        title: 'CSS',
        children: [
          '/css/'
        ]
      },
      {
        title: 'JS',
        children: [
          '/js/'
        ]
      },
      {
        title: 'HTTP',
        children: [
          '/http/'
        ]
      },
      {
        title: 'ES6',
        children: [
          '/es6/'
        ]
      }
    ],
    lastUpdated: 'Last Updated',
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'Alan0625/FrontEndSummary',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: '查看源码',

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    // docsRepo: 'vuejs/vuepress',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'docs',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}