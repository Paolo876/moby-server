const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.port ? process.env.DB_NAME : "moby-local", process.env.port ? process.env.DB_USER : "root", process.env.port ? process.env.DB_PASSWORD : process.env.LOCALHOST_PASSWORD, { 
    host: process.env.port ? process.env.DB_HOST : "localhost", 
    dialect: "mysql", 
    logging: false, 
    port: process.env.DB_PORT 
});

const testDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}
testDBConnection();

module.exports = sequelize;