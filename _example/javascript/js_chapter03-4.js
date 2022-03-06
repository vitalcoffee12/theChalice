/**
 * 스위치 문 기본 구문
 *
 */
var greentea = "worrior";
var getDamage = false;
switch (greentea) {
  default:
    // case ( 제외된 모든 값) :
    console.log(3);
    var filename = "E:\\sourceCode\\";
    break; // syntax
  //
  case "worrior":
    break;
  case "whitemage":
    console.log(2);
    break;
  case "bard":
    console.log(5);
    break;
}

var a = 1;
/**
 * by Rillasong
 *  스위치문의 의도적인 break 제외
 *
 *  */
switch (a) {
  case 1: // 1 또는
  case 2: // 2일 때 코드 실행
    console.log("1or2입니다.");
    break;
  case 3: // 3 또는
  case 4: // 4일 때 코드 실행
    console.log("3or4입니다");
    break;
}
