// câu lệnh rẽ nhánh - If else

var date=3
console.log("IF ELSE:")
if (date === 2){
    console.log(`Hôm nay là thứ 2`)
} else if(date===3){
    console.log(`Hôm nay là thứ 3`)
} else if(date===4){
    console.log("Hôm nay là thứ 4")
}

//BT hàm 
//Nhập chia hết số 3 -> return 1
//Nhập chia hết số 5 -> return 2
//Nhập chia hết số 15 ->return 3
console.log(`Assignment:
    `)
function sochiahet(a){
    if (a%15==0){
        return 3
    } else if (a%5==0){
        return 2
    } else if (a%3==0){
        return 1
    }
}

console.log(sochiahet(3))
console.log(sochiahet(5))
console.log(sochiahet(15))

//SWITCH
console.log(`
SWITCH:`)

var date2 = [
    2,
    3,
    4,
    5,
    6,
    7,
    8,
]
var random = Math.floor(Math.random()* date2.length)
var homnaylathu = date2[random]             //thứ random
console.log(homnaylathu)

switch(homnaylathu){
    case 2:
        console.log("Hôm nay là thứ hai")
        break
    case 3:
        console.log("Hôm nay là thứ ba")
        break
    case 4:
        console.log("Hôm nay là thứ tư")
        break
    case 5:
        console.log("Hôm nay là thứ năm")
        break
    case 6:
        console.log("Hơm nay là thứ sáu")
        break
    case 7:
        console.log("Hôm nay là thứ bảy")
        break
    case 8:
        console.log("Hôm nay là chủ nhật")
        break
    default:
        console.log("Sai dữ liệu")
        break
}

//Ternary Operator
console.log(`
Ternary Operator:`)
var course = {
    name: "Javascript",
    coin: 0
}

if (course.coin > 0){
    console.log(`${course.coin} coins`)
} else {
    console.log("Miễn phí")
}

var result = course.coin > 0 ? `${course.coin} coins` : "Miễn phí"
console.log(result)

var a = 1
var b = 2
var c = a>b ? a : b
console.log(c)

function movieT18(age){
    var kiemdinhtuoi = age >=18 ? "Bạn đủ 18 tuổi" 
    : 
    "Bạn chưa đủ 18 tuổi";
    return kiemdinhtuoi
}

console.log(movieT18(19))
console.log(movieT18(13))
    