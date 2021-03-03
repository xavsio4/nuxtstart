export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxtstart',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
     { src: '~/plugins/vue-pwd-meter.js', mode: 'client' },
    { src: '~/plugins/masonry.js', ssr: false },
    { src: '~/plugins/moment_filters.js', mode: 'client' },
    { src: '~/plugins/social-sharing.js', mode: 'client' },
    { src: '~/plugins/animateonscroll.js', mode: 'client' },
    { src: '~/plugins/ga.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // '@nuxt/auth',
    '@nuxtjs/auth',
    // https://github.com/nuxt-community/universal-storage-module
    '@nuxtjs/universal-storage',
    // i18n
    'nuxt-i18n',
    // fontawesome configuration
    [
      'nuxt-fontawesome',
      {
        component: 'fa',
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faPen',
              'faExclamationCircle',
              'faQuestionCircle',
              'faCog',
              'faBicycle',
              'faChild',
              'faExternalLinkAlt',
              'faPlus',
              'faSearch',
              'faTrashAlt',
              'faBell',
              'faBookmark',
              'faEllipsisV',
              'faShareAlt',
              'faSkullCrossbones',
              'faTags',
              'faTag',
              'faTh',
              'faTimes',
              'faCloudUploadAlt',
              'faCloudDownloadAlt',
              'faSignOutAlt',
              'faThList'
            ]
          }
        ]
      }
    ],
    '@nuxtjs/color-mode',
    'nuxt-cookie-control',
    '@nuxtjs/moment',
    'nuxt-vue-select',
    'nuxt-i18n',
    '@nuxt/image'
    
  ], //modules declaration

  /*
  **  universal storage options
  */
  storage: {
    localStorage: {
      prefix: 'nuxstart_' //change this
    },
  },

  /**
   * I18N Configuration
   */
  i18n: {
    langDir: 'lang/',
    defaultLocale: 'en',
    lazy: true,
    locales: [{
      name: 'Español',
      code: 'es',
      iso: 'es-ES',
      file: 'es.js'
    },
    {
      name: 'English',
      code: 'en',
      iso: 'en-US',
      file: 'en.js'
    },
    {
      name: 'Français',
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr.js'
    }
    ]// locales

  }, // /i18N

  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
   axios: {
    baseURL: process.env.API_URL,
    redirectError: {
      401: '/login',
      404: '/notfound'
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

   /**
   * I18N Configuration
   */
  i18n: {
    langDir: 'lang/',
    defaultLocale: 'en',
    lazy: true,
    locales: [{
      name: 'Español',
      code: 'es',
      iso: 'es-ES',
      file: 'es.js'
    },
    {
      name: 'English',
      code: 'en',
      iso: 'en-US',
      file: 'en.js'
    },
    {
      name: 'Français',
      code: 'fr',
      iso: 'fr-FR',
      file: 'fr.js'
    }
    ]// locales

  }, // /i18N configuration

  // auth configuration
  auth: {
    localStorage: true,
    redirect: {
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/dashboard'
    },
    strategies: {
      local: {
        endpoints: {
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'access_token'
          },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/user', method: 'get', propertyName: false }
        },
        token_key: 'access_token',
        tokenRequired: true,
        tokenType: 'Bearer'
      }
    }
  },// /auth configuration

  /**
  * Sitemap Module Configuration
  */
  sitemap: {
    hostname: 'https://yoursite',

    routes: [
      '/about',
      '/'
      
    ],
    sitemaps: [
      {
        path: '/sitemap.xml',
        exclude: [
          // '/secret',
          // '/admin/**'
        ],
        routes: [
          '/about',
          '/'
        ],
        gzip: true
      },  
    ]
  },// /sitemap configuration

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
