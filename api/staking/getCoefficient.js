const sequelizer = require("../../config/mysql2");
const result = require("../../utils/Result");
require("../../model/staking_stake");

module.exports = async (req, res) => {
    data = await sequelizer.models.StakingStake.findAll({});
    res.status(200).json(result.success(data));
}