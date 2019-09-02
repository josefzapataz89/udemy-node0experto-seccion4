const opt = {
    base: {
        demand: true, //obligatoriedad
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'imprime en console la tabla de multiplicar solicitada', opt)
    .command('crear', 'imprime en un archivo la tabla de multiplicar solicitada', opt)
    .help()
    .argv;

module.exports = {
    argv
};
