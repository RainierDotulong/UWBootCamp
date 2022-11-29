const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Octopus extends Model {}

Octopus.init({
    // add properites here, ex:
    name: {
         type: DataTypes.STRING
    }
},{
    sequelize
});

module.exports=Octopus