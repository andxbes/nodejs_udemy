const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req);
    const url = req.url;
    const method = req.method;
    console.info(url, method);
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter user</title></head>');
        res.write('<body><p>Hello world!</p><form action="/create-user" method="POST"><input name="user" type="text"/><button type="submit">submit</button></form><a href="/users">Users</a></body>');
        res.write('</html>');
        return res.end();
    } else if (url == '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Users list</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li><li>User 3</li></ul></body>');
        res.write('</html>');
        return res.end();
    } else if (url === '/create-user' && method === 'POST') {
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();

            const user = parsedBody.split('=')[1];
            console.info(user);
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    }
    return res.end();
});

server.listen(3000);