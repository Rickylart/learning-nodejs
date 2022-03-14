const http = require('http');

const server = http.createServer((req, res) => {

    // if (req.url == '/') {
    //     res.write("html1");
    //     res.end();
    // }
    // else if (req.url == '/about') {
    //     res.write("html2")
    //     res.end();
    // } else {
    //     res.write('Not Found');
    //     res.end();
    // }


    if (req.url == '/') {
        res.end('Welcome to our HomePage');
    } else if (req.url == '/about') {
        res.end('Welcome to our About Page');
    } else {
        res.end(` 
    Page Not found
    <a href="/">Go back home</a>
    `);
    }


});

server.listen(5000);
