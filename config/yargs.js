const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command(
        'listar',
        'Imprime tabla', opts
    )
    .command(
        'crear',
        'Crear archivo', opts
    ).help().argv;

module.exports = {
    argv
};