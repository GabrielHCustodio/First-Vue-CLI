<template>
    <input type="password" :placeholder="placeholder">
</template>

<script>
    export default {
        name: 'InputPassword',
        data() {
            return {
                placeholder: 'Informe sua senha'
            }
        }
    }
</script>
