const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const  jsonUtils = require('../../utils/jsonUtils')
require("../../model/calculate_log");


module.exports = async (req, res) => {
    const { address, dayIndex,pageSize,current} = req.query;
    if(jsonUtils.isEmpty(address) || jsonUtils.isEmpty(dayIndex)){
        res.status(200).json(result.error("Invalid parameter "));
        return
    }
    let offset = 0;
    let limit = 10;
    if(jsonUtils.notEmpty(pageSize) && jsonUtils.notEmpty(current) ){
            offset = Number((current-1)*pageSize);
            limit = Number(pageSize)
    }

    const data = await sequelizer.models.CalculateLog.findAndCountAll({
        limit: limit,
        offset: offset,
        order:[["timestamp","desc"]],
        where:{
            address:address,
            day_index:Number(dayIndex),
        }
    })

    res.status(200).json(result.success(data));
}