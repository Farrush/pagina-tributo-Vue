<template>
  <n-carousel autoplay show-arrow>
    <img
      class="carousel-img"
      src="../assets/images/pant0.jpg"
    >
    <img
      class="carousel-img"
      src="../assets/images/pant1.jpg"
    >
    <img
      class="carousel-img"
      src="../assets/images/pant2.jpg"
    >
    <img
      class="carousel-img"
      src="../assets/images/pant3.jpg"
    >
  </n-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'CarrosselVue'
})
</script>


<style scoped>

img{
  max-width: 60vw;
}
.carousel-img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>