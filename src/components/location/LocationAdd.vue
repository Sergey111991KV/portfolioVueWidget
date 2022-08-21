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
  computed: {
    ...mapGetters({
      locations: "GET_LOCATIONS",
      newLocation: "GET_NEW_LOCATION"
    }),
    name: {
      set(value) {
        this.$store.commit("CLEAR_NEW_LOCATION_NAME", value);
      },
      get() {
        return this.newLocation;
      }
    }
  },
  methods: {
    addLocation() {
      if (this.uniquenessValidation(this.locations, this.name).length === 0) {
        this.$store.dispatch("checkAndAddWeather");
      } else {
        alert("This location has already been added");
      }
    },
    uniquenessValidation(locations, new_location) {
      console.log(locations, new_location)
      return locations.filter((e) => e.name === new_location);
    },
    pressEnter(e) {
      console.log(e)
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
