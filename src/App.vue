<template>
  <Board></Board>
  <Loader></Loader>
  <Navbar></Navbar>
  <Settings></Settings>
</template>

<script>
import Board from './components/Board.vue'
import Loader from './components/Loader.vue'
import Navbar from './components/Navbar.vue'
import Settings from './components/Settings.vue'

export default {
  name: 'App',
  components: {
    Board,
    Loader,
    Navbar,
    Settings
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
