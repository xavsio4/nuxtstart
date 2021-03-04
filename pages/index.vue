<template>
  <div class="container">
    <div id="home">
      <Logo />
      <h1 class="title">
        nuxtstart
      </h1>
      <div class="links">
        <a class="btn btn-primary"
          href="https://xavsio4.github.io/nuxtstart/#/"
          target="_blank"
          rel="noopener noreferrer"
        >
          NuxtStart Documentation
        </a>
        <a class="btn btn-primary"
          href="https://github.com/xavsio4/nuxtstart"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
#home
{
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

</style>
