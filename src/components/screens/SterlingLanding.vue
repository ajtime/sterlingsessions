<template>
  
    <div>
      
      <!--
        speed:	integer (ms)	300	Slide animation speed in milliseconds
        timing:	string	ease	Transition timing function
(linear/ease/ease-in/ease-out/ease-in-out)
        infinite:	boolen	true	Infinite loop sliding
        -->
      <agile :dots="false" :arrows="false" :speed="400"
        :timing="'ease-out'" :fade="true"
        :autoplay="true" :autoplaySpeed="this.seconds" :pauseOnHover="false" :infinite="false">

        <div class="slide" v-for="image in images">
            <!-- <div class="slider__image">
                <img :src="image">
            </div> -->
            <div class="imagefade" :style="{ backgroundImage: `url('${image}')` }"></div>
        </div>
      </agile>
    </div>
</template>

<style lang="scss" scoped>

.slide {
  //height: 300px;
  
    height: 100vh;
    width: 100vw;
    //background-size: contain;

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
var images = require.context('../../images/questions/07/', false, /\.jpeg$/)

export default {
  
  created() {
    //console.log('ts', this.users);
  },
  mounted() {
    //console.log('test');
    //console.log('tthis.$store.getters', this.$store.getters);
    //console.log('tthis.$store.topics', this.topics);

    //console.log('slides loaded, this state', this.$store.state.channel );

    //var bla = this.seconds * 1000;
    //this.$store.commit('channel/show', null, { root: true })
    //channel/userSet
    //console.log('this.imagesSlideResult', this.imagesSlideResult);
  },
  computed: {
    users2: () => this.$store.getters['channel/userSet'],
    
    users () {
    // return the getter where module name is 'team' and getter name is 'team'
      return this.$store.getters['channel/userSet'];
    },

    topics () {
      return this.$store.state.channel.topics
    },

    //topics: () => this.$store.state.channel.topics,
    images () {
      return this.$store.state.channel.images
    },

    imagesSlideResult () {
      return this.$store.state.channel.imageQuestions['03'];
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
      return this.$store.state.channel.testTimeSeconds * 1000 / this.numberofslides;
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