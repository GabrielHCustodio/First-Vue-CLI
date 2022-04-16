<template>
    <div>
        <ul>
            <li v-for="(l, i) in lista" :key="i"><a href="">{{l.nome}}</a></li>
            <li v-if="esta_logado"><a href="">Meu perfil</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "HeaderApp",
        data() {
            return {
                lista: [
                    {nome: 'Home'},
                    {nome: 'Projetos'},
                    {nome: 'Serviços'},
                    {nome: 'Contato'}
                ]
            }
        },
        props: ["esta_logado"]
    }
</script>

<style scoped>
    div {
        width: 100%;
        height: 80px;
        background-color: black;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    div ul {
        color: white;
        display: flex;
        list-style: none;
    }

    div ul li {
        margin-right: 50px;
    }

    div ul li a {
        text-decoration: none;
        color: white;
        background-color: rgb(71, 71, 194);
        padding: 10px;
        border-radius: 30px;
        transition: 1s;
    }

    div ul li a:hover {
        background-color: rgb(41, 41, 148);
    }
</style>