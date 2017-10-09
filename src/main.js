// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import { sync } from 'vuex-router-sync';


import plugins from './config/plugins';
import configRouter from './config/router';
import vuexStore from './vuex/store';

import { TweenMax, TimelineMax } from 'gsap';
import $ from 'jquery';
import ScrollMagic from 'scrollmagic';
import 'ScrollMagicGSAP';


plugins(Vue, Vuex, VueRouter);


const store = new Vuex.Store(vuexStore);
const router = configRouter(VueRouter);

sync(store, router);

Vue.config.productionTip = false;

import App from './App';

/* eslint-disable no-new */
new Vue({
  router,
  store,
  el: '#app',
  template: '<App/>',
  components: { App }
});
