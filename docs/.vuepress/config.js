module.exports = {
  title: '标题',
  description: '描述',
  port: 5000,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Doc1', link: '/doc1/' },
      { text: 'Doc2', link: '/doc2/' },
      { text: 'Google', link: 'https://google.com' },
      {
        text: '下拉列表',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      },
      {
        text: '分组下拉列表',
        items: [
          { text: 'Group1', items: [{ text: 'Doc1', link: '/doc1/' },{ text: 'Doc2', link: '/doc2/' }] },
          { text: 'Group2', items: [ { text: 'Google', link: 'https://google.com' }] }
        ]
      }
    ],
    sidebar: {
	  '/doc1/': [
	    {
	      title: 'Group1',
	      children: ['/doc1/group1/file1','/doc1/group1/file2']
	    },
	    {
	      title: 'Group2',
	      children: ['/doc1/group2/file3']
	    },
	    '/doc1/file4'
	  ],
	  '/doc2/': [
        {
          title: 'Group1',
          children: ['/doc2/group1/file1']
        }
	    ]
    }
  }
}