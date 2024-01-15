const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('./Sequelize'); // Assuming you have a Sequelize instance

const Contact = sequelize.define('Contact', {
  id: {
    type: DataTypes.UUID,
    defaultValue: () => uuidv4(),
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mobile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    defaultValue: () => new Date().toLocaleDateString(),
  },
  time: {
    type: DataTypes.STRING,
    defaultValue: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  },
  query: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'contacts', // Set the table name explicitly
});

// Synchronize the model with the database (create the table)
Contact.sync({ force: false })
  .then(() => {
    console.log('Contact Table created');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });

module.exports = Contact;
