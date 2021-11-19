const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/ring");

module.exports = async (req, res) => {
    const {current, pageSize, address } = req.query;   
    let offer = 0;
    let limit = 10;
    if(pageSize != undefined && current != undefined){
            offer = Number((current-1)*pageSize);
            limit = Number(pageSize)
    }
    if (address == undefined && address.length == 0 && address == null) {
        res.status(200).json(result.error("address is empty"));
      return
    }
    let data = await sequelizer.models.Ring.findAndCountAll({
        offset: offer,
        limit: limit,
        where:{
            owner_address:address,
            status:1
        }
    });
    res.status(200).json(result.success(data));
}
