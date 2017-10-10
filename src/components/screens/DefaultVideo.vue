<template lang="html">
    <div class="">
        <!-- <video poster="" class="video__home" playsinline autoplay muted loop>
            <source src="../../videos/vmlsizzle1.mp4" type="video/mp4">
        </video> -->
        <video class="video__home" ref="videoRef" src="" id="video-container" width="100%"></video>
    </div>
</template>

<style media="scss">
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
      /* background: url('../../images/vmlsizzle1.jpg') no-repeat; */
      background-size: cover;
      /* opacity: 0.55; */
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
  export default {
    
    components: {
    },
    
    mounted: function() {
        var self=this;
        console.log('defaultvideo getQuestionScreenType: ', this.getQuestionScreenType );
        console.log('defaultvideo getQuestionTimeinSeconds', this.getQuestionTimeinSeconds );
        console.log('defaultvideo alexaTimeMilliseconds', this.alexaTimeMilliseconds );
        console.log('defaultvideo getCorrectQuestion test', this.getCorrectQuestion);
        console.log('defaultvideo getQuestionImages test', this.getQuestionImages);
        console.log('defaultvideo getCurrentQuestionNumber test', this.getCurrentQuestionNumber);
        console.log('video loaded, this state', this.$store.state.screens );

  	    //this.$refs.videoRef.src = this.getvideo;
  	    this.$refs.videoRef.src = this.getQuestionVideo;
        this.$refs.videoRef.play();
        
        this.$refs.videoRef.onended = function(e) {
            
            console.log('kick back to home screen');
            self.$router.push({ path: '/' });
        };

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
        // getQuestionImages () {
        //     return this.getCorrectQuestion[0].images;
        // },

        //getvideo() {
        getQuestionVideo() {
            return this.getCorrectQuestion[0].video;
        }
    },

    methods: {
      
    },
  };
</script>