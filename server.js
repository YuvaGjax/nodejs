const http = require("http");
const app = require("./server/app");

const PORT = 4000;

const server = http.createServer(app);

server.listen(PORT);
