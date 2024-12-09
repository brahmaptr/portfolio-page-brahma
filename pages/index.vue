<template>
  <div>
    <div class="navbarPersonal" data-aos="fade-down" :style="'box-shadow: 0 0 200px 0px'+ boxShadowColor" :class="{'navbarScroll': scrollPosition > 50}">
      <v-container>
      <div class="d-flex justify-space-between align-center" >
              <div @click="scrollTo('#')" style="font-size:26px; font-weight: bold;">
                Brahma<span :style="'color:'+boxShadowColor+';font-size:36px;line-height:1'">.</span>
              </div>  
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
                <div class="mr-5" @click="scrollTo('#highlight')">Highlight</div>
                <div class="mr-5" @click="scrollTo('#background')">Background</div>
                <div class="mr-5" @click="scrollTo('#publication')">Publication</div>
                <div class="mr-5" @click="scrollTo('#competition')">Competition</div>
                <!-- <div class="mr-5" @click="$router.push('/project')">Projects</div> -->
              </div>
              <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex justify-end" style="width:200px"><v-btn href="/pdf/cv-brahma-putra.pdf" download="" target="blank" class="buttonScaled" small outlined color="light-blue lighten-2"><v-icon small class="mr-2">mdi-download</v-icon>Curriculum Vitae</v-btn></div>
          </div>
        </v-container>
    </div>

    <div class="mainSection" :class="{'marginTopMobile':$vuetify.breakpoint.smAndDown}">
      <v-container>
        <v-row>
          <v-col class="d-flex align-center justify-center" cols="12">
            <div class="d-flex"  style="flex-flow:row;" :class="{'flexWrap':$vuetify.breakpoint.smAndDown}">
              <div class="d-flex align-center px-10" style="flex-flow:column wrap" :class="{'full-width':$vuetify.breakpoint.smAndDown}">
                <div data-aos="zoom-in-up" class="effectContainer" :class="{'flexGrow':$vuetify.breakpoint.smAndDown}">
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
                      <div class="nameText mr-2" data-aos="fade-up">Brahma Putra<span :style="'color:'+boxShadowColor">.</span></div><div class="updownAnimated" :style="'opacity:0.2;border-radius:50px;width:100px;height:100px;background-color:'+boxShadowColor+';box-shadow: 0 0 50px 0px ' +boxShadowColor"></div>
                    </div>
                    <div class="mb-2" data-aos="fade-left">Hi! I'm Senior Front-End Developer of <span class="hoverToLink" @click="scrollTo('https://cityplan.id','blank')">Cityplan Indonesia</span>.</div>
                    <div data-aos="fade-right">I work on most project using NuxtJS and Figma. I merge technical skills with design knowledge to create innovative products that drive business. Mostly build tools for spatial analysis and public services. Bachelor of Computer Science.</div>
                    <div class="d-flex align-center mt-5" data-aos="zoom-in-up">
                      <div class="mr-4" ><v-btn outlined small @click="contactDialog=true"><v-icon small class="mr-2">mdi-email</v-icon>Contact</v-btn></div>
                      <div class="iconButton" @click="scrollTo('https://github.com/brahmaputra7','blank')"><v-icon>mdi-github</v-icon></div>
                      <div class="iconButton d-flex align-center justify-center" @click="scrollTo('https://brahmaputra1996.medium.com/','blank')"><img src="/img/medium.png" width="25px"></div>
                      <div class="iconButton" @click="scrollTo('https://www.linkedin.com/in/brahmaputra7/','blank')"><v-icon>mdi-linkedin</v-icon></div>
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
        <v-chip @click="skillsDialog=true" class="mr-b mt-2 light-blue">View More</v-chip>
      </div>
    </div>
    <div id="highlight" class="section-2" >

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
            <div class="text-center"><b>Dash spatia</b> is a product of <i>cityplan</i> that helps user analyzing spatial data with multiple tools. <div class="my-2" v-if="$vuetify.breakpoint.smAndDown"></div> Dash is bringing multiple spatial datasets and a growing library of spatial analysis tools to help people do their location research faster and more efficient anywhere.</div>
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
            active-class="success"
          >
            <v-slide-item
              v-for="n in 6"
              :key="n"
              v-slot="{  }"
            >
              <v-card
                class="ma-4"
                width="300"
              >
              <img class="imgSlider" :src="'/img/'+n+'.jpg'" width="100%"  @click="previewImg('/img/'+n+'.jpg','dash')"/>
              </v-card>
            </v-slide-item>
          </v-slide-group>
        </v-sheet>

        <div class="d-flex justify-center mt-5">
          As used by<br/>
        </div>

        <div class="asUsedBy d-flex justify-center align-center mt-5">
          <div><img class="mr-5" src="/img/rhr.png" width="100px"></div>
          <div><img class="mr-5" src="/img/kita.png" width="100px"></div>
          <div><img class="mr-5" src="/img/lion.png" width="120px"></div>
          <div><img class="mr-5" src="/img/astro.png" width="120px"></div>
          <div><img class="mr-5" src="/img/btn.png" width="120px"></div>
          <div><img class="mr-5" src="/img/flash.png" width="120px"></div>
          <div><img class="mr-5" src="/img/erajaya.png" width="100px"></div>
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
           <img class="imgSlider"  src="/img/menupad.svg" width="200px"   >
      </div>
    </div>

        <div class="section-2">
          <v-container>
            <div class="d-flex align-center justify-center" style="flex-flow:column" data-aos="fade-up">
              <div style="max-width: 800px"  data-aos="fade-up">
                <center>Menupad helps culinary businesses to provide digital menus, automate whatsapp orders and organize online store links or social media for your business. <div class="my-2" v-if="$vuetify.breakpoint.smAndDown"></div>  Direct your customers to digital menus specially designed for smartphone screens.  <div class="my-2" v-if="$vuetify.breakpoint.smAndDown"></div>

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
                  <img class="imgSlider" :src="'/img/m'+n+'.png'" width="100%" @click="previewImg('/img/m'+n+'.png','menupad')"/>
                  </v-card>
                </v-slide-item>
              </v-slide-group>
            </v-sheet>
            
          </v-col>
          </v-row>
        </v-container>
    </div>


    <v-container>
        <v-row>
          <v-col>
        <div class="d-flex align-center justify-center " style="flex-flow:column" data-aos="fade-up">
          <div class="blueLine mb-9"></div>

          <v-chip small outlined class="cyan cyan--text cyan--lighten-2 mb-3">PROTOTYPE HIGHLIGHT</v-chip>

          <div class="mb-3" style="font-size:1.1em;letter-spacing:2px">
           CITYPLAN EV SOLUTION
          </div>

          <div style="max-width: 800px">
            <div class="text-center">Cityplan interested to build the future of Electric Vehicle (EV) Ecosystem. We have researching several apps and analytical ideas. This is one of our early prototype, a smart routing plan considering multiple factos of EV.</div>
          </div>

          <img src="/img/ev.png" style="max-width:650px; width:100%;" class="my-5"/>
        </div>
      </v-col>
      </v-row>
      </v-container>
<!-- 
    <v-container>
      <div class=" pa-10 d-flex align-center justify-center viewProjectCta mb-10">
        <v-btn  @click="$router.push('/project')"  v-if="!$vuetify.breakpoint.smAndDown" class="light-blue darken-4" rounded outlined style="background:transparent !important;border:2px solid #ffffff !important">View All Experience in Projects  <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
        <v-btn  @click="$router.push('/project')" v-else small class="light-blue darken-4" rounded outlined 
        style="background:transparent !important;border:2px solid #ffffff !important">View All Experience in Projects  <v-icon class="ml-3">mdi-arrow-right</v-icon></v-btn>
      </div>
    </v-container> -->
    

  <v-container id="background">
    <v-row>
      <v-col>
        <div class="text-center mb-5">
          <h1>
            Background<span class="ml-3"><v-icon  :style="'color:'+boxShadowColor">mdi-shield-account</v-icon></span>
          </h1>
        </div>
        <div class="text-center">
          
        </div>
        <div class="d-flex justify-center">
          

          <v-timeline
              align-top
              dense
            >

          <v-timeline-item
              color="pink"
              >
            <h3>
              Work Experience
            </h3>
          </v-timeline-item>

          <v-timeline-item
              color="pink"
              hide-dot
              small
            >
            <div class="d-flex" style="flex-flow:row wrap">
              <img width="60px" class="mr-5" src="/img/cityplan.png" style="border-radius:20px"/>
                <div  style="flex-flow:row wrap">
                <div style="font-size:1.3em" class="mb-2"><b>Cityplan Indonesia</b></div>
                <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>JUN 2018 - Present </v-chip> Software Engineer, Front-End </div>
                </div>
              </div>
            </v-timeline-item>
          
            
          <v-timeline-item
              color="yellow"
              center
              small
              hide-dot
            >
            <div class="d-flex"  style="flex-flow:row wrap">
             <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img width="100%" src="/img/esdm.png" style="border-radius:20px"/></div>
              <div>
               <div style="font-size:1.3em" class="mb-2"><b>Ministry of Energy and Mineral Resource</b></div>
               <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>OCT 2016 - FEB 2017 </v-chip>Software Engineer (Internship)</div>
              </div>
            </div>

            </v-timeline-item>

            <v-timeline-item
              class="mt-3">
              <h3>
                Education
              </h3>
            </v-timeline-item>

            <v-timeline-item
                color="pink"
                center
                small
                hide-dot
              >
                <div class="d-flex" style="flex-flow:row wrap">
                  <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img width="100%" src="/img/upi.svg" style="border-radius:20px"/></div>
                    <div  style="flex-flow:row wrap">
                    <div style="font-size:1.3em" class="mb-2"><b>Indonesia University of Education</b></div>
                    <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>JUL 2013 - DEC 2017 </v-chip> Computer Science </div>
                    </div>
                  </div>
              </v-timeline-item>

              
            <v-timeline-item
                color="green"
              class="mt-3">
              <h3>
                Training
              </h3>
            </v-timeline-item>

            <v-timeline-item
                color="pink"
                center
                small
                hide-dot
              >
                <div class="d-flex" style="flex-flow:row wrap">
                  <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img width="100%" src="/img/treehouse.png" style="border-radius:20px"/></div>
                    <div  style="flex-flow:row wrap">
                    <div style="font-size:1.3em" class="mb-2"><b>Front-End Web Development</b></div>
                    <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>2018</v-chip> Teamtreehouse.com </div>
                    </div>
                  </div>
              </v-timeline-item>

              <v-timeline-item
                  color="pink"
                  center
                  small
                  hide-dot
                >
                  <div class="d-flex" style="flex-flow:row wrap">
                    <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img width="100%" src="/img/treehouse.png" style="border-radius:20px"/></div>
                      <div  style="flex-flow:row wrap">
                      <div style="font-size:1.3em" class="mb-2"><b>VueJS</b></div>
                      <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>2018</v-chip> Teamtreehouse.com </div>
                      </div>
                    </div>
                </v-timeline-item>

                

                <v-timeline-item
                    color="pink"
                    center
                    small
                    hide-dot
                  >
                    <div class="d-flex" style="flex-flow:row wrap">
                      <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img width="100%" src="/img/google.png" style="border-radius:20px"/></div>
                        <div  style="flex-flow:row wrap">
                        <div style="font-size:1.3em" class="mb-2"><b>UX Design</b></div>
                        <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>Ongoing</v-chip> Google UX Professional Certification</div>
                        </div>
                      </div>
                  </v-timeline-item>


                  
            <v-timeline-item
                color="purple"
              class="mt-3">
              <h3>
                Certification
              </h3>
            </v-timeline-item>

            <v-timeline-item
                color="pink"
                center
                small
                hide-dot
              >
                <div class="d-flex" style="flex-flow:row wrap">
                  <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img width="100%" src="/img/ef.png" style="border-radius:20px"/></div>
                    <div  style="flex-flow:row wrap">
                    <div style="font-size:1.3em" class="mb-2"><b>C1 Advanced English</b></div>
                    <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>Nov 2022</v-chip> <v-btn href="/pdf/c1-advanced-certificate-brahma.pdf" download x-small>View Certificate</v-btn> </div>
                    </div>
                  </div>
              </v-timeline-item>


            
          </v-timeline>
      </div>

      <!------->
      <div class="text-center mt-10">
          
        </div>
        <div class="d-flex justify-center">
          
      </div>

      </v-col>
    </v-row>
  </v-container>



    <v-container>
    <div>
      <div class="blueLine"></div>
    </div>
  </v-container>

  <v-container  id="publication">
    <v-row>
      <v-col>
        <div class="text-center mb-5">
          <h1>
            Publication<span class="ml-3"><v-icon  :style="'color:'+boxShadowColor">mdi-newspaper-variant-multiple</v-icon></span>
          </h1>
        </div>
        <div class="d-flex justify-center">
          <div style="max-width:800px">
              <div class="mb-5 grey darken-4 pa-3 rounded-lg">
                  <b class="publicationLink" @click="goToLink('https://jestec.taylors.edu.my/Vol%2014%20issue%201%20February%202019/14_1_34.pdf')">Data-to-Text for Generating Information of Weather and Air Quality in the R Programming Language
                  </b>
                  <div style="font-size:0.8em">
                    Journal of Engineering Science and Technology<br/>
                    Vol. 14, No. 1 (2019) 498 - 508<br/>
                    © School of Engineering, Taylor’s University
                  </div>
              </div>
              <div class="mb-5 grey darken-4 pa-3 rounded-lg">
                <b class="publicationLink" @click="goToLink('https://brahmaputra1996.medium.com/building-map-based-web-application-using-nuxt-and-mapbox-ba758eaa8594?source=user_profile---------3----------------------------')">Building Map-Based Web Application using Nuxt and Mapbox
                  </b>
                  <div style="font-size:0.8em">
                    Medium Article
                  </div>
              </div>
              <div class="mb-5 grey darken-4 pa-3 rounded-lg">
                <b class="publicationLink" @click="goToLink('https://brahmaputra1996.medium.com/using-autoai-from-ibm-clouds-watson-studio-to-predict-it-professionals-yearly-salary-in-the-295a94c5c27a?source=user_profile---------1----------------------------')">Using IBM’s AutoAI: How I build a salary prediction system
                  </b>
                  <div style="font-size:0.8em">
                    Medium Article
                  </div>
              </div>
              <div class="mb-5 grey darken-4 pa-3 rounded-lg">
                <b class="publicationLink" @click="goToLink('https://brahmaputra1996.medium.com/moving-towards-a-goal-5-reasons-ibm-cloud-developer-certification-can-escalate-your-career-adf1fc3e2987?source=user_profile---------0----------------------------')">Moving Towards a Goal — 5 Reasons IBM Cloud Developer Certification can escalate your career
                  </b>
                  <div style="font-size:0.8em">
                    Medium Article
                  </div>
              </div>
              <div class="mb-5 grey darken-4 pa-3 rounded-lg">
                <b class="publicationLink" @click="goToLink('https://brahmaputra1996.medium.com/client-side-pdf-generation-if-you-struggled-with-dynamic-content-positioning-in-jspdf-459aef48dc30')">Client-side PDF Generation: If you struggled with dynamic content positioning in jsPdf
                  </b>
                  <div style="font-size:0.8em">
                    Medium Article
                  </div>
              </div>
          </div>
      </div>
      </v-col>
    </v-row>
  </v-container>

  

  <v-container>
    <div>
      <div class="blueLine"></div>
    </div>
  </v-container>


  <v-container id="competition">
    <v-row>
      <v-col>
        <div class="text-center mb-5">
          <h1 class="mb-3">
            Competition<span class="ml-3"><v-icon  :style="'color:'+boxShadowColor">mdi-trophy</v-icon></span>
          </h1>
          <img src="/img/award.png" width="100%" style="max-width:800px"/>
        </div>
        <div class="d-flex justify-center">
          <div style="max-width:800px">
              <div  class="mb-5 grey darken-4 pa-3 rounded-lg">
                <v-chip small class="success darken-4 mr-2 d-flex justify-center mb-2" style="width:fit-content"> <v-icon small class="mr-2">mdi-trophy</v-icon> 3rd Place Winner</v-chip>
                  <div class="d-flex align-center"> 
                     <b>IBM Cloud Data Challenge – Outcome Prediction using AutoAI</b>
                  </div>
                  <div>Building Techpath: a salary prediction app using IT Salary Survey for EU region dataset with CRISP-DM Methodology, Utilizing AutoAI from IBM Watson Studio.</div>
              </div>
              <div  class="mb-5 grey darken-4 pa-3 rounded-lg" >
                <v-chip small class="red darken-4 mr-2 d-flex justify-center mb-2" style="width:fit-content"><v-icon small class="mr-2">mdi-medal</v-icon> Top 30</v-chip>
                <div class="d-flex align-center">
                  <b>Republic of IOT (RIOT) Product Innovation 2017</b>
                </div>
                  <div>
                    Creating E-Breeding:  a tool for detecting the time of estrus in cattle to optimize animal husbandry based on physical signal analysis. 
                  </div>
              </div>
              <div class="mb-5 grey darken-4 pa-3 rounded-lg">
                <v-chip small class="blue darken-4 mr-2 d-flex justify-center mb-2" style="width:fit-content">Participant</v-chip>
                <div class="d-flex align-center">
                  <b>Microsoft Imagine Cup - Innovative Category Compoetition</b>
                </div>
                  <div>
                    Creating AMERA Parental Control prototype: A monitoring web/mobile app that integrates with school system to montior student behaviour and development.
                  </div>
              </div>
          </div>
      </div>
      </v-col>
    </v-row>
  </v-container>

  <v-dialog v-model="previewImgDialog" width="fit-content">
    <v-card class="d-flex justify-center">
      <div style="max-width:1000px;" v-if="previewType=='dash'">
        <img :src="currentImg" width="100%" style="border-radius:20px"/>
      </div>
      <div style="max-width:300px;" v-if="previewType=='menupad'">
        <img :src="currentImg" width="100%" style="border-radius:20px"/>
      </div>
    </v-card>
  </v-dialog>
  
  
  <v-dialog v-model="contactDialog" width="500px">
    <v-card class="pa-3">
      <div class="d-flex justify-end"><v-icon @click="contactDialog=false">mdi-close</v-icon></div>
      <div class="pa-2"><v-btn class="mr-2 primary" @click="mailTo()"><v-icon>mdi-email</v-icon></v-btn> brahmaputra1996@gmail.com</div>
      <div class="pa-2"><v-btn class="mr-2 success darken-3" @click="scrollTo('https://wa.me/085862266465','blank')"><v-icon>mdi-whatsapp</v-icon> </v-btn>+62-858-6226-6465</div>
    </v-card>
  </v-dialog>

  
  <v-dialog v-model="skillsDialog" width="500px">
    <v-card class="pa-3">
      <div class="d-flex justify-end"><v-icon @click="skillsDialog=false">mdi-close</v-icon></div>

     <div class="mb-2"><b>Technical Skills</b></div>

     Front-End Development<br/>

     <div class="mb-2">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Expert with Modern Front-End Framework
      <div class="pl-5">
          <v-chip small>VueJS</v-chip>
          <v-chip small>NuxtJS</v-chip>  
      </div>      
    </div>

    
    <div class="mb-2">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>FE Production Concept
      <div class="pl-5">
          <v-chip small>SPA</v-chip>
          <v-chip small>SSR</v-chip>  
          <v-chip small>SSG</v-chip>  
      </div>      
    </div>

    
    <div class="mb-2">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>UI Framework
      <div class="pl-5">
          <v-chip small>Vuetify</v-chip>
          <v-chip small>Tailwind CSS</v-chip>
      </div>      
    </div>
    
    <div  class="mb-5">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Automated Testing
      <div class="pl-5">
          <v-chip small>Jest</v-chip>
      </div>      
    </div>

    
    Work Environment<br/>
    
    <div  class="mb-2">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Version Control System
      <div class="pl-5">
          <v-chip small>Github</v-chip>
      </div>      
    </div>
    
    <div  class="mb-5">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Package Manager
      <div class="pl-5">
          <v-chip small>NPM</v-chip>
      </div>      
    </div>
    
    
    
    UX Design<br/>
    
    <div  class="mb-2">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Design Tools
      <div class="pl-5">
          <v-chip small>Figma</v-chip>
      </div>      
    </div>
    
    <div  class="mb-5">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Low/High-Fidelity prototyping

    </div>
    
    
    Geospatial Information System<br/>
    
    <div  class="mb-2">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Map Engine
      <div class="pl-5">
          <v-chip small>Mapbox</v-chip> <v-chip small>Arcgis Javascript</v-chip>  <v-chip small>Google Maps</v-chip>
      </div>      
    </div>
    
    <div  class="mb-5">
      <v-icon small class="mr-2">mdi-check-circle</v-icon>Spatial Operation
      <div class="pl-5">
          <v-chip small>Turf</v-chip> 
      </div>      

    </div>
    
    


    </v-card>
  </v-dialog>
  
  <v-navigation-drawer
        v-model="drawer"
        v-if="drawer"
        right
        fixed
        style="z-index:999"
      >
              <div class="navMenusMobile  grey--text text--lighten-1">
                <div class="mr-5" @click="scrollTo('#')">Home</div>
                <div class="mr-5" @click="scrollTo('#highlight')">Highlight</div>
                <div class="mr-5" @click="scrollTo('#background')">Background</div>
                <div class="mr-5" @click="scrollTo('#publication')">Publication</div>
                <div class="mr-5" @click="scrollTo('#competition')">Competition</div>
                <div class="mr-5" @click="$router.push('/project')">Projects</div>
                <div>
                  <v-btn href="/pdf/cv-brahma-putra.pdf" download="" target="blank" class="buttonScaled" small outlined color="light-blue lighten-2"><v-icon small class="mr-2">mdi-download</v-icon>Curriculum Vitae</v-btn>
                </div>
                
              </div>

      </v-navigation-drawer>
      


  <div class="text-center pa-3 pb-10 grey--text">2022. @brahmaptr</div>
  </div>
</template>

<script>

import "@lottiefiles/lottie-player";
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
  import AOS from 'aos';
  import 'aos/dist/aos.css';

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  data(){
    return {
      scrollPosition:null,
      boxShadowColor: '#00E2FFFF',
      model:0,
      currentImg:'',
      previewType:'',
      previewImgDialog:false,
      contactDialog:false,
      skillsDialog:false,
      drawer:false
    }
  },
  created(){
    this.scrollTo('#','')
  },  
  mounted() {
    
      // Initialize AOS after the component is mounted
      AOS.init({
        duration: 1500,
        once: true,
      });
    window.addEventListener('scroll', this.updateScroll);
  },
  methods:{
    
    updateScroll() {
       this.scrollPosition = window.scrollY
    },
    previewImg(val,type){
      this.previewType = type
      this.previewImgDialog = true
      console.log(this.previewImgDialog)
      this.currentImg = val
    },
    goToLink(val){
      window.open(val, '_blank');
    },
    scrollTo(val,target){
      if(target=='blank'){
        window.open(val, '_blank');
      }else{
        window.location.href=val
      }
    },
    mailTo(){
      window.location.href = "mailto:brahmaputra1996@gmail.com?subject=Hello&body=message";
    }
  }
}
</script>


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
  background-color:rgba(0,0,0,0.5 );
  position:fixed;
  display:flex;
  align-items: center;
  top:0;
  width:100%;
  height:80px;
  z-index:50 !important;    
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  transition: 0.5s ease-in-out;
  border-bottom:2px solid #000000;
}


.navbarScroll{
  height: 50px;
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
    transform: scale(1.05);
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
  cursor:pointer;
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

.publicationLink {
  transition:0.3s;
  &:hover {
    color:$light-blue-lighten-2;
    cursor:pointer;
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
  margin-top:60px;
}

.updownAnimated 
 {
  animation: MoveUpDown 5s linear infinite;
  position: absolute;
  z-index:0;
}

.asUsedBy {
  div {
    flex-shrink:0 !important; 
    img {
      cursor:pointer;
      transition:0.2s;
      opacity:0.7;
      &:hover {
        opacity:1;
        transform:scale(1.1);
      }
    }
  }
  width:100%;flex-flow:row wrap;
}

.hoverToLink {
  cursor:pointer;
  &:hover {
    background-color:$light-blue-lighten-2;
  }
}

.imgSlider {
    opacity:1;
    transition:0.2s;
  &:hover {
    transform:scale(1.05);
    cursor:pointer;
  }
}

.viewProjectCta {
  background:url('/img/tes.png');
  background-size:cover;
  border-radius:20px;
  padding:100px 0 !important;
}

.navMenusMobile {
  div {
    padding:10px;
  }
}

.bsGlow {
  box-shadow: 0px 8px 13px 4px rgba(0, 209, 255, 0.25);
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

  
.viewProjectCta {
  background:url('/img/tes.png');
  background-size:cover;
  border-radius:20px;
  padding:20px !important;
}

}
</style>
