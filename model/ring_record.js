/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


const Model = sequelize.define('RingRecord', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ring_pet_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ring_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    item_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    challenger_pet_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    challenger_address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    rv: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isWin: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    create_time: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    value: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    tx_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    commit_tx_hash: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    token_precision: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    tickets: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    log_index: {
      type: DataTypes.INTEGER(11),
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
    current_jackpot: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    current_max_multipe: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    current_count: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    requestKey: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'ring_record'
  });

module.exports = Model;
