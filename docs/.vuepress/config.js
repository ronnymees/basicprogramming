module.exports = {
    title: 'Basic Programming',
    description: 'c# programmeren graduaat Internet of Things ( VIVES )',
    themeConfig: {
      logo: '/files/afbeelding1.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Company', link: 'https://www.vives.be' },
        { text: 'Contact', link: 'mailto:ronny.mees@vives.be' },      
      ],
      sidebarDepth: 1,
      repo: 'https://github.com/ronnymees/basicprogramming',
      docsDir: 'docs',
      docsBranch: 'master',
      sidebar: [
          '/00_installatie_visual_studio/',
          '/01_introductie/',
          '/02_objecten_events/',
          '/03_variabelen_berekeningen/',
          '/04_methoden_argumenten/',
          '/05_klassen',
          '/06_objecten/',
          '/07_beslissingen/',
          '/08_herhalingen/',
          '/09_debuggen/',
      ],      
    },
    markdown: {
      lineNumbers: true,
    },
    serviceWorker: true,
    plugins: [
      ['vuepress-plugin-zooming', {
        // selector for images that you want to be zoomable
        // default: '.content img'
        selector: 'img',
  
        // make images zoomable with delay after entering a page
        // default: 500
        // delay: 1000,
  
        // options of zooming
        // default: {}
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      }],
      ['container', {
        type: 'output',
        defaultTitle: 'Output',
      }],
    ['@dovyp/vuepress-plugin-clipboard-copy', true],  
    ],
  }