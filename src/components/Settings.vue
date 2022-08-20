<template>
  <div>
    <p @click="close" >x</p>
    <p>Settings</p>
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

</style>
