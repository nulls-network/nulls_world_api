const sequelizer = require("../../config/mysql2");
const result = require("../../utils/Result");
require("../../model/staking_coefficient");

module.exports = async (req, res) => {
    data = await sequelizer.models.StakingCoefficient.findAll({});
    res.status(200).json(result.success(data));
}