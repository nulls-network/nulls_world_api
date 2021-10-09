/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")

  const Model = app.model.define('item', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    private_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    public_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model: {
      type: DataTypes.INTEGER(1),
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
    contract_item_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      unique: true
    },
    nonce: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'item'
  });

  module.exports = Model;