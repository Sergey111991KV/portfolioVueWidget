<template>
  <div>
    WeatherCell
  </div>
</template>

<script>
import {LocationInterface} from "@/models/weather.interface";

export default {
  props: {
    weather: LocationInterface
  },
  name: "WeatherCell"
}
</script>

<style scoped>

</style>
