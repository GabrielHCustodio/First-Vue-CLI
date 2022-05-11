<template>
  <HeaderApp :esta_logado="false" />
  <PrimeiroComponente />
  <InfoPessoa />
  <h1  :class="classes">{{ variavel }}</h1>
  <a :href="api_link" target="blank">{{name_link}}</a>
  <p>{{ mensagem }}</p>
</template>

<script>
  import HeaderApp from './components/Header.vue'
  import PrimeiroComponente from './components/PrimeiroComponent.vue'
  import InfoPessoa from './components/Pessoa.vue'

  export default {
    name: 'App',
    data() {
      return {
        variavel: process.env.VUE_APP_MINHA_VARIAVEL,
        name_link: process.env.VUE_APP_API,
        api_link: process.env.VUE_APP_API_LINK,
        mensagem: process.env.VUE_APP_MENSAGEM,
        classes: "background color"
      }
    },
    components: {
      HeaderApp,
      PrimeiroComponente,
      InfoPessoa
    }
  }
</script>

<style scoped>
.color {
  color: red;
}

.background {
  background-color: green;
}
</style>
