var http=require("http");
function start() {
    http.createServer(function(request, response) {
        response.write("OK");
        response.end();
    }).listen(80);
    console.log("WWW started on 80 port");
}
exports.start = start;