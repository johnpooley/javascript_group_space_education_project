<template>
  <div id="app">
    <head>
      <link rel = "stylesheet"
   type = "text/css"
   href = "./public/style.css" />
   <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
 </head>
      <nav>
        <ul>
        <span><li><a href="/">Home</a></li></span>
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
  overflow: hidden;
  border-radius: 10px;
  width: 100%;
  position: fixed
}

li {
  float: left;
  background-color: rgba(51,51,51)
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}

</style>
