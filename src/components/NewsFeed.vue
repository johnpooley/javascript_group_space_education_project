<template lang="html">
  <div id="app">
    <p> News:{{ news }} </p>
  </div>

</template>

<script>

export default {
  name: 'news-feed',
  props: ['news']
}
</script>

<style lang="css" scoped>
</style>
