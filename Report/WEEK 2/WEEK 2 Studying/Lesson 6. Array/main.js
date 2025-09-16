/*
Array in Javascript

1. Tạo mảng
    -cách tạo
    -sử dụng cách nào? tại sao?
    -kiểm tra data type?
2. Truy xuất mảng
    -độ dài mảng
    -lấy phần tử theo index
*/
var object = {}
var languages = [
    "Javascript",
    "PHP",
    "Ruby",
    null,
    undefined,
    function(){},
    {},         //object
    123,
    "C++",      //the last "," can be here or not 

]
console.log(languages)

console.log(typeof languages)
console.log(typeof object)

console.log(Array.isArray(languages))       //kiem tra co phai array hay k
//2.
var Class = [
    "DA23",
    "DA24",
    "DA25",
]
console.log(Class.length)
console.log(Class[0])



/*
Làm việc với Array

//keyword: javascript array methods

1. To string
2. Join
3. Pop
4. Push
5. Shift
6. Unshift
7. Splicing
8. Concat
9. Slicing
*/

var languages = [
    "Javascript",
    "PHP",
    "Ruby",
    "C++",
]
console.log(languages.toString())           //Javascript,PHP,Ruby,C++
console.log(languages.join(", "))           //JVS, PHP, Ruby, C++
console.log(languages.shift())              //delete & return FIRST value
console.log(languages.pop())                //delete & return LAST value
console.log(languages)
console.log(languages.push("Python", "C#")) //add a new value(end), and return new length of the array
console.log(languages)
console.log(languages.unshift("Typecript")) //add a new value(start), and return new length of the array
console.log(languages)

console.log(languages.splice(4,1))          //useful in Student Management splice(a,b,c)
console.log(languages)                      //a: start, b: deleteCount, c: add a value at start point
console.log(languages.splice(3,0,"C++"))
console.log(languages)

console.log(languages.concat(Class))        //CONNECT
console.log(languages.slice(0))             //copy
console.log(languages.slice(3,5))           //Cut and return it
console.log(languages.slice(-2 ))
