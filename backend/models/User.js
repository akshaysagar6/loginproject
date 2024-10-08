const {DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const User=sequelize.define('User',{    
    username:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            notEmpty:true,
            len:{
                args:[5,200],
                msg:'Username must be between 5 and 20 characters'
            }
        }
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true,
        validate:{
            isEmail:{
                msg:'Must be a valid email address.'},
            notEmpty: true
            }
        },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    }
    
});

(async()=>{
    await sequelize.sync();
})();

module.exports=User;