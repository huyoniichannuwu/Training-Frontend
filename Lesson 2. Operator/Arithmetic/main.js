// +,-,*,**,/,% operator
var a = 8
var b = 2
var c = a % b
console.log(c)


var Age = 17
var nextAge = Age++
console.log(Age)


//++, -- operator  (prefix - tiền tố)
var a = 5
console.log(a++)             //5
console.log(a)               //6

//++, -- operator  (postfix - hậu tố)
var number = 1 
console.log(++number)        //2
console.log(number)          //2

//Assignment
//1
var number = 6
ketqua = number++ + --number
/*
*number++ thực thi xong tại dòng lệnh ta được number++ = 6, 
*--number thực thi SAU KHI ta có được number++ lên 1 đơn vị = 7, --number = 7-1 = 6  
*/
console.log("Kết quả: ",ketqua)

//2 
var number = 6
ketqua= ++number * 2 - number-- * 2
//7 * 2 - 7 * 2
console.log("Kết quả: ",ketqua)