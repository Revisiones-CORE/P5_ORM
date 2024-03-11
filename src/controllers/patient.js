const {models} = require('../models');

// Muestra la informacion de un paciente
exports.read = async function (patientId) {
    // Rellene aqui ...
    let patient = await models.Patient.findByPk(patientId);
    return patient;
}

// Crea un paciente en un hospital
exports.create = async function (hospitalId, name, surname, dni) {
    // Rellene aqui ...
    try { // instancia no persistente:
        let patient = models.Patient.build({
            name,
            surname,
            dni,
            hospitalId: hospitalId
        });

        // Almacenamos en la base de datos:
        patient = await patient.save({fields: ["name", "surname", "dni", "hospitalId"]});
        console.log('Patient: Patient created successfully.');
        return patient;
    } catch (error) {
        console.log(error);
    }
}

// Actualiza un paciente
exports.update = async function (patientId, name, surname, dni) {
    // Rellene aqui ...
    let patient = await models.Patient.findByPk(patientId);
    patient.name = name;
    patient.surname = surname;
    patient.dni = dni;

    try {
        await patient.save({fields: ["name", "surname", "dni"]});
        console.log('Patient: Patient updated successfully.');
    } catch (error){
        console.log(error);
    }
}

// Borra un paciente
exports.delete = async function (patientId) {
    // Rellene aqui ...
    try {
        await models.Patient.destroy({where: {
            id: patientId
        }});
        console.log('Patient: Patient deleted successfully.');
    } catch (error) {
        console.log(error);
    }
}


// Buscar pacientes de un hospital ordenados por el nombre (de la A a la Z)
exports.indexByHospital = async function (hospitalId) {
    // Rellene aqui ...
    let patients = await models.Patient.findAll({
        order: ["name"],
        where: {
            hospitalId: hospitalId
        }
    });
    return patients;
}
