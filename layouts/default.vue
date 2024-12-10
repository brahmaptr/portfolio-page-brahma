<template>
  <v-app dark :style="font===1 ? `font-family: 'Inter', sans-serif !important ;` : font===2 ? `font-family: 'Doto', sans-serif !important ;` :  `font-family: 'Edu AU VIC WA NT Guides', sans-serif !important ;` ">
    <img v-if="font===3" src="/scratch.jpg" style="position: fixed; width:100%;height:100%;opacity:0.1;z-index:0"/>
    <nuxt/>
  </v-app>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Edu+AU+VIC+WA+NT+Guides:wght@400..700&display=swap');

#app {
  font-family: 'Inter', sans-serif !important ;
  scroll-behavior: smooth;
}

html {
  
  scroll-behavior: smooth;
  background-color: #000;
}

.v-application--wrap {
  width:100%;
  overflow-x: hidden;
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
      font: 1,
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
  },
  watch:{
    '$store.state.font'(newV,oldV){
      this.font = newV
    }
  }
}
</script>
