<template>
  <div>
    <div class="navbarPersonal" :style="'box-shadow: 0 0 200px 0px'+ boxShadowColor" :class="{'navbarScroll': scrollPosition > 50}">
      <v-container>
      <div class="d-flex justify-space-between align-center" >
              <div class="logo"></div>
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
                      :style="'width:200px'"
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
                    <div class="mb-2">Hi! I'm Senior Front-End Developer of Cityplan Indonesia.</div>
                    <div>I work on most project using NuxtJS and Figma. I merge technical skills with design knowledge to create innovative products that drive business. Mostly build tools for spatial analysis and public services. Bachelor of Computer Science.</div>
                    <div class="d-flex align-center mt-5">
                      <div class="mr-4"><v-btn outlined small><v-icon small class="mr-2">mdi-email</v-icon>Contact</v-btn></div>
                      <div class="iconButton"><v-icon>mdi-linkedin</v-icon></div>
                      <div class="iconButton"><v-icon>mdi-github</v-icon></div>
                      <div class="iconButton d-flex align-center justify-center"><img src="/img/freelancer.png" width="25px"></div>
                      <div class="iconButton d-flex align-center justify-center"><img src="/img/medium.png" width="25px"></div>
                    </div>
                  </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div class="text-center">
      
      Skill tags:
    </div>
    <div class="d-flex justify-center">
      <div style="max-width:600px;text-align: center;">
        <v-chip class="mr-b mt-2">Front-end Development</v-chip>
        <v-chip class="mr-b mt-2">Vue JS</v-chip>
        <v-chip class="mr-b mt-2">Nuxt JS</v-chip>
        <v-chip class="mr-b mt-2">GIS</v-chip>
        <v-chip class="mr-b mt-2">Arcgis Javascript</v-chip>
        <v-chip class="mr-b mt-2">Mapbox</v-chip>
        <v-chip class="mr-b mt-2">User Experience (UX)</v-chip>
        <v-chip class="mr-b mt-2">Figma</v-chip>
        <v-chip class="mr-b mt-2 light-blue">View More</v-chip>
      </div>
    </div>
    <div id="section-2" class="section-2" >

      <v-container>
        <v-row>
          <v-col>
        <div class="d-flex align-center justify-center mt-10" style="flex-flow:column" data-aos="fade-up">
          <div class="blueLine mb-9"></div>

          <v-chip small outlined class="purple purple--text text--lighten-2 mb-3">PRODUCT HIGHLIGHT</v-chip>

          <div class="mb-3">
           <img src="/img/spatia.png" width="150px">
          </div>

          <div style="max-width: 800px">
            <center><b>Dash spatia</b> is a spatial tools and analytical app that helps user analyzing spatial data with multiple tools. Dash is bringing multiple spatial datasets and a growing library of spatial analysis tools to help people do their location research faster and more efficient anywhere.</center>
          </div>
        </div>
      </v-col>
      </v-row>
      </v-container>

      <v-container class="mt-0 pt-0">
      
        <v-row>
          <v-col>
      <v-sheet
          class="mx-auto"
          style="border-radius:20px"
          elevation="8"
        >
          <v-slide-group
            v-model="model"
            class="pa-4"
            show-arrows
          >
            <v-slide-item
              v-for="n in 6"
              :key="n"
              v-slot="{ active }"
            >
              <v-card
                :color="active ? undefined : 'grey lighten-1'"
                class="ma-4"
                width="300"
              >
              <img :src="'/img/'+n+'.jpg'" width="100%"/>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

        <div class="d-flex justify-center mt-5">
          <v-btn class="purple--text mt-3 text--lighten-2" rounded style="width:250px" href="https://spatia.id" target="_blank">DISCOVER DASH SPATIA <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
        </div>
        </v-col>
      </v-row>
      </v-container>
      

    </div>
    
    <v-container>
    <div class="blueLine mt-8"></div>
  </v-container>

    <div class="menupadSection  pt-10 pb-10">
      
      <div class="d-flex justify-center">
      <v-chip small outlined class="orange orange--text mb-3">PRODUCT HIGHLIGHT</v-chip>
      </div>
      
      <div class="d-flex justify-center">
      <div class="rounded-lg" style="width:fit-content;">
           <img src="/img/menupad.svg" width="200px">
      </div>
    </div>

        <div class="section-2">
          <v-container>
            <div class="d-flex align-center justify-center" style="flex-flow:column" data-aos="fade-up">
              <div style="max-width: 800px"  data-aos="fade-up">
                <center>Menupad helps culinary businesses to provide digital menus, automate whatsapp orders and organize online store links or social media for your business. Direct your customers to digital menus specially designed for smartphone screens.

                This menu can be accessed via a QR code, or via a link on your social media profile.</center>
              </diV>
            </div>
          </v-container>
        </div>
        
      <v-container>
        <v-row>
          <v-col>
          <v-sheet
          data-aos="fade-up"
              class="mx-auto elevation-0"
              elevation="8"
              style="background-color: transparent;"
            >
              <v-slide-group
                v-model="model"
                show-arrows
              >
                <v-slide-item
                  v-for="n in 8"
                  :key="n"
                >
                  <v-card
                    class="ma-4 elevation-0"
                      width="175"
                      style="background-color:transparent"
                  >
                  <img :src="'/img/m'+n+'.png'" width="100%"/>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
            
        <div class="d-flex justify-center my-5">
          <v-btn class="red--text mt-3" rounded style="width:250px" href="https://menupad.link" target="_blank">DISCOVER MENUPAD <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
        </div>
          </v-col>
          </v-row>
        </v-container>
    </div>


    <v-container>
    <div>
      <div class="blueLine"></div>
    </div>
  </v-container>

  <v-container>
    <v-row>
      <v-col>
        <div class="text-center mb-5">
          <h1>
            Publication<span class="ml-3"><v-icon  :style="'color:'+boxShadowColor">mdi-newspaper-variant-multiple</v-icon></span>
          </h1>
        </div>
        <div class="d-flex justify-center">
          <div style="max-width:600px">
              <div class="mb-5">
                <b>Data-to-Text for Generating Information of Weather and Air Quality in the R Programming Language
                  </b>
                  <div>
                    Journal of Engineering Science and Technology<br/>
                    Vol. 14, No. 1 (2019) 498 - 508<br/>
                    © School of Engineering, Taylor’s University
                  </div>
                  <v-btn small class="mt-2" outlined color="primary">Visit page</v-btn>
              </div>
              <div class="mb-5">
                <b>Building Map-Based Web Application using Nuxt and Mapbox
                  </b>
                  <div>
                    Medium Article
                  </div>
                  <v-btn small class="mt-2" outlined color="primary">Visit page</v-btn>
              </div>
              <div class="mb-5">
                <b>Using IBM’s AutoAI: How I build a salary prediction system
                  </b>
                  <div>
                    Medium Article
                  </div>
                  <v-btn small class="mt-2" outlined color="primary">Visit page</v-btn>
              </div>
              <div>
                <b>Moving Towards a Goal — 5 Reasons IBM Cloud Developer Certification can escalate your career
                  </b>
                  <div>
                    Medium Article
                  </div>
                  <v-btn small class="mt-2" outlined color="primary">Visit page</v-btn>
              </div>
              <div>
                <b>Client-side PDF Generation: If you struggled with dynamic content positioning in jsPdf
                  </b>
                  <div>
                    Medium Article
                  </div>
                  <v-btn small class="mt-2" outlined color="primary">Visit page</v-btn>
              </div>
          </div>
      </div>
      </v-col>
    </v-row>
  </v-container>

  </div>
</template>

<style scoped lang="scss">
$cyan:#00BCD4;
$light-blue-lighten-2:#4FC3F7;

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
  background-color:rgba(0,0,0,0.8);
  position:fixed;
  display:flex;
  align-items: center;
  top:0;
  width:100%;
  height:60px;
  z-index:50 !important;    
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 0.2s ease-in-out;
  border-bottom:2px solid #000000;
}


.navbarScroll{
  box-shadow: none !important;
  border-bottom:2px solid rgba(79,195,247,0.3);
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

.blueLine {
  height:2px;
  width:100%;
  border-radius:20px;
  background-color:#272727;
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
  width:140px;
  height:30px;
  transition:0.2s;
  cursor:pointer;
  &:hover {
  transition:0.2s;
    background:url('/img/logo-light.png') no-repeat;
    background-size: contain;
    width:140px;
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
  margin-top:120px;
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
  background-color:#000000;
  padding:5px;
  width:30px;
  border-radius:5px;
  height: 30px;
  display:flex;
  align-items:center;
  justify-content: center;
  margin-right:15px;
  opacity:0.6;
  border:1px solid #000000;
  .v-icon {
    font-size:1em;
  }
  img {
    width:17px;
  }
  &:hover {
    opacity:1;
    border:1px solid $light-blue-lighten-2;

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
  margin-top:70px;
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
      model:0
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
