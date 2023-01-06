const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('moby-local', 'root', process.env.LOCALHOST_PASSWORD, {
    host: "localhost",
    dialect: "mysql",
    logging: false,
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