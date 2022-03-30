/**숙제1 */
console.log("※  숙제 1")
var l = 1;
while(l < 10){
    console.log("-", l, "단-")
    console.log(l,"*", 1,"=" , l*1);
    console.log(l,"*", 2,"=" , l*2);
    console.log(l,"*", 3,"=" , l*3);
    console.log(l,"*", 4,"=" , l*4);
    console.log(l,"*", 5,"=" , l*5);
    console.log(l,"*", 6,"=" , l*6);
    console.log(l,"*", 7,"=" , l*7);
    console.log(l,"*", 8,"=" , l*8);
    console.log(l,"*", 9,"=" , l*9);
    l++; 
}

/**숙제2 */
console.log("※  숙제 2-1")
var fcmembers = ["녹차", "흑당", "렌쟈", "레터", "릴라"]
for (var  h = 0; h < fcmembers.length; h++) {
    console.log(fcmembers[h]);
 h= h + 1
}

console.log("※  숙제 2-2")
var fcmembers = ["녹차", "흑당", "렌쟈", "레터", "릴라"]
for (var  h = 0; h < fcmembers.length; h++) {
    if(h > 0 ){console.log(fcmembers[h])
        h = h + 1
    };
}