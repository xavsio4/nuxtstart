<template>
  <b-navbar toggleable="lg" type="light" variant="faded">
    <b-navbar-brand href="#">
      <nuxt-link to="/">
        <nuxt-start class="w-50" />
      </nuxt-link>
    </b-navbar-brand>
    <b-collapse id="navbar-toggle-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/" left> Home </b-nav-item>
         <b-nav-item to="/about" left> About </b-nav-item>

        <b-nav-item v-if="!authenticated" to="/register" left>
          Register
        </b-nav-item>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <!-- Navbar dropdowns -->

        <b-nav-item v-if="!authenticated" to="/login" left> Login </b-nav-item>
        <b-nav-item-dropdown v-if="authenticated" text="User" right>
          <b-dropdown-item href="/dashboard"> Bookmarks </b-dropdown-item>
          <b-dropdown-item href="/collections"> Collections </b-dropdown-item>
          <b-dropdown-item href="/account"> Account </b-dropdown-item>
          <b-dropdown-item @click.native="logout()"> Logout </b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item />
      </b-navbar-nav>
    </b-collapse>

    <b-navbar-toggle target="navbar-toggle-collapse" />
  </b-navbar>
</template>
<script>
import NuxstStart from './NuxtStart'
// import ColorMode from '~/components/ColorMode'
export default {
  components: {
    NuxstStart,
    //  ColorMode
  },
  data() {
    return {}
  }, // data
  computed: {
    authenticated() {
      return this.$auth.loggedIn
    },
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  }, // /computed
  methods: {
    logout() {
      this.authenticated = false
      this.$auth.logout()
    },
  }, // /methods
}
</script>
<style scoped>

.nav-item a:hover {
color:#fff!important;
}

.nav-item  .nuxt-link-exact-active
{
    color:darkseagreen!important;
}

.nav-item .nav-link {
  color: #E8F9E9 ;
  padding: 32px 15px;
  height: auto;
  line-height: 1;
  font-weight: 600;
  text-transform: uppercase;
}


</style>
