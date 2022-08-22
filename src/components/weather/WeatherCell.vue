<template>
  <div class="weather_cell">
    <div class="weather_cell__item">
      <p class="weather_cell__title">City: </p>
      <p>{{ weather.name }}</p>
    </div>
    <div class="weather_cell__item">
      <p class="weather_cell__title">Temperature: </p>
      <p>{{ weather.temp }}</p>
    </div>
    <div class="weather_cell__item">
      <p class="weather_cell__title">Feel Like: </p>
      <p>{{ weather.feelLike }}</p>
    </div>
    <div class="weather_cell__item">
      <p class="weather_cell__title">Pressure: </p>
      <p>{{ weather.pressure }}</p>
    </div>
    <div class="weather_cell__item">
      <p class="weather_cell__title">Wind: </p>
      <p>{{ weather.wind?.speed }} / {{ weather.wind?.deg }}</p>
    </div>
    <div class="weather_cell__item">
      <p class="weather_cell__title">Clouds All: </p>
      <p>{{ weather.clouds?.all }}</p>
    </div>
    <div v-if="weather.weatherMain" class="weather_cell__item">
      <p class="weather_cell__title">Main: </p>
      <p>{{ weather.weatherMain }}</p>
    </div>
    <div v-if="weather.weatherDesc" class="weather_cell__item">
      <p class="weather_cell__title">Description: </p>
      <p>{{ weather.weatherDesc }}</p>
    </div>
    <div class="weather_cell__item">
      <p class="weather_cell__title">Visibility: </p>
      <p>{{ weather.visibility }}</p>
    </div>
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
.weather_cell{
  padding: 5px;
  margin: 5px 0px;
  border-radius: 8px;
  background-color: #e5ffdc;
}
.weather_cell__item{
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 240px;
}
p{
  margin: 4px;
}
.weather_cell__title{
  font-weight: 500;
}
</style>
