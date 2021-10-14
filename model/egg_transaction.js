/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('EggTransaction', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    form_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    to_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tx_hash: {
      type: DataTypes.STRING(100),
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
    tableName: 'egg_transaction'
  });

module.exports = Model;
