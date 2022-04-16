<template>
    <h1>Hello Vue!!!</h1>
    <PicAvatar />
    <button @click="exibirInformacoes = !exibirInformacoes">
        <span v-if="!exibirInformacoes">Exibir Informações</span>
        <span v-if="exibirInformacoes">Ocultar Informações</span>
    </button>
    <p v-if="exibirInformacoes"> {{ moreInformations }}</p>
</template>

<script>

    import PicAvatar from './Foto.vue'
    export default {
        name:"PrimeiroComponente",
        components: {
            PicAvatar
        },
        data() {
            return {
                exibirInformacoes: false,
                moreInformations: "Meu nome é Gabriel"
            }
        }
    }
</script>
