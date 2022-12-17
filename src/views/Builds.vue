<template>

    <div class="container mt-2 mx-1">
    <ul class="nav nav-justified">
        <li>
            <router-link class="nav-link mx-auto" active-class="active" exact to="/antitank">
                Anti-tanque
            </router-link>
        </li>
        <li>
            <router-link class="nav-link mx-auto" active-class="active" exact to="/assassin">
                Assassino full letalidade
            </router-link>
        </li>
        <li>
            <router-link class="nav-link mx-auto" active-class="active" exact to="/goredrinker">
                Hemodrenário
            </router-link>
        </li>
    </ul>
        <BuildSlot>
            <router-view class="mx-auto"/> 
        </BuildSlot> 
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import BuildSlot from '@/components/BuildSlot.vue'
export default defineComponent({
    name: 'BuildView',
    data(){
        return{

        }
    },
    components:{
        BuildSlot
    }
})
</script>

<style scoped>
div.container{
    color: var(--white);
    background-color: var(--grey);
    border-radius: 10px;
}
ul{
    width: 100%;
    justify-content: end;
}
li{
    margin: 2px 7px;
    padding: 2px 3px;
    
}
li :hover, .active{
    background-color: var(--purple);
    opacity: 0.7;
    border-radius: 8px;
}
.nav-link{
    color: #FFF;
}
</style>