// SERVIDOR
const express = require('express') // importando a biblioteca express
const server = express() // devolvendo uma instância de um objeto express

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

// configurar nunjucks (template engine)
const nunjucks = require('nunjucks') // importando o nunjucks
nunjucks.configure('src/views', { // onde está as páginas html | objeto com as configurações
    express: server, // passando o objeto express (linha 31)
    noCache: true // desabilitando o cache
})  

// INICIO E CONFIGURAÇÃO DO SERVIDOR
server
// receber os dados do req.body
.use(express.urlencoded( { extended: true } )) // por padrão o express não recebe esses dados no corpo da requisição (req.body)
// configurar os arquivos estáticos (servindo os arquivos da pasta public)
.use(express.static("public")) 
// rotas da aplicação
.get('/', pageLanding)
.get('/study', pageStudy)
.get('/give-classes', pageGiveClasses)
.post('/save-classes', saveClasses)
.listen(5500) // START DO SERVIDOR (PORTA)