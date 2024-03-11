const Sequelize = require('sequelize');

// Variable para definir la URL de la data base
const url = process.env.DATABASE_URL || "sqlite:db-p5-orm.sqlite";

const sequelize = new Sequelize(url, {logging: false});  //ponemos logging: false para que no salgan muchos comentarios al ejecutar un comando 

// Import Models
// Rellene aqui ...
const Patient = require('./patient')(sequelize, Sequelize.DataTypes);
const Hospital = require('./hospital')(sequelize, Sequelize.DataTypes);
const Doctor = require('./doctor')(sequelize, Sequelize.DataTypes);

// Relationships
// Rellene aqui ...
// Relación 1-N entre Hospital y Paciente
Hospital.hasMany(Patient,{as: 'patient', foreignKey: 'patientId'});
Patient.belongsTo(Hospital,{as: 'hospital', foreignKey: 'patientId'});

// Relación N-M entre Doctor y Pacientes
Doctor.belongsToMany(Patient,{through: 'Doctor_Patients'});
Patient.belongsToMany(Doctor,{through: 'Doctor_Patients'});

module.exports = exports = sequelize;
