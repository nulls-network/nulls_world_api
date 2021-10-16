const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes,Op } = require('sequelize');

require("../../model/pet");

module.exports = async (req, res) => {
    let where = {
        owner_address:req.query.address
    }
    if(req.query.status==2 || req.query.status == 4 || req.query.type == 5){
        where.status = req.query.status
    }
    if(req.query.status == 1 ){
        where.is_sell = 1
    }
    const time = Math.floor(new Date().getTime()/1000)
    if(req.query.status == 3){
        where.status == 4;
        where.rest_time = { [Op.gte]: time}
    }
    let offer = 0;
    let limit = 10;
    if(req.query.pageSize != undefined && req.query != undefined){
            offer = Number((req.query.current-1)*req.query.pageSize);
            limit = Number(req.query.pageSize)
    }
    let type = req.query.type;
    if(type == 1){
        where.type = 255
    }
    if(type == 2){
        where.type = { [Op.ne]: 255}
    }
    let option = {
        where:where,
        offset:offer,
        limit:limit,
        order:[["type",'desc'],["create_time","desc"]]
    }
    let data = await sequelizer.models.Pet.findAndCountAll(option);

    for(let obj of  data.rows){
        if(obj.rest_time && obj.rest_time>time){
            obj.status = 3
        }
    }

    res.status(200).json(result.success(data));
}
