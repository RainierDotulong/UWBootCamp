const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Kitten extends Model {}

Kitten.init({
    // add properites here, ex:
    name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false,
        validate:{
            isAlphanumeric:true
        }
    },
    isCute:{
        type: DataTypes.BOOLEAN,
        defaultValue:true
    },
    color:{
        type:DataTypes.STRING,
        defaultValue:"Orange"
    },
    nickname:{
        type:DataTypes.STRING
    }
},{
    sequelize
});

module.exports=Kitten