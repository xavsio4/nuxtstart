# NuxtStart - a boilerplate for a pack featured Nuxt install

** Wait before using this it is not yet finished **

In case you don't know NUXT, it is a frontend framework, based on vuejs, that will ease the way you build jamstack sites, websites or webapps.

For detailed explanation on Nuxt, check out [Nuxt.js docs](https://nuxtjs.org).

and if you don't know vuejs, go here [vueJs docs](https://vuejs.org)

This very documentation is generated using [Docsify](https://docsify.js.org/). The main files are found within the /docs folder. This is the README.MD file.

## Features overview

- PWA ready
- Nuxt Content included
- Bootstrap Vue ready
- FontAwesome Ready
- SASS interpreter ready
- I18N ready
- Cookie control module ready
- Nuxt color mode included
- Momentjs included
- VueSelect included
- social meta tag ready
- Nuxt Auth ready
- Nuxt Image ready
- Nuxt Sitemap ready
- Nuxt Robots ready
- Nuxt Universal Storage ready
- Vue password meter included
- Custom 404 page
- Login form
- Registration form
- .env usage
- online/offline check in default layout
- Documentation using docsify in /docs folder
- scss support with custom.scss and added custom.css flavour

Don't worry, we are going to review each module one by one later in the doc.

## Quick Start

- Clone this repository
- then run these commands within the project folder

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev
```

And these are the commands to generate your project for deployment. The "dist" folder will be used by default. To change that behavior, just edit the package.json file.

```bash
# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## How did I generate this boilerplate

Simply by using the nuxt command line to create a new project:

```bash
npm init nuxt-app nuxstart
```

These are the presets I've chosen

- javascript
- npm
- bootstrap vue as a UI framework
- axios module
- pwa module
- content module
- prettier
- SSR
- and static jamstack deployment

Check the docs for extended information [NuxtStart Docs](https://xavsio4.github.io/nuxtstart/#/)

# Release notes

- 04/03/2021 - added scss support
- 03/03/2021 - init version..do not use right away in prod
