<template lang="html">
  <div id="app">
    <div class="apod">
    <img id="apodImage" :src="nasaImage.url" :alt="nasaImage.url" :width = "600" :height = "400">
    <h2>Date: {{ nasaImage.date }}</h2>
    <h1>Title: {{ nasaImage.title }}</h1>
    <p>Explanation: {{ nasaImage.explanation }}</p>
    <p>HDURL: {{ nasaImage.hdurl }}</p>
    <p>COPYRIGHT: {{ nasaImage.copyright }}</p>
  </div>
  </div>

</template>

<script>

export default {
  name: 'nasa-image-view',
  props: ['nasaImage']
}
</script>

<style lang="css" scoped>

/* .apod{
  text-align: left;
  width: 96%;
  border-style: solid;
  padding: 10px
} */
</style>
