export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ebaf2503e0707e0d01d6379',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-2f6t96bv',
                  apiId: '13b7e8a8-af73-49f0-8b2a-97bfe2c87893'
                },
                {
                  buildHookId: '5ebaf2502fbef0d8a31decab',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1ssasvmt',
                  apiId: 'a415d1e2-46f9-4c6f-bda9-8de8a264c44d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/neerajsharma79/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1ssasvmt.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
