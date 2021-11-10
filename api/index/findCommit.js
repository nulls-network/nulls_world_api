const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes,Op } = require('sequelize');
require("../../model/item_commit_log");

module.exports = async (req, res) => {
    let {current, pageSize, address,status,modules} = req.query;   
    let offer = 0;
    let limit = 10;
    if(status == undefined || status == null){
        status = 1
    }
    if(pageSize != undefined && current != undefined){
            offer = Number((current-1)*pageSize);
            limit = Number(pageSize)
    }
    let data = await sequelizer.models.ItemCommitLog.findAndCountAll({
        offset:offer,
        limit:limit,
        where:{
            user:address,
            status:{
                [Op.ne]: 2, 
                [Op.eq]: status, 
            },
            module:modules
        },
        order:[["deadline", 'asc']]
    });
    

    res.status(200).json(result.success(data));
}
