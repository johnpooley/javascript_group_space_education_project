<template lang="html">
  <div id="app">
    <img :src="nasaImage.url" :alt="nasaImage.url">
    <h2>Date: {{ nasaImage.date }}</h2>
    <h1>Title: {{ nasaImage.title }}</h1>
    <p>Explanation: {{ nasaImage.explanation }}</p>
    <p>HDURL: {{ nasaImage.hdurl }}</p>
    <p>COPYRIGHT: {{ nasaImage.copyright }}</p>
  </div>

</template>

<script>

export default {
  name: 'nasa-image-view',
  props: ['nasaImage']
}
</script>

<style lang="css" scoped>
</style>
