import { ref, computed } from 'vue'

import Home from './components/Pages/HomePage.vue'
import About from './components/Pages/AboutUs.vue'
import Team from './components/Pages/TeamPage.vue'
import News from './components/Pages/NewsPage.vue'
import Partners from './components/Pages/PartnersPage.vue'

import Privacy from './components/Pages/PrivacyPage.vue'
import Contact from './components/Pages/ContactPage.vue'
import Shedule from './components/Pages/ShedulePage.vue'

import NotFound from './components/Pages/NotFound.vue'

import Shop from './components/Pages/Shop/ShopPage.vue'

const routes = {
  '/': Home,
  '/about': About,
  '/team': Team,
  '/news': News,
  '/partners': Partners,
  
  '/privacy': Privacy,
  '/contact': Contact,
  '/shedule': Shedule,

  '/shop': Shop,
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})