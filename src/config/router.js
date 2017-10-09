//import Video from '@/components/screens/Video';
import Transitions from '@/components/screens/Transitions';
import Transitions2 from '@/components/screens/Transitions2';
import Transitions3 from '@/components/screens/Transitions3';
//import Test from '@/components/screens/Test';
//import Test2 from '@/components/screens/Test2';
import SterlingLanding from '@/components/screens/SterlingLanding';
import SterlingLandingVideo from '@/components/screens/SterlingLandingVideo';
import Slides from '@/components/screens/Slides';
//import HomeNew from '@/components/screens/HomeNew';
//import Home from '@/components/screens/Home';
import SingleImage from '@/components/screens/SingleImage';
import DefaultVideo from '@/components/screens/DefaultVideo';

/* eslint-disable import/prefer-default-export */
export const routes = [

  {
    path: '/slides',
    component: Slides,
  },
  {
    path: '/',
    component: SterlingLanding,
    //component: SterlingLanding,
    //component: SterlingLandingVideo,
  },
  // {
  //   path: '/test2',
  //   component: Test2,
  // },
  {
    path: '/singleimage',
    component: SingleImage,
  },
  {
    path: '/sterlinglandingvideo',
    component: SterlingLandingVideo,
  },
  {
    path: '/defaultvideo',
    component: DefaultVideo,
  },
  {
    path: '/Transitions2',
    component: Transitions2,
  },
  {
    path: '/Transitions',
    component: Transitions,
  },
  {
    path: '/Transitions3',
    component: Transitions3//,
  },
  // {
  //   path: '/HomeNew',
  //   component: HomeNew,
  // },
  // {
  //   path: '/Home',
  //   component: Home,
  // }

];

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true,
};

export default VueRouter => new VueRouter(VueRouterObject);
