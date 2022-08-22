<template>
  <div v-if="weather.length > 0">
    <div v-for="item in weather" :key="item.name">
      <WeatherCell :weather="item"></WeatherCell>
    </div>
  </div>
  <div class="weather_list__add_location_container" v-if="weather.length === 0">
    <div class="weather_list__add_location_container_wrapper">
      Add your location to weather
      <div @click="addCurrentLocation" class="weather_list__add_location_button">
        <Icon name="plus" width="30px" height="30px"></Icon>
      </div>
      Add any location to weather
      <div @click="addAnyLocation" class="weather_list__add_location_button">
        <Icon name="plus" width="30px" height="30px"></Icon>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon";
import { mapGetters } from 'vuex'
import WeatherCell from '@/components/weather/WeatherCell'
export default {
  name: "WeatherList",
  components: {
    WeatherCell,
    Icon,
  },
  computed: {
    ...mapGetters({
      weather: "GET_WEATHER",
      locations: "GET_LOCATIONS"
    }),
  },
  mounted() {
    this.$store.commit("UPDATE_LOCATIONS");
    if (this.locations.length > 0) {
      console.log(this.locations, 'this.locations')
      for (const location of this.locations) {
        console.log(location, 'location')
        this.$store.dispatch("addWeather", location.name);
      }
    }
  },
  methods: {
    addCurrentLocation() {
      this.$store.dispatch("setCurrentLocation");
    },
    addAnyLocation() {
      this.$emit("openSettings")
    }
  }
}
</script>

<style scoped>
.weather_list__add_location_container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.weather_list__add_location_container_wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.weather_list__add_location_button{
  margin: 30px 0px;
  width: fit-content;
  padding: 10px;
  border-radius: 50%;
  background-color: #0074ff;
  cursor: pointer;
}
</style>
