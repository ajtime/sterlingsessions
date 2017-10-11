<template>
   
    <div class="wrapper" id="js-wrapper">
        
   
        <div id="imagecontainer">
            <div id="imagefade"></div>
        </div>
        
        <div id="messagecontainer">
            <p>{{ $store.state.screens.listOfQuestionsTitle }}</p>
            <div id="questions">
                <!-- {{ $store.state.screens.listOfQuestions }} -->
                <ul>
                    <li>What did VML originally stand for?</li>
                    <li>Who was VML’s first client?</li>
                    <li>Where in the world are VML offices?</li>
                    <li>How many Cannes awards has VML won?</li>
                    <li>How many miles do VMLers travel each year?</li>
                    <li>What is the Spark award?</li>

                    <li>How does the VML Foundation contribute to its local communities?</li>
                    <li>How many projects have VML employees worked on in the last year?</li>
                    <li>What are some favorite VML campaigns?</li>
                    <li>How many animal crackers do VMLers in Kansas City eat?</li>
                    <li>Is this the best anniversary VML has ever had?</li>
                    <li>What one word would you use to describe the culture at VML?</li>
                    <li>Where are the VML founders now?</li>
                    <li>What was VML's first digital project?</li>
                    <li>How many emails are sent and received between VMLers in a year?</li>
                    <li>What is VML’s favorite Kansas City BBQ?</li>
                    <li>Who is the most famous person to come to a VML office?</li>
                    <li>Where was the first VML office outside of the United States?</li>
                    <li>How much beer do VMLers in Kansas City drink?</li>
                    <li>Show me some of VML's best party moments.</li>
                    <li>Why is VML headquarters in Kansas City?</li>
                    <li>Show me the evolution of VML logos.</li>
                    <li>Where was VML's first office space?</li>
                    <li>When did VML join WPP?</li>
                    <li>How has VML lead digital innovation?</li>

                </ul>
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

    #imagecontainer {
        background-size: contain;
        //height: 100vw;
        //width: 100vw;
    }

    #messagecontainer {
        display: flex;
        flex-flow: column;
        p {
            font-size: 2em;
            text-align: center;
            margin: 0;
        }
    }

    .wrapper {
        color:#000;
        //background:black url(https://s.cdpn.io/16327/texture_bg.jpg) no-repeat 50% 0px;
        overflow:hidden;
        height: 100vh;
        //width: 100vw;
        //display: flex;
    }

    #questions {
        -webkit-transform: translate3d(0, 0, 0);
        font-size:1.6em;
        //line-height
        color:#dedede;
        //margin:50px auto;
        width:100vw;
        visibility:hidden;
    }

    #questions div{
        -webkit-font-smoothing: antialiased;
        -moz-font-smoothing:antialiased;
    }

    #imagefade {
        background:url('../../images/questions/01/1-Heritage-alexa-25.001.jpeg') no-repeat 0 0 transparent;
        width: 100vw;
        height:100vh;
        background-size: cover;
        //margin: 20px 40px 20px 0;
        visibility:hidden;
        position: absolute;
        opacity: .1 !important;
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
        TweenMax.to($img,8, {autoAlpha:1});


        var questions = document.getElementById("questions"),
            mySplitText = new SplitText(questions, {type:"words"}),
            //tl = new TimelineMax({delay:0.5, repeat:10, repeatDelay:1}),
            tl = new TimelineMax({
                delay:0.0, 
                repeat:0, 
                repeatDelay:1,
                onComplete: goBackHome
                }),
            numWords = mySplitText.words.length;

        //prep the questions div for 3D goodness
        TweenLite.set(
            questions, 
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
  

            setTimeout(function() {
                //self.$router.push({ path: '/' });
            }, 4000); 
            
        }


        //intro sequence
        for(var i = 0; i < numWords; i++){
        tl.from(mySplitText.words[i], 1.5, {z:randomNumber(-500,300), opacity:0, rotationY:randomNumber(-40, 40)}, Math.random()*1.5);
        }
        tl.from(questions, tl.duration(), {rotationY:180, transformOrigin:"50% 75% 200", ease:Power2.easeOut}, 0);


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
        tl.to(questions, 0.5, {rotationY:0, rotationX:0}, "reset");



        //TRY THIS FOR SUPER-SLOW-MO
        tl.timeScale(0.4);

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
