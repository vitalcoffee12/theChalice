/**입출력 코드 */

console.clear();
var readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log("start를 눌러주세요.")
rl.on("line", function (line) {
    console.log(line,"을/를 입력했습니다.");
  if(line==="start"){
      console.clear();
      console.log("Select 1 or 2")  
}
if(line==="1"){
    console.clear();
    console.log("?")
}
else if(line==="2"){
    console.clear();
    console.log("??")
}
  

  











  
  if (line === "close") {
    rl.close();
  }
}).on("close", function () {
  console.log("input event closed");
});