<template>
    <h1 class="mt-2 mb-4">Antitanque</h1>
    <div class="runa">
        <h2 class="mt-4 mb-2">Runa</h2>
        <img src="@/assets/images/runa-antitank.png"/>
    </div>
    <h2 class="mt-4 mb-2">Itens</h2>
    <div class="p-3 d-flex flex-row flex-wrap itens">
        <div class="d-flex flex-column justify-content-between">
            <div class="d-flex flex-column align-items-center">
                <h3 class="my-2">Principais</h3>
                <img src="@/assets/images/core-antitank.png"/>
            </div>
            <div class="d-flex flex-column align-items-center">
                <h3 class="my-2">Botas</h3>
                <img src="@/assets/images/botas.png"/>
            </div>
        </div>
            <div class="d-flex flex-column align-items-center">
                <h3 class="my-2">Possíveis próximos itens</h3>
                <img src="@/assets/images/itens-antitank.png"/>
            </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
    name: 'AntiTank'
})
</script>

<style scoped>
.runa{
    width:75%;
    align-items: center;
    display: flex;
    flex-direction: column;
    align-self: flex-end;
}
img{
    border: var(--white) solid 2px;
}
.itens{
    justify-content: space-between;
    width: 85%;
}


</style>