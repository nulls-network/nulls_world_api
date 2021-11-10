const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/ring_record");

module.exports = async (req, res) => {
    let txhash = req.query.txhash;
    if (id == undefined && id.length == 0) {
        res.status(200).json(result.error("id is empty"));
      return
    }
    let data = await sequelizer.models.RingRecord.findOne({
       where:{
        commit_tx_hash:txhash
       }
    });
    res.status(200).json(result.success(data));
}
