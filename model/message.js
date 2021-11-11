/* indent size: 2 */

const {DataTypes} = require('sequelize');
const sequelize = require("../config/mysql2")


  const Model = sequelize.define('message', {
    id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      address: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      item_id: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      value: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      token: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      token_name: {
        type: DataTypes.STRING(100),
        allowNull: true
      },
      token_precision: {
        type: DataTypes.INTEGER(10),
        allowNull: true
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
      tableName: 'message'
    });

 module.exports = Model;
