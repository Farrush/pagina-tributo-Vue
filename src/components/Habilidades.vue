<template>
    <h2>Habilidades</h2>

        <n-card class="mt-3 mx-auto">
            <div class="card-content">
            <img class="mr-2" src="@/assets/images/passiva.png"/>
                <div>
                    <h3>Determinação Mortal (Passiva)</h3>
                    <p>
                        Após algumas habilidades ou ataques, a próxima habilidade de Pantheon será fortalecida.
                    </p>
                </div>
            </div>
        </n-card>
        <n-card class="mt-3 mx-auto">
            <div class="card-content">
            <img class="mr-2" src="@/assets/images/Q.png"/>
                <div>
                    <h3>Lança Meteórica (Q)</h3>
                    <p>
                        Pantheon pode fazer uma investida com sua lança ou arremessá-la na direção escolhida.
                    </p>
                </div>
            </div>
        </n-card>
        <n-card class="mt-3 mx-auto">
            <div class="card-content">
            <img class="mr-2" src="@/assets/images/W.png"/>
                <div>
                    <h3>Escudo-cometa (W)</h3>
                    <p>
                        Pantheon avança em um alvo, causando dano e atordoando-o.
                    </p>
                </div>
            </div>
        </n-card>
        <n-card class="mt-3 mx-auto">
            <div class="card-content">
            <img class="mr-2" src="@/assets/images/E.png"/>
                <div>
                    <h3>Égide impetuosa (E)</h3>
                    <p>
                        Pantheon posiciona seu escudo, ficando invulnerável a dano vindo de sua frente e atacando rapidamente com sua lança.
                    </p>
                </div>
            </div>
        </n-card>
        <n-card class="mt-3 mx-auto">
            <div class="card-content">
            <img class="mr-2" src="@/assets/images/R.png"/>
                <div>
                    <h3>Constelação cadente (R)</h3>
                    <p>
                        Pantheon se prepara, salta para o ar e aterrissa como um cometa no local escolhido.
                    </p>
                </div>
            </div>
        </n-card>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name:'CardsHabilidades'
})
</script>

<style scoped>
h2{
    color: var(--white);
    font-size: 3.5rem;
    text-align: center;
}
p{
    font-size: 1.7rem;
}
.n-card{
    max-width: 80vw;
    background-color: var(--grey);
    color: var(--white);
    border: none;
}
.n-card img{
    width: 128px;
    height: 128px;
    object-fit: cover;
    border: var(--white) 2px solid;
}
.card-content{
    display: flex;
}
</style>