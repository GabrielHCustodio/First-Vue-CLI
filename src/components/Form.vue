<template>
    <div>
        <h3>Meu formulário</h3>
        <InputText /> <br>
        <InputPassword /> 
        <ButtonEnviar />
    </div>
</template>

<script>
import InputText from './Inputs.vue/InputText.vue'
import InputPassword from './Inputs.vue/InputPass.vue'
import ButtonEnviar from './Inputs.vue/Button.vue'

export default {
    name: "FormCadastro",
    components: {
        InputText,
        InputPassword,
        ButtonEnviar
    }
}
</script>
