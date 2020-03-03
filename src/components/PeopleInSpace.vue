<template lang="html">
  <div id="app">
    <h2>Number of people currently in space: {{ peopleInSpace.number }}</h2>
    <!-- Create for loop to iterate over people array -->
    <h2>Name: {{ peopleInSpace.people[0].name }}</h2>
    <h2>Craft: {{ peopleInSpace.people[0].craft }}</h2>
    <h2>Name: {{ peopleInSpace.people[1].name }}</h2>
    <h2>Craft: {{ peopleInSpace.people[1].craft }}</h2>
    <h2>Name: {{ peopleInSpace.people[2].name }}</h2>
    <h2>Craft: {{ peopleInSpace.people[2].craft }}</h2>
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
