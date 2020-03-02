<template lang="html">
  <div id="uranus" v-if="frenchUranus">
    <h1>{{ frenchUranus.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiUranus">{{ wikiUranus.query.pages[44475].extract }}</p>
  </section>
      <div class ="facts">
        <div class="earth">
        <div class="wrap">
           <div class="background"></div>
           <div class="clouds"></div>
        </div>
        <div class="mask"></div>
      </div>
    <h2>Moons: {{ frenchUranus.moons[0].moon }}</h2>
    <h2>Moons: {{ frenchUranus.moons[0].rel }}</h2>
    <h2>Distance from Sun: {{ frenchUranus.perihelion }}</h2>
    <h2>Mass: {{ frenchUranus.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchUranus.gravity }}</h2>
    <h2>Radius: {{ frenchUranus.meanRadius }}</h2>
    <h2>Discovered by: {{ frenchUranus.discoveredBy }} </h2>
  </div>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'uranus',
  data(){
    return{
      frenchUranus:null,
      wikiUranus: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/uranus')
    .then(res => res.json())
    .then(frenchUranus => this.frenchUranus = frenchUranus);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Uranus&origin=*')
    .then(res => res.json())
    .then(wikiUranus => this.wikiUranus = wikiUranus)
  }
}
</script>

<style lang="css" scoped>
#uranus {
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
  background:url('../assets/planet_masks/uranus.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}

.facts
{top:-800px}

</style>
