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
  
  sleep(printString, 3000, 5, "aaaa");