var http=require("http"), basic_auth=require("./../lib/basic-auth"), bitcoin=require("bitcoin");

function start(port, host) {
    host = host || '127.0.0.1';
    http.createServer(function(req, res){
        if (req.url != '/favicon.ico') {
            basic_auth.auth(req, res, getinfo);
        }
    }).listen(port, host);
    console.log("POOL listening "+host+":"+port);

    function getinfo(req, res, credentials) {
        var client = new bitcoin.Client({
            host: '127.0.0.1',
            port: 8332,
            user: 'rpcuser',
            pass: 'rpcpass'
        });
        client.getInfo(function(err, data) {
            if (err) return console.log(err);
            res.end(JSON.stringify(data));
        });
    }
}
exports.start = start;