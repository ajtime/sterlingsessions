<template lang="html">
    <div class="wrapper">
        <div id="imagefade" :style="{ backgroundImage: `url('${getQuestionImages}')` }"></div>
    
        <video class="video__home" ref="videoRef" src="" id="video-container" width="100%"></video>


    </div>
    <!-- <div class="">
        <video class="video__home" ref="videoRef" src="" id="video-container" width="100%"></video>
    </div> -->
</template>

<style media="scss">

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
    position: relative;
    z-index: 99;
}
  .home__main {
    background-color: green;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .video__home {
      position: fixed;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      background-size: cover;
  }

  .video__title {
	position: absolute;
	top: 0px;
	left: 0px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
}

.vml-logo--vml {
    width: 15.625rem;
    position: absolute;

	display: flex;
	flex-direction: column;
    align-items: center;
    margin-top: 20vw;
}


</style>

<script type="text/javascript">
import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';

export default {
    
    components: {
    },
    
    mounted: function() {
        var self=this;
        console.log('imagevideo getQuestionScreenType: ', this.getQuestionScreenType );
        console.log('imagevideo getQuestionTimeinSeconds', this.getQuestionTimeinSeconds );
        console.log('imagevideo alexaTimeMilliseconds', this.alexaTimeMilliseconds );
        console.log('imagevideo getCorrectQuestion test', this.getCorrectQuestion);
        console.log('imagevideo getQuestionImages test', this.getQuestionImages);
        console.log('imagevideo getQuestionVideo test', this.getQuestionVideo);
        console.log('imagevideo getCurrentQuestionNumber test', this.getCurrentQuestionNumber);
        console.log('video loaded, this state', this.$store.state.screens );

        var $img = $('#imagefade');
      
        TweenMax.set($img,{autoAlpha:0});
        // animate CSS autoAlpha to 1
        TweenMax.to($img,3, {autoAlpha:1, onComplete:playVideo});

        function playVideo() {
            //console.log('function called kick back to previous route since animation ended this.alexaTimeMilliseconds', self.alexaTimeMilliseconds);

            setTimeout(function() {
                //self.$router.push({ path: '/' });
                TweenMax.set($img,{autoAlpha:0});
                console.log('timeout passed- play video logic');
                self.$refs.videoRef.src = self.getQuestionVideo;
                self.$refs.videoRef.play();
                //console.log('this.alexaTimeMilliseconds',self.alexaTimeMilliseconds);
            //}, self.alexaTimeMilliseconds);
            }, 1600);
            
        }


  	    //this.$refs.videoRef.src = this.getvideo;
  	    /* this.$refs.videoRef.src = this.getQuestionVideo;
        this.$refs.videoRef.play();
        
        this.$refs.videoRef.onended = function(e) {
            
            console.log('kick back to home screen');
            self.$router.push({ path: '/' });
        }; */

    },

    computed: {
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
        },

        getQuestionVideo() {
            return this.getCorrectQuestion[0].video;
        }
    },

    methods: {
      
    },
  };
</script>