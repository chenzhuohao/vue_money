<template>
  <div class="navbar">
    <div class="back-icon" @click="goback">
      <img :src="icon" >
    </div>
    <div class="title">{{ props.title }}</div>
  </div>
</template>

<script setup>
const $emit = defineEmits(['goback'])

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  icon: {
    default: require('../../assets/iconPark-left Copy.svg')
  },
});

const goback = () => {
  $emit('goback')
}
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
  display: flex;
  align-items: center;
  padding: 0 0.5rem;

  .back-icon {
    float: left;
    width: 2.18rem;
    height: 2.18rem;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .title {
    font-size: 1.125rem;
    flex: auto;
    align-self: center;
    text-align: center;
    margin-left: -2.18rem;
  }
}
</style>