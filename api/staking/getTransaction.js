const sequelizer = require("../../config/mysql2");
const result = require("../../utils/Result");
require("../../model/staking_transaction");

module.exports = async (req, res) => {
    let event = req.query.event;
    let where = {
        address: req.query.address
    }
    if (event) {
        where.event = event
    }
    data = await sequelizer.models.StakingTransaction.findAll({
        where: where
    });
    res.status(200).json(result.success(data));
}