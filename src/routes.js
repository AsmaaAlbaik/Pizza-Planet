import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
// const Menu = () => import('./components/Menu.vue')
import About from './components/About.vue'
// const About = () => import('./components/About.vue')
import Contact from './components/Contact.vue'
import History from './components/History.vue'
import Delivery from './components/Delivery.vue'
import Admin from './components/Admin.vue'

import OrderingGuide from './components/OrderingGuide.vue'

export const routes = [
  {path: '/', name: 'homeLink', components:{
    default: Home,
    'ordering-guide': OrderingGuide,
    'delivery': Delivery,
    'history': History,
  } },
  {path: '/menu', name: 'menuLink', component: Menu},
  {path: '/admin', name: 'adminLink',  component: Admin, beforeEnter: (to, from, next) => {
    alert('you should be authorised to access this page');
    next();
  }},
  {path: '/about',  name: 'aboutLink',  component: About, children: [
    {path: '/contact', component: Contact},
    {path: '/delivery', component: Delivery},
    {path: '/history', component: History},
    {path: '/ordering-guide', component: OrderingGuide}
  ]},
  {path: '*', redirect:'/'},
]
