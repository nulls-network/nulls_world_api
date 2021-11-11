const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes } = require('sequelize');
require("../../model/message")

module.exports = async (req, res) => {
    const param = req.query;
    let data = await sequelizer.models.Message.findAll()
    res.status(200).json(result.success(data));
}
