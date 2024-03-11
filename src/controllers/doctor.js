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
    let patient = await models.Patient.findByPk(patientId);
    let doctor = await models.Doctor.findByPk(doctorId);
    patient = await patient.addDoctor(doctor);
    return patient;
}

// Muestra los medicos de un paciente
exports.indexByPatient = async function (patientId) {
    // Rellene aqui ...
    let patient = await models.Patient.findByPk(patientId);
    let doctors = await patient.getDoctors();
    return doctors;
}
