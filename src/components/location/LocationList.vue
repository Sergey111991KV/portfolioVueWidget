<template>
  <div class="location_list">
    <div v-for="location in locations" :key="location.id">
      <LocationCell :location="location"></LocationCell>
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
  computed: {
    ...mapGetters({
      locations: "GET_LOCATIONS",
    }),
  },
  methods: {
  }
}
</script>

<style scoped>
.location_list{
  max-height: 100px;
  overflow: scroll;
}
</style>
