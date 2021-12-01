const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
const { QueryTypes,Op } = require('sequelize');
const jsonUtils = require("../../utils/jsonUtils");
require("../../model/ido_transaction");

module.exports = async (req, res) => {
    let {address} = req.query;   

    if(jsonUtils.isEmpty(address)){
        res.status(200).json(result.error("address is not "));
        return
    }
    let data = await sequelizer.models.IdoTransaction.findAll({
      where:{
          account:address,
          event:"Staked"
      },
    });
  res.status(200).json(result.success(data));
}
