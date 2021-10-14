/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('AccountPkCount', {
    address: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    pkcount: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    last_pk_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'account_pk_count'
  });

module.exports = Model;
