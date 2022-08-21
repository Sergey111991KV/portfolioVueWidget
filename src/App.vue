<template>
  <div class="widget_app">
      <div class="widget__gear_container" v-if="!isSettingsOpen">
        <Icon @click="toggleSettingsVisibility" :name="'gear'"></Icon>
      </div>
      <WidgetSettings v-if="isSettingsOpen" @toggleSettingsVisibility="toggleSettingsVisibility">
        <LocationList></LocationList>
      </WidgetSettings>
      <WidgetBoard>
        <WeatherList></WeatherList>
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
  padding: 10px;
  width: 300px;
  background-color: #e2efeb;
}
.widget__gear_container{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
