const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const  dateUtils = require("../../utils/date");
const jsonUtils = require('../../utils/jsonUtils')
const { QueryTypes } = require('sequelize');

module.exports = async (req, res) => {
    let address = req.query.address;
    const limit = req.query.limit;
    console.log(new Date().getTime());
    const time = await dateUtils.getBlockTime()
    let sql = "select * from pet where owner_address = ? and type <> 255  and status = 4 and  (rest_time <= ? or rest_time is null )";
    if(jsonUtils.notEmpty(limit)){
      sql += "limit "+limit
    }
    let data = await sequelizer.query(sql,{
        replacements: [address,time],
        type: QueryTypes.SELECT
      })
    console.log(new Date().getTime());
    res.status(200).json(result.success(data));
}
