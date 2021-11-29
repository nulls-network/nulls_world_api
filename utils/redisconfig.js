const Redis = require("ioredis")



const  redis = new Redis({
    port: 6379, // Redis port
    host: process.env.REDIS_HOST, // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: process.env.REDIS_PASSWORD,
    db: 0,
  });


module.exports = redis;