const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes,Op } = require('sequelize');
require("../../model/ring");
require("../../model/item_commit_log");

module.exports = async (req, res) => {
    const { status, current, pageSize, sort, number } = req.query;   
    let offer = 0;
    let limit = 10;
    if(pageSize != undefined && current != undefined){
            offer = Number((current-1)*pageSize);
            limit = Number(pageSize)
    }
    let order = [["createTime", 'desc']];
    if(sort == 0){
        order = [["jackpot", 'desc']];
    }else if(sort == 1){
        order = [["jackpot", 'asc']];
    }else if(sort == 2){
        order =[["createTime", 'desc']];
    }else if(sort == 3){
        order =[["max_multipe", 'desc']];
    }
    const where = {};
    if (status != 0) where.status = status
    if (number?.length > 0) where.item_id = number
    const list = await sequelizer.models.Ring.findAndCountAll({
        offset: offer,
        limit: limit,
        where, 
        order: order,
    })
    res.status(200).json(result.success(list));
}
