<template lang="html">
  <div id="venus" v-if="frenchVenus">
    <h1>{{ frenchVenus.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiVenus">{{ wikiVenus.query.pages[32745].extract }}</p>
  </section>
  <div class ="facts">
    <div class="earth">
    <div class="wrap">
       <div class="background"></div>
       <div class="clouds"></div>
    </div>
    <div class="mask"></div>
  </div>
    <h2>Distance from Sun: {{ frenchVenus.perihelion }}</h2>
    <h2>Mass: {{ frenchVenus.mass.massValue }}</h2>
    <h2>Gravity: {{ frenchVenus.gravity }}</h2>
    <h2>Radius: {{ frenchVenus.meanRadius }}</h2>
    <h2>Discovered by: N/A </h2>
</div>
  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'venus',
  data(){
    return{
      frenchVenus:null,
      wikiVenus: null

    };
    //fetch from wikidata API and French API
  },
  mounted(){
    fetch('https://api.le-systeme-solaire.net/rest/bodies/venus')
    .then(res => res.json())
    .then(frenchVenus => this.frenchVenus = frenchVenus);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Venus&origin=*')
    .then(res => res.json())
    .then(wikiVenus => this.wikiVenus = wikiVenus)
  }
}
</script>

<style lang="css" scoped>
#venus {
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
  background:url('../assets/planet_masks/venus.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
.facts{
  top:-1350px
}
</style>
