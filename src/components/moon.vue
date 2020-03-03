<template lang="html">
  <div id="moon">
    <p>hi moon!</p>
<div class="facts">
  <h2>Mass: {{ frenchMoon.mass.massValue }}</h2>
  <h2>Gravity: {{ frenchMoon.gravity }}</h2>
  <h2>Radius: {{ frenchMoon.meanRadius }}</h2>
  <h2>Discovered by: {{ frenchMoon.discoveredBy }} </h2>
​
</div>
  </div>
​
</template>
​
<script>
export default {
  name: 'moon',
  data(){
    return{
      frenchMoon:null,
      wikiMoon: null,
      selectedMoon: this.$route.params.moonname
​
    }
    const moon = {
    props:['moonname']}
​
    //fetch from wikidata API and French API
  },
  // const moon = {
  // props:['moon']}
  mounted(){
​
    const selectedMoon = this.$route.params.moonname;
    console.log(selectedMoon);
​
    fetch('https://api.le-systeme-solaire.net/rest/bodies/'+ selectedMoon)
    .then(res => res.json())
    .then(frenchMoon => this.frenchMoon = frenchMoon);
​
    // how do we arrange multiple API fetch requests?
​
    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+{selectedMoon}+'_(moon)&origin=*')
    .then(res => res.json())
    .then(wikiMoon => this.wikiMoon = wikiMoon)
  }
}
</script>
​
<style lang="css" scoped>
</style>
