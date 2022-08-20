<template>
  <div>
    <p>Icon</p>
  </div>
</template>

<script>
import {IconName} from "@/components/Icon/icon.interface";

export default {
  props: {
    name: IconName,
    width: String,
    height: String,
  },
  name: "WidgetLoader"
}
</script>

<style scoped>

</style>
