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
         :autoplaySpeed="1600" :pauseOnHover="false" :infinite="false">

        <!-- <div class="slide" v-for="image in images"> -->
        <div class="slide" v-for="image in randomarray">
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


export default {
  
  created() {
     
    //this.randomarray();
  },
  mounted() {
    //console.log(this.images);
    //console.log(this.randomarray);
    //this.shuffle(this.images);
   
  },
  computed: {
 
    images () {
      //return this.$store.state.screens.slideshowimages
      return this.$store.state.screens.slideshowimages
    },
   
    randomarray() {
      return this.shuffle(this.images);
      /* function shuffle(arra1) {
        var ctr = arra1.length, temp, index;

        // While there are elements in the array
        while (ctr > 0) {
        //  Pick a random index
            index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
            ctr--;
        //  And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
      } */
      //console.log('images array',this.images);
      //var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      //console.log(shuffle(this.images));

    },
    seconds() {
      return this.$store.state.screens.testTimeSeconds * 1000 / this.numberofslides;
    }
  },
  methods: {
  
    ajtest: function () {
      //console.log('ajtest');
    },

    shuffle:  function (arra1) {
        var ctr = arra1.length, temp, index;

        // While there are elements in the array
        while (ctr > 0) {
        //  Pick a random index
            index = Math.floor(Math.random() * ctr);
        // Decrease ctr by 1
            ctr--;
        //  And swap the last element with it
            temp = arra1[ctr];
            arra1[ctr] = arra1[index];
            arra1[index] = temp;
        }
        return arra1;
      }


   /*  imgUrl: function (path) {
      return images('./' + path)
    } */
  }

  
}

</script>