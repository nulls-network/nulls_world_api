const  db = require("../../config/mysql2").models;
const  result = require("../../utils/Result");
const { QueryTypes,Op } = require('sequelize');
const jsonUtils = require('../../utils/jsonUtils')
const dateUtils = require('../../utils/date')

require("../../model/pet");

module.exports = async (req, res) => {
    // filter arena and leisure pet
    let where = { }

    if( jsonUtils.isEmpty(req.query.address) ){
        res.status(200).json(result.error('address is not empty.'));
        return
    }
    where.owner_address = req.query.address

    // page param
    let offset = 0;
    let limit = 10;
    console.log('分页参数：'+req.query.pageSize)
    if(jsonUtils.notEmpty(req.query.pageSize) && jsonUtils.notEmpty(req.query.pageSize != undefined)){
        offset = Number((req.query.current-1)*req.query.pageSize);
        limit = Number(req.query.pageSize)
    }


    // arena pet
    if( jsonUtils.notEmpty(req.query.type) ){
        where.type = req.query.type == 1 ? 255 : { [Op.ne]: 255}
    }

    // leisure pet
    if( jsonUtils.notEmpty(req.query.status) ){  
        where.status = { [Op.ne] : 4 }
        if(req.query.status == 1){
            where.status = 4
            where[Op.or] = [ { rest_time : {[Op.lt]: await dateUtils.getBlockTime() /1000} }, { rest_time : { [Op.is] : null} } ]
                
                //[Op.lt]: dateUtils.getBlockTime() /1000  }
        }
    }

    let option = {
        where,
        offset,
        limit,
        order:[["type",'desc'],["create_time","desc"]]
    }
    let data = await db.Pet.findAndCountAll(option);

    res.status(200).json(result.success(data));
}