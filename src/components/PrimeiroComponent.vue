<template>
    <h1>Hello Vue!!!</h1>
    <button @click="exibirInformacoes = !exibirInformacoes">
        <span v-if="!exibirInformacoes">Exibir Informações</span>
        <span v-if="exibirInformacoes">Ocultar Informações</span>
    </button>
    <p v-if="exibirInformacoes"> {{ moreInformations }}</p>
</template>

<script>
    export default {
        name:"PrimeiroComponente",
        data() {
            return {
                exibirInformacoes: false,
                moreInformations: "Meu nome é Gabriel"
            }
        }
    }
</script>
