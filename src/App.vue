<template>
  <div class="widget-app">
      <div>
        <Icon @click="toggleSettingsVisibility" name="gear" width="10px" height="10px"></Icon>
      </div>
    <WidgetSettings v-if="isSettingsOpen" @toggleSettingsVisibility="toggleSettingsVisibility"></WidgetSettings>
    <WidgetBoard></WidgetBoard>
    <WidgetLoader></WidgetLoader>
    <WidgetNavbar></WidgetNavbar>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon"
import WidgetBoard from "@/components/Board";
import WidgetLoader from "@/components/Loader";
import WidgetNavbar from "@/components/Navbar";
import WidgetSettings from "@/components/Settings";

export default {
  name: 'App',
  components: {
    Icon,
    WidgetBoard,
    WidgetLoader,
    WidgetNavbar,
    WidgetSettings
  },
  data() {
    return {
      isSettingsOpen: false
    }
  },
  methods: {
    toggleSettingsVisibility() {
      this.isSettingsOpen = !this.isSettingsOpen
    }
  }

}
</script>

<style>
.widget-app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
