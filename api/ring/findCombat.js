const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/item_commit_log");

module.exports = async (req, res) => {
    const {current, pageSize, address } = req.query;   
    let offer = 0;
    let limit = 10;
    if(pageSize != undefined && current != undefined){
            offer = Number((current-1)*pageSize);
            limit = Number(pageSize)
    }
    let data = await sequelizer.models.ItemCommitLog.findAndCountAll({
        offset:offer,
        limit:limit,
        where:{
            user:address,
            status:1
        },
        order:[["deadline", 'asc']]
    });
    res.status(200).json(result.success(data));
}
