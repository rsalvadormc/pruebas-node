const fileSystem = require('fs');
const colors = require('colors');

let listar = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i}\n`.red);
        }
    });
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let araay = '';

        for (let i = 1; i <= limite; i++) {
            araay += `${base} * ${i} = ${base * i}\n`;
        }

        fileSystem.writeFile(`tablas/tabla${base}.txt`, araay, (err) => {
            if (err) reject(err)
            else resolve(`tabla${base}.txt`)
        });
    });
}

module.exports = {
    crearArchivo,
    listar
};