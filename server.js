const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const filePath = path.join(__dirname, 'data', 'user.json'); // corrected to match actual file name

const server = http.createServer((req, res) => {
    const parsedURL = url.parse(req.url, true);
    const pathname = parsedURL.pathname;
    const parts = pathname.split('/');

    if (req.method === 'GET' && pathname === '/user') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error reading file');
            }
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(data);
        });
    }

    else if (req.method === 'GET' && parts[1] === 'user' && parts[2]) {
        const userId = Number(parts[2]);

        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500);
                return res.end('Error reading file');
            }
            const users = JSON.parse(data);
            const user = users.find(user => user.id === userId);

            if (user) {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(user));
            } else {
                res.writeHead(404);
                res.end('User not found');
            }
        });
    }

    else if (req.method === 'POST' && pathname === '/user') {
        let body = '';

        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            try {
                const newUser = JSON.parse(body);

                fs.readFile(filePath, 'utf8', (err, data) => {
                    if (err) {
                        res.writeHead(500);
                        return res.end('Error reading file');
                    }

                    const users = JSON.parse(data);
                    users.push(newUser);

                    fs.writeFile(filePath, JSON.stringify(users, null, 2), err => {
                        if (err) {
                            res.writeHead(500);
                            return res.end('Error writing file');
                        }
                        res.writeHead(201, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: "User added", user: newUser }));
                    });
                });
            } catch (err) {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Invalid JSON');
            }
        });
    }

    else {
        res.writeHead(404);
        res.end('Route not found');
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
