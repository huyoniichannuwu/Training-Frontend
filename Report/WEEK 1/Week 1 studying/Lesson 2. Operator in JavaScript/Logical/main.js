/**
 * Boolean
 */

var isSuccess =  true

var a = "Huynh"
var b = "Huyn"
console.log(isSuccess)
console.log(a>b)

//bt
var age = 16
var canBuyAlcohol = age>=18

if(canBuyAlcohol){
    console.log("Du tuoi uong ruou")
}
else{
    console.log("Ko du tuoi uong ruou")
}


/**
 * If - else
 */

/**
 * 0
 * false
 * ""
 * undefined
 * NaN
 * null
 */

var isSuccess = "Huynh Gia Huy"

 if(isSuccess){
    console.log("Dung")
}
else{
    console.log("Sai")
}


/**
 * Logic Operator
 * 1. && - And
 * 2. || - Or
 * 3. ! - Not
 */

var a = 1;
var b = 2;
var c = 3;

if(a > 0 && b > 0 && c > 0){
    console.log("Dieu kien dung!")
}

if(a > 0 || b < 0 || c < 0){
    console.log("Dieu kien dung!")
}

if(!    (a < 0)){
    console.log("Dieu kien dung!")
}

//bt
a = true
b = false
c = a || b
d = b && c
console.log(c,d)

// Hiểu Hơn về câu lệnh điều kiện
// & phép so sánh

//AND
var a = 1
var b = 2
var result = a<b && a<0
console.log("result:", result)

var vd1 = "a" && "b" && "c" && null  
console.log("result:", vd1)

var vd2 = "a" && "b" && "c"
console.log("result:", vd2)

if(vd1){
    console.log("Dieu kien dung!")
} else{
    console.log("Dieu kien sai!")
}

//OR
var a=1;
var b=2;
var vd1 = "a" || "b" || "c" || null  
console.log("result:", vd1)
var vd2 = 0 || "b" || "c" || null  
console.log("result:", vd2)
var vd2 = 0 || undefined || NaN || null  
if(vd2){
    console.log("Dieu kien dung!")
} else{
    console.log("Dieu kien sai!")
}
