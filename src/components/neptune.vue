<template lang="html">
  <div id="neptune" v-if="frenchNeptune">
    <h1>{{ frenchNeptune.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiNeptune">{{ wikiNeptune.query.pages[19003265].extract }}</p></section>
    <!-- need to loop through this moon array -->
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
    <h2>Moons: {{ frenchNeptune.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchNeptune.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchNeptune.perihelion }}</h2>
    <h2>Mass: {{ frenchNeptune.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchNeptune.gravity }}</h2>
    <h2>Radius: {{ frenchNeptune.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchNeptune.discoveredBy }} N/A </h2>
  </div>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'neptune',
  data(){
    return{
      frenchNeptune:null,
      wikiNeptune: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/neptune')
    .then(res => res.json())
    .then(frenchNeptune => this.frenchNeptune = frenchNeptune);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Neptune&origin=*')
    .then(res => res.json())
    .then(wikiNeptune => this.wikiNeptune = wikiNeptune)
  }
}
</script>

<style lang="css" scoped>
#neptune {
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
  background:url('../assets/planet_masks/neptune.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
.facts{
  top: -1500px
}
</style>
