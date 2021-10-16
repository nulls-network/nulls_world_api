const sequelizer = require("../../config/mysql2");
const result = require("../../utils/Result");
require("../../model/staking_transaction");
const { Op } = require("sequelize");

module.exports = async (req, res) => {
    let events = req.query["events[]"];
    if (!events) {
        events = req.query["events"];
    }
    console.log(req.query)
    console.log("==============")
    console.log(typeof events);
    if (typeof events === "string") {
        events = events.split(',');
    }
    let where = {
        address: req.query.address
    }
    if (events) {
        where.event = { [Op.in]: events }
    }
    data = await sequelizer.models.StakingTransaction.findAll({
        where: where
    });
    res.status(200).json(result.success(data));
}