var http=require("http"), basic_auth=require("./../lib/basic-auth");

function start() {
    http.createServer(function(req, res){
        basic_auth.auth(req, res, ok);
    }).listen(8332);
    console.log("POOL started on 8332 port");

    function ok(req, res, credentials) {
        console.log('PASSED:' + credentials['username']);
    }
}
exports.start = start;