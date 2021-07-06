const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port=5000;
const nombresRutas = require('./rutas/nombres');

app.set('json spaces', 4);//agregar espaciado al json

//Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//rutas
app.use('/nombres',nombresRutas);

//archivos estaticos

//iniciar servidores
app.listen(port, ()=>{
   console.log('Servidor escuchando en el puerto '+port);
});