<template>
  <div
      class="location_cell"
      :draggable="draggable"
      @dragstart="onDragStart($event, location)"
      @drop="onDropCell($event, location)"
      @dragover.prevent
      @dragenter.prevent
  >
      <Icon
          @mouseover="setDraggable(true)"
          @mouseleave="setDraggable(false)"
          name="hamburger"
          width="15px"
          height="15px"></Icon>
      {{ this.location.name }}
    <Icon @click="deleteLocation" name="basket" width="15px" height="15px"></Icon>
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon";
import {LocationInterface} from "@/models/location.interface";
import {mapGetters} from "vuex";

export default {
  props: {
    location: LocationInterface
  },
  components: {
    Icon
  },
  computed: {
    ...mapGetters({
      locations: "GET_LOCATIONS",
    }),
  },
  name: "LocationCell",
  data() {
    return{
      draggable: false
    }
  },
  methods: {
    deleteLocation() {
      this.$emit("deleteCell", this.location)
    },
    setDraggable(value) {
      this.draggable = value
    },
    onDragStart(event) {
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      this.$emit("onDragStartCell", this.location)
    },
    onDropCell() {
      this.$emit("onDropCell", this.location)
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
  padding: 2px 5px;
}
</style>
