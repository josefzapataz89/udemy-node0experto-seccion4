const { argv } = require('./config/yargs');
const colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar');

let comando = argv._[0];


switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`archivo creado`, colors.green(archivo));
            })
            .catch(e => {
                console.error(e);
            });
        break;
    default:
        break;
}
