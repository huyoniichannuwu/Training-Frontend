/**
 * Loop
 * 
 * 1. for - lặp với điều kiện đúng
 * 2. for/in - lặp qua key của đối tượng
 * 3.for/of - lặp khi điều kiện đúng
 * 4.while - lặp khi điều kiện đúng
 * 5. do/while - lặp ít nhất một lần, sau đó lặp khi điều kiện đúng
 */

for (var index = 1; index <=1000; index++){
    console.log(index)
}
// tạo hàm getRandNumbers có 3 tham số là min, max, length ( 0,10,3)
// trả về một mảng gồm length phần tử (vậy là mảng có 3 phần tử)
// các giá trị trong mảng là số ngẫu nhiên ( random)
// giá trị trong khoảng từ min tới max

function getRandNumbers(min,max,length){
    arr = []
    for (var index = 0; index < length; index ++){
        var random = Math.floor(Math.random() * (max-min) +min)
        arr.push(random)
    }
    return arr
}
console.log(`trong khoảng (10,20) và có 5 phần tử`)
console.log(getRandNumbers(10,20,5))
console.log("")


//tính tổng các phần tử mới random ở trên
console.log(numbers = (getRandNumbers(0,10,3)))          //biến random [x,y,z]
console.log(`ta có array có các phần tử lần lượt: ${numbers}`)
var getTotal = function(arr) {
    total = 0
    for (var index = 0; index<arr.length; index++){
        total += arr[index]         
    }
    return total
}

//perform hàm ở đây<3
console.log(`sum của array trên
${numbers.join(" + ")} = ${getTotal(numbers)}`)

//P3
console.log(`
    
P3:
`)
var mảng = [
    "Javascript",
    "PHP",
    "Ruby",
    "Dart",
    "C++",
]
myArrayLength = mảng.length

console.log(mảng[0],mảng[1],mảng[2],mảng[3])

for (var index = 0; index <= myArrayLength - 1; index++ ){
    console.log(mảng[index])
}
console.log(mảng.join(", "))

console.log("Bài tập: Tính tổng tiền sinh hoạt của các sinh viên trong mảng gồm các objects:")
var tienSinhHoat = [
    {
        name:"A",
        tien: 300000
    },
    {
        name:"B",
        tien: 200000
    },
    {
        name:"C",
        tien:500000,
    },
    {
        name:"D",
        tien:1000000,
    },

]
console.log(tienSinhHoat)
function tongtienSinhHoat(objects){
    tongTien = 0
    moneyKey = objects.length
    for(var index = 0;index <moneyKey;index ++){
        var eachSVmoney= objects[index].tien
        tongTien+=eachSVmoney
    }
    return tongTien
}


console.log(`Tổng tiền sinh hoạt: ${Intl.NumberFormat('vi-VN').format(tongtienSinhHoat(tienSinhHoat)) + ' VNĐ'}`)

//For...in
var myInfo = {
    name: "Huỳnh Gia Huy",
    age:18,
    address:"Ho Chi Minh city"
}
for (var key in myInfo){
    console.log(key,":")                //name,age,address
    console.log(myInfo[key])        //như arr[index] nhưng với object key là string
}

var languages = [
    "JS",
    "PHP",
    "Python",
    "Ruby",
]

for(var key in languages){
    console.log(languages[key])
}

var JS= "Javascript"
for (var key in JS){
    console.log(JS[key])
}

//sinh vien bach khoa (object) tra ra mảng [name la gi, lop nao]
const SVBK = {
    name: "Nguyễn Văn A",
    class_id: "DS75",
}

function objectToArr(objects) {
    var arr = []
    for (var key in objects){
        var attribute = key
        var value = objects[key]
        arr.push(`Thuộc tính ${key} được ghi là ${objects[key]}`)
    }
    return arr
}

console.log(objectToArr(SVBK))

//For/of loop
var languages = [
    "Javascript",
    "PHP",
    "C++",
    "Python"
]
for (var value of languages){
    console.log(value)
}

