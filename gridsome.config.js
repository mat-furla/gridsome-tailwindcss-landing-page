// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwind = require('tailwindcss')

module.exports = {
  siteName: 'Lorem ipsum',
  siteUrl: 'https://lorem-ipsum.com',
  siteDescription: 'Lorem ipsum dolor sit amet',
  icon: './static/logo.png',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()]
      }
    }
  },
  templates: {
    Post: '/blog/:year/:month/:day/:title',
    Profile: [
      {
        path: '/profile/:id',
        component: '@/templates/Profile.vue'
      }
    ],
    Tag: [
      {
        path: '/tag/:id',
        component: '@/templates/Tag.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Profile',
        path: 'content/profiles/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          author: 'Profile',
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-svg',
      options: {
        goesBothWays: true
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/admin'],
        cacheTime: 600000
      }
    },
    {
      use: 'gridsome-plugin-robots-txt',
      options: {
        policy: [
          {
            userAgent: '*',
            allow: '/',
            disallow: '/admin'
          }
        ]
      }
    }
  ]
}
