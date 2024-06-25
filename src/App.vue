<script setup>
import { ref, computed } from 'vue'

import Home from './components/Pages/HomePage.vue'
import About from './components/Pages/AboutUs.vue'
import Team from './components/Pages/TeamPage.vue'
import News from './components/Pages/NewsPage.vue'
import Partners from './components/Pages/PartnersPage.vue'

import Privacy from './components/Pages/PrivacyPage.vue'
import Contact from './components/Pages/ContactPage.vue'
import Shedule from './components/Pages/ShedulePage.vue'

import NavBar from './components/UI/NavBar.vue'
import Footer from './components/UI/FooterUI.vue'

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
</script>

<template>
  <NavBar/>
  <component :is="currentView" />
  <Footer/>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

:root {
  --gold: #bba464;
  --gold-trans: #796a42;
  --background-light: #001e30;
  --sauna: #3d2223;
  --opacity-25: rgba(1,19,30,.25);
  --gray: #6e6e6e;
  --white: #e6e6e6;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-rendering: optimizeLegibility;

  font-family: 'Roboto', Arial, sans-serif;
  color: white;
  background-color: #000e16;

  text-decoration: none;
  outline: none;
  border: none;

  font-size: 16px;
}

body {
  -webkit-font-smoothing: antialiased;
  -moz-font-smoothing: antialiased;
  -o-font-smoothing: antialiased;
  -ms-font-smoothing: antialiased;
  overflow-x: hidden;
}

article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section, summary {
    display: block;
}

::selection {
    background: var(--gold);
    color: var(--white);
}
</style>