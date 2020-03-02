<template lang="html">
  <div id="mars" v-if="frenchMars">
    <h1>{{ frenchMars.englishName }}</h1>
    <section class = "blurb">
    <p v-if="wikiMars">{{ wikiMars.query.pages[14640471].extract }}</p></section>
    <div class="form-group">


  </div>
    <!-- need to loop through this moon array -->
    <div class ="facts"></section>
      <div class="earth">
      <div class="wrap">
         <div class="background"></div>
         <div class="clouds"></div>
      </div>
      <div class="mask"></div>
    </div>
        <button class="button_play" @click.prevent="playSound('https://drive.google.com/uc?export=download&id=1t_YLXHzoosGu6dI3MpHovS8rkLSFKDf9')"></button>
      <h2>Moons: {{ frenchMars.moons[0].moon }}</h2>
      <h2>Moons: {{ frenchMars.moons[0].rel }}</h2>
      <h2>Distance from Sun: {{ frenchMars.perihelion }}</h2>
      <h2>Mass: {{ frenchMars.mass.massValue }}</h2>
      <h2>Gravity: {{ frenchMars.gravity }}</h2>
      <h2>Radius: {{ frenchMars.meanRadius }}</h2>
      <h2>Discovered by: {{ frenchMars.discoveredBy }} N/A </h2>
    </div>

  </div>

</template>

<script>
// import { eventBus } from ''
export default {
  name: 'mars',
  data(){
    return{
      frenchMars:null,
      wikiMars: null
    };
    //fetch from wikidata API and French API
  },

  methods: {
    playSound (sound) {
      if(sound) {
        var audio = new Audio(sound);
        audio.play();
      }
    }
  },
  mounted(){

    fetch('https://api.le-systeme-solaire.net/rest/bodies/mars')
    .then(res => res.json())
    .then(frenchMars => this.frenchMars = frenchMars);

    // how do we arrange multiple API fetch requests?

    fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Mars&origin=*')
    .then(res => res.json())
    .then(wikiMars => this.wikiMars = wikiMars)
  }
}
</script>

<style lang="css" scoped>
#mars {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 600px;
  color: white;
  margin-left: 20px;
  padding: 10px;
}
.button_play{
width: 20px;
height: 20px;
border-style: solid;
border-width: 0px;
border-color: #202020;
border-width: 10px 0px 10px 20px;
border-color: red blue green yellow;
box-sizing: border-box;
border-color: transparent transparent transparent #dd6644;
border-radius: 20%;
}

.earth{
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
  overflow:hidden;
  box-shadow: 0 0 60px -20px rgba(255, 189, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23);
  left:80px;
  top:-200px;
  margin:-150px;
}
.earth .mask{
  width:100%;
  height:100%;
  position: absolute;
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(255, 204, 159, 0.6);
  border-radius:50%;
}
.earth .background{
  animation: translateBackground 40s infinite linear;
  background:url('../assets/planet_masks/mars.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
.earth .clouds{
  background:url(http://artem.anmedio.ru/dev/planet/clouds.png) repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
  animation: translateBackground 30s infinite linear;
  opacity: 0.4;
}
.earth .wrap{
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
  animation: rotatePlanet 150s infinite linear;
}
@keyframes translateBackground{
  0%{
    background-position-x:0;
  }
  100%{
    background-position-x:-600px;
  }
}
@keyframes rotatePlanet{
  0%{
    transform:rotateZ(0);
  }
  100%{
    transform:rotateZ(-360deg);
  }
}
.facts{
  top: -1700px
}
</style>
