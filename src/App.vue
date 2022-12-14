<template>
<NavBar/>
<div class="container">
    <div class="container mt-3">
      <router-view class="mx-auto col-12"/>  
    </div>

</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue'
import NavBar from './components/Header.vue'

export default defineComponent({
  name: 'App',
  components:{
    NavBar,

  },

})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');
:root{
  --darkest-purple: #0c0032;
  --darker-purple: #190061;
  --dark-purple: #240090;
  --purple: #3500D3;
  --grey: #282828;
  --white: #f8f8f8;
  
}
#app {
  font-family: 'Space Grotesk', sans-serif;
  background-color:var(--darker-purple);
}
html{
  height: 100%;
  background-color: var(--darker-purple);
  overflow-x: hidden;
}

</style>
