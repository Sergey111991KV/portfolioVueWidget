<template>
  <div>
    <WidgetSettings></WidgetSettings>
      <WidgetBoard></WidgetBoard>
      <WidgetLoader></WidgetLoader>
      <WidgetNavbar></WidgetNavbar>
  </div>
</template>

<script>
import WidgetBoard from '../components/Board.vue'
import WidgetLoader from '../components/Loader.vue'
import WidgetNavbar from '../components/Navbar.vue'
import WidgetSettings from '../components/Settings'
export default {
  name: "WidgetHome",
  components: {
    WidgetBoard,
    WidgetLoader,
    WidgetNavbar,
    WidgetSettings
  }
}
</script>

<style scoped>

</style>
