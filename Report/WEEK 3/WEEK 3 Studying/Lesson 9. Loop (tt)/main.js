/**
 * Loop
 * 
 * 1. for - lặp với điều kiện đúng
 * 2. for/in - lặp qua key của đối tượng
 * 3.for/of - lặp khi điều kiện đúng
 * 4.while - lặp khi điều kiện đúng
 * 5. do/while - lặp ít nhất một lần, sau đó lặp khi điều kiện đúng
 */

for (var index = 1; index <=10; index++){
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
        var eachSVmoney= objects[index].tien            //arr[index]  -> object[index]."value"
        tongTien+=eachSVmoney
    }
    return tongTien
}


console.log(`Tổng tiền sinh hoạt: ${Intl.NumberFormat('vi-VN').format(tongtienSinhHoat(tienSinhHoat)) + ' VNĐ'}`)

//For...in
console.log("")
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

//For/of loop                   //KHONG AP DUNG DUOC VOI "OBJECT"
var languages = [
    "Javascript",
    "PHP",
    "C++",
    "Python"
]

for (var value of languages){
    console.log(value)
}
console.log("")
var vdobject = {
    name:"Huy Huynh",
    age: 18,
    address: "Ho Chi Minh city, VietNam"
}
//console.log(Object.keys(myInfo)) => mảng bao gồm [name, age, address]



for (var values of Object.keys(myInfo)){
    console.log(myInfo[values])
}

for ( var values of Object.values(myInfo)){
    console.log(values)
}

//While

console.log(`WHILE:
`)

var myArr = [
    "Javascript",
    "Python"
]

var index = 0
while ( index <myArr.length){
    console.log(myArr[index])
    index++
}

//Do...While
console.log(`
Do...While`)
var index = 0

do {
    console.log(index)
    index++
} while (index <= 10);


//nạp thẻ cào
var index = 0
var isSuccess = false;
do {
     index++
     console.log(`Nạp thẻ lần ${index}`)
     if(false){
        isSuccess = true
     }
} while (!isSuccess && index < 3)

//Break
var index = 0
do {
    index++
    console.log(index)
    if(index>=5){
        break
    }
 } while (index <=10)

//Continue
console.log("So chan")
for (var index = 0; index < 10; index++){
    if (index%2>0){
        continue                //bo qua so le
    }
    console.log(index)
}
//Nested loop
console.log("Nested loop:")
var myArray = [
    [1,2],
    [3,4],
    [5,6],
]
for ( var index = 0; index < myArray.length; index++){
    for (var jindex = 0;jindex < myArray[index].length;jindex++){
        console.log(myArray[index][jindex])
    }
}

//vd
console.log("VI DU THEM")
for (var index = 100; index >=1;index-= 5){
    console.log(index)
}