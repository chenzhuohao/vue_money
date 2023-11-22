<template>
  <div class="navbar">
    <div class="back-icon">
      <img src="../../assets/iconPark-left Copy.svg" >
    </div>
    <div class="title">{{ 'props.title' }}</div>
  </div>
</template>

<script setup lang="ts">
// import { defineProps } from 'vue';
// const props = defineProps({
//   title: {
//     type: String,
//     required: true,
//   },
// });
</script>

<style scoped lang="scss">
.navbar {
  width: 100%;
  height: 2.75rem;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
  font-size: 18px;
  background-color: #fff;
  box-shadow: 0 0.0625rem 0.125rem 0 rgba(0, 0, 0, 0.1);
}
</style>