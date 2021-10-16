const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/statistics");
const dateUtils = require("../../utils/date");
const { QueryTypes } = require('sequelize');


module.exports = async (req, res) => {
    let  param = req.query;
    let  startTime;
    
    let timestamp = await dateUtils.getBlockTimeMillisecond();
    let time = new Date(timestamp);
    let  endTime = new Date(time.getFullYear(),time.getMonth(),time.getDate()).getTime()-8*60*60*1000;
    if(param.type == 1){
        startTime = endTime;
    }
    if(param.type == 2){
        startTime = endTime - 7*24*60*60*1000;
    }
    if(param.type == 3){
        startTime = endTime - 30*24*60*60*1000;
    }
    const data = await sequelizer.query(" select sum(egg_total) as  egg_total , sum(sell_total) as sell_total ,sum(ring_total) as ring_total from statistics where  timestamp >= ? and timestamp <= ?",{
        replacements: [startTime,endTime],
        type: QueryTypes.SELECT
    })

    let test = {
        egg_total: data[0]['egg_total'],
        sell_total: data[0]['sell_total'],
        ring_total: data[0]['ring_total'] 
    }
    res.status(200).json(result.success(test));
}
