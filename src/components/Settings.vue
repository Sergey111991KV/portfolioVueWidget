<template>
  <div class="settings">
    <div class="settings__header">
      <p>Settings</p>
      <p class="settings__close" @click="close" >x</p>
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  name: "WidgetSettings",
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
  left: 70px;
  min-height: 280px;
  max-width: 250px;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #c0fdab;
}
.settings__header{
  display: flex;
  align-items: center;
}
.settings__close{
  position: absolute;
  right: 5px;
}
</style>
