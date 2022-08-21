<template>
  <div class="board">
    <slot />
  </div>
</template>

<script>
export default {
  name: "WidgetBoard"
}
</script>

<style scoped>
.board{
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 300px;
}
</style>
