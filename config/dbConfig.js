import sequelize from 'sequelize';

const db = new sequelize("salesDB", "root", "root",{
    host: "localhost",
    dialect: "mysql"
});

export default db;