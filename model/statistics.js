/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


  const Model = app.model.define('Statistics', {
    timestamp: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    egg_total: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    sell_total: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    ring_total: {
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
    tableName: 'statistics'
  });

module.exports = Model
