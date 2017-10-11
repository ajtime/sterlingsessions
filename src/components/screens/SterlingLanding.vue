<template>
  
    <div class="inactive">
      
      <!--
        speed:	integer (ms)	300	Slide animation speed in milliseconds
        timing:	string	ease	Transition timing function
(linear/ease/ease-in/ease-out/ease-in-out)
        infinite:	boolen	true	Infinite loop sliding
        -->
      <agile :dots="false" :arrows="false" :speed="400"
        :timing="'ease-out'" :fade="true" :autoplay="true"
         :autoplaySpeed="1400" :pauseOnHover="false" :infinite="false">

        <div class="slide" v-for="image in images">
            <!-- <div class="slider__image">
                <img :src="image">
            </div> -->
            <div class="imagefade" :style="{ backgroundImage: `url('${image}')` }"></div>
        </div>
      </agile>

      <div class="vml-header">          
        <svg class="vml-logo--vml" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 797.79 258.52"><title>vml-white</title><polygon class="cls-1" points="203.04 0 166.06 0 129.26 36.79 92.47 0 55.48 0 129.26 73.78 203.04 0"/><polygon class="cls-1" points="110.77 203.23 55.49 258.51 92.47 258.51 129.26 221.73 166.06 258.51 203.04 258.51 129.26 184.74 110.77 203.23"/><polygon class="cls-1" points="258.5 203.03 258.5 166.04 221.73 129.26 258.5 92.48 258.5 55.5 184.74 129.26 258.5 203.03"/><polygon class="cls-1" points="0 55.48 0 92.47 36.79 129.26 0 166.05 0 203.04 73.78 129.26 0 55.48"/><polygon class="cls-1" points="129.26 110.76 18.5 0 0 0 0 18.49 110.77 129.26 0 240.03 0 258.51 18.5 258.51 129.26 147.75 240.03 258.51 258.5 258.51 258.5 240.01 147.76 129.26 258.5 18.51 258.5 0 240.03 0 129.26 110.76"/><polygon class="cls-1" points="383.19 168.7 348.43 60.17 309.19 60.17 360.32 207.69 406.06 207.69 457.2 60.17 417.95 60.17 383.19 168.7"/><polygon class="cls-1" points="569.56 110.81 529.52 60.17 495.8 60.17 495.8 207.69 529.52 207.69 529.52 113.53 569.56 163.62 609.6 113.53 609.6 207.69 643.32 207.69 643.32 60.17 609.6 60.17 569.56 110.81"/><polygon class="cls-1" points="727.56 175.23 727.56 60.17 693.85 60.17 693.85 207.69 797.79 207.69 797.79 175.24 727.56 175.23"/></svg>
      </div>


    </div>
</template>

<style lang="scss" scoped>

.agile__list {
  opacity: .5;
}

.slide {
  height: 100vh;
  width: 100vw;
  //opacity: .5;
}
.imagefade {
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center fixed; 
  
}
.slider__image {
  width: 100vw;
  height: 100vh;
}



.slide {
    background: {
        //position: center;
        //size: cover;
        size: contain;
    }
    //height: 500px;

}

.vml-logo--vml {
    width: 15.625rem;
    position: absolute;

	display: flex;
	flex-direction: column;
    align-items: center;
    margin-top: 30vw;
}



</style>



<script>

import Vue from 'vue';
import VueAgile from 'vue-agile';
Vue.use(VueAgile);

//var testnum = '07';

//console.log('getImages', getImages);

//var images = require.context('../../images/questions/'+testnum, false,  /^profiles\d+.jpeg$/)
//var images = require('../../images/questions/'+testnum, false,  /^\d+.jpeg$/);

//var images = require('../../images/questions/07/Heritage-alexa-25.013.jpeg');

//console.log('testdini ', getImages);
//var getImages = require.context("../../images/questions/07/", false, /jpeg$/);
//var images = require.context('../../images/questions/07/', false, /\.jpeg$/)

export default {
  
  created() {
    //console.log('ts', this.users);
  },
  mounted() {
    //console.log('test');
    //console.log('tthis.$store.getters', this.$store.getters);
    //console.log('tthis.$store.topics', this.topics);

    //console.log('slides loaded, this state', this.$store.state.screens );

    //var bla = this.seconds * 1000;
    //this.$store.commit('screens/show', null, { root: true })
    //screens/userSet
    //console.log('this.imagesSlideResult', this.imagesSlideResult);
  },
  computed: {
    users2: () => this.$store.getters['screens/userSet'],
    
    users () {
    // return the getter where module name is 'team' and getter name is 'team'
      return this.$store.getters['screens/userSet'];
    },

    topics () {
      return this.$store.state.screens.topics
    },

    //topics: () => this.$store.state.screens.topics,
    images () {
      return this.$store.state.screens.slideshowimages
    },

    imagesSlideResult () {
      return this.$store.state.screens.imageQuestions['03'];
    },

    numberofslides () {
      return 5;
    },

    imagesfrompath () {
      //return imgUrl;
      //return require('./images/questions/02/' + this.id + '.jpg')
      //return require('../../images/questions/07/Heritage-alexa-25.013.jpeg');
      //return getImages;
      //return require('../../images/questions/07/' + this.id + '.jpeg');
      //return require.context('../../images/questions/07' + /^\d+.jpeg$/);
    },
    seconds() {
      return this.$store.state.screens.testTimeSeconds * 1000 / this.numberofslides;
    }
  },
  methods: {
    
    /* userTopics(user) { // this could also be done for the whole user collection in the getter we created above.
      console.log('usertopics called');
      return user.topics.map(topicId => this.topics[topicId]) 
    }, */


   /*  imgUrl: function (path) {
      return images('./' + path)
    } */
  }

  
}

</script>