<template>
  <div id="app">
    <head>
  <h1>Our Solar System</h1>
</head>
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
      <section>
        <h1>NASA Photo of The Day</h1>
        <input v-model="selectedDate" type="date">
        <button @click="apod">Get new image</button>
        <nasa-image-view :nasaImage="nasaImage" ></nasa-image-view>
      </section>
    </section>
  </div>
</template>

<script>
import { eventBus } from '../main.js'
import router from '../router.js'
import NasaImageView from '../components/NasaImageView.vue'
import PeopleInSpace from '../components/PeopleInSpace.vue'
import NewsFeed from '../components/NewsFeed.vue'

export default {
  name: 'app',
  data(){
    return{
      planets:[],
      selectedPlanet: null,
      nasaImage: [],
      selectedDate: '2020-02-20',
      peopleInSpace: null,
      news: []
    };
  },
  created() {
    this.apod();
  },
  mounted(){
    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Earth&origin=*')
    .then(res => res.json())
    .then(planets => this.planets = planets)

    eventBus.$on('planet-selected', (planet) => {
      this.selectedPlanet = planet;
    })

    fetch('http://api.open-notify.org/astros.json')
    .then(res => res.json())
    .then(peopleInSpace => this.peopleInSpace = peopleInSpace)

    fetch('http://newsapi.org/v2/top-headlines?q=Space&from=2020-02-25&sortBy=popularity&apiKey=bb8ea160607e4c3ebb0a5ccb53c23420')
    .then(res => res.json())
    .then(news => this.news = news)
  },
  methods: {
    apod(selectedDate) {
      fetch('https://api.nasa.gov/planetary/apod?api_key=C0ehDJAti1cLdlnjQciOknJg4WMAeOBqcpOL1G4a&date=' + this.selectedDate + '')
      .then( res => res.json())
      .then(nasaImage => this.nasaImage = nasaImage)
    },
    apod() {
      fetch('https://api.nasa.gov/planetary/apod?api_key=C0ehDJAti1cLdlnjQciOknJg4WMAeOBqcpOL1G4a')
      .then(res => res.json())
      .then(nasaImage => this.nasaImage = nasaImage)
    }
  },
  components: {
    "nasa-image-view": NasaImageView,
    "people-in-space": PeopleInSpace,
    "news-feed": NewsFeed
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
