/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


  const Model = sequelize.define('IdoTransaction', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    account: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    amount: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rewardStaking: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    rewardToken: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    event: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    tx_hash: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    block_num: {
      type: DataTypes.INTEGER(20),
      allowNull: false
    },
    block_hash: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    log_index: {
      type: DataTypes.INTEGER(10),
      allowNull: false
    },
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false
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
    tableName: 'ido_transaction'
  });

module.exports = Model