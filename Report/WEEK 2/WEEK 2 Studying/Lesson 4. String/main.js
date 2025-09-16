/*
CHUỖI TRONG JAVASCRIPT

1. Tạo chuỗi
    - Các cách tạo chuỗi
    - Nên dùng cách nào? Lý do?
    - Kiểm tra data type
2. Một số case sử dụng backslash (\)
3. Xem độ dài chuỗi
4. Chú ý độ dài khi viết Code
5. Template string ES6
*/
//1.
var fullName = "Huynh Gia Huy"
console.log(fullName)
var fullName = new String("Huỳnh Gia Huy")
console.log(typeof fullName)

//2.,3.
var fullName = "Gia Huy la \"Designer\""
console.log(fullName)
console.log(fullName.length)

//4.
var tooLong = "Huynh Gia Huy Huynh" 
+ " Gia Huy Huynh Gia Huy"
+ " Gia Huy Huynh Gia Huy"
console.log(tooLong)

//5.Template string ES6 (tự động convert sang string)
var firstname = "Huy"
var lastName = "Huynh"
console.log(`Hello ${firstname} ${lastName}, How are you?`)


//Javascript string methods
var myString = "Gia Huy học Gia Huy Javascript học Gia Huy"
var normalString = "Gia Huy học Javascript        "
/**
 * Length
 * Find index
 * Cut string 
 * Replace
 * Convert to upper case
 * Convert to lower case
 * Trim
 * Split
 * Get a character by index
 */

//1. length
console.log(`Length: ${myString.length}`)
//2. find index
console.log(myString.indexOf("Huy"))
console.log(myString.indexOf("Huy",8))
console.log(myString.lastIndexOf("Huy"))
console.log(myString.indexOf("ABC"))

console.log(myString.search("học"))         //Khác với indexOf
//3.Cut string                              //chỉ có một gái trị, ko có giá trị số thứ 2
console.log(normalString.slice(4,7))
console.log(normalString.slice(-10))
console.log(normalString.slice(12))

//4.Replace
console.log(normalString.replace("Gia Huy","Huỳnh Gia Huy"))
console.log(myString.replace(/Gia Huy/g,"Huỳnh Gia Huy"))           //biểu thức chính quy

//5. 6. upper and lower
console.log(normalString.toUpperCase())
console.log(normalString.toLowerCase())

//7.Trim (Loại bỏ khoảng trắng)
console.log(normalString.trim())

//8.Split (có thể cắt thành array)
var languages = "Javascript, PHP, Ruby"
console.log(languages.split(", "))

//9. Get a character by index
fullName = "Huỳnh Gia Huy"
console.log(fullName.charAt(0))     //cách 1
console.log(fullName.charAt(20))
console.log(typeof fullName[0])     //cách 2



//BT: viết ham strToArray
var string = "Javascript, C++, Python"
var strToArray = function(str){
    str = str.split(", ")
    return str
}

console.log(strToArray(string)) 