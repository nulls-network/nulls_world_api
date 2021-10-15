const sequelizer = require("../../config/mysql2");
const result = require("../../utils/Result");
require("../../model/staking_transaction");

module.exports = async (req, res) => {
    let address = req.query.address;
    let event = req.query.event;
    data = await sequelizer.models.StakingTransaction.findAll({
        where: { address: address, event: event }
    });
    res.status(200).json(result.success(data));
}