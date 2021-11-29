const result = require("../../utils/Result");
const redis = require("../../utils/redisconfig")
const dateUtils = require("../../utils/date")
const contract = require("../../utils/contract");
const { BigNumber } = require("@ethersproject/bignumber");


module.exports = async (req, res) => {
    const {email, address , vercode } = req.query;
    var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (!pattern.test(email)){
        res.status(200).json(result.error("email  Invalid parameter"));
        return
    }
    redis.hgetall(email,async function(err,data){
        if(err){
            res.status(200).json(result.error(`redis server  error  ${err}`));
            return
        }
        if(data){
            console.log(data);
            const nowtime = await dateUtils.getBlockTimeMillisecond();
            
            if(data.get_time !=undefined && Number(data.get_time) > nowtime - 24*60*60*1000){
                res.status(200).json(result.error("It was picked up within 24 hours, come back later"));
                return
            }
            if(data.random !=vercode){
                res.status(200).json(result.error("vercode  Invalid parameter"));
                return
            }
            if(data.status === '2'){
                res.status(200).json(result.error("The verification code is invalid. Obtain it again"));
                return
            }
            redis.hsetBuffer(email,"get_time",nowtime);
            redis.hsetBuffer(email,"status",2)
            const wallet = await contract.getWalletByPrivate(process.env.ERC20_USER);
            const  TestErc20 = await contract.getWalletContract("NullsErc20TestToken",wallet);
            const py_tx = await TestErc20.transfer(address,100000*1000000)
            res.status(200).json(result.success({tx_hash:py_tx.hash}));
        }
    })







}