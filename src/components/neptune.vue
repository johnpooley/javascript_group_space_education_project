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
    </br></br></br></br></br></br></br></br>
    <audio id="testAudio" hidden src="https://drive.google.com/uc?export=download&id=1tHpDu8pk6NC-vOUaz_SXhKjucHFQtmq0" type="audio/mpeg">
      </audio>
      <button v-on:click="playAudio">Play Planet Sound</button>

      <br>
      <select id="frenchNeptune" @change="goToMoon" v-model="selectedMoon">
        <option v-for="(moon,index) in frenchNeptune.moons"  >{{moon.moon}}</option>

      </select>
    </br></br></br></br></br></br></br></br>
    <h2>Distance from Sun</h2><p> {{ frenchNeptune.perihelion }} km</p>
    <h2>Mass</h2><p> {{ frenchNeptune.mass.massValue }} x 10<sup>26</sup>kg</p>
    <h2>Gravity</h2><p> {{ frenchNeptune.gravity }} m/s<sup>2</sup></p>
    <h2>Radius</h2><p> {{ frenchNeptune.meanRadius }} km</p>
    <h2>Discovered by</h2><p> {{ frenchNeptune.discoveredBy }}</p>
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
      wikiNeptune: null,
      moonList:[],
      selectedMoon:"",
      moonNames: []


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
  },
  methods: {
    goToMoon(){
      this.$router.push({path:'/moon/'+this.selectedMoon})
    },

      playAudio: function(event){
        let audio = document.getElementById('testAudio');
        if(audio.className == 'is-playing'){
          audio.className = "";
          event.target.innerHTML = "Play Planet Sound"
          audio.pause();
        }else{
          audio.className = "is-playing";
          event.target.innerHTML = "Pause";
          audio.play();
        }
      }
    }
    }
</script>

<style lang="css" scoped>
#view {
  width: 100% !important
}

#neptune {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  margin-left: 20px;
  padding: 10px;
}

h1 {
  font-size: 3em;
  font-family: 'Oxanium', serif;
  position: relative;
  text-align: left;
  margin-left: 40px;
}

h1 span{
background-color:rgba(51,51,51,0.5);
padding: 20px;
border-radius:10%
}

.blurb{
  background-color:rgba(51,51,51,0.5);
  width: 50%;
  padding: 28px;
  margin-left: 20px;
  border-radius:10%;
  font-size: 1.5em;
  position: relative;
  float: left;
  text-align: left
}

.facts{
  position: relative;
  /* max-width: 170px; */
  padding: 5px;
  margin-left: 100px;
  border: 2px;
  border-radius:10%;
  text-align: center;
  right: 200px;
  top: 20px
}

.list{
  /* background-color:rgba(51,51,51,0.5); */
}

.earth{
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
  overflow:hidden;
  box-shadow: 0 0 60px -20px rgba(255, 189, 3, 0.72), -14px -15px 40px -10px rgba(255, 238, 191, 0.23);
  margin:-150px;
  right:  320px
}
.earth .background{
  animation: translateBackground 40s infinite linear;
  background:url('../assets/planet_masks/neptune.jpg') repeat-x;
  width:300px;
  height:300px;
  position:absolute;
  border-radius:50%;
}
.earth .mask{
  width:100%;
  height:100%;
  position: absolute;
  box-shadow:inset -10px -10px 40px #251303, inset 10px 10px 30px -10px rgba(255, 204, 159, 0.6);
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
button {
  color:#ffffff;
  font: old 84% 'trebuchet ms',helvetica,sans-serif;
  background-color:#000000;
  border:1px solid;
  border-radius: 10px;
  width: 110px;
  height: 30px;
  font-size: 0.7em;
  font-weight: bold
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: rgba(51,51,51);
  border-radius: 10px;
  width: 100%;
  position: fixed
}

li {
  float: left;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
  background-color: #111;
}
nav{
  position: relative;
}
</style>
