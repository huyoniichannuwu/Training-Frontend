//Khai bao bien
/**
 * Khai bao ten
 * Khai bao tuoi
 */
var fullName = "Huynh Gia Huy"
var Age = 18
var Age2= 19
var Age3= 20
//Goi pop-up
// alert(fullName)
// alert(Age)

console.log(fullName)
console.log(Age)
console.warn(Age2)
console.error(Age3)

prompt("Xác nhận bạn đủ tuổi để truy cập:")

setTimeout(function() {
    alert("Bạn đã đủ 18 tuổi")
}, 3000)

setInterval(function() {
    console.log("Đây là dòng lặp")
}, 1000)

