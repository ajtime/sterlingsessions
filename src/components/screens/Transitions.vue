<template>
        <main id="body">
         

            <!-- Line Vertical-->
            <div class="linesVert" id="lineVert1"></div>
            <div class="linesVert"	id="lineVert2"></div>

            <!-- line Horizontal-->
            <div class="linesHori" id="lineHori1"></div>
            <div class="linesHori"	id="lineHori2"></div> 


            <section id="all">
                <!--first move-->
                <section class="slideContainer">
	                <div class="slideContent">
                        <div class="slideCopy" id="slide1">
                            <p>test move</p></div>
	                    </div>
                </section>

                <!--second move-->
                <section class="slideContainer">
	                <div class="slideContent">
                        <div class="slideCopy" id="slide2">
                            <p>test move 2</p>
                        </div>
	                </div>
                </section>


                <section class="slideContainer">
                    <div class="slideContent">
                        <div class="slideCopy" id="slide3">
                            <p>test move 3</p>
                        </div>	 
                    </div>
                </section>


                <section class="slideContainer">
                    <div class="slideContent">
                        <div class="slideCopy" id="slide4">
                            <p>test move 4</p>
                        </div>	 
                    </div>
                </section>


            </section>
        </main>
</template>

<style scoped>
    svg {
    position:relative;
    top:50px;
    visibility:hidden;
    }

    #slide1 {
        background: url(../../images/os0c9430.jpg);
        background-size: cover;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background-position-x: center;
        background-position-y: center;
    }

    #slide2 {
        background: url(../../images/our_work_-_final1x.jpg);
        background-size: cover;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background-position-x: center;
        background-position-y: center;
    }

    #slide3 {
        background: url(../../images/what_we_-_final2x.jpg);
        background-size: cover;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background-position-x: center;
        background-position-y: center;
    }

    #slide4 {
        background: url(../../images/careers_02.jpg);
        background-size: cover;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: auto;
        background-position-x: center;
        background-position-y: center;
    }

    .slideContainer {
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .slideContent {
        height: 70vh;
        width: 85%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        overflow: hidden;
    }

    #lineVert1 {
	    left: 17.4%;
	}

    #lineVert2 {
	    left: 82.5%;
    }

    #lineHori1 {
	    top: 24.9%;
	}

    #lineHori2 {
	    top: 74.9%;
    }
    
    .example {
    color: red;
    }

    .linesVert {
        z-index: 1;
        background-color: #fff;
        opacity: 0.4;
        position: fixed;
        width: 0.9px;
        width: 1px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .linesHori {
        z-index: 1;
        background-color: #FFFFFF;
        opacity: 0.4;
        position: fixed;
        width: 100%;
        height: 1px;
        height: 1px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        //Scrolls to top when view is displayed
        window.scrollTo(0, 0);
    },

    mounted() {
        //console.log('mounted test');
        var createBackgroundShape = new TimelineMax().staggerFromTo('#lineVert1, #lineVert2', 1.2, {
            height: 0
        }, {
            height: "100vh",
            ease: Power3.easeOut
        }, 0.4).staggerFromTo('#lineHori1, #lineHori2', 1.2, {
            width: 0
        }, {
            width: '100vw',
            ease: Power3.easeOut
        }, 0.4, '-=1.5').from('#body', 1, {
            backgroundColor: '#black'
        }, '-=1').from('#menu, #logo', 0.5, {
            autoAlpha: 0,
            y: -200
        }).from('#all', 0.4, {
            autoAlpha: 0
        }).add(parallaxAnimateScroll, '-=0.6');
        


        function parallaxAnimateScroll() {

            var controller = new ScrollMagic.Controller();

            // each div for parallax animation
            $('.slideCopy').each(function() {
                var parallax = this;
                var tlParallax = new TimelineMax().to(this, 10, {
                    backgroundPosition: "top 200px",
                    ease: Power4.easeOut
                });
                var scenePara = new ScrollMagic.Scene({
                    triggerElement: this,
                    duration: 2000,
                    triggerHook: 1
                }).setTween(tlParallax).addTo(controller);
            });

            // EACH COVER _ SCALE REVEAL
            $('.slideContent').each(function() {
                var covers = this;
                var tlCovers = new TimelineMax().from(this, 1, {
                    opacity: 0.8,
                    height: "50vh",
                    scale: 0.9,
                    ease: Quart.easeOut
                });
                var sceneCover = new ScrollMagic.Scene({
                        triggerElement: this,
                        triggerHook: 1
                    }).setTween(tlCovers) // trigger a TweenMax.to tween
                    //   .addIndicators() // add indicators (requires plugin)
                    .addTo(controller);
            });

            var goBackHome = function(){
                console.log('function called kick back to previous route since animation ended');
                //todo trigger homeroute  
            }

            TweenMax.to(window, 20, {
                    scrollTo: {
                        y: "max"
                    },
                    ease: Linear.easeNone,
                    onComplete: goBackHome
                }
            );


            //background color changing
            var slideBg1 = new TimelineMax().to('#body', 1, {
                css: {
                    backgroundColor: '#0000FF'
                }
            });
            
            var scene = new ScrollMagic.Scene({
                triggerElement: '#slide1',
                duration: 400,
                triggerHook: 1
            }).setTween(slideBg1).addTo(controller);
            

            var slideBg2 = new TimelineMax().to('#body', 1, {
                css: {
                    backgroundColor: '#ff0000'
                }
            });

            var scene2 = new ScrollMagic.Scene({
                triggerElement: '#slide2',
                duration: 400,
                triggerHook: 1
            }).setTween(slideBg2).addTo(controller);


            var slideBg3 = new TimelineMax().to('#body', 1, {
                css: {
                    backgroundColor: '#bfc1a7'
                }
            });
            
            var scene2 = new ScrollMagic.Scene({
                triggerElement: '#slide3',
                duration: 400,
                triggerHook: 1
            }).setTween(slideBg3).addTo(controller);
            
        }
    }

}

</script>
