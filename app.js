const {crearArchivo} = require('./multiplicar/multiplicar');

let argv = process.argv;
let parametro = argv[2];
console.log(parametro);

let base = parametro.split('=')[1];
console.log(base);

crearArchivo(base)
    .then(archivo => {
        console.log(`archivo creado ${archivo}`);
    })
    .catch(e => {
        console.error(e);
    });
