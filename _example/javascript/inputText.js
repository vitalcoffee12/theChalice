var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const npc = {
  hp: 10,
};

rl.on("line", function (line) {
  minushp(line, npc);
  console.log(npc);
  if (line === "close") {
    rl.close();
  }
}).on("close", function () {
  console.log("input event closed");
});

function minushp(e, npc) {
  npc.hp -= e;
}
