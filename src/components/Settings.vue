<template>
  <div class="settings">
    <div class="settings__header">
      <p>Settings</p>
      <Icon @click="close" name="close" :height="'15px'" :width="'15px'"></Icon>
    </div>
    <slot />
  </div>
</template>

<script>
import Icon from "@/components/Icon/Icon";
export default {
  name: "WidgetSettings",
  components: {
    Icon,
  },
  methods: {
    close() {
        this.$emit("toggleSettingsVisibility");
    },
  },
}
</script>

<style scoped>
.settings{
  position: absolute;
  left: 55px;
  border-radius: 8px;
  min-height: 280px;
  width: fit-content;
  max-width: 250px;
  padding: 5px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #abeafd;
}
.settings__header{
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
