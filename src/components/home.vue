<template>
  <div id="app">

  <h1>Our Solar System</h1>
</br>

    <section class="planets">
      <router-link :to="{ name: 'mercury' }"><img src="../assets/mercury.png" alt="mercury" width="50" height="50"></router-link>
      <router-link :to="{ name: 'venus' }"><img src="../assets/venus.png" alt="venus" width="145" height="145"></router-link>
      <router-link :to="{ name: 'earth' }"><img src="../assets/earth.png" alt="earth" width="150" height="150"></router-link>
      <router-link :to="{ name: 'mars' }"><img src="../assets/mars.png" alt="mars" width="60" height="60"></router-link>
      <router-link :to="{ name: 'jupiter' }"><img src="../assets/jupiter.png" alt="jupiter" width="300" height="300"></router-link>
      <router-link :to="{ name: 'saturn' }"><img src="../assets/saturn.png" alt="saturn" width="280" height="280"></router-link>
      <router-link :to="{ name: 'uranus' }"><img src="../assets/uranus.png" alt="uranus" width="250" height="250"></router-link>
      <router-link :to="{ name: 'neptune' }"><img src="../assets/neptune.png" alt="neptune" width="250" height="250"></router-link>




      <router-view></router-view>

      <!-- <figure> <a href="../mercury"><img src="../../assets/mercury.png" alt="mercury" width="50" height="50"></a><figcaption>Mercury</figcaption></a></figure>
      <figure> <a href="../venus"> <img src="../../assets/venus.png" alt="venus" width="145" height="145"></a><figcaption>Venus</figcaption></figure>
      <figure> <a href="../earth"><img src="../../assets/earth.png" alt="earth" width="150" height="150"></a><figcaption>Earth</figcaption></figure>
      <figure><a href="../mars"><img src="../../assets/mars.png" alt="mars" width="60" height="60"></a><figcaption>Mars</figcaption></figure>
      <figure><a href="../jupiter"><img src="../../assets/jupiter.png" alt="jupiter" width="300" height="300"></a><figcaption>Jupiter</figcaption></figure>
      <figure><a href="../saturn"><img src="../../assets/saturn.png" alt="saturn" width="280" height="280"></a><figcaption>Saturn</figcaption></figure>
      <figure><a href="../uranus"><img src="../../assets/uranus.png" alt="uranus" width="250" height="250"></a><figcaption>Uranus</figcaption></figure>
      <figure><a href="../neptune"><img src="../../assets/neptune.png" alt="neptune" width="250" height="250"></a><figcaption>Neptune</figcaption></figure> -->
    </section>
  </div>
</template>

<script>
import earth from './earth.vue'
import home from '../router.js'
import { eventBus } from '../main.js'
import NasaImageView from './NasaImageView.vue'

export default {
  name: 'app',
  data(){
    return{
      planets:[],
      selectedPlanet: null,
      nasaImage: [],
      selectedDate: '2020-02-20'
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
  methods: {
    apod(selectedDate) {
      fetch('https://api.nasa.gov/planetary/apod?api_key=C0ehDJAti1cLdlnjQciOknJg4WMAeOBqcpOL1G4a&date=' + this.selectedDate + '')
      .then( res => res.json())
      .then(nasaImage => this.nasaImage = nasaImage)
    }
  },
  components: {
    "nasa-image-view": NasaImageView
  }
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
</style>
