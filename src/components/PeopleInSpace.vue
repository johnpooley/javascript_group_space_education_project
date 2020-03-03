<template lang="html">
  <div id="app">
    <h2>Number of people currently in space: {{ peopleInSpace.number }}</h2>

    <div v-if="peopleInSpace" v-for="person in peopleInSpace.people">
      <h2>Name: {{ person.name }}</h2>
      <h2>Craft: {{ person.craft }}</h2>
    </div>
  </div>

</template>

<script>

export default {
  name: 'people-in-space',
  props: ['peopleInSpace']
}
</script>

<style lang="css" scoped>
</style>
