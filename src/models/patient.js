'use strict';

const { DATE } = require('sequelize');
const {Model} = require('sequelize');

// Definition of the Quiz model:
module.exports = (sequelize, DataTypes) => {

    class Patient extends Model {}

    // Inicialize el modelo Patient aqui
    Patient.init({
        // Rellene aqui ...
        name: {
            type: DataTypes.STRING
        },
        surname: {
            type: DataTypes.STRING
        },
        dni: {
            type: DataTypes.STRING
        },
}, {sequelize});
    return Patient;
};