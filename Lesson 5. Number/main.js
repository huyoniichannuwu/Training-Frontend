/**
 * Kiểu dữ liệu số:
 * 
 * Số phẩy động (64 bit IEEE-754) (frequency)
 * Số Biglnt
 */

//cách 1
var million = 1000000
console.log(million)
//cách 2
var million = 1e6
console.log(million)
var billion = 1e9       // 1 và 9 số 0 => 1.000.000.000
console.log(billion)

//Đối tượng
console.log(Number.isFinite(million))
console.log(Number.isNaN(million))
console.log(Number.isInteger(billion))
console.log(Number.parseFloat(billion))
console.log(Number.parseInt(100.52452))
var number = 1234.4678
console.log(number.toFixed())
console.log(number.toFixed(2))
console.log(number.toString())


console.log(`Bài học:
    `)
var age = 18                    //(nên sử dụng)
var PI= 3.14

var otherNumber = new Number(9) // in ra typeof là object

var result = 20/"ABC"
console.log(result)             //NaN = số không hợp lệ
console.log(isNaN(result))      //Logic quan trọng


var myString = age.toString()
console.log(typeof myString)
console.log(PI.toFixed(2))



/**
 * BÀI TẬP
 * tạo hàm isNumber số = true, kí tự khác = false
 */

function isNumber(value){
    if (typeof value === "number" && !isNaN(value)){
        return true
    }
    else{
        return false
    }
}

console.log(isNumber(100))      //true
console.log(isNumber("J8"))     //false
console.log(isNumber("123"))    //false
console.log(isNumber(NaN))      //false