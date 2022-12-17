<template>
    <div class="box">
        <slot></slot>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'BuildSlot'
})
</script>

<style scoped>
    .box{
        padding: 8px 12px;
        margin: 0;
        margin-bottom: 10vh;
        display: flex;
        height: fit-content;
        flex-direction: column;
        align-items: center;
    }
</style>