<template>
    <div>
        <img :src="avatar" alt="">
        <MudarImagem @mudar-imagem="TrocarImagem" />
    </div>
</template>
<script>

    import MudarImagem from "./TrocarFoto.vue"

    export default{
        name: 'PicAvatar',
        components: {
            MudarImagem
        },
        data() {
            return {
                avatar: '/img/avatar.png'
            }
        },
        methods: {
            TrocarImagem() {
                this.avatar = './img/avatar2.png'
            }
        }
    }
</script>