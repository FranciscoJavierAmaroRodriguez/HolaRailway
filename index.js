const express = require("express");
const morgan = require("morgan");
const app = express();


const port=process.env.PORT || 3000;

//Funcion de middleware propia
app.use((req,res,next)=>{
    console.log("Peticion al server"+new Date());
    next();
})

//Funcion de Middleware de terceros
app.use(morgan('combined'));

app.get('/', (req, res) => {
res.send('Constestando a Get desde ServExpress, Hola mundo!');
});

app.post("/", (req,res) =>{
    res.send("Constentando a post desde ServExpress");
})

app.listen(port, () => {
console.log('Example app listening on port 3000!');
});