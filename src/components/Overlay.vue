<template>
  <div class="overlay rounded">
    <slot name="closeIcon"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
