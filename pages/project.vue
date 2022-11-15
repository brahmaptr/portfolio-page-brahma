<template>
    <div>
        
        <v-container>
            <v-row>
                <v-col cols="12">
                    <div class="d-flex justify-space-between pa-5" style="font-size:1.2em">
                        <div><v-icon @click="$router.push('/')">mdi-arrow-left</v-icon> <b>Experience in Projects</b></div>

                         <div v-if="$vuetify.breakpoint.smAndUp" class="logo" @click="scrollTo('#')"> </div>
                    </div>
                </v-col>
                <v-col cols="12">
                    
      <div style="overflow-x:auto">
        <v-btn-toggle
            v-model="projectListToggle"
            mandatory
            rounded
          >
            <v-btn value="All">
              All
            </v-btn>
            <v-btn value="design">
              Design
            </v-btn>
            <v-btn value="development">
              Development
            </v-btn>
          </v-btn-toggle>
      </div>

                </v-col>
            </v-row>
        </v-container>

        

        <v-container>
            <v-row> 
                <template  v-for="item,index in projectData" >
                <v-scale-transition :key="index" v-if="(projectListToggle=='design'&&item.design)||((projectListToggle=='development'&&item.development))||projectListToggle=='All'">
                  <v-col :key="index"  cols="12" md="4" style="height:350px" >
                      <div class="projectContainer" >
                        <div class="pa-5 d-flex align-space-between" style="flex-flow:row wrap">
                          <img :src="'/img/' + item.thumbnail " width="100%" style="max-width:300px"/>
                          <div style="width:100%">
                            <v-chip x-small class="blue" v-if="item.design">Design</v-chip>
                            <v-chip x-small class="purple" v-if="item.development">Development</v-chip>
                          </div>
                          <div>
                            <h3>{{item.title}}</h3>
                            <div style="font-size:0.8em">{{item.descriptiton}}</div>
                          </div>
                        </div>
                      </div>
                  </v-col>
                   </v-scale-transition>
                </template>
            </v-row>
        </v-container>
    </div>
</template>

<style scoped lang="scss">

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


.projectContainer {
  background-color:#262626;
  border-radius:20px;
  height:320px;
  width:100%;
}
</style>

<script>
    export default {
        data(){
            return {
                
      projectListToggle:'All',
                projectData:[
                        {
                        title:'Patrol Taru Pusat',
                        descriptiton:'Spatial monitoring and control center. Integrating data from all across indonesia.',
                        thumbnail:'patrolpusat.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'RDTR Interaktif',
                        descriptiton:'Interaktif Spatial Plan of Indonesia. Featured in Online Single Submision (OSS) website.',
                        thumbnail:'rdtrinteraktif.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'Patrol Taru Kota Malang',
                        descriptiton:'Spatial monitoring and control center of the Malang City.',
                        thumbnail:'patrolmalang.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'Patrol Taru Kabupaten Badung',
                        descriptiton:'Spatial monitoring and control center of the Badung City.',
                        thumbnail:'patrolbadung.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'Patrol Taru Kota Medan',
                        descriptiton:'Spatial monitoring and control center of the Medan City.',
                        thumbnail:'patrolmedan.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'Kota Kita Strategy',
                        descriptiton:'A web app for strategy location mapping by kota kita.',
                        thumbnail:'kotakita.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'DPMPTSP Bandung Investment Map',
                        descriptiton:'A web page displaying investment opportunity and other attributes in Kota Bandung.',
                        thumbnail:'dpmptsp.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'Paduserasi Kota Bandung',
                        descriptiton:'Paduserasi Web Page of Bandung City.',
                        thumbnail:'paduserasi.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'Pasar Floratama',
                        descriptiton:'SMEs E-commerce of special goods from Flores, Alor, Lembata, dan Bima.',
                        thumbnail:'floratama.png',
                        category:'Public Services',
                        design:true,
                        development:false
                        },
                        {
                        title:'GBG Consultant Portal',
                        descriptiton:'GBG Consultant Portal website redesign.',
                        thumbnail:'gbg.png',
                        category:'Public Services',
                        design:true,
                        development:false
                        },
                        {
                        title:'Italian Anti-Aging',
                        descriptiton:'Sales landing-page for Italian Anti-Aging.',
                        thumbnail:'italian.png',
                        category:'Public Services',
                        design:true,
                        development:false
                        },
                        {
                        title:'Warehouse Routing Solution',
                        descriptiton:'A solution for routing from cityplan. Giving routing option and calculating cost.',
                        thumbnail:'routing.png',
                        category:'Public Services',
                        design:true,
                        development:true
                        },
                        {
                        title:'Composite Credit Rating',
                        descriptiton:'Rating and Assessment comparison from multiple source like S&P, Moodys, and Fitch.',
                        thumbnail:'ccr.png',
                        category:'Others',
                        design:true,
                        development:false
                        },
                        {
                        title:'Teletherapy Mobile App',
                        descriptiton:'a Mobile app for online doctor consultation.',
                        thumbnail:'teletherapy.png',
                        category:'Others',
                        design:true,
                        development:false
                        },
                        {
                        title:'Covid 19 Information Center',
                        descriptiton:'Covid 19 global information visualization from various notable sources.',
                        thumbnail:'covidinfo.png',
                        category:'Others',
                        design:true,
                        development:true
                        },
                        {
                        title:'Covid 19 Prediction System',
                        descriptiton:'Prediction covid19 infection status based on medical condition.',
                        thumbnail:'covid-prediction.png',
                        category:'Others',
                        design:true,
                        development:true
                        },
                        {
                        title:'Sampoerna - ASO Tegal Landing Page',
                        descriptiton:'Gathering landing page of ASO TEgal.',
                        thumbnail:'asotegal.png',
                        category:'Others',
                        design:true,
                        development:true
                        }
                    ]
            }
        }
    }
</script>