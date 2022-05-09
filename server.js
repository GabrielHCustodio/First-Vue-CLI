const express = require('express')
const app = express()
const port = 3001

app.use(express.static(__dirname + "/dist/"))

app.get('/' , ( request , response) => {
    response.sendfile(__dirname + "/dist/index.html")
})

app.listen(port , () => {
    console.log(`Server rodando na porta ${port}`)
})