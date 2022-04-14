<template>
    <div>
        <h2>Nós informe mais sobre vc</h2>
        <TecPessoa />
        <FormCadastro />
    </div>
</template>

<script>
import TecPessoa from './Info.vue'
import FormCadastro from './Form.vue'

export default ({
    name: 'InfoPessoa',
    components: {
        TecPessoa,
        FormCadastro
    }
})
</script>
