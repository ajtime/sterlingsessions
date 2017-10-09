<template>
   
    <div class="wrapper" id="js-wrapper">
         <!-- <p>{{ $store.state.title }}</p> -->
         <!-- <ul id="example-1">
            <li v-for="item in $store.state.items">
                <p>{{ item.title}}</p>
            </li>
        </ul> -->


        <div class="sections" id="js-slideContainer">
            <section class="section">
                <span class="section__title" id="title1">Section One</span>
                <span id="trigger--title1"></span>
            </section>

            <section class="section">
                <span class="section__title" id="title2">Section Two</span>
                <span id="trigger--title2"></span>
                
            </section>

            <section class="section">
                <span class="section__title" id="title3">Section Three</span>
                <span id="trigger--title3"></span>
            </section>

            <section class="section">
                <span class="section__title" id="title4">Section Four</span>
                <span id="trigger--title4"></span>
            </section>

            <section class="section">
                <span class="section__title" id="title5">Section Five</span>
                <span id="trigger--title5"></span>
                <button v-on:click="backHome">test click</button>
                
            </section>
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

    $panelcount: 5;

    .wrapper { 
        width: 100%;
        height: 100% !important;
        overflow: hidden;
        perspective: 1000;
        border:1px solid red; 
    }
    
    .section {
        & {
            height: 100%;
            width: calc( 100% / #{$panelcount} );
            float: left;
            position: relative;
            $colors: #F64747, #22A7F0, #F9690E, #9B59B6, #03C9A9;

            @for $i from 1 through length($colors) {
                &:nth-child(#{$i}) {
                    background: nth($colors, $i)
                }
            }
        }

        &s {
            width: percentage($panelcount);
            height: 100%;
        }

        &__title {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 30px;
            color: #fff;
        }
    }
    
</style>

<script>


import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'ScrollMagicGSAP';
import 'TweenLite';
import 'ScrollToPlugin';

export default {

    created() {
        window.scrollTo(0, 0);
        console.log('created', this);
    },

    mounted() {
        let self=this;
        var controller = new ScrollMagic.Controller();        
        var horizontalSlide = new TimelineMax()
            .to("#js-slideContainer", 1,   {x: "-20%"})	
            .to("#js-slideContainer", 1,   {x: "-40%"})
            .to("#js-slideContainer", 1,   {x: "-60%"})
            .to("#js-slideContainer", 1,   {x: "-80%"})
        // create scene to pin and link animation
        new ScrollMagic.Scene({
            triggerElement: "#js-wrapper",
            triggerHook: "onLeave",
            duration: "1150%"
        })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        .on("end", function (e) {
            // $("#bmd-smartexam-increase-capacity").toggleClass("inactive");
            //console.log('end');
        })
        .addTo(controller);

        setTimeout(() => {
            //console.log('timeout test');
            TweenMax.to(window, 3, {
                    scrollTo: {
                        y: "max"
                    },
                    ease: Linear.easeNone,
                    onComplete: goBackHome
                    //onComplete: remove
                }
            );
        }, 100)

        let goBackHome = function(){
            console.log('function called kick back to previous route since animation ended');
            controller = controller.destroy(true);
            console.log('gobackhome inside mounted this', self);
            //backHome();
            //this.$router.push({ path: '/' });
            self.$router.push({ path: '/' });
            
        }
    },
    methods: {
        backHome() {
        console.log('test click in test2.vue');
        this.$router.push({ path: '/' });
      },
    },

    /* beforeRouteLeave(to, from, next) {
        console.log('beforerouteleave');
        
        //TweenMax.to('#body', 2.2,{autoAlpha:0, onComplete:next})
              
           

    }//beforeRouteLeave */
}


</script>
