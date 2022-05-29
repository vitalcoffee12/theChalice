/**대기 함수 */

function timeout(ms) {
    return new Promise((res) => setTimeout(res, ms));
  }
  
  async function sleep(fn, ms, ...args) {
    await timeout(ms);
    return fn(...args);
  }
  
  function printString(times, string) {
    for (var i = 0; i < times; ++i) {
      console.log(string);
    }
  }
  console.log("아아아아")
  sleep(printString, 2000, 1, "타오르는별이 들어갔습니다");
  console.log("아아아아")

  console.log(Math.floor(Math.random()*10))