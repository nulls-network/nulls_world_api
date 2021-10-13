const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes,Op } = require('sequelize');
require("../../model/account_pk_count");

module.exports = async (req, res) => {
    const { address } = req.query;   
    const data = await sequelizer.models.AccountPkCount.findByPk(address);
    res.status(200).json(result.success(data));
}
