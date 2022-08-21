<template>
  <div class="location_cell" @click="locationClick">
    <Icon name="hamburger" width="15px" height="15px"></Icon>
      {{ this.location.name }}
    <Icon name="basket" width="15px" height="15px"></Icon>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon";
import {LocationInterface} from "@/models/location.interface";

export default {
  props: {
    location: LocationInterface
  },
  components: {
    Icon
  },
  name: "LocationCell",
  methods: {
    locationClick() {
      console.log(this.location)
    }
  }
}
</script>

<style scoped>
.location_cell{
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
