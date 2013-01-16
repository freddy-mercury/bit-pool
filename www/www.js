var http=require("http");
function start(port, host) {
    host = host || '127.0.0.1';
    http.createServer(function(request, response) {
        response.write("OK");
        response.end();
    }).listen(port, host);
    console.log("WWW listening "+host+":"+port);
}
exports.start = start;