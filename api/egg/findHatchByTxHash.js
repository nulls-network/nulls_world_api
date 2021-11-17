const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/egg_hatch");
require("../../model/pet");

module.exports = async (req, res) => {
   let tx_hash = req.query.tx_hash;
   
   let hatch = await sequelizer.models.EggHatch.findOne({
       where:{tx_hash:tx_hash}
   })
   res.status(200).json(result.success(hatch));
}