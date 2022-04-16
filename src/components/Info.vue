<template>
    <div>
        <h4>Tecnologias que utilizo</h4>
                <p>Email de contato: {{ email }} - {{ compEmail }} </p>
        <ul>
            <li v-for="(l, i) in linguagens" :key="i"> {{ l.nome }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'TecPessoa',
        props: {
            compEmail: String
        },
        data() {
            return {
                linguagens: [
                    { nome: 'PHP'},
                    { nome: 'Python'},
                    { nome: 'JavaScript'},
                    { nome: 'Java'}
                ],
                email: "gabrielghc@email.com"
            }
        }
    }
</script>