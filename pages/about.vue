<template>
<b-container class="mt-5">
<em>* this about page gets content from the hello.md file inside content folder</em>
<h1>About</h1>
    <h2>{{article.title}}</h2>
    <em>{{article.description}}</em>
<nuxt-content :document="article" />
</b-container>
    
</template>
<script>
    export default {
  async asyncData({ $content, params }) {
    const article = await $content('hello').fetch()

    return {
      article
    }
  }
}
</script>