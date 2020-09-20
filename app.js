const argv = require('./config/yargs').argv;
const colors = require('colors/safe');

const { crearArchivo, listar } = require('./multiplicar/multiplicar');

let comando = argv._[0];

if (comando === 'listar') {
    listar(argv.base, argv.limite);
}

if (comando === 'crear') {
    crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Creado: `, colors.yellow(archivo)));
}

// let parametro = argv[2];

// let base = parametro.split('=')[1];
// console.log(argv2);