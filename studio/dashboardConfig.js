export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '5ee8d8faab9828d81a3b7483',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-nc69szmm',
                  apiId: '2609858d-2bf6-4339-ad56-873f4503319e'
                },
                {
                  buildHookId: '5ee8d8fae571c98676fa91ed',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-33gyucts',
                  apiId: '2f34e7cc-8d89-45fe-bb31-47d376c7f928'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jordankoerner/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-33gyucts.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
