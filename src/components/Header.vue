<template>
    <div class="navigation">
    <ul class="nav nav-justified mt-2">
        <li class="nav-item">
            <router-link class="nav-link mx-auto" active-class="active" exact to="/">Home</router-link>
        </li>
        <li class="nav-item">     
            <router-link class="nav-link mx-auto" active-class="active" exact to="/builds">Builds</router-link>
        </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    name: "HeaderComponent"
})
</script>

<style scoped>

ul{
  width: 60vw;
}
ul li :hover, .active{
  background-color: var(--purple);
  color: #FFF;
}
.nav-link{
  color: #FFF;
}
.navigation{
  height: 12vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100vw;
  background: var(--darkest-purple);
}

</style>