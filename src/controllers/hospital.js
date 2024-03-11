const {models} = require('../models');

// Crear un  hospital
exports.create = async function (name, city) {
    // Rellene aqui ...
    try {
        let hospital = models.Hospital.build({
            name,
            city
        });
    } catch (error){
        console.log('Error: Failed to create hospital: ' + error.message);
    }
};

// Devuelve todos los hospitales
exports.index = async function () {
    // Rellene aqui ...
    let hospitales = await models.Hospital.findAll();
    return hospitales;
}

// Filtra los hospitales por ciudad
exports.indexByCity = async function (city) {
    // Rellene aqui ...
}

