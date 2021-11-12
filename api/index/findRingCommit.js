const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes,Op } = require('sequelize');
const dateUtils = require("../../utils/date");
require("../../model/item_commit_log");

module.exports = async (req, res) => {
    let {current, pageSize, address,status} = req.query;   
    let offer = 0;
    let limit = 10;
    
    if(pageSize != undefined && current != undefined){
            offer = Number((current-1)*pageSize);
            limit = Number(pageSize)
    }
    const sql = "select  icl.item_id,icl.extend,icl.token,icl.token_name,icl.token_precision,r.owner_address as ring_address, r.pet_id as ring_pet_id ,pet.pet_id as challenger_pet_id,pet.owner_address challenger_address from  item_commit_log  icl left join  ring r on icl.item_id = r.item_id left join pet on  icl.challengerPetId = pet.pet_id where  icl.module = 2  and icl.user = ? and   icl.status =  ? ";
    const countsql = "select count(icl.item_id) from  item_commit_log  icl left join  ring r on icl.item_id = r.item_id left join pet on  icl.challengerPetId = pet.pet_id where  icl.module = 2  and icl.user = ? and   icl.status =  ? ";

    const  ordersql = " order by deadline asc"
    const limitsql  = " limit ?,?" 

    
    let list = await sequelizer.query( sql + ordersql + limitsql,{
        replacements: [address,status,offer,limit],
        type: QueryTypes.SELECT
      })
    let count = await sequelizer.query(count_sql,{
        replacements: [address,status],
        type: QueryTypes.SELECT
      })

    let data = {
        count:count[0]['count(icl.item_id)'],
        row:list
    }
  res.status(200).json(result.success(data));
}
