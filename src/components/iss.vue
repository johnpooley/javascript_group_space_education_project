<template lang="html">
  <div id="iss">
    <h1>The International Space Station</h1>
    <section class ="blurb">
    <p v-if="wikiIss">{{wikiIss.query.pages[15043].extract}}
    </p></section>
  <div class ="facts">
    <div class="map">
      <h2>Where is the ISS now?</h2>
    <iframe
      :src="results.map_url"
      width="300"
      height="300"
      id="gmap_canvas"
      frameborder="0"
      scrolling="no"
      marginheight="0"
      marginwidth="0"
      zoom=".00001"></iframe>
    </div>
    <h2>Deployed</h2> <p>1998</p>
    <h2>Call Sign</h2><p>Alpha</p>
    <h2>Orbital Speed</h2> <p>7.66 km/s</p>
    <h2>Length</h2> <p>73 m</p>
    <h2>Width</h2> <p>109 m</p>
    <h2>Mass</h2> <p>419, 725 kg</p>
  </div>
  </div>
</template>

<script>
export default {
  name: "iss",
  data() {
    return {
      issStats:null,
      wikiISS:null,

      results: {
        map_url: "",
        google_url: "",
      }
    };
  },
   mounted:function() {

     fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=International_Space_Station&origin=*')
     .then(res => res.json())
     .then(wikiIss => this.wikiIss = wikiIss);

     this.getData();

     window.setInterval(this.getData, 10000);
    },
    methods: {
      getData() {
        console.log("here");
        fetch("http://api.open-notify.org/iss-now", {})
        .then(res => res.json())
        .then(issStats => this.issStats = issStats)
        .then(response => {
          this.results.map_url =`https://maps.google.com/maps?q=${response.iss_position.latitude},${response.iss_position.longitude}&t=&z=3&ie=UTF8&iwloc=&output=embed&maptype=satellite`
        })
        .catch(error => {
          console.log(error);
        });
      }
    }
};
</script>

<style lang="css" scoped>

#view {
  width: 100% !important
}

#earth {
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
  text-align: left
}

h1 span{
background-color:rgba(51,51,51,0.5);
padding: 20px;
margin-left: 20px;
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
  right: 100px;
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
  right:  440px
}
.earth .background{
  animation: translateBackground 40s infinite linear;
  background:url('../assets/planet_masks/earth.jpg') repeat-x;
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
