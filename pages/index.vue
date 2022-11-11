<template>
  <div>
    <div class="navbarPersonal" :class="{'change_color': scrollPosition > 50}">
      <v-container>
      <div class="d-flex justify-space-between align-center" >
              <div v-if="$vuetify.breakpoint.smAndDown"></div>
              <div class="logo" v-if="!$vuetify.breakpoint.smAndDown"></div>
              <div v-if="$vuetify.breakpoint.smAndDown">
                <v-btn
                  color="cyan"
                  outlined
                  dark
                  @click.stop="drawer = !drawer"
                >
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </div>
              <div v-else class="navMenus d-flex align-center grey--text text--lighten-1">
                <div class="mr-5" href="#section-2">Highlight</div>
                <div class="mr-5" href="#section-2">Background</div>
                <div class="mr-5" @click="contact=true">Project</div>
                <div class="mr-5" @click="contact=true">Publication</div>
                <div class="mr-5" @click="contact=true">Competition</div>
              </div>
              <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex justify-end" style="width:200px"><v-btn class="buttonScaled" small outlined color="light-blue lighten-2" @click="contact=true"><v-icon small class="mr-2">mdi-download</v-icon>Curriculum Vitae</v-btn></div>
          </div>
        </v-container>
    </div>

    <div class="mainSection" :class="{'marginTopMobile':$vuetify.breakpoint.smAndDown}">
      <v-container>
        <v-row>
          <v-col class="d-flex align-center justify-center" cols="12">
            <div class="d-flex"  style="flex-flow:row;" :class="{'flexWrap':$vuetify.breakpoint.smAndDown}">
              <div class="d-flex align-center px-10" style="flex-flow:column wrap" :class="{'full-width':$vuetify.breakpoint.smAndDown}">
                <div class="effectContainer" :class="{'flexGrow':$vuetify.breakpoint.smAndDown}">
                  <div class="imgContainer">
                    <!-- <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_gqhy4rmx.json" class="mainLottieScale" background="transparent" speed="0.3" loop autoplay></lottie-player> -->
                    <lottie-player src="/img/reactor2.json" class="mainLottieScale" background="transparent" speed="0.5" loop autoplay></lottie-player>
                  </div>
                  <div class="imgContainer">
                    <img src="/img/photo.png" :style="'box-shadow: 0 0 60px 10px'+ boxShadowColor">
                  </div>
                  
                  <div class="d-flex justify-center" style="width:100%;bottom:-30px;position:absolute;z-index:20">
                    <v-color-picker
                      v-model="boxShadowColor"
                      :style="'width:100%;max-width:200px'"
                      class="ma-2"
                      hide-canvas
                      hide-inputs
                      mode="rgba"
                    ></v-color-picker>
                  </div>

                </div>
              </div>
              <div style="max-width:500px;z-index:10" class="mt-5 ml-10" :class="{'full-width zeroLeft':$vuetify.breakpoint.smAndDown}">
                <div class="pa-4">
                    <div class="d-flex align-start" style="position:relative">
                      <div class="nameText mr-2">Brahma Putra<span :style="'color:'+boxShadowColor">.</span></div><div class="updownAnimated" :style="'opacity:0.2;border-radius:50px;width:100px;height:100px;background-color:'+boxShadowColor+';box-shadow: 0 0 50px 0px ' +boxShadowColor"></div>
                    </div>
                    <div class="mb-2">Senior Front-End Developer of Cityplan Indonesia.</div>
                    <div>I work on most project using NuxtJS and Figma. I merge technical skills with design knowledge to create innovative products that drive business. Mostly build tools for spatial analysis and public services.</div>
                    <div class="d-flex align-center mt-5">
                      <div class="mr-2"><v-btn outlined x-small>Contact</v-btn></div>
                      <div class="iconButton"><v-icon>mdi-linkedin</v-icon></div>
                      <div class="iconButton"><v-icon>mdi-github</v-icon></div>
                      <div class="iconButton d-flex align-center justify-center"><img src="/img/freelancer.png" width="25px"></div>
                    </div>
                  </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>


  </div>
</template>

<style scoped lang="scss">
$cyan:#00BCD4;

.flexGrow {
  flex-grow: 1 !important;
}

.flexWrap {
  flex-flow: row wrap !important;
}
.zeroLeft {
  margin-left: 0 !important;
}

.navbarPersonal {
  position:fixed;
  display:flex;
  align-items: center;
  top:0;
  width:100%;
  height:80px;
  z-index:999;
}

.navMenus {
  div {
    transition:0.2s;
    padding-bottom:2px;
    padding-left:5px;
    border-radius:0 0 0 5px;
    padding-right:5px;
    &:hover {
      
      transition:0.2s linear;
      a {
        transition:0.2s;
        
      color:white !important;
      }
      color:white !important;
    }
  }
  cursor:pointer;
  a {
    color:#fff !important; text-decoration: none;
  }
}

.buttonScaled {
  &:hover {
    transition: all ease-in-out 0.5s;
    padding-top:20px;
    padding-bottom:20px;
  }
}

.logo {
  background:url('/img/logo-long.png') no-repeat;
  background-size: contain;
  width:150px;
  height:30px;
  transition:0.2s;
  cursor:pointer;
  &:hover {
  transition:0.2s;
    background:url('/img/logo-light.png') no-repeat;
    background-size: contain;
  width:150px;
  height:30px;
  }
}

.effectContainer {
  width:300px;
  height:300px;
  position:relative;
}
.imgContainer {
  width:100%;
  height:300px;
  position:absolute;
  z-index:0;
  flex-grow:0;
  display:flex;
  justify-content: center;
  align-items: center;
  top:0;

  img {
    transition:0.3s;
    width:90%; 
    border-radius:1000px;
  
   
  }
}

.mainSection {
  width:100%;
  margin-top:150px;
  overflow:hidden;
  padding-top:50px;
  padding-bottom:50px;
}

.nameText{
  font-weight: bold;
  position: relative;
  z-index:10;
  font-size:3em;
}
.iconButton {
  margin-right:10px;
  opacity:0.6;
  &:hover {
    opacity:1;
  }
}

.mainLottieScale {
  transform:scale(1.25);
}

.full-width{
  width:100%;
  max-width:100% !important;
}

.marginTopMobile {
  margin-top:20px;
}

.updownAnimated 
 {
  animation: MoveUpDown 5s linear infinite;
  position: absolute;
  z-index:0;
}

@keyframes MoveUpDown {
  0%, 100% {
    bottom: 0;
  }
  50% {
    bottom: 20px;
  }
}


@media only screen and (max-width: 600px) {
  .effectContainer {
    width:100%;
    img{
      width:90%;
    }
  }
  .mainLottieScale {
    transform: scale(1.2);
  }

  .nameText {
    font-size:2em;
  }
}
</style>

<script>

import "@lottiefiles/lottie-player";
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data(){
    return {
      scrollPosition:null,
      boxShadowColor: '#00E2FFFF',
    } 
  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);
  },
  methods:{
    
    updateScroll() {
       this.scrollPosition = window.scrollY
    }
  }
}
</script>
