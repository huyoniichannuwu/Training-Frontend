/*1.Khai báo 3 biến let/const lưu: 
    ten (string), tuoi (number), laSinhVien (boolean). 
    In ra câu: "Xin chào, tôi là <tên>, <tuổi> tuổi, sinh viên: <true/false>".
*/
const ten = "Huỳnh Gia Huy"
const tuoi = 18
let laSinhVien = tuoi >=18

console.log("1. Khai báo 3 biến (let/const):")
console.log(ten,"-",typeof ten)
console.log(tuoi,"-",typeof tuoi)
console.log(laSinhVien,"-",typeof laSinhVien)
alert(`"Xin chào, tôi là ${ten}, ${tuoi} tuổi, sinh viên: ${laSinhVien}"`)


//2.Tính chu vi và diện tích hình chữ nhật từ width, height (number). 
// Ép kiểu từ string sang number trước khi tính (gợi ý: Number()).
console.log("2. Tính chu vi và diện tích hình chữ nhật từ width, height (number):")
function chuviHCN(width,height){
    return 2*(width + height)
}
function dientichHCN(width,height){
    return width * height
}

var height = Number("4")
var width = Number("3")

ketqua = chuviHCN(width, height)
console.log(`Chu vi HCN: 2 x (${width} + ${height}) = ${ketqua}`)
ketqua = dientichHCN(width,height)
console.log(`Diện tích HCN: ${width} x ${height} = ${ketqua}`)

//3.Viết hàm sum(a, b) trả về tổng;
//kiểm tra kiểu a, b là number, nếu không trả về 'Invalid input'.
console.log("3. Viết hàm sum(a, b) trả về tổng:")
function sum(a,b)
{
    var isNumber = Number(a) && Number(b) 
    if (isNumber){
        return a+b
    }
    else
        return "Invalid input"
}
var a = 6
var b = 4
var c = "gg"
var d = "5"
var ketqua = sum(a,b)
console.log(`${a} + ${b} = ${sum(a,b)}`)
var ketqua = sum(d,c)
console.log(`${c} + ${d} = ${sum(c,d)}`)

//4.Viết hàm isEven(n) trả về true nếu n chẵn, ngược lại false. 
// Test với một số giá trị.
function isEven(n)
{
    var isEven = n%2==0
    return console.log(isEven)
}
console.log("4. Viết hàm isEven(n) trả về true nếu n chẵn, ngược lại false:")
isEven(a)
isEven(b)
isEven(c)
isEven(d)

//5.Viết hàm greet(name = 'bạn') trả về 'Hello, <name>!'
//  So sánh function declaration và arrow function.
function greet(name){
    console.log(`Hello, ${name}`)
}
console.log("5.")
greet("Huỳnh Gia Huy")

hello()         //work normally here
//chao()        //reference error ("expression function": can not call the function before it is created) 
//hi()          //reference error ("arrow function": không thể gọi hàm trước khi nó được định nghĩa)   
function hello(){
    return console.log("Day la Declaration function")
}

let chao = function(){
    return console.log("Day la Expression function")
}

let hi = () => {
    return console.log("Day la Arrow function")
}
console.log("So sánh Declaration & Arrow:")
hello()
chao()
hi()

//6.Tạo biến points (number). 
// Dùng toán tử 3 ngôi để phân loại:
// points >= 90: 'A', 70–89: 'B', 50–69: 'C', < 50: 'D'.
console.log("6.")
var points= parseFloat(prompt("6.Dùng toán tử 3 ngôi để phân loại:\nNhập 1 số từ 1-100: "))
if(points === null){
    console.log("Nhập số hợp lệ!")
}
else if(points <0 ||points >100){
    console.log("Nhập 1 số từ 1 đến 100!")
}
else{
    if (points >= 90){
    console.log("A (>=90)")
    }
    else if(points >=70 && points <90){
    console.log("B (>=70 && <90)")
    }
    else if (points >=50 && points <70){
    console.log("C (>=50 && <70)")
    }
    else if(points<50){
    console.log("D (<50)")
    }
}

//7. Tạo biến a = '10', b = 10. So sánh a == b và a === b,
//  giải thích khác biệt và in kết quả.
var a = "10"
var b = 10
console.log("7.So sánh a == b và a === b, giải thích, in kết quả:\n")
console.log(`${a} == ${b} - ${a==b}: So sánh 2 dữ liệu giống nhau về mặt hình thức`)
console.log(`${a} === ${b} - ${a===b}: So sánh tuyệt đối (tính cả typeof của dữ liệu)`)

//8.Viết hàm toBoolean(x) chuyển mọi giá trị về boolean theo JavaScript truthy/falsy
//  in kết quả với: 0, 1, '', '0', ' ', null, undefined, [], {}, NaN.
var toBoolean = function(x){
    return console.log(Boolean(x))
}
console.log("8.\n")
toBoolean(0)
toBoolean(1)        //khong phai truong hop false
toBoolean("")
toBoolean("0")      //khong phai truong hop false 
toBoolean(" ")      //khong phai truong hop false 
toBoolean(null)
toBoolean(undefined)
toBoolean([])       //khong phai truong hop false 
toBoolean({})       //khong phai truong hop false
toBoolean(NaN)



/** 
 * MINI PROJECT 
 
 * Nhập name, baseSalary, bonusRate (0–1), overtimeHours.
 * Tính tổng lương = baseSalary + baseSalary*bonusRate + overtimeHours*50000.
 * In biên lai dạng nhiều dòng (template string).
 * Yêu cầu: validate kiểu dữ liệu, làm tròn 0 chữ số.
*/
var name = (prompt("Input UserName: "))
var baseSalary = parseFloat(prompt("Input Base Salary (VNĐ): "))
var bonusRate = parseFloat(prompt("Input Bonus Rate (0-1): "))
var overtimeHours = parseFloat(prompt("Input Overtime Hours: "))

if (typeof name !== "string" || name.lenght === 0 ||
    isNaN(baseSalary) ||  baseSalary < 0 || 
    isNaN(bonusRate) || bonusRate < 0 || bonusRate > 1 || 
    isNaN(overtimeHours) || overtimeHours < 0)
{
    alert("Syntax error! Input data again!")
}
else{
    console.log("EMPLOYEE INFORMATION:\n")
    console.log(`User Name: ${name}`)
    console.log(`Base Salary: ${Intl.NumberFormat('vi-VN').format(baseSalary) + ' VNĐ'}`)
    console.log(`Bonus Rate: ${bonusRate}`)
    console.log(`Overtime Hours: ${overtimeHours}`)
    console.log(`\n`)
    var totalSalary = baseSalary + baseSalary*bonusRate + overtimeHours*50000
    console.log(`Total Salary:
${Intl.NumberFormat('vi-VN').format(totalSalary) + ' VNĐ'}`)
}


