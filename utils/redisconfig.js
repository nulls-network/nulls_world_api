const Redis = require("ioredis")



const  redis = new Redis({
    port: 7001, // Redis port
    host: "139.9.214.55", // Redis host
    family: 4, // 4 (IPv4) or 6 (IPv6)
    password: "admin123456",
    db: 0,
  });


module.exports = redis;