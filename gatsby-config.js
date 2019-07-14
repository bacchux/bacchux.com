module.exports = {
  siteMetadata: {
    title: 'BacchUX',
    siteUrl: 'https://bacchux.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-medium',
      options: {
        username: 'smartive',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-remove-trailing-slashes',
    'gatsby-plugin-zopfli',
    'gatsby-plugin-brotli',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BacchUX',
        short_name: 'BacchUXW',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#1e324b',
        display: 'minimal-ui',
        icon: 'static/icon.png',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-143627358-1',
        anonymize: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: [],
        query: `{
      site {
        siteMetadata {
          siteUrl
        }
      }
      allSitePage(filter: {path: {regex: "/^(?!.*?404).*/"}}) {
        edges {
          node {
            path
          }
        }
      }
    }
`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://tech.us3.list-manage.com/subscribe/post?u=7dc96259ab8689c930f74fba7&amp;id=39086a1b15',
      },
    },
  ],
};
