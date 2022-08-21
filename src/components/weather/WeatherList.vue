<template>
  <div>
    <div v-for="item in weather" :key="item.name">
      <WeatherCell :weather="item"></WeatherCell>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherCell from '@/components/weather/WeatherCell'
export default {
  name: "WeatherList",
  computed: {
    ...mapGetters({
      weather: "GET_WEATHER",
      locations: "GET_LOCATIONS"
    }),
  },
  mounted() {
    this.$store.commit("UPDATE_LOCATIONS");
    if (this.locations.length > 0) {
      for (const location of this.locations) {
        this.$store.dispatch("addWeather", location.name);
      }
    }
  },
  components: {
    WeatherCell
  },
}
</script>

<style scoped>

</style>
