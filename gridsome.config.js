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
  prefetch: { mask: '^$' },
  templates: {
    Post: '/blog/:year/:month/:day/:title',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md',
        refs: {
          author: {
            typeName: 'Profile'
          },
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Profile',
        baseDir: 'content/profiles',
        template: 'src/templates/Profile.vue',
        route: '/profile/:id'
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
