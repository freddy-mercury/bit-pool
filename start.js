var www=require("./www/www"), pool=require("./pool/pool");
console.log("\n");
www.start(8080);
pool.start(8888);

