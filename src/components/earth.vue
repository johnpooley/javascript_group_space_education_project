<template lang="html">
  <div id="earth" v-if="frenchEarth">
    <h1>{{ frenchEarth.englishName }}</h1>
    <section class ="blurb">
    <p v-if="wikiEarth">{{ wikiEarth.query.pages[9228].extract }}</p>
  </section>
  <div class ="facts">
    <div class="earth">
    <div class="wrap">
       <div class="background"></div>
       <div class="clouds"></div>
    </div>
    <div class="mask"></div>
  </div>
    <div class="earth">
    <div class="wrap">
       <div class="background"></div>
       <div class="clouds"></div>
    </div>
    <div class="mask"></div>
  </div>
    <h2>Moons</h2> <p>{{ frenchEarth.moons[0].moon }}</p>
    <h2>Moons</h2> {{ frenchEarth.moons[0].rel }}</p>
    <h2>Distance from Sun</h2> {{ frenchEarth.perihelion }}</p>
    <h2>Mass</h2> {{ frenchEarth.mass.massValue }}</p>
    <h2>Gravity</h2> {{ frenchEarth.gravity }}</p>
    <h2>Radius</h2> {{ frenchEarth.meanRadius }}</p>
</div>

  </div>

</template>

<script>
import router from '../router.js'

// import { eventBus } from ''
export default {
  name: 'Earth',
  data(){
    return{
      frenchEarth:null,
      wikiEarth: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/{earth}')
    .then(res => res.json())
    .then(frenchEarth => this.frenchEarth = frenchEarth);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Earth&origin=*')
    .then(res => res.json())
    .then(wikiEarth => this.wikiEarth = wikiEarth)
  }
}
</script>

<style lang="css" scoped>


#earth {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: white;
  margin-left: 20px;
  padding: 10px;
}

.earth .background{
  animation: translateBackground 40s infinite linear;
  background:url('../assets/planet_masks/earth.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
</style>
