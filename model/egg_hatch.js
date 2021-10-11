/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")

  const Model = sequelize.define('egg_hatch', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hatch_total: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    owner_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    total: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(1),
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
      type: DataTypes.INTEGER(10),
      allowNull: true
    },
    block_hash: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'egg_hatch'
  });


  module.exports = Model;