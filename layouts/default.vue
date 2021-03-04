<template>
  <div>
    <top-nav></top-nav>
    <Nuxt />
  </div>
</template>

<script>
import TopNav from '~/components/TopNav.vue'
export default {
  components: { TopNav },
  computed: {
    connectionStatus() {
      return this.$nuxt.isOffline
    },
  },
  watch: {
    connectionStatus(offline) {
      if (offline) {
        // hide the online toast if it exists
        this.$bvToast.hide('online')

        // create a new toast for offline notification
        // that doesn't hide on its own
        this.$bvToast.toast('You are now offline', {
          id: 'offline',
          toaster: 'b-toaster-bottom-right',
          noCloseButton: true,
          solid: true,
          noAutoHide: true,
          variant: 'danger',
        })
      } else {
        // hide the offline toast if it exists
        this.$bvToast.hide('offline')

        // create a new toast for online notification
        // that auto hides after a given time
        this.$bvToast.toast('You are now online', {
          id: 'online',
          toaster: 'b-toaster-bottom-right',
          noCloseButton: true,
          solid: true,
          autoHideDelay: 5000,
          variant: 'success',
        })
      }
    },
  }, //watch
}
</script>

<style>

</style>
