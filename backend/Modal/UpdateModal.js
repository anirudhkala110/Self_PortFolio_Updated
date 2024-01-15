// const mongoose = require('mongoose');

// const updateSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   desc: {
//     type: Object,
//     required: true,
//   },
//   head: {
//     type: Object,
//     required: true,
//   },
// //   vlink: {
// //     type: String,
// //     allowNull: false
// // },
//   file: {
//     type: String,
//     allowNull: false
// },
//   uploadDate: {
//     type: String,
//     default: () => new Date().toLocaleDateString(),
//   },
//   time: {
//     type: String,
//     default: () => new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
//   },
// }, {
//   collection: 'projects',
// });

// const Update = mongoose.model('Projects', updateSchema);

// module.exports = Update;


const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('./Sequelize');  // Assuming you have a Sequelize instance

const Update = sequelize.define('Update', {
  id: {
    type: DataTypes.UUID,
    defaultValue: uuidv4,
    allowNull: false,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  file: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.JSON, // Change the type to JSON for an object
    allowNull: false,
  },
  head: {
    type: DataTypes.JSON, // Change the type to JSON for an object
    allowNull: false,
  },
  uploadDateTime: {
    type: DataTypes.DATE,
    defaultValue: () => new Date(),
  },
}, {
  tableName: 'updates', // Set the table name explicitly
});

// Synchronize the model with the database (create the table)
Update.sync({ force: false })
  .then(() => {
    console.log('Updates Table created');
  })
  .catch((err) => {
    console.error('Error creating table:', err);
  });

module.exports = Update;
