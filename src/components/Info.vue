<template>
    <div>
        <h4>Tecnologias que utilizo</h4>
        <ul>
            <li v-for="(l, i) in linguagens" :key="i"> {{ l.nome }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TecPessoa',
        data() {
            return {
                linguagens: [
                    { nome: 'PHP'},
                    { nome: 'Python'},
                    { nome: 'JavaScript'},
                    { nome: 'Java'}
                ]
            }
        }
    }
</script>