<template lang="html">
  <div id="app">
    <div class="news" v-if="news" v-for="things in news.articles">
      <h1>{{ things.source.name }}</h1>
      <h2>{{ things.title }}</h2>
      <img :src="things.urlToImage" :alt="things.urlToImage" :width = "300" :height = "200">
      <p>{{ things.description }}</p>
      <br>
    </div>
  </div>

</template>

<script>

export default {
  name: 'news-feed',
  props: ['news']
}
</script>

<style lang="css" scoped>

/* .news {
  text-align: left;
  width: 96%;
  border-style: solid;
  padding: 10px
} */
</style>
