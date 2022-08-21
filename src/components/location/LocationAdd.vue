<template>
  <div class="location_add">
    <div>
      <label for="new-location">Add location</label>
      <input @keyup="pressEnter" v-model="name" id="new-location">
    </div>
    <Icon @click="addLocation" name="enter"></Icon>
  </div>
</template>

<script>
import Icon from '@/components/Icon/Icon'
import {mapGetters} from "vuex";
export default {
  name: "LocationAdd",
  components: {
    Icon
  },
  data() {
      return {
        name: ''
      }
  },
  computed: {
    ...mapGetters({
      locations: "GET_LOCATIONS",
    }),
  },
  methods: {
    addLocation() {
      if (this.uniquenessValidation(this.locations, this.name).length == 0) {
        // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.name}&APPID=9dd204d2830498b233f6ad2ea679a11a`).then ((res) => {
        //       console.log(res)
        //     }
        // )
        //     .catch((err) => console.log(err))
        let locations = this.locations;
        locations.push(this.name);

        this.$store.dispatch("setLocalStorageLocations", locations);
        // this.$store.dispatch("fetchWeather", city, country);

        this.name = ''

      } else {
        alert("This location has already been added.");
      }
    },
    uniquenessValidation(locations, new_location) {
      return locations.filter((e) => e === new_location);
    },
    pressEnter(e) {
      if (e.key === 'Enter') this.addLocation()
    }
  }
}
</script>

<style scoped>
.location_add{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 200px;
}

</style>
