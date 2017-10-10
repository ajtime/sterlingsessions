<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  
//import '../../../node_modules/signalr/jquery.signalR';
import '../node_modules/signalr/jquery.signalR';

const $ = require('jquery');
//const connection = $.hubConnection('https://kcdcalexaskill.azurewebsites.net');
//old one https://kcdcalexaskill.azurewebsites.net/api/alexa
//https://vmlsterlingsessionsalexaskill.azurewebsites.net/api/alexa/vml

const connection = $.hubConnection('https://vmlsterlingsessionsalexaskill.azurewebsites.net');
//const signalrProxy = connection.createHubProxy('KCDCSignalRHub');
const signalrProxy = connection.createHubProxy('VMLSignalRHub');


  export default {
    name: 'app',

    created() {
      $.connection.hub.url = '/signalr';
      $.connection.hub.logging = true;

      connection.start({ withCredentials: false, pingInterval: null }).then(function (messages) {
          
      });
    },
    mounted() {
      let self=this;
      signalrProxy.on('hello', (name, message) => {
        //console.log('hello messsage new in app.vue', message);
        console.log('hello messsage new -', message);
        //aka the error state right now..
        this.$store.dispatch('screens/setUpError', message, { root: true });
          
        setTimeout(function() {
          console.log('timeout');
          self.$router.push({ path: '/errormessage' });
        }, 700);


        //this.$router.push({ path: '/slideshow' });
 
      });

      /* signalrProxy.on('list', (name, message) => {
        //Alexa, ask KCDC what sessions are about JavaScript?

        console.log('list messsage in new app.vue', message);
        this.$router.push({ path: '/Transitions3' });


      }); */

      /* signalrProxy.on('speakerDetail', (name, message) => {
        console.log('speakerdetail messsage', message);
        //this.$router.push({ path: '/Test3' });
        
      }); */

      /* signalrProxy.on('speakerDetail', (name, message) => {
        console.log('speakerdetail messsage', message);
        //this.$router.push({ path: '/Test3' });
        
      });
 */

      //all answerdetails
      signalrProxy.on('answerDetail', (name, message) => {
        // console.log('answerDetail name', name);
        // console.log('answerDetail  messsage', message);
        // console.log('answerDetail  messsage.displayType', message.displayType);
        //this.$router.push({ path: '/Test3' });

        //flush out logic TODO

        if ( (message.displayType == 'staticImage') || (message.displayType == 'gif') ) {
          console.log('staticImage or gif requested');
          console.log('staticImage message', message);
          this.$store.dispatch('screens/setUpSlide', message, { root: true });
          setTimeout(function() {
            console.log('timeout');
            self.$router.push({ path: '/singleimage' });
          }, 700);
        }

        if (message.displayType == 'slideshow') {
          console.log('slideshow detected');
          //we need to send something to store that says the current option or something will be the slideshow route..
          //then make a question spot - and say what it is .. like question 02
          //then kick to the page..
          //this.$store.commit('screens/setQuestion', message, { root: true })
          
          this.$store.dispatch('screens/setUpSlide', message, { root: true });
          
          setTimeout(function() {
            console.log('timeout');
            self.$router.push({ path: '/slides' });
          }, 700);
          
        }

        //sends correct
        // What one word would you use to describe the culture at VML?
        //if (message.displayType == 'video') {
        if ( (message.displayType == 'video') && (message.questionNumber == '2') ) {
          console.log('video ddetected qyeston 2');
          console.log('video message', message);
          this.$store.dispatch('screens/setUpVideo', message, { root: true });
          // //defaultvideo
          setTimeout(function() {
            console.log('timeout');
            self.$router.push({ path: '/imagevideo' });
          }, 700);
        }

        if ( (message.displayType == 'video') && !(message.questionNumber == '2') ) {
          console.log('video ddetected not question2');
          console.log('video message', message);
          this.$store.dispatch('screens/setUpVideo', message, { root: true });
          //defaultvideo
          setTimeout(function() {
            console.log('timeout');
            self.$router.push({ path: '/defaultvideo' });
          }, 700);
        }


        if (message.title == 'Question List') {
          console.log('Question List detected');
          console.log('question list message', message);
          // this.$store.dispatch('screens/setUpVideo', message, { root: true });
          // //defaultvideo
          // setTimeout(function() {
          //   console.log('timeout');
          //   self.$router.push({ path: '/defaultvideo' });
          // }, 700);
        }

        //todo
        // if (message.displayType == 'gif') {
        //   console.log('gif ddetected');
        //   console.log('gif message', message);
        // }
        
        
      });

      //5 second time out?
      signalrProxy.on('helpDetail', (name, message) => {
        console.log('helpDetail new messsage', message);
        //this.$router.push({ path: '/Test3' });

        
        
      });

      signalrProxy.on('killswitch', (name, message) => {
        console.log('killswitch new messsage', message);
        this.$router.push({ path: '/' });

        
        
      });

      //questionList
      signalrProxy.on('questionList', (name, message) => {
        console.log('questionList new messsage', message);
        //this.$router.push({ path: '/Test3' });
        
      });

      




    }
  };
</script>

<style>

  @import './app.scss';

  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(10px);
    opacity: 0;
  }
</style>