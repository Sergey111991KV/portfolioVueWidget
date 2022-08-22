<template>
  <div class="icon_container">
    <div ref="icon">
    </div>
  </div>
</template>

<script>
// import {IconName} from "@/components/Icon/icon.interface";
import * as icons from './icons';

export default {
  props: {
    name: String,
    width: String,
    height: String,
  },
  name: "WidgetLoader",
  mounted() {
    const arraySvg = Object.values(icons);
    const iconSvg = arraySvg.find((item) => item?.name === this.name);
    if(this.$refs.icon && iconSvg.data) {
      this.$refs.icon.innerHTML = iconSvg.data
      this.$refs.icon.style.width = this.width ? this.width : '10px'
      this.$refs.icon.style.height = this.height ? this.height : '10px'
    }
  }
}
</script>

<style scoped>
.icon_container{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: fit-content;
  cursor: pointer;
}
</style>
