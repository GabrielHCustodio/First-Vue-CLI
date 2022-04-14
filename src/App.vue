<template>
  <PrimeiroComponente />
  <InfoPessoa />
</template>

<script>
  import PrimeiroComponente from './components/PrimeiroComponent.vue'
  import InfoPessoa from './components/Pessoa.vue'

  export default {
    name: 'App',
    components: {
      PrimeiroComponente,
      InfoPessoa
    }
  }
</script>
