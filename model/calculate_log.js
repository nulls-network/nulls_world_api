/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('CalculateLog', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    day_index: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tx_hash: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    block_num: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    block_hash: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    log_index: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    index: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'calculate_log'
  });

  module.exports = Model