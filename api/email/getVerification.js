
const  result = require("../../utils/Result");
const  transporter = require("../../utils/nodemailerConfig");
const  redis = require("../../utils/redisconfig");
const dateUtils = require("../../utils/date")
const randomUtils = require("../../utils/randomUtils");


module.exports = async (req, res) => {
    const  { email } = req.query;
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!pattern.test(email)){
        res.status(200).json(result.success("email  Invalid parameter"));
        return
    }
    const random = randomUtils.genteRandom();
    let mailOptions = {
        from: '"java-罗鸿清" <15279163025@163.com>', 
        to: email, 
        subject: 'Hello', 
        html: `<b>${random}</b>` 
    };
    redis.hsetBuffer(email,"random",random);
    redis.hsetBuffer(email,"status",1)
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(200).json(result.success(error));
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        res.status(200).json(result.success());
    });  


   
}



