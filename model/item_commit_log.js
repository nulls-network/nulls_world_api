/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")

  const Model = sequelize.define('item_commit_log', {
    item_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    nonce: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    requestKey: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    deadline: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tx_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    log_index: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    commit_tx_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    block_num: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    block_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'item_commit_log'
  });
  
  module.exports = Model;
