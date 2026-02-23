// Importación de librerías
const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

// Configuración de puerto
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        "Title": "API Calculadora y Figuras Geométricas"
    });
});

// ===============================
// OPERACIONES BÁSICAS
// ===============================

app.post('/sumar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({ error: 'Faltan números para sumar' });
    }

    const resultado = Number(num1) + Number(num2);
    res.send({ resultado });
});

app.post('/restar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({ error: 'Faltan números para restar' });
    }

    const resultado = Number(num1) - Number(num2);
    res.send({ resultado });
});

app.post('/multiplicar', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({ error: 'Faltan números para multiplicar' });
    }

    const resultado = Number(num1) * Number(num2);
    res.send({ resultado });
});

app.post('/dividir', (req, res) => {
    const { num1, num2 } = req.body;

    if (num1 === undefined || num2 === undefined) {
        return res.status(400).send({ error: 'Faltan números para dividir' });
    }

    if (Number(num2) === 0) {
        return res.status(400).send({ error: 'No se puede dividir entre 0' });
    }

    const resultado = Number(num1) / Number(num2);
    res.send({ resultado });
});

// ===============================
// CUADRADO
// ===============================

app.post('/cuadrado/area', (req, res) => {
    const { lado } = req.body;

    if (lado === undefined) {
        return res.status(400).send({ error: 'Falta el valor del lado' });
    }

    const l = Number(lado);
    const area = l * l;

    res.send({ figura: "Cuadrado", area });
});

app.post('/cuadrado/perimetro', (req, res) => {
    const { lado } = req.body;

    if (lado === undefined) {
        return res.status(400).send({ error: 'Falta el valor del lado' });
    }

    const l = Number(lado);
    const perimetro = 4 * l;

    res.send({ figura: "Cuadrado", perimetro });
});

// ===============================
// TRIÁNGULO
// ===============================

app.post('/triangulo/area', (req, res) => {
    const { base, altura } = req.body;

    if (base === undefined || altura === undefined) {
        return res.status(400).send({ error: 'Faltan base o altura' });
    }

    const b = Number(base);
    const h = Number(altura);
    const area = (b * h) / 2;

    res.send({ figura: "Triángulo", area });
});

app.post('/triangulo/perimetro', (req, res) => {
    const { lado1, lado2, lado3 } = req.body;

    if (lado1 === undefined || lado2 === undefined || lado3 === undefined) {
        return res.status(400).send({ error: 'Faltan lados del triángulo' });
    }

    const perimetro = Number(lado1) + Number(lado2) + Number(lado3);

    res.send({ figura: "Triángulo", perimetro });
});

// ===============================
// CÍRCULO
// ===============================

app.post('/circulo/area', (req, res) => {
    const { radio } = req.body;

    if (radio === undefined) {
        return res.status(400).send({ error: 'Falta el radio' });
    }

    const r = Number(radio);
    const area = Math.PI * r * r;

    res.send({ figura: "Círculo", area });
});

app.post('/circulo/perimetro', (req, res) => {
    const { radio } = req.body;

    if (radio === undefined) {
        return res.status(400).send({ error: 'Falta el radio' });
    }

    const r = Number(radio);
    const perimetro = 2 * Math.PI * r;

    res.send({ figura: "Círculo", perimetro });
});

// ===============================
// INICIAR SERVIDOR
// ===============================

app.listen(app.get('port'), () => {
    console.log("SERVIDOR CORRIENDO EN EL PUERTO " + app.get('port'));
});