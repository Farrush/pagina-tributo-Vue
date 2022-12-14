<template>
    <div class="box p-3">
    <h1>"Meu lugar é sendo derrubado, para poder me levantar novamente!"</h1>
    <p>
        Antes um relutante portador do Aspecto da Guerra, Atreus, 
        recusando-se a sucumbir a um golpe que arrancou estrelas do céu, 
        conseguiu sobreviver quando o poder celestial dentro dele foi morto. 
        Com o tempo, ele aprendeu a usar o poder de sua própria mortalidade e da 
        persistente resiliência que veio junto a ela. Hoje Atreus se opõe a tudo 
        o que é divino com o renascimento de um novo Pantheon, e sua inabalável 
        determinação é o que alimenta as armas do antigo Aspecto no campo de batalha.
    </p>
    </div>
    <section class="carrossel ml-auto mr-3 mt-4">
        <Carrossel/>
    </section>
    <section class="container">
        <Habilidades/>
    </section>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import Carrossel from '@/components/Carrossel.vue'
import Habilidades from '@/components/Habilidades.vue'
export default defineComponent({
    name: 'HomeView',
    components:{
        Carrossel,
        Habilidades
    },
    data(){
        return{

        }
    },
    methods:{

    },
})
</script>

<style scoped>
.carrossel{
    width:60vw;
}

.box{
    background-color: var(--grey);
    color: var(--white);
    border-radius: 10px;
}
p{
    font-size: 1.5rem;
}

</style>