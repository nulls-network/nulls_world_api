/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('StakingRewards', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    amount: {
      type: DataTypes.BIGINT,
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
    tableName: 'staking_rewards'
  });

module.exports = Model;
