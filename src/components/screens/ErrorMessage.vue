<template>
   
    <div class="wrapper" id="js-wrapper">
        
   
        <div id="imagefade"></div>
        <div id="messagecontainer">
            <p>{{ $store.state.screens.errorQuestionTitle }}</p>
            <div id="quote">
                <!-- {{ $store.state.screens.textResponse1 }} -->
                {{ $store.state.screens.errorQuestionMessage }}
            </div>
        </div>

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

    #messagecontainer {
        display: flex;
        flex-flow: column;
        p {
            font-size: 3em;
            text-align: center;
        }
    }

    .wrapper {
        color:#000;
        //background:black url(https://s.cdpn.io/16327/texture_bg.jpg) no-repeat 50% 0px;
        overflow:hidden;
        //display: flex;
    }

    #quote {
        -webkit-transform: translate3d(0, 0, 0);
        font-size:4em;
        //line-height
        color:#dedede;
        margin:50px auto;
        width:800px;
        visibility:hidden;
    }

    #quote div{
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing:antialiased;
    }

    #imagefade {
        background:url('../../images/questions/01/1-Heritage-alexa-25.001.jpeg') no-repeat 0 0 transparent;
        width: 100vw;
        height:100vh;
        background-size: contain;
        //margin: 20px 40px 20px 0;
        visibility:hidden;
        position: absolute;
        opacity: .2 !important;
    }
</style>

<script>


import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'ScrollMagicGSAP';
import 'TweenLite';
import 'ScrollToPlugin';
//import SplitText from '../../../node_modules/gsap/src/minified/plugins/SplitText.min.js';
import SplitText from '../../../src/vendor/plugins/SplitText.min.js';

export default {

    created() {
        window.scrollTo(0, 0);
        console.log('created', this);
    },

    mounted() {
        let self=this;

        // cache element in variable
        var $img = $('#imagefade');
        // set initial CSS autoAlpha to 0
        // GSAP handles the cross browser vendor prefixes
        TweenMax.set($img,{autoAlpha:0});
        // animate CSS autoAlpha to 1
        TweenMax.to($img,3, {autoAlpha:1});


        var quote = document.getElementById("quote"),
            mySplitText = new SplitText(quote, {type:"words"}),
            //tl = new TimelineMax({delay:0.5, repeat:10, repeatDelay:1}),
            tl = new TimelineMax({
                delay:0.5, 
                repeat:0, 
                repeatDelay:1,
                onComplete: goBackHome
                }),
            numWords = mySplitText.words.length;

        //prep the quote div for 3D goodness
        TweenLite.set(
            quote, 
                {
                    transformPerspective:600, 
                    perspective:300, 
                    transformStyle:"preserve-3d", 
                    autoAlpha:1,
                    //onComplete: goBackHome
                }
            );

        function goBackHome() {
            console.log('function called kick back to previous route since animation ended');
  

            /* setTimeout(function() {
                self.$router.push({ path: '/' });
            }, 4000); */
            
        }


        //intro sequence
        for(var i = 0; i < numWords; i++){
        tl.from(mySplitText.words[i], 1.5, {z:randomNumber(-500,300), opacity:0, rotationY:randomNumber(-40, 40)}, Math.random()*1.5);
        }
        tl.from(quote, tl.duration(), {rotationY:180, transformOrigin:"50% 75% 200", ease:Power2.easeOut}, 0);


        //randomly change z of each word, map opacity to z depth and rotate quote on y axis
       /*  for(var i = 0; i < numWords; i++){
            var z = randomNumber(-50,50)
            tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -50, 50)}, "pulse");
        }
        tl.to(quote, 0.5, {rotationY:20}, "pulse");
 */
        //randomly change z of each word, map opacity to z depth and rotate quote on xy axis
       /*  for(var i = 0; i < numWords; i++){
            var z = randomNumber(-100,100)
            tl.to(mySplitText.words[i], 0.5, {z:z, opacity:rangeToPercent(z, -100, 100)}, "pulse2");
        }
        tl.to(quote, 0.5, {rotationX:-35, rotationY:0}, "pulse2"); */


        //reset the quote to normal position
        tl.to(mySplitText.words, 0.5, {z:0, opacity:1}, "reset")
        tl.to(quote, 0.5, {rotationY:0, rotationX:0}, "reset");



        //TRY THIS FOR SUPER-SLOW-MO
        tl.timeScale(0.8);

        //some helper functions
        function randomNumber(min, max){
            return Math.floor(Math.random() * (1 + max - min) + min);
        }

        function rangeToPercent(number, min, max){
            return ((number - min) / (max - min));
        }



    },
    methods: {
        backHome() {
        this.$router.push({ path: '/' });
      },
    },

 
}


</script>
