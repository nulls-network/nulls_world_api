const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/egg_hatch");

module.exports = async (req, res) => {
   let address = req.query.address;
   let data = sequelizer.models.EggHatch.findAll({
    where:{owner_address:address,status:1}
   })
   res.status(200).json(result.success(data));
}