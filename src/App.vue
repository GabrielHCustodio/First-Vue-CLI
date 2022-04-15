<template>
  <HeaderApp />
  <PrimeiroComponente />
  <InfoPessoa />
</template>

<script>
  import HeaderApp from './components/Header.vue'
  import PrimeiroComponente from './components/PrimeiroComponent.vue'
  import InfoPessoa from './components/Pessoa.vue'

  export default {
    name: 'App',
    components: {
      HeaderApp,
      PrimeiroComponente,
      InfoPessoa
    }
  }
</script>
