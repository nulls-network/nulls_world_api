const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes,Op  } = require('sequelize');
require("../../model/ring_record");

module.exports = async (req, res) => {
    let {address,type,current,pageSize} = req.query;
    if(address == undefined || pageSize == undefined || current ==undefined || type == undefined ){
        res.status(200).json(result.error("param  is error"));
      return;
    }
    let sql = "select rr.*,r.count from  ring_record rr left join ring r on rr.item_id = r.item_id  where"
    let countsql = "select count(rr.id) from  ring_record rr "
    let where ;
    if(type == 0){
        where = " rr.ring_address = " + address + " or  rr.challenger_address = " + address;
    }else if( type == 1){
        where = " rr.ring_address = " + address;
    }else{
        where = " rr.challenger_address = " + address;
    }
    let offer = 0;
    let limit = 10;
    if(pageSize != undefined && current != undefined){
            offer = Number((current-1)*pageSize);
            limit = Number(pageSize)
    }
    let order = " order by create_time desc"
    let limitsql = " limit " + offer + ","+limit;
    const list = await sequelizer.query(sql + where + order + limitsql ,{
        type: QueryTypes.SELECT
    })
    const count = await sequelizer.query(countsql + where,{
        type: QueryTypes.SELECT
    })
    let data = {
        count:count[0]['count(rr.id)'],
        row:list
    }
    res.status(200).json(result.success(data));
}
