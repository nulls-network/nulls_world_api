const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/ring_record");

module.exports = async (req, res) => {
    let tx_hash = req.query.tx_hash;
    if(tx_hash =='' || tx_hash==undefined ||tx_hash==null){
      res.status(200).json(result.error("tx_hash  is empty"));
      return
    }
    let param = {
        where:{commit_tx_hash:tx_hash}
    }
    let data = await sequelizer.models.RingRecord.findOne(param);
    res.status(200).json(result.success(data));
}
