//Bài 1 1.	Viết chương trình phân loại tuổi: 
// <6 (mầm non), 6–11 (tiểu học), 12–15 (THCS)
//  16–18 (THPT), >18 (khác).
console.log(`Bài 1:`)

//Tuổi người
var age = []
for(index = 1;index <=60;index++){
    age.push(index)
}

//Random tuổi
var random = Math.floor(Math.random() * 60)  //trung binh 1 nguoi co 60 tuoi
var randomTuoi = age[random]
console.log(randomTuoi)

//Switch case
switch (true){
    case (randomTuoi<6):{
        console.log("Tuổi: Mầm non")
        break
    }
    case (randomTuoi>=6 && randomTuoi<=11):{
        console.log("Tuổi: Tiểu học")
        break
    }
    case (randomTuoi>11 && randomTuoi<=15):{
        console.log("Tuổi: THCS")
        break
    }
    case (randomTuoi>15 &&randomTuoi<=18):{
        console.log("Tuổi: THPT")
        break
    }
    case (randomTuoi>18):{
        console.log("Tuổi: Khác")
        break
    }
    default:
        console.log("Sai dữ liệu")
}

//bài 1 có thể dùng if/else đơn giản, nhưng em áp dụng switch case và áp dụng Math vào random tuổi


/**Bài 2.
 * Tính tổng số từ 1..n (n nhập vào). 
 * In thêm tổng các số chẵn và lẻ.
 */
console.log(`
Bài 2:`)

//nhập n
var n = parseInt(prompt("Bài 2. Nhập 1 số nguyên n:"))
total = 0
//logic nhập (xác định trường hợp nhập lại)
while ( isNaN(n) || n.length === 0 || n < 0  || n === " "){
    n = prompt("Hãy nhập lại dữ liệu!")
}
//vòng lặp +
for (var index = 1; index <= n; index++){
    total += index
}
//print kết quả
console.log(`n = ${n}
tổng số từ 1 đến ${n} = ${total}`)

//bài 2 em áp dùng while, for, logic if/else


/**Bài 3.
 * Tạo mảng scores.
 * Tính min, max, average thủ công bằng vòng lặp.
 */
console.log(`
Bài 3:`)
const scores = 
    [6,2,3,0,5,6,7,8,9,10,]
console.log(scores)

//min
var minScores = scores[0]
for (var index = 0;index < scores.length; index++){
    if (scores[index]< minScores){
        minScores = scores[index]
    }
}
console.log(`Min = ${minScores}`)

//max
var maxScores = scores[0]
for (var index = 0;index< scores.length;index++){
    if (scores[index] > maxScores){
        maxScores = scores[index]
    }
}
console.log(`Max = ${maxScores}`)

//average
var total = 0
for(var values of scores){
    total+=values
}
averageTotal = total / scores.length
console.log(`Average = ${averageTotal}`)

//em dùng tổng thể các vòng lặp for of, for(x;y;z), 
//logic đặt số đầu là max xong so sánh với số còn lại bằng vòng lặp


/**Bài 4.
 * Đảo ngược chuỗi s (vd: 'hello' -> 'olleh')
 * không dùng hàm reverse sẵn cho array.
 */
console.log(`
Bài 4:`)
var hello=[
    "h",
    "e",
    "l",
    "l",
    "o",
]
var gtvt= [
    "g","i","a","o"," ","t","h","ô","n","g"," ",
    "v","ậ","n"," ","t","ả","i",
]

function reverse(array){
    var result = []
    for(var index = array.length - 1; index>=0; index--){
        result.push(array[index])
    }
    return result
}
console.log(`${hello.join("")} -> ${reverse(hello).join("")}`)
console.log(`${gtvt.join("")} -> ${reverse(gtvt).join("")}`)

//em dùng join để biến array từng chữ -> chuỗi, tự xây dựng hàm reverse bằng vòng lặp for


/**Bài 5.
 * Đếm số nguyên tố trong mảng numbers (gợi ý: viết hàm isPrime).
 */

//Số nguyên tố = số tự nhiên > 1 và chỉ chia hết cho 1 và chính nó.
console.log(`
Bài 5:`)

var numbers = []
for (var index = 0; index <=100; index++ ){
    numbers.push(index)

}
console.log(numbers)        //mảng 100 số


var isPrime = (num) =>{
    if (num < 2) return false
    for(var index = 2;index <=Math.sqrt(num);index++){
        if ( num%index ===0) return false           
    }
    return true
}
var countPrimeinArr = function(arr){
    var count = 0
    for (num in arr){
        if (isPrime(num)) {count++}
    }
    return count
}
console.log(countPrimeinArr(numbers))

//em dùng hàm logic số nguyên tố > 1 và chỉ chia hết cho 1 và chính nó
//xây dựng hàm cho arr ( for num in arr)
//tạo mảng đơn giản = vòng lặp

/**Bài 6
 * Tìm phần tử xuất hiện nhiều nhất trong mảng (mode) và số lần xuất hiện.
 */
console.log(`
Bài 6:`)
var so = [1,2,2,3,3,3,4,5,6,6]                     //3 : 3
console.log(so)
function mode(arr){
    var count= {}                                  //object
    for (var values of arr){
        if (count[values]){
            count[values]++
        } else{
            count[values] = 1
        }
    }
    var tanSuatcaonhat = 0
    var result = []
    for (var values in count){
        if(count[values]>tanSuatcaonhat){
            tanSuatcaonhat = count[values]
        }
    }

    for(var values in count){
        if(count[values] === tanSuatcaonhat){
            result.push(Number(values))
        }
    }
    
    return result
}

console.log(`Số xuất hiện nhiều nhất trong array: ${mode(so)}`)

//em tạo hàm mode cho array bằng logic Object, biến tansuatcaonhat la biến value xảy ra nhiều lần nhất, các số trong mảng là key

//Bài 7.
//Tạo mảng todo (chuỗi).
//Viết menu (switch) để: thêm, xóa theo chỉ số, in danh sách.
console.log(`
Bài 7:`)
var workout = JSON.parse(localStorage.getItem("workout")) || []            
while(true){
    console.log(`       --MENU QUẢN LÝ CÔNG VIỆC CẦN LÀM--`)
    console.log("1. Thêm công việc")
    console.log("2. Xóa công việc")
    console.log("3. In Danh Sách")
    console.log("4. Thoát Menu")
    var choice = prompt("Bài 7: Chọn trong menu 'Quản lý Công Việc'")

    //logic choice
    while (choice.length ===0 || isNaN(choice) || choice <1 || choice>4 
    || choice === " " ) 
    {
        var choice = prompt(`Bài 7: Chọn trong menu 'Quản lý Công Việc'
            Nhập sai dữ liệu. Vui lòng nhập lại!`)
    }
    console.log(`Đã chọn ${choice}.`)
    switch (Number(choice)){                                //ban đầu sẽ là string nên không dùng case bằng số được
        //add
        case 1:
            var addmore = "y"
            while(addmore === "y" || addmore ==="yes"){

                var newWork = prompt("Nhập công việc mới:")
                while (typeof newWork !=="string"|| newWork.length ===0|| newWork === " "){
                    var newWork = prompt("Lỗi dữ liệu! Hãy nhập công việc mới (bằng chữ cái):")
                }
                workout.push(newWork)
                localStorage.setItem("workout", JSON.stringify(workout));
                console.log(workout)
                var addmore = prompt("Bạn muốn nhập thêm công việc không? (y/n)")
                }

            break
        //remove    
        case 2:
            if(workout.length === 0){
                console.log("Không có công việc để xóa!")
            }

            for (index = 0; index < workout.length; index++){
                console.log(`Công việc ${index+1} : ${workout[index]}`)
            }
            
            var deleteWork= prompt("Nhập số thứ tự công việc muốn xóa:")
            while ( deleteWork.length ===0|| deleteWork === " "|| deleteWork < 0){
                var deleteWork = prompt("Lỗi dữ liệu! Nhập số thứ tự công việc muốn xóa:")
            }
            deleteWork = Number(deleteWork)
            var deleteCount = prompt("Bạn muốn xóa bao nhiêu công việc:")
            while ( deleteCount.length ===0|| deleteCount === " "|| deleteCount < 0){
                var deleteCount = prompt("Lỗi dữ liệu! Bạn muốn xóa bao nhiêu công việc:")
            }
            deleteCount = Number(deleteCount)
            var remove = workout.splice(deleteWork-1, deleteCount)
            localStorage.setItem("workout", JSON.stringify(workout));

            console.log(`Đã xóa công việc ${remove}`)
            console.log("Danh sách sau khi xóa", workout)
            break
        //print
        case 3:
            console.log(`                   Danh Sách Công Việc:`)
            for (index = 0; index < workout.length; index++){
                console.log(`${index+1} : ${workout[index]}`)
            }
            break
        //exit
        case 4:
            console.log("Thanks for using our service <3!")
            break
        }

    if (choice === "4"){
        break
    }
}


//Bài 8:
//Viết trò chơi đoán số từ 1..100 (random). Gợi ý lớn/nhỏ cho đến khi đoán đúng, đếm số lần đoán. 
console.log(`
Bài 8:`)
random = Math.floor(Math.random() * 100)
console.log(`Số random(đã che) ${random}`)                                       //HIỂN THỊ SỐ RANDOM Ở ĐÂY Ạ
var count = 0
var reveal

while(true){
    reveal = prompt("Bài 8. Đoán xem là số mấy?")
    reveal = Number(reveal)

    if (isNaN(reveal) || reveal.length === 0 || reveal == " " ||
reveal<1 || reveal>100) {
        continue
    }

    count++

    if (reveal === random){
        console.log(`Bạn đã đoán trúng !!!!, số random là số ${random}`)
        break
    } else if (reveal < random) {
        console.log(`Số random LỚN HƠN số bạn đoán rồi... (tips: số đó bé hơn ${random + 10})`)
    }  else if (reveal > random){
        console.log(`Số random NHỎ HƠN số bạn đoán rồi... (tips: số đó lớn hơn ${random - 10})`)
    }
}

