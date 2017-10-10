<template lang="html">

    <div class="">
       <!--  <p>{{ $store.state.screens.textResponse1 }}</p>
 -->
       
    
    
        <!-- <a @click="prev">Previous</a> || <a @click="next">Next</a> -->
    <!-- <div
       <div v-for="member in members">
            <h1>{{member.name}}</h1>
        </div> -->
      <!--   <ul id="example-1">
            <li v-for="number in [currentNumber]">
                {{ number }}
            </li>
        </ul> -->

       

        <!-- <img src="~@/images/2-Heritage-alexa-25.002.jpg"> -->

      <!--   <transition>
            <div v-for="number in [currentNumber]" key="number" name="fade">
                <img :src="images[Math.abs(currentNumber) % images.length]" />
            </div>
        </transition -->
       <!--  <transition name="fade">
            <message v-show="showMessage" class="tr pop-up-message">
                <p slot="header">This is Header</p>
                <span slot="body">This is Body</span>
            </message>
        </transition> -->
    
    <transition name="fade">
        <!-- <div v-show="showMessage" class="tr pop-up-message"> -->
        <div v-for="number in [currentNumber]">
<!--         <p slot="header">This is Header</p>
        <span slot="body">This is Body</span> -->
            <img :src="images[Math.abs(currentNumber) % images.length]" />
        </div>
  </transition>
  
  <!-- <div v-if="!showMessage" class="block" @click.prevent="showMessage = true"> -->
 <!--  <div v-if="!showMessage" class="block" @click="showThis">
    <a class="button is-primary">Primary1</a>
  </div>
  
  <div v-else-if="showMessage" class="block" @click="hideThis">
    <a class="button is-primary">Primar2y</a>
  </div> -->


        
            <!-- <div class="vml-header">
                <svg class="vml-logo--vml" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 797.79 258.52"><title>vml-white</title><polygon class="cls-1" points="203.04 0 166.06 0 129.26 36.79 92.47 0 55.48 0 129.26 73.78 203.04 0"/><polygon class="cls-1" points="110.77 203.23 55.49 258.51 92.47 258.51 129.26 221.73 166.06 258.51 203.04 258.51 129.26 184.74 110.77 203.23"/><polygon class="cls-1" points="258.5 203.03 258.5 166.04 221.73 129.26 258.5 92.48 258.5 55.5 184.74 129.26 258.5 203.03"/><polygon class="cls-1" points="0 55.48 0 92.47 36.79 129.26 0 166.05 0 203.04 73.78 129.26 0 55.48"/><polygon class="cls-1" points="129.26 110.76 18.5 0 0 0 0 18.49 110.77 129.26 0 240.03 0 258.51 18.5 258.51 129.26 147.75 240.03 258.51 258.5 258.51 258.5 240.01 147.76 129.26 258.5 18.51 258.5 0 240.03 0 129.26 110.76"/><polygon class="cls-1" points="383.19 168.7 348.43 60.17 309.19 60.17 360.32 207.69 406.06 207.69 457.2 60.17 417.95 60.17 383.19 168.7"/><polygon class="cls-1" points="569.56 110.81 529.52 60.17 495.8 60.17 495.8 207.69 529.52 207.69 529.52 113.53 569.56 163.62 609.6 113.53 609.6 207.69 643.32 207.69 643.32 60.17 609.6 60.17 569.56 110.81"/><polygon class="cls-1" points="727.56 175.23 727.56 60.17 693.85 60.17 693.85 207.69 797.79 207.69 797.79 175.24 727.56 175.23"/></svg>
            </div> -->
        
    </div>

</template>

<style media="scss">

.fade-transition {
  transition: all 0.8s ease;
  overflow: hidden;
  visibility: visible;
  opacity: 1;
  position: absolute;
}
.fade-enter, .fade-leave {
  opacity: 0;
  visibility: hidden;
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
      background: url('../../images/vmlsizzle1.jpg') no-repeat;
      background-size: cover;
      opacity: 0.55;
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
    
    
    components:{
            
        }, 

    // components: {


    // },
   

    computed: {
        showMessage () {
            return this.$store.state.screens.showMessage;
        },
     
        images () {
            return this.$store.state.screens.images;
        },
        show () {
            return this.$store.state.screens.show;
        },
        members() {
            return this.$store.state.screens.members;
        },
        currentNumber() {
            return this.$store.state.screens.currentNumber;
        },
        timer() {
            return this.$store.state.screens.timer;
        }
        
    },


    mounted(){
        this.startRotation();

    },

    methods: {
        
        showThis: function(value) {
            console.log('showThis called');
            this.$store.commit('screens/show', null, { root: true })

        },

        hideThis: function(value) {
            console.log('hideThis called');
            this.$store.commit('screens/hide', null, { root: true })

        },


        startRotation: function() {
            this.timer = setInterval(this.next, 3000);
 
        },

        stopRotation: function() {
            clearTimeout(this.timer);
            this.timer = null;
        },

        next: function(value) {
            console.log('next called');
            this.$store.dispatch('screens/increment', null, { root: true })

        },

        prev: function() {
             console.log('prev function');
            this.currentNumber -= 1
        },



      test() {
        this.$router.push({ path: '/test2' });
      },
      test2() {
        this.$router.push({ path: '/Transitions2' });
      },
    },
  };
</script>