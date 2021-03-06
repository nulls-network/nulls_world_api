/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('ItemCommitLog', {
  item_id: {
    type: DataTypes.INTEGER(11),
    allowNull: true
  },
  nonce: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  requestKey: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  deadline: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  status: {
    type: DataTypes.STRING(100),
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
    type: DataTypes.STRING(100),
    allowNull: true
  },
  log_index: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  commit_tx_hash: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  block_num: {
    type: DataTypes.INTEGER(11),
    allowNull: true
  },
  block_hash: {
    type: DataTypes.STRING(100),
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
  user: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  module: {
    type: DataTypes.INTEGER(1),
    allowNull: false
  },
  extend: {
    type: DataTypes.BIGINT,
    allowNull: true
  },
  token_name: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  token: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  token_precision: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  challengerPetId: {
    type: DataTypes.BIGINT,
    allowNull: true
  }
}, {
  tableName: 'item_commit_log'
});

module.exports = Model;
