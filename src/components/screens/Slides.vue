<template>
  
    <div>
      <!-- <div> -->
       <!-- <h1>{{this.timePerSlide}}</h1> -->


      <!--first start-->
       <!-- <div v-for="user in users">
          <ul> -->
            <!-- <li v-for="topic in userTopics(user)">{{topic.title}}</li> -->
            <!-- li v-for="topic in userTopics(user)">
              <p>{{user.name}}</p>
              <p>{{topic.title}}</p>
            </li>
          </ul>
        </div> -->
        <!--end first start-->

        <!--second start-->
       <!-- <div v-for="question in questions">
          <ul>
            <p>test</p>
        
          </ul>
        </div> -->
        <!--end second start-->




     <!--  </div> -->

      <!--
        speed:	integer (ms)	300	Slide animation speed in milliseconds
        timing:	string	ease	Transition timing function
(linear/ease/ease-in/ease-out/ease-in-out)
        infinite:	boolen	true	Infinite loop sliding
        -->
        <!--
          infinite false is ignored when autoplay .. maybe fake button clicks?
        -->
      <agile :infinite="false" :dots="false" :arrows="false" :speed="400"
        :timing="'ease-out'" :fade="true"
        :autoplay="true" :autoplaySpeed="this.timePerSlide" :pauseOnHover="false">
        

        <!-- <div class="slide" v-for="image in images"> -->
        <div class="slide" v-for="image in getQuestionImages">
            <div class="slider__image">
                <img :src="image">
            </div>
        </div>
      </agile>
    </div>
</template>

<style lang="scss" scoped>

.slide {
  height: 300px;

}

</style>

<script>

import Vue from 'vue';
import VueAgile from 'vue-agile';
Vue.use(VueAgile);


export default {
  
  created() {
    //
  },
  mounted() {
    var self=this;
    // console.log('getQuestionScreenType: ', this.getQuestionScreenType );
    // console.log('getQuestionTimeinSeconds', this.getQuestionTimeinSeconds );
    // console.log('getCorrectQuestion test', this.getCorrectQuestion);
    // console.log('getQuestionImages test', this.getQuestionImages);
    // console.log('getCurrentQuestionNumber test', this.getCurrentQuestionNumber);
    // console.log('seconds test', this.timePerSlide);

    setTimeout(function() {
      //self.$router.push({ path: '/' });
      //console.log('slides timeout passed');
      self.$router.push({ path: '/' });
    }, this.alexaTimeMilliseconds);

  },

  computed: {
 
    //fromhere
    getQuestionScreenType () {
      return this.$store.state.screens.screentype;
    },
    getQuestionTimeinSeconds () {
      return this.$store.state.screens.seconds;
    },

    timePerSlide() { //convert to milliseconds
      return this.getQuestionTimeinSeconds * 1000 / this.getQuestionImages.length;
    },

    alexaTimeMilliseconds () {
      return this.getQuestionTimeinSeconds * 1000;
    },

    getCurrentQuestionNumber () {
      return this.$store.state.screens.question;
      //family.filter(person => person.age > 18);
    },
    getCorrectQuestion () {
      //return this.$store.state.screens.questionDetails.filter(questionDetail => questionDetail.question === 1);
      return this.$store.state.screens.questionDetails.filter(questionDetail => questionDetail.question === this.getCurrentQuestionNumber);
      //family.filter(person => person.age > 18);
    },
    getQuestionImages () {
      return this.getCorrectQuestion[0].images;
    }


    
  },

  methods: {    
    //
    
  }

  
}

</script>