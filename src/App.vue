<template>
  <div class="widget_app">
      <div class="widget__gear_container" v-if="!isSettingsOpen">
        <p>Widget-Weather</p>
        <Icon @click="toggleSettingsVisibility" :name="'gear'" :height="'20px'" :width="'20px'"></Icon>
      </div>
      <WidgetSettings v-if="isSettingsOpen" @toggleSettingsVisibility="toggleSettingsVisibility">
        <LocationList></LocationList>
      </WidgetSettings>
      <WidgetBoard>
        <WeatherList @openSettings="openSettings"></WeatherList>
      </WidgetBoard>
      <WidgetLoader></WidgetLoader>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon"
import WidgetBoard from "@/components/Board";
import WidgetLoader from "@/components/Loader";
import WidgetSettings from "@/components/Settings";
import WeatherList from "@/components/weather/WeatherList";
import LocationList from "@/components/location/LocationList";

export default {
  name: 'App',
  components: {
    Icon,
    WidgetBoard,
    WidgetLoader,
    WidgetSettings,
    WeatherList,
    LocationList
  },
  data() {
    return {
      isSettingsOpen: false
    }
  },
  mounted() {
    this.$store.commit("UPDATE_LOCATIONS");
  },
  methods: {
    toggleSettingsVisibility() {
      this.isSettingsOpen = !this.isSettingsOpen
    },
    openSettings() {
      this.toggleSettingsVisibility()
    }
  }
}
</script>

<style>
.widget_app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width: 300px;
  border-radius: 8px;
  border: 2px solid #266eff;
  background-color: #fbfffe;
}
.widget__gear_container{
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  font-size: 20px;
  font-weight: 500;
}
</style>
