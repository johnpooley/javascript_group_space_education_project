<template lang="html">
  <div id="mercury" v-if="frenchMercury">
    <h1>{{ frenchMercury.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiMercury">{{ wikiMercury.query.pages[19694].extract }}</p></section>
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
    <h2>Distance from Sun: {{ frenchMercury.perihelion }}</h2>
    <h2>Mass: {{ frenchMercury.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchMercury.gravity }}</h2>
    <h2>Radius: {{ frenchMercury.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchMercury.discoveredBy }} N/A </h2>
  </div>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'mercury',
  data(){
    return{
      frenchMercury:null,
      wikiMercury: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/mercury')
    .then(res => res.json())
    .then(frenchMercury => this.frenchMercury = frenchMercury);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mercury_(planet)&origin=*')
    .then(res => res.json())
    .then(wikiMercury => this.wikiMercury = wikiMercury)
  }
}
</script>

<style lang="css" scoped>
#mercury {
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
  background:url('../assets/planet_masks/mercury.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
</style>
