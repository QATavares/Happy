//Importar dependencias
const express = require('express');
const path = require('path')
const pages = require('./pages.js')

//Iniciando o express
const server = express()
server
// utilizar body do request
.use(express.urlencoded({ extended: true }))
// utilizando os arquivos estáticos
.use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')

//Criando as rotas da aplicação
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

//Ligar o servidor
server.listen(5500)
console.log('Iniciando o servidor. Bons estudos!')

