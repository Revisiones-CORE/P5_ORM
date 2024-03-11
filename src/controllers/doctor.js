const {models} = require('../models');

// Crear un doctor
exports.create = async function (name, surname, speciality) {
    // Rellene aqui ...
    try { // instancia no persistente
        let doctor = models.Doctor.build({
            name,
            surname,
            speciality
        });
        // Almacenamos en la base de datos
        doctor = await doctor.save({fields: ["name", "surname", "speciality"]});
        return doctor;
    } catch (error){
        console.log(error);
    }
};


// Asigna un doctor y devuelve los datos del paciente
exports.assignDoctor = async function (patientId, doctorId) {
    // Rellene aqui ...
}

// Muestra los medicos de un paciente
exports.indexByPatient = async function (patientId) {
    // Rellene aqui ...
}
