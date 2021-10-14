const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/ring_record");

module.exports = async (req, res) => {
    let id = req.query.id;
    if(id =='' || id==undefined ||id==null){
      res.status(200).json(result.error("id  is empty"));
      return
    }
    let data = await sequelizer.models.RingRecord.findByPk(id);
    res.status(200).json(result.success(data));
}
