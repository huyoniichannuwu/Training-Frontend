/*
Chuỗi trong Javascript

1.Tạo chuỗi
    -Các cách tạo chuỗi
    -Nên dùng cách nào? lý do?
    -Kiểm tra data type
2.Một số case sử dụng backslash
3.Xem độ dài chuỗi
4.Chú ý độ dài khi viết code
5.Template string ES6
*/
//1,2,3.
var fullName = "Huynh Gia Huy"              
var fullNamew = new String("Huynh Gia Huy")

console.log(typeof fullName)
console.log(typeof fullNamew)

var fullName = "Gia Huy la \'Designer\'"
console.log(fullName)
console.log(fullName.length)
//tính chiều dài => length

4.
//cách 1
var fullName = 
"Huynh Gia Huy là Sinh viên Trường Đại Học Giao Thông vận tải TPHCM" 
console.log(fullName)
//cách 2
var fullName = "Huỳnh Gia Huy là sinh viên"
+ " Trường Đại Học Giao Thông vận tải TPHCM"
console.log(fullName)

5.
var firstName = "Huy"
var lastName = "Huynh"
console.log("Toi la", firstName,lastName)
console.log(`Toi la ${firstName} ${lastName}` )


//Javascript string methods
var myString = ""

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
console.log(myString.length)
//2. find index
console.log(myString.indexOf("ABC"))


