/*
Kiểu dữ liệu trong Javascript

1. Dữ liệu nguyên thủy - Primitive Data
    - Number
    - String
    - Boolean
    - Undefined
    - Null
    - Symbol

2. Dữ liệu phức tạp - Complex Data
    - Function
    - Object

3.Kiểm tra kiểu dữ liệu
*/

//Number type
var a = 1;
var b = 2;
var c = 1.5;
console.log("Kiem tra:", typeof a,typeof b,typeof c)
//String type
var fullName = "Huynh Gia Huy"
var n = 'gia "huy'
console.log(fullName)
console.log(n)
console.log("Kiem tra:", typeof fullName)

//Boolean type
var isSuccess = true
console.log("Kiem tra:", typeof isSuccess)
//Undefined
var age
console.log(age)

//Null
var isNull = null   //nothing
console.log("Kiem tra:", typeof isNull)         //typeof null = OBJECT
//Symbol
var id = Symbol("id")   //unique
var id2 = Symbol("id")   //unique

console.log(id == id2)    //false

//Function
var myFunction = function() {
    alert("Xin chao cac ban!")
}
// gọi function
myFunction()
console.log("Kiem tra:", typeof myFunction)

/**
 * Object types
 * object:
 */
var myObject = {
    name:"Huynh Gia Huy",
    age:18,
    address: "Ho Chi Minh"
}
console.log("My object",myObject)
    
//array:
var myArray = [
    "Python",
    "Javascript",
    "C++"
]
console.log(myArray)
console.log("Kiem tra:", typeof myArray)