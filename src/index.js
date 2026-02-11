// Importación de librerias
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Configuración de puertos
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        "Title": "Hola Mundo"
    });
});

//comentario ejemplo suma
app.post('/sumar',(req,res) => {
    const { num1,num2 } = req.body;


//validar que se hayan enviado los dos numeros que no 
if (!num1 || !num2) {
    return res.status(400).send({error:'Faltan numeros para sumar'});

}
//sumar los numeros
const resultado = num1 + num2;
//enviar resultado
res.send({resultado});
});

//comentario ejemplo resta
app.post('/restar',(req,res) => {
    const { num1,num2 } = req.body;

//validar que se hayan enviado los dos numeros que no 
if (!num1 || !num2) {
    return res.status(400).send({error:'Faltan numeros para restar'});

}
//sumar los numeros
const resultado = num1 - num2;
//enviar resultado
res.send({resultado});
});

//comentario ejemplo multiplicacion
app.post('/multiplicar',(req,res) => {
    const { num1,num2 } = req.body;


//validar que se hayan enviado los dos numeros que no 
if (!num1 || !num2) {
    return res.status(400).send({error:'Faltan numeros para multiplicar'});

}
//sumar los numeros
const resultado = num1 * num2;

//enviar resultado
res.send({resultado});
});

//comentario ejemplo 
app.post('/dividir',(req,res) => {
    const { num1,num2 } = req.body;



//validar que se hayan enviado los dos numeros que no 
if (!num1 || !num2) {
    return res.status(400).send({error:'Faltan numeros para dividir'});

}
//sumar los numeros
const resultado = num1 / num2;

//enviar resultado
res.send({resultado});
});

//Iniciando el servidor
app.listen(app.get('port'), () => {
    console.log("SERVIDOR EN EL PUERTO 3000");
});
