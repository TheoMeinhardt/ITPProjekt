let stockfish = new Worker(
  "../../stockfish/node_modules/stockfish/src/stockfish.js"
);

stockfish.onmessage = function (event) {
  console.log(event.data ? event.data : event);
};

stockfish.postMessage("go depth 15");
