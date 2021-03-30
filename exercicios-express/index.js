const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const saudacao = require('./saudacaoMid');
const usuarioApi = require('.api/usuario');
require('./api/produto')(app, 'com param!');

app.post('/usuario', usuarioApi.salvar);
app.post('/usuario', usuarioApi.obter);

app.use(bodyParser.text());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(saudacao('Sátiro'));

app.use('/opa', (req, res, next) => {
    console.log('Será que serei chamado?');
    next();
});

app.get('/clientes/relatorios', (req, res) => {
    res.send(`Cliente relatório: completo ${req.query.completo} ano = ${req.query.ano}`);
});

app.post('/corpo', (req, res) => {
    // let corpo = '';
    // req.on('data', function(parte) {
    //     corpo += parte;
    // });

    // req.on('end', function() {
    //     res.send(corpo);
    // });
    res.send(req.body);
});

app.get('/clientes/:id', (req, res) => {
    res.send(`Cliente ${req.params.id} selecionado!`);
});

app.get('/opa', (req, res) => {
    // res.send('Estou bem');
    res.json({
        name: 'iPad 32gb',
        price: 1864.45
    });
});

app.listen(3000, () => {
    console.log('Executando');
});
