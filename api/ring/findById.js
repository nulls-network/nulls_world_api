const  sequelizer = require("../../config/mysql2");
const  result = require("../../utils/Result");
require("../../model/ring");

module.exports = async (req, res) => {
    let id = req.query.id;
    if (id == undefined && id.length == 0) {
        res.status(200).json(result.error("id is empty"));
      return
    }
    let data = await sequelizer.models.Ring.findByPk(id);
    res.status(200).json(result.success(data));
}
