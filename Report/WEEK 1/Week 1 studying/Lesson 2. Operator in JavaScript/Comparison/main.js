/** Comparison Operator

==
!=
>
<
>=
<= 

*/

var a = 1;
var b = 2;

if(a<=b){
    console.log("Dieu kien dung!")
}
else{
    console.log("Dieu kien sai!")
}

var a = "Huynh Gia Huy";
var b = "Huynh Gia Huy";
if(a==b){
    alert("Dieu kien dung!")
}
else{
    alert("Dieu kien sai!")
}

//bt
var a = 1;
var b = -1;
var c = 0;
var d = 0;

var e = a <= b;
var f = c == d;
var g = a >= c;

console.log(e, f, g) // Output: ?
// e = False (1 <= -1)
// f = True (0 = 0)
// g = True (1 >= 0)