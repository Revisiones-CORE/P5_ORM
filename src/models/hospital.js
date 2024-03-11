'use strict';

const {Model} = require('sequelize');

// Definition of the Quiz model:
module.exports = (sequelize, DataTypes) => {

	class Hospital extends Model {}

	// Inicialize el modelo Hospital aqui
	Hospital.init({
		// Rellene aqui ...
		name: {
			type: DataTypes.STRING
		},
		city: {
			type: DataTypes.STRING
		}
	}, {sequelize});
	return Hospital;
};