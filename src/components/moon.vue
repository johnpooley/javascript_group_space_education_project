<template lang="html">
  <div v-if="frenchMoon" id="moon">
    <h1><span>{{ frenchMoon.englishName }}</span></h1>
    <section class ="blurb">
      <p v-if="wikiMoon">{{ wikiMoon.query.pages[moonKey].extract }}</p></section>
      <div class ="facts">
        <div class="earth">
          <div class="wrap">
            <div class="background"></div>
            <div class="clouds"></div>
          </div>
          <div class="mask"></div>
        </div>
        <div class = "list">
          </br></br></br></br></br></br></br>
          <h2>Mass</h2> <p>{{ frenchMoon.mass.massValue }} x 10<sup>22</sup>kg</p>
          <h2>Gravity</h2> <p>{{ frenchMoon.gravity }} m/s<sup>2</sup></p>
          <h2>Radius</h2> <p>{{ frenchMoon.meanRadius }} km</p>
          <h2>Discovered by</h2> <p>{{ frenchMoon.discoveredBy }} N/A</p></div>          ​
        </div>
      </div>
    </div>
  </template>
  ​
  <script>
  export default {
    name: 'moon',
    data(){
      return{
        frenchMoon:null,
        wikiMoon: null,
        selectedMoon: this.$route.params.moonname,
        pages: "",
        moonKey: null
      }
      const moon = {
        props:['moonname']}
      },
      methods:{
        yetAnotherFetch: function(){
          fetch('https://api.le-systeme-solaire.net/rest/bodies/'+ this.selectedMoon)
          .then(res => res.json())
          .then(frenchMoon => {
            this.frenchMoon = frenchMoon;
            this.doWikiFetch();
          })

        },
        getWikiNumber: function(){
          fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+this.frenchMoon.englishName+'_(moon)&origin=*')
          .then(res => res.json())
          .then(wikiMoon => this.moonKey = Object.keys(wikiMoon.query.pages)[0])
        },
        doWikiFetch: function(){
          // fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+this.frenchMoon.englishName+'_(moon)&origin=*')
          // .then(res => res.json())
          // .then(wikiMoon => this.wikiMoon = wikiMoon)
          // .then(pages => this.pages = this.wikiMoon.query.pages)

          fetch('https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles='+this.frenchMoon.englishName+'_(moon)&origin=*')
          .then(res => res.json())
          .then(wikiMoon => this.wikiMoon = wikiMoon)
        }
      },
      mounted(){
        const selectedMoon = this.$route.params.moonname;
        console.log(selectedMoon);

        fetch('https://api.le-systeme-solaire.net/rest/bodies/'+ selectedMoon)
        .then(res => res.json())
        .then(frenchMoon => {
          this.frenchMoon = frenchMoon;
          this.getWikiNumber();
          this.yetAnotherFetch();
        })
      }
    }
    </script>
    ​
    <style lang="css" scoped>
      #view {
        width: 100% !important
      }

      #jupiter {
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
        margin-left: 45px;
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
        right: 320px
      }
      .earth .background{
        animation: translateBackground 40s infinite linear;
        background:url('../assets/planet_masks/luna.jpg') repeat-x;
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
    </style>
