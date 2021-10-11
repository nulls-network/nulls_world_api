/* indent size: 2 */
/* indent size: 2 */
const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")

const Model = sequelize.define('AddressInvited', {
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
  invited_address: {
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
    type: DataTypes.INTEGER(20),
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
  tableName: 'address_invited'
});

module.exports = Model;