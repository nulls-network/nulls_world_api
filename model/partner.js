/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")

  const Model = sequelize.define('partner', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    partner_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tx_hash: {
      type: DataTypes.STRING(255),
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
    log_index: {
      type: DataTypes.INTEGER(10),
      allowNull: true
    }
  }, {
    tableName: 'partner'
  });
  
  module.exports = Model;