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
                args:[5,20],
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
        validator:{
            notEmpty:true,
            len:{
                args:[6,20],
                msg:'password must be of length atleast 6 characters'
            }
        }
    }
    
});

(async()=>{
    await sequelize.sync();
})();

module.exports=User;