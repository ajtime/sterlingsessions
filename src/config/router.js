import Transitions from '@/components/screens/Transitions';
import Transitions2 from '@/components/screens/Transitions2';
import Transitions3 from '@/components/screens/Transitions3';

import SterlingLanding from '@/components/screens/SterlingLanding';
import SterlingLandingVideo from '@/components/screens/SterlingLandingVideo';
import Slides from '@/components/screens/Slides';

import SingleImage from '@/components/screens/SingleImage';
import DefaultVideo from '@/components/screens/DefaultVideo';
import ImageVideo from '@/components/screens/ImageVideo';

/* eslint-disable import/prefer-default-export */
export const routes = [

  {
    path: '/slides',
    component: Slides,
  },
  {
    path: '/',
    component: SterlingLanding,
  },
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
    path: '/imagevideo',
    component: ImageVideo,
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
  }

];

export const VueRouterObject = {
  routes,
  mode: 'history',
  saveScrollPosition: true,
};

export default VueRouter => new VueRouter(VueRouterObject);
