<template>
  <div id="app">
    <head>
      <link rel = "stylesheet"
   type = "text/css"
   href = "./public/style.css" />
 </head>
      <nav>
        <ul>
        <li><a href="/home">Home</a></li>
      </ul>
      </nav>
    </head>
</br>

    <section class="planets">
      <router-view id="view"></router-view>
    </section>
  </div>
</template>

<script>

import { eventBus } from './main.js'
import router from './router.js'
export default {
  name: 'app',
  data(){
    return{
      planets:[],
      selectedPlanet: null,
    };
  },

  mounted(){
    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Earth&origin=*')
    .then(res => res.json())
    .then(planets => this.planets = planets)

    eventBus.$on('planet-selected', (planet) => {
      this.selectedPlanet = planet;
    })
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
}

body{
  background:url(http://artem.anmedio.ru/dev/planet/space.jpg) repeat;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

</style>
