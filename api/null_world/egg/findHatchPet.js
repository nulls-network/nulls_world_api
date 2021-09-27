const  sequelizer = require("../../../config/mysql2");
const  result = require("../../../utils/Result");
require("../../../model/egg_hatch");
require("../../../model/pet");

module.exports = async (req, res) => {
   let tx_hash = req.query.tx_hash;
   
   let hatch = await sequelizer.models.findOne({
       where:{tx_hash:tx_hash,status:2}
   })
   let data = null;
   if(hatch !=null){
    data = await sequelizer.models.Pet.findAll({
           where:{hatch_tx_hash:tx_hash}
       });
   }
   res.status(200).json(result.success(data));
}