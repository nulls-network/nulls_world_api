/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")

  const Model = sequelize.define('invited_reward', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    model: {
      type: DataTypes.INTEGER(255),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    number: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    is_get: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    offer_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tx_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    block_num: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    log_index: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    block_hash: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'invited_reward'
  });

  module.exports = Model;