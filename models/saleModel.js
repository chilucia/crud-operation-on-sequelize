import sequelize from 'sequelize';
import db from "../config/dbConfig.js";

const  { DataTypes } = sequelize;

const saleModel = db.define('salesProduct', {
    productName: {
        type: DataTypes.STRING
    },
    productPrice: {
        type: DataTypes.DOUBLE
    }
},{
    freezeTableName: true
})

export default saleModel;