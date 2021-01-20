<template>
  <div id="app">
    <WorkSheet />
  </div>
</template>

<script>
import WorkSheet from './components/WorkSheet.vue'

export default {
  name: 'App',
  components: {
    WorkSheet
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
