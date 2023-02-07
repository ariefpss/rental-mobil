var { Sequelize } = require('sequelize');

const dbConnect = new Sequelize('rental_mobil', 'root', 'permana17', {
    host: 'localhost',
    dialect: 'mysql'
});

dbConnect.authenticate().then( () => {
    console.log('Connection has been established successfully.');
}).catch( (error) => {
    console.error('Unable to connect to the database: ', error);
});