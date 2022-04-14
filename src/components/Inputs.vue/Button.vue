<template>
    <div>
        <button @click="enviar()">Enviar</button>
    </div>
</template>

<script>
export default {
    name:  'ButtonEnviar',
    data() {
        return {
            msg: 'Enviado'
        }
    },
    methods: {
        enviar() {
            console.log(this.msg)
        }
    }
}
</script>
