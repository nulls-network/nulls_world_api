const sequelizer = require("../../config/mysql2");
const result = require("../../utils/Result");
require("../../model/staking_transaction");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    let events = req.query.event;
    let where = {
        address: req.query.address
    }
    if (events) {
        where.event =  {[Op.in]: events }
    }
    data = await sequelizer.models.StakingTransaction.findAll({
        where: where
    });
    res.status(200).json(result.success(data));
}