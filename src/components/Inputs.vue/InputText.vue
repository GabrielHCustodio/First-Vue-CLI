<template>
    <input @keyup="letras($event)" type="text" :placeholder="name">
</template>

<script>
    export default {
        name: 'InputText',
        data() {
            return {
                name: 'Informe seu nome'
            }
        },
        methods: {
            letras(e) {
                console.log(e.key)
            }
        }
    }
</script>