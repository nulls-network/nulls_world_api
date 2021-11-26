/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('CalculateReceive', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    token_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    token_precision: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    timestamp: {
      type: DataTypes.DATE,
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
    }
  }, {
    tableName: 'calculate_receive'
  });


  module.exports = Model
