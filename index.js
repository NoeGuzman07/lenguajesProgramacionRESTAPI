const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Ruta Inicial del sistema
const routerlenguaje_programacion = require('./routes/lenguajes_programacionRouter');
app.use('/lenguajes-programacion',routerlenguaje_programacion);
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hola sistema Rest API Ejecutandose Correctamente');
    res.send('Herramientas utilizadas:');
    res.send('MySQL + Node JS + Express JS + RESTer');
});

app.listen(port, () => {
    console.log('Puerto: ' + port);
    console.log('http://localhost:3000/lenguajes-programacion');
    console.log('http://localhost:3000/lenguajes-programacion/X');
});