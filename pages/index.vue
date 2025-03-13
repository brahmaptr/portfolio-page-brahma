<template>
  <div>
    <div class="navbarPersonal" data-aos="fade-down" :style="scrollPosition > 50 ? 'border-bottom:1px solid ' +boxShadowColor : 'box-shadow: 0 0 200px 0px'+ boxShadowColor" :class="{'navbarScroll': scrollPosition > 50}">
      <v-container>
      <div class="d-flex justify-space-between align-center" >
              <div @click="scrollTo('#')" style="font-size:26px; font-weight: bold;">
                Brahma<span :style="'color:'+boxShadowColor+';font-size:36px;line-height:1'">.</span>
              </div>  
              <div v-if="$vuetify.breakpoint.smAndDown">
                <v-btn
                  :color="boxShadowColor"
                  outlined
                  dark
                  @click.stop="drawer = !drawer"
                >
                  <v-icon>mdi-menu</v-icon>
                </v-btn>
              </div>
              <div v-else class="navMenus d-flex align-center grey--text text--lighten-1">
                <div class="mr-5" @click="scrollTo('#profile')" :style="currentSection === '#profile' ? 'font-weight:bold;transform:scale(1.05);border-bottom:2px solid '+ boxShadowColor +';color:'+boxShadowColor:''">Profile</div>
                <div class="mr-5" @click="scrollTo('#highlight')" :style="currentSection === '#highlight' ?  'font-weight:bold;;transform:scale(1.05);border-bottom:2px solid '+ boxShadowColor +';color:'+boxShadowColor:''">Highlight</div>
                <div class="mr-5" @click="scrollTo('#background')" :style="currentSection === '#background' ?  'font-weight:bold;;transform:scale(1.05);border-bottom:2px solid '+ boxShadowColor +';color:'+boxShadowColor:''">Background</div>
                <div class="mr-5" @click="scrollTo('#publication')"  :style="currentSection === '#publication' ?  'font-weight:bold;;transform:scale(1.05);border-bottom:2px solid '+ boxShadowColor +';color:'+boxShadowColor:''">Publication</div>
                <div class="mr-5" @click="scrollTo('#competition')"  :style="currentSection === '#competition' ?  'font-weight:bold;;transform:scale(1.05);border-bottom:2px solid '+ boxShadowColor +';color:'+boxShadowColor:''">Competition</div>
                <!-- <div class="mr-5" @click="$router.push('/project')">Projects</div> -->
              </div>
              <div v-if="!$vuetify.breakpoint.smAndDown" class="d-flex justify-end" style="width:200px"><v-btn href="/pdf/cv-brahma-putra.pdf" download="" target="blank" class="buttonScaled" small outlined :color="boxShadowColor"><v-icon small class="mr-2">mdi-download</v-icon>Resume</v-btn></div>
          </div>
        </v-container>
    </div>

    <div class="mainSection"  :class="{'marginTopMobile':$vuetify.breakpoint.smAndDown}">
      <v-container 
        <v-row>
          <v-col class="d-flex align-center justify-center" cols="12">
            <div class="d-flex"  style="flex-flow:row;" :class="{'flexWrap':$vuetify.breakpoint.smAndDown}">
              <div class="d-flex align-center px-10" style="flex-flow:column wrap" :class="{'full-width':$vuetify.breakpoint.smAndDown}">
                <div class="effectContainer" :class="{'flexGrow':$vuetify.breakpoint.smAndDown}">
                  <div class="imgContainer" id="#profile">
                    <!-- <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_gqhy4rmx.json" class="mainLottieScale" background="transparent" speed="0.3" loop autoplay></lottie-player> -->
                    <lottie-player src="/img/reactor2.json" class="mainLottieScale" background="transparent" speed="0.5" loop autoplay></lottie-player>
                  </div>
                  <div class="imgContainer">
                    <img src="/img/photo.png" :style="'box-shadow: 0 0 60px 10px'+ boxShadowColor">
                  </div>
                  
                  <div data-aos="zoom-in-up" class="d-flex justify-center align-center" style="width:100%;bottom:-30px;position:absolute;z-index:99">
                    <v-btn outlined @click="$store.commit('changeFont')" class="py-5 px-0 ma-0 grey darken-4"><v-icon
                        :color="boxShadowColor">mdi-alphabet-greek</v-icon></v-btn>
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
                      <div class="nameText dashedHover mr-2" data-aos="fade-up">Brahma Putra<span :style="'color:'+boxShadowColor">.</span></div><div class="updownAnimated" data-aos-delay="500" data-aos="zoom-in-right" :style="'opacity:0.2;border-radius:50px;width:100px;height:100px;background-color:'+boxShadowColor+';box-shadow: 0 0 50px 0px ' +boxShadowColor"></div>
                    </div>
                    <div class="mb-2 dashedHover" data-aos="fade-left">Hi! I'm a Software Engineer.<br/> mostly doing Front-End.</div>
                    <div data-aos="fade-right" class="dashedHover">I work on most project using NuxtJS and Figma, I merge technical skills with design knowledge and AI tools to create innovative products that drive business. Mostly build tools for spatial analysis and public services. Bachelor of Computer Science.</div>
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
        <v-row  class="dashedHover" :class="$vuetify.breakpoint.smAndDown ? 'mt-1' : 'mt-10'">
          <v-col cols="12">
            <div class="text-center" data-aos="fade-up">
              Skill tags:
            </div>
            <div data-aos="fade-up" class="d-flex justify-center">
              <div style="max-width:600px;text-align: center;">
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">Front-end Development</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">Vue/Nuxt</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">React/Next</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">GIS</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">Arcgis Javascript</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">Mapbox</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">User Experience (UX)</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" class="mr-b mt-2">Figma</v-chip>
                <v-chip :small="$vuetify.breakpoint.smAndDown" @click="skillsDialog=true" class="mr-b mt-2 light-blue">View
                  More</v-chip>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <div id="highlight" class="section-2" >
      <div data-aos="fade-in" class="text-center pa-5" :class="$vuetify.breakpoint.smAndDown ? 'mt-10':'mt-15'"
       :style="'font-size:12px;letter-spacing:5px;border-bottom:0.5px solid '+boxShadowColor +';border-top:0.5px solid '+boxShadowColor +';background-opacity:0.5;background: radial-gradient(circle 3000px, #000 ,'+boxShadowColor+')'">
        <span  :style="'color:'+boxShadowColor+';'">--</span>LATEST DEVELOPMENT<span :style="'color:'+boxShadowColor+';'">--</span>
      </div>

      <v-container fluid  style="background-color: #2b2b2b;width:100%" :style="'background: radial-gradient(circle , #2e2e2e ,#000);border-bottom:0.5px solid '+boxShadowColor">
        <v-row>
          <v-col cols="12" md="7" class="mb-0 pb-0" :style="'width:100%;max-width: 900px;' ">
            <img src="/polyurba.png" width="100%" />
          </v-col>
          <v-col cols="12" md="5" class="pa-5 d-flex align-center" style="flex-grow:1;">
            <div>
              <h1 class="d-flex align-center" :class="{'justify-center' : $vuetify.breakpoint.smAndDown}"> 
                <div class="d-flex align-center" style="font-size:20px"><img class="rounded-lg mr-3" src="/pw.png" width="40px"/> Polyurban Waters</div>
                <v-divider v-if="!$vuetify.breakpoint.smAndDown" class="ml-3" :style="'border:1px solid '+ boxShadowColor"></v-divider>
              </h1>
              <div class="pa-3 mt-3 rounded-lg mb-3" :style="$vuetify.breakpoint.smAndDown ? 'font-size:12px':''" style="background-color: #004875;">
                <b>The PolyUrbanWaters</b> app is an interactive platform designed to support water-sensitive urban planning in Southeast Asia.
                It integrates dynamic data visualizations, allowing users to explore water management models and strategic planning
                tools for urban development.
              </div>
              <p style="text-align: justify;font-size:12px" class="dashedHover">
                The app is developed using Vue.js, Nuxt.js, and MapLibre, providing a smooth and responsive user experience across
                various devices. It efficiently handles complex datasets and delivers real-time data insights through seamless
                integration with back-end services.
              </p>
              <v-btn href="https://kotaramahair.id" target="_blank" outlined :color="boxShadowColor" class="mb-5" style="border-radius: 100px;">DISCOVER APP <v-icon class="ml-5">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid style="background-color: #2b2b2b;width:100%"
        :style="'background: radial-gradient(circle , #2e2e2e ,#000);border-bottom:0.5px solid '+boxShadowColor">
        <v-row>
          <v-col cols="12" md="6" class="pa-5 d-flex align-center justify-center" style="flex-grow:1;">
            <div style="max-width: 600px;">
              <h1 class="d-flex align-center" :class="{'justify-center' : $vuetify.breakpoint.smAndDown}">
                <div class="d-flex align-center" style="font-size:20px"><img class="rounded-lg mr-3" src="/img/q100.png"
                    width="40px" />Q100+ Biofarma</div>
                <v-divider v-if="!$vuetify.breakpoint.smAndDown" class="ml-3"
                  :style="'border:1px solid '+ boxShadowColor"></v-divider>
              </h1>
              <div class="pa-3 mt-3 rounded-lg mb-3" :style="$vuetify.breakpoint.smAndDown ? 'font-size:12px':''"
                style="background-color: #1FB4D2;">
                In <b>Q100 Bio Farma's</b> internal supply chain management, My role is to develop audit systems to ensure supplier compliance, oversee material
                qualification for quality assurance, manage vendor complaints to resolve issues efficiently, and lead vendor
                qualification to secure reliable and trusted partners.
              </div>
              <p style="text-align: justify;font-size:12px" class="dashedHover">
              The app is developed using React and Chakra UI, offering a sleek and user-friendly interface. It ensures
              efficient management of supply chain processes and provides real-time insights through seamless integration with
              back-end systems (ASP .NET), enhancing operational reliability and decision-making.
              </p>
              <v-btn href="https://www.biofarma.co.id/id/announcement/detail/biofarma-group-bakal-bagikan-inovasi-tranformasi-digital-di-aipf-2023" target="_blank" outlined :color="boxShadowColor" class="mb-5"
                style="border-radius: 100px;">READ MORE<v-icon class="ml-5">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mb-0 pa-10 pt-0 d-flex align-center justify-end" :style="'width:100%;max-width: 900px;' ">
            <img src="/img/bio.png" width="100%" style="border-radius: 30px" />
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid style="background-color: #2b2b2b;width:100%"
        :style="'background: radial-gradient(circle , #2e2e2e ,#000);border-bottom:0.5px solid '+boxShadowColor">
        <v-row>
          <v-col cols="12" md="6" class="mb-0 pa-10 pt-0 d-flex align-center justify-end" :style="'width:100%;max-width: 900px;' ">
            <img src="/img/rdtr.png" width="100%" style="border-radius: 30px" />
          </v-col>
          <v-col cols="12" md="5" class="pa-5 d-flex align-center" style="flex-grow:1;">
            <div>
              <h1 class="d-flex align-center" :class="{'justify-center' : $vuetify.breakpoint.smAndDown}">
                <div class="d-flex align-center" style="font-size:20px"><img class="rounded-lg mr-3" src="/img/atr.svg"
                    width="40px" /> GISTARU - RDTR Interaktif</div>
                <v-divider v-if="!$vuetify.breakpoint.smAndDown" class="ml-3"
                  :style="'border:1px solid '+ boxShadowColor"></v-divider>
              </h1>
              <div class="pa-3 mt-3 rounded-lg mb-3" :style="$vuetify.breakpoint.smAndDown ? 'font-size:12px':''"
                style="background-color: #004875;">
                An interactive platform developed for the spatial planning of urban areas in Indonesia,
                specifically focusing on the regulation of spatial utilization and zoning. It provides users with a digital interface to
                explore and analyze the city’s spatial planning data, such as land-use zones, building restrictions, and infrastructure
                planning.
              </div>
              <p style="text-align: justify;font-size:12px" class="dashedHover">
                This app is developed using Vue.js, integrating Esri Map Service and Esri Client-engine for dynamic mapping.
              </p>
              <v-btn href="https://oss.go.id/rdtr-interaktif" target="_blank" outlined :color="boxShadowColor" class="mb-5"
                style="border-radius: 100px;">DISCOVER APP <v-icon class="ml-5">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-col>
        </v-row>
      </v-container>

      <v-container fluid style="background-color: #2b2b2b;width:100%"
        :style="'background: radial-gradient(circle , #2e2e2e ,#000);border-bottom:0.5px solid '+boxShadowColor">
        <v-row>
          <v-col cols="12" md="6" class="pa-5 d-flex align-center justify-center" style="flex-grow:1;">
            <div style="max-width: 600px;">
              <h1 class="d-flex align-center" :class="{'justify-center' : $vuetify.breakpoint.smAndDown}">
                <div class="d-flex align-center" style="font-size:20px"><img class="rounded-lg mr-3" src="/img/rvc.png"
                    width="40px" />Rent Value Capture</div>
                <v-divider v-if="!$vuetify.breakpoint.smAndDown" class="ml-3"
                  :style="'border:1px solid '+ boxShadowColor"></v-divider>
              </h1>
              <div class="pa-3 mt-3 rounded-lg mb-3" :style="$vuetify.breakpoint.smAndDown ? 'font-size:12px':''"
                style="background-color: #1FB4D2;">
                Rent Value Capture (RVC) is a research project that focus on building prediction model and demonstrate Price Prediction Interactive Map with Arcgis Javascript SDK that consumes
                prediction model from Python Flask API. 
              </div>
              <p style="text-align: justify;font-size:12px" class="dashedHover">
                The app is built with Nuxt.js for the front end, Python Flask for the backend API, and Jupyter Notebook for developing
                the prediction model. It uses the ArcGIS JavaScript SDK to visualize predicted property values on an interactive map.
              </p>
              <v-btn
                href="/rvc.pdf"
                target="_blank" outlined :color="boxShadowColor" class="mb-5" style="border-radius: 100px;">READ MORE<v-icon
                  class="ml-5">mdi-arrow-right</v-icon></v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="mb-0 pa-10 pt-0 d-flex align-center justify-end"
            :style="'width:100%;max-width: 900px;' ">
            <img src="/rvc.png" width="100%" style="border-radius: 30px" />
          </v-col>
        </v-row>
      </v-container>

      

      <v-container>
        <v-row>
          <v-col>
        <div class="d-flex align-center justify-center mt-10" style="flex-flow:column" data-aos="fade-up">
          <v-chip small outlined class="purple purple--text text--lighten-2 mb-3">PRODUCT HIGHLIGHT</v-chip>

          <div class="mb-3">
           <img src="/img/spatia.png" width="150px">
          </div>

          <div :class="{'f12':$vuetify.breakpoint.smAndDown}" style="max-width: 800px">
            <div class="text-center"><b>Dash spatia</b> is a product of <i>cityplan</i> that helps user analyzing spatial data with multiple tools. <div class="my-2" v-if="$vuetify.breakpoint.smAndDown"></div> Dash is bringing multiple spatial datasets and a growing library of spatial analysis tools to help people do their location research faster and more efficient anywhere.</div>
          </div>
        </div>
      </v-col>
      </v-row>
      </v-container>

      <v-container class="mt-0 pt-0">
      
        <v-row>
          <v-col>
          <v-slide-group
            v-model="model"
            mobile-breakpoint=""
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

    <div :class="{'f12':$vuetify.breakpoint.smAndDown}"  class="menupadSection  pt-10 pb-10">
      
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
                <center>Menupad helps culinary businesses to provide digital menus, automate whatsapp orders and organize online store links or social media for your business. <div class="my-2" v-if="$vuetify.breakpoint.smAndDown"></div>  Direct your customers to digital menus specially designed for smartphone screens. This menu can be accessed via a QR code, or via a link on your social media profile.</center>
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
            <div class="text-center">The project is focused on building the future of the Electric Vehicle (EV) ecosystem. We have been researching various
            apps and analytical concepts. This is one of our early prototypes, a smart routing plan that considers multiple factors
            for EVs.</div>
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
    

  <div id="background" class="section-2">
    <div data-aos="fade-in" class="text-center pa-5" :class="$vuetify.breakpoint.smAndDown ? 'mt-10':'mt-15'"
      :style="'font-size:12px;letter-spacing:5px;border-bottom:0.5px solid '+boxShadowColor +';border-top:0.5px solid '+boxShadowColor +';background-opacity:0.5;background: radial-gradient(circle 3000px, #000 ,'+boxShadowColor+')'">
      <span :style="'color:'+boxShadowColor+';'">--</span>EXPERIENCE<span
        :style="'color:'+boxShadowColor+';'">--</span>
    </div>

    <v-container>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <div class="mt-5 pa-3" style="max-width: 800px; width: 100%;">
            <div class="mb-5" style="letter-spacing: 2px;">
              <b>PROFESSIONAL EXPERIENCE</b>
            </div>
            <div class="d-flex" :style=" $vuetify.breakpoint.smAndDown ? 'flex-direction:column' : 'flex-direction:row'">
              <div>
                <img class="mr-5 mb-3" src="/kk.png" width="100px" height="100px">
              </div>
              <div>
                <b>KotaKita - Polyurban Waters</b> | Software Engineer
                <div>Developing and maintaining Kota Ramah Air, a GIS-based web application for the management and visualization of
                water-related data. Built using NuxtJS, MapLibre, and a custom MapServer, with seamless integration of a backend API.
                Collaborated with Technische Universität Berlin, Kota Kita, and Cityplan. For more information, visit: <a href="https://kotaramahair.id">kotaramahair.id</a>.</div>
                <div class="mt-3"><v-chip class="mr-3 mb-1" small>AUG 2024 - Present </v-chip></div>
              </div>
              
            </div>

            <v-divider class="my-5"></v-divider>

            <div class="d-flex" :style=" $vuetify.breakpoint.smAndDown ? 'flex-direction:column' : 'flex-direction:row'">
              <div>
                <img class="mr-5 mb-3" src="/bio.png" width="100px" height="100px">
              </div>
              <div>
                <b>Biofarma</b> | Software Engineer, FE
                <div>Developing the Vendor Qualification and Audit Management module for Q100+ Biofarma, an internal supply chain management
                application. Built with ReactJS, this module streamlines vendor evaluation and audit processes to enhance operational
                efficiency.
                <div class="mt-3"><v-chip class="mr-3 mb-1" small>JUL 2023 - JUL 2024 </v-chip></div>
              </div>
            
              </div>
            </div>

            <v-divider class="my-5"></v-divider>

            <div class="d-flex" :style=" $vuetify.breakpoint.smAndDown ? 'flex-direction:column' : 'flex-direction:row'">
              <div>
                <img class="mr-5 mb-3" src="/amartha.jpg" width="100px" height="100px">
              </div>
              <div>
                <b>Amartha</b> | Software Engineer, FE
                <div>During my 4-month term at Amartha, I contributed to developing key features such as the Promotional Voucher and Investor
                Dashboard Revamp. Using NextJS.
                  <div class="mt-3"><v-chip class="mr-3 mb-1" small>MAR 2023 - JUN 2023 </v-chip></div>
                </div>
            
              </div>
            </div>
            
            <v-divider class="my-5"></v-divider>

            <div class="d-flex" :style=" $vuetify.breakpoint.smAndDown ? 'flex-direction:column' : 'flex-direction:row'">
              <div>
                <img class="mr-5 mb-3" src="/img/cityplan.png" width="100px" height="100px">
              </div>
              <div>
                <b>Cityplan</b> | Software Engineer, Core FE-Developer
                <div>
                Building location intelligence tools at Cityplan, such as Spatia, Foot-Traffic, and EV-Routing, among others.
                Additionally, I contributed to various governmental projects, including the <a href="https://oss.go.id/rdtr-interaktif">OSS RDTR-Interaktif</a>.
                  <div class="mt-3"><v-chip class="mr-3 mb-1" small>FEB 2018 - FEB 2023</v-chip></div>
                </div>
            
              </div>
            </div>

            <v-divider class="my-5"></v-divider>
            
            <div class="d-flex" :style=" $vuetify.breakpoint.smAndDown ? 'flex-direction:column' : 'flex-direction:row'">
              <div>
                <img class="mr-5 mb-3" src="/img/esdm.png" width="100px" height="100px">
              </div>
              <div>
                <b>Kementerian ESDM</b> | Software Engineer Intern
                <div>
                  During my internship, I was involved in the development of a drilling permit application and a groundwater GIS web
                  application, under the supervision of a senior developer.
                  <div class="mt-3"><v-chip class="mr-3 mb-1" small>SEP 2016 - DEC 2016</v-chip></div>
                </div>
            
              </div>
            </div>



          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div data-aos="fade-in" class="text-center pa-5" :class="$vuetify.breakpoint.smAndDown ? 'mt-10':'mt-15'"
    :style="'font-size:12px;letter-spacing:5px;border-bottom:0.5px solid '+boxShadowColor +';border-top:0.5px solid '+boxShadowColor +';background-opacity:0.5;background: radial-gradient(circle 3000px, #000 ,'+boxShadowColor+')'">
    <span :style="'color:'+boxShadowColor+';'">--</span>EDUCATION / TRAINING<span :style="'color:'+boxShadowColor+';'">--</span>
  </div>
  
  <v-container id="background">
    <v-row>
      <v-col>
        <div class="d-flex justify-center">
          

          <v-timeline
              align-top
              dense
            >

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
                    <div style="font-size:1.3em" class="mb-2"><b>Universitas Pendidikan Indonesia</b></div>
                    <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>JUL 2013 - DEC 2017 </v-chip>Bachelor of Computer Science / 3.62 </div>
                    </div>
                  </div>
              </v-timeline-item>

              
            <v-timeline-item
                color="green"
              class="mt-3">
              <h3>
                Training and Certification
              </h3>
            </v-timeline-item>

            <v-timeline-item color="pink" center small hide-dot>
              <div class="d-flex" style="flex-flow:row wrap">
                <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img
                    width="100%" src="/img/google.png" style="border-radius:20px" /></div>
                <div style="flex-flow:row wrap">
                  <div style="font-size:1.3em" class="mb-2"><b>UX Design</b></div>
                  <div class="d-flex align-center" style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>NOV 2022</v-chip> Google UX <v-btn href="https://coursera.org/share/e477437d60936aeae6805173d32b795e" download x-small>View Certificate</v-btn></div>
                </div>
              </div>
            </v-timeline-item>
            
            <v-timeline-item color="pink" center small hide-dot>
              <div class="d-flex" style="flex-flow:row wrap">
                <div class="white mr-5 pa-1 d-flex align-center justify-center" style="width:60px;border-radius:20px"><img
                    width="100%" src="/img/ef.png" style="border-radius:20px" /></div>
                <div style="flex-flow:row wrap">
                  <div style="font-size:1.3em" class="mb-2"><b>C1 Advanced English</b></div>
                  <div class="d-flex align-center" style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>NOV 2022</v-chip>
                    <v-btn href="/pdf/c1-advanced-certificate-brahma.pdf" download x-small>View Certificate</v-btn> </div>
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
                    <div style="font-size:1.3em" class="mb-2"><b>Front-End Web Development</b></div>
                    <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>JAN 2018</v-chip> Teamtreehouse.com </div>
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
                      <div class="d-flex align-center"  style="flex-flow:row wrap"><v-chip class="mr-3 mb-1" small>JAN 2018</v-chip> Teamtreehouse.com </div>
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

  <v-container  id="publication" class="pt-15">
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


  <v-container id="competition" class="pt-15">
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
              <div class="navMenusMobile pa-5  grey--text text--lighten-1">
                <div class="mr-5" @click="scrollTo('#profile')" >Profile</div>
                <div class="mr-5" @click="scrollTo('#highlight')" >Highlight</div>
                <div class="mr-5" @click="scrollTo('#background')">Background</div>
                <div class="mr-5" @click="scrollTo('#publication')">Publication</div>
                <div class="mr-5" @click="scrollTo('#competition')">Competition</div>
                <div class="mr-5" @click="$router.push('/project')">Projects</div>
                <div>
                  <v-btn href="/pdf/cv-brahma-putra.pdf" download="" target="blank" class="buttonScaled" small outlined color="light-blue lighten-2"><v-icon small class="mr-2">mdi-download</v-icon>Resume</v-btn>
                </div>
                
              </div>

      </v-navigation-drawer>
      


  <div class="text-center pa-3 pb-10 grey--text">2025 | BRAHMA PUTRA</div>
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
      currentSection: '#profile',

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
      beforeDestroy() {
        window.removeEventListener('scroll', this.onScroll);
      },
  methods:{
      onScroll() {
        const sections = ['#profile', '#highlight', '#background', '#publication', '#competition'];
        for (const section of sections) {
          const element = document.querySelector(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
              this.currentSection = section;
              break;
            }
          }
        }
    },
    updateScroll() {
       this.scrollPosition = window.scrollY
       this.onScroll()

       if(this.scrollPosition < 200) {
        this.currentSection = '#profile'
       }
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
      console.log(val)
      if(target=='blank'){
        window.open(val, '_blank');
      }else{
        if(val === '#profile'){
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.pushState(null, '', '/#profile'); 
        }else{
          window.location.href = val
        }
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
  left:0;
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
    padding-right:5px;
    border-bottom:3px solid transparent;
    &:hover {
      
      border-bottom:3px solid #fff;
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
  padding-top:50px;
}

.nameText{
  font-weight: bold;
  position: relative;
  z-index:10;
  font-size:3em;
  border:1px dashed transparent;
  &:hover {
    border:1px dashed rgba(255,255,255,.2);
  }
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
.f12 {
  font-size: 12px;
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
    padding:20px 0;
  }
}

.dashedHover {
  border:1px dashed transparent;
  &:hover {
    border:1px dashed rgba(255,255,255,.5);
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
