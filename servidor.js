const http = require('http'); // requisição do modulo http
const soma = require('./soma');

let servidor = http.createServer(function (req, res) {

    let resultado =soma(2,3)
    res.write(`O resultado da soma e ${resultado}`);
    res.end();
})

servidor.listen(3000);