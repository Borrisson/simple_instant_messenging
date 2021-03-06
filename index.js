const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const WebSocket = require("ws");
const ws = new WebSocket("ws://localhost:8080", {
  perMessageDeflate: false,
});

ws.onopen = function (e) {
  console.log("Connection to server opened");
};

function sendMessage(message) {
  ws.send(message);
}

ws.onmessage = function (e) {
  console.log(e.data);
};

rl.on("line", (input) => {
  sendMessage(input);
});
