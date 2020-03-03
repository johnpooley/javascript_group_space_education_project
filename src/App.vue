<template>
  <div id="app">
  </br>
  <section class="planets">
    <router-link :to="{name: 'home'}"><h1>Home</h1></router-link>
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

.planets{
  display: inline-block;
  overflow: scroll;
}

figure:hover{
  transform: scale(1.5);
}
figure{
  display:inline-block;
}
figcaption{
  transform: rotate(90deg);
}

#jupiter {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: white;
  margin-left: 20px;
  padding: 10px;
}

</style>
