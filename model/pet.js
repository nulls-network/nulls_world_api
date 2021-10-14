/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('Pet', {
    pet_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    owner_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    type: {
      type: DataTypes.INTEGER(3),
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    block_num: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    hatch_tx_hash: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    v: {
      type: DataTypes.STRING(150),
      allowNull: true
    },
    rest_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tx_hash: {
      type: DataTypes.STRING(150),
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
    },
    is_sell: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'pet'
  });

module.exports = Model;
