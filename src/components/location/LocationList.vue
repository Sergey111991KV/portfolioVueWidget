<template>
  <div
       @dragover.prevent
       @dragenter.prevent
       class="location_list">
    <div v-for="location in locations" :key="location.id">
      <LocationCell
          @onDragStartCell="onDragStartCell"
          @deleteCell="onDeleteCell"
          @onDropCell="onDropCell($event)"
          :location="location"
      ></LocationCell>
    </div>
  </div>
  <LocationAdd></LocationAdd>
</template>

<script>
import { mapGetters } from 'vuex'
import LocationCell from "@/components/location/LocationCell"
import LocationAdd from "@/components/location/LocationAdd"
export default {
  name: "LocationList",
  components: {
    LocationCell,
    LocationAdd
  },
  data() {
    return {
      startIndex: ''
    }
  },
  computed: {
    ...mapGetters({
      locations: "GET_LOCATIONS",
    }),
  },
  methods: {
    onDeleteCell(location) {
      // Remove weather data
      let index = this.locations.findIndex((e) => e.id === location.id);
      this.$store.commit("REMOVE_WEATHER", index);

      // Remove location
      let locations = this.locations.filter((e) => e.id !== location.id);
      this.$store.dispatch("setLocalStorageLocations", locations);
    },
    onDragStartCell(location) {
      console.log('onDragStartCell', location)
      this.startIndex = this.locations.findIndex((e) => e.id === location.id);
    },
    onDropCell(location) {
      console.log('onDropCell', location)
      let endIndex = this.locations.findIndex((e) => e.id === location.id);
      console.log('startIndex', this.startIndex)
      console.log('endIndex', endIndex)
      // Swap locations
      let locations = this.swapItems(this.locations, this.startIndex, endIndex);
      this.$store.dispatch("setLocalStorageLocations", locations);

      // Swap weather
      this.$store.commit("SWAP_WEATHER", {startIndex: this.startIndex, endIndex: endIndex});
    },
    swapItems(array, startIndex, endIndex) {
      let temp = array[startIndex];
      array[startIndex] = array[endIndex];
      array[endIndex] = temp;

      return array;
    }
  }
}
</script>

<style scoped>
.location_list{
  min-height: 100px;
  max-height: 200px;
  overflow: scroll;
}
</style>
