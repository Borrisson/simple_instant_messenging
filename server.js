// server.js a.k.a Bob

//Using CommonJS 'require' to get "ws" library
const WebSocketServer = require("ws");

//Using WebSocket constructor we create a WebSocket Server
const wss = new WebSocketServer.Server({ port: 8080 });

//Listens on port 8080 for a connection or "Handshake".
wss.on("connection", function (ws) {
  console.log("client connected");

  // Any message it recieves it will print it out on the server terminal
  ws.on("message", function (message) {
    console.log(message);

    // once a message is recieve it makes sure to send it to everyone connected to the server
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocketServer.OPEN) {
        client.send(message);
      }
    });
  });
});

console.log("Server is listening on http://localhost:8080...");
