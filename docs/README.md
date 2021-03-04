# NuxtStart - a boilerplate for a packed featured Nuxt install

In case you don't know NUXT, it is a frontend framework, based on vuejs, that will ease the way you build jamstack sites, websites or webapps.

For detailed explanation on Nuxt, check out [Nuxt.js docs](https://nuxtjs.org).

and if you don't know vuejs, go here [vueJs docs](https://vuejs.org)

This very documentation is generated using [Docsify](https://docsify.js.org/). The main files are found within the /docs folder. This is the README.MD file. The theme used for the doc is this one [Dark-Light Theme](https://docsify-darklight-theme.boopathikumar.me/#/)

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
- onLine OffLine test within the default layout

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

## Modules/features

All settings of the following modules can be set within the nuxt.config.js file

### Nuxt/image

Just put your pictures assets in the static folder and use the following tag:

```html
<nuxt-img fit="contain" src="/fond.png"></nuxt-img>
```

That way you will benefit directly from lazyloading and a lot of other optimizations features. Just check the documentation. [Nuxt/Image](https://image.nuxtjs.org/)

### Nuxt/Moments

This is the wrapper of momentsjs plugin that enables you to easily format dates when your want to display them. We've included a plugin (look in the plugins folder) where we have create some presets for you.

Look at the moment_filters.js file.

And this is how you use it on your pages or components:

```html
<nuxt-img fit="contain" src="/fond.png"></nuxt-img>
```

For more information, visit the repository [Nuxt/Moments](https://github.com/nuxt-community/moment-module)

### Internatianalization (I18n)

You can make a multi lingual frontend out of the box. The language files are organized in the lang folder. We've included 3 languages but you can add all you want. Don't forget to adjust settings in the nuxtconfig file.

And this is how you use it on your pages/components

```html
{{ $t('hello') }}
```

There is a lang switcher within the topNav component. More information at [Nuxt/I18n](https://i18n.nuxtjs.org/)

### FontAwesome

By default, within the nuxtconfig file, I've imported only a few icons. I do prefer that way in order to avoid loading icons that you are never going to use. Check on the fontawesome page the icons you need and follow the pattern in the nuxtconfig file.

To use the icon on a page/component use the following snippet.

```html
<fa :icon="['fas', 'pen']" />
```

### TopNav component

This is just an example of implementation of the bootstrap navbar. It is just there as an example and it is included in the default layout. That component has also the lang switcher.

More about bootstrap vue at

### Nuxt/content

The about page is a simple implementation of the Nuxt Content feature. Look at it and learn more here [Nuxt/Content](https://content.nuxtjs.org/)

\*\*\* to be continued
