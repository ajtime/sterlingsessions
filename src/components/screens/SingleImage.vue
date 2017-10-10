<template>
   
    <div class="wrapper">
        <div id="imagefade" :style="{ backgroundImage: `url('${getQuestionImages}')` }"></div>
    </div>
</template>

<style lang="scss" scoped>
    * {
        box-sizing: border-box;
    }

    body, 
    html {
        height: 100%;
    }
    .wrapper {
        background: #000;
        overflow:hidden;
        display: flex;
    }

    #imagefade {
        width: 100vw;
        height:100vw;
        background-size: contain;
        margin: 0;
        background-repeat: no-repeat;
        visibility:hidden;
    }

    
</style>

<script>

import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';

export default {

    created() {
        window.scrollTo(0, 0);
    },

    mounted() {

        var self=this;
        console.log('singleimage getQuestionScreenType: ', this.getQuestionScreenType );
        console.log('singleimage getQuestionTimeinSeconds', this.getQuestionTimeinSeconds );
        console.log('singleimage alexaTimeMilliseconds', this.alexaTimeMilliseconds );
        console.log('singleimage getCorrectQuestion test', this.getCorrectQuestion);
        console.log('singleimage getQuestionImages test', this.getQuestionImages);
        console.log('singleimage getCurrentQuestionNumber test', this.getCurrentQuestionNumber);


        var $img = $('#imagefade');
      
        TweenMax.set($img,{autoAlpha:0});
        // animate CSS autoAlpha to 1
        TweenMax.to($img,3, {autoAlpha:1, onComplete:goBackHome});

        function goBackHome() {
            //console.log('function called kick back to previous route since animation ended this.alexaTimeMilliseconds', self.alexaTimeMilliseconds);


            setTimeout(function() {
                self.$router.push({ path: '/' });
                console.log('timeout passed');
                //console.log('this.alexaTimeMilliseconds',self.alexaTimeMilliseconds);
            }, self.alexaTimeMilliseconds);
            
        }


    },
    methods: {
        //
    },
    computed: {
       //
        getQuestionScreenType () {
            return this.$store.state.screens.screentype;
        },

        getQuestionTimeinSeconds () {
            return this.$store.state.screens.seconds;
        },

        alexaTimeMilliseconds () {
            return this.getQuestionTimeinSeconds * 1000;
        },

        getCurrentQuestionNumber () {
            return this.$store.state.screens.question;
        },

        getCorrectQuestion () {
            return this.$store.state.screens.questionDetails.filter(questionDetail => questionDetail.question === this.getCurrentQuestionNumber);
        },
        getQuestionImages () {
            return this.getCorrectQuestion[0].images;
        }


    },

 
}


</script>
