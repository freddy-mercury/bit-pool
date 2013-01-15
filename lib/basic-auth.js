exports.auth = function(req, res, next) {
    var auth = req.headers['authorization'];
    if(!auth) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        res.end("Who are you?");
    }
    else if(auth) {
        var tmp = auth.split(' ');
        var buf = new Buffer(tmp[1], 'base64');
        var plain_auth = buf.toString();
        var creds = plain_auth.split(':');
        var username = creds[0];
        var password = creds[1];
        if((username == 'hack') && (password == 'thegibson')) {
            res.statusCode = 200;  // OK
            next(req, res, {'username': username, 'password': password});
            res.end();
        }
        else {
            res.statusCode = 401; // Force them to retry authentication
            res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
            // res.statusCode = 403;   // or alternatively just reject them altogether with a 403 Forbidden
            res.write('Who are you?');
            res.end();
        }
    }
}