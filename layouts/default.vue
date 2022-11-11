<template>
  <v-app dark>
    <nuxt/>
  </v-app>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
#app {
  font-family: 'Inter', sans-serif !important ;
  scroll-behavior: smooth;
}


.v-color-picker__dot {
    display: none !important;
  }


  .v-color-picker__alpha {
    display: none !important;
  }


  .v-color-picker__hue {
    margin-bottom:0 !important;
  }
</style>


<script>

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
