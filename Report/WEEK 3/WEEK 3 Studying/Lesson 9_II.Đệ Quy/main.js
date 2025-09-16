//đề bài
//input = [a,b,c,a,b,c]
//output = [a,b,c]


//cách làm => SET


var arr = ["a", "b", "c", "d", "e","a","b","c"]
console.log(new Set(arr)) // {x, y, z}
console.log([...new Set(arr)])      //ARRAY như đề bài



//Đệ quy
/**
 * 1. XÁC ĐỊNH ĐƯỢC ĐIỂM DỪNG
 * 2. LOGIC HANDLE => tạo ra điểm dừng
 */
console.log("Đệ quy:")

var deQuy = (num) => {             //arrow function
   if (num >=5){
    return (console.log("Số đã quá 5"))
   }
   deQuy()

}    

//deQuy(10)

//Loop
console.log("LOOP")
for (var index =5; index > 0; index--){
    console.log(index)
}
//đệ quy
console.log("ĐỆ QUY:")
var countdown = (num) => {
    if (num > 0){
        console.log(num)
        return countdown(num-1)            //dừng phải return
    }
    return num
}
countdown(5)
//print ra array = đệ quy

function loop(start, end, cb){
    if(start < end){
        cb(start)
        return loop(start+1,end,cb)
    }
}

var arr = [
    "Python",
    "Javascript",
    "Ruby",
    "PHP",
]
console.log(arr)

loop(0, arr.length, function(index){
    console.log(`index [${index}]: ${arr[index]}`)
})

// 6 * 5 *..*2*1 =
console.log("Giai thừa = vòng lặp số random:")
var total = 1
var songuyento = [
    5,6,7,8,
]
var random = Math.floor(Math.random()*songuyento.length)
console.log(songuyento[random])
for ( var index = songuyento[random]; index > 0; index--){
    total *= index
    
}
console.log(total)

//6*5*4....*1 = 720 (loop trong function)
console.log("Hàm vòng lặp:")
var giaiThua = function(num){
    var total = 1
    for (var index = num; index > 0; index --){
        total *=index
    }
    return total
}

console.log(giaiThua(3))

//dequygiaithua
console.log("Sử dụng đệ quy trong giai thừa:")
function giaithuaDequy(num){
    if (num > 0){
        return num * giaithuaDequy(num-1)
    }
    return 1            //số cuối sẽ là 1
}

console.log(giaithuaDequy(3))