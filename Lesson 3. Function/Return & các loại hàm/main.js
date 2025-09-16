// return trong hàm

var isconfirm = confirm("message?")
console.log(isconfirm)

function plus(a,b){
    return a+b
}

var result = plus(2,8)
console.log(result)

function array(a,b){
    return [a,b]
}
console.log(array(2,8))


/*
Một số điều cần biết về function

1. Khi function đặt trùng tên?
2. khai báo biến trong hàm
3. Định nghĩa hàm trong hàm?
*/

//1.
function showmessage(){
    console.log("Message 1")
}

function showmessage(){
    console.log("Message 2")
}
showmessage()
//2.
function showmessage2(){
    var bien = 112    // chỉ dùng "bien" trong function (private)
}
//3.Định nghĩa hàm trong hàm
function message()
{
    function message2(){
        console.log("message 2")
    }
    message2()
}
message()



/*
    Các loại function

    1. Declaration function
    2. Expression function
    3. Arrow function
*/

//declaration
printMessage()
function printMessage(){
    console.log("Declaration function")
}
//expression 
var printMessage2 = function(){
    console.log("Expression function")
}

//biết thêm expression
setTimeout(function autologin(){

})

var myObject = {
    myFunction: function(){

    }
}

//hosting giữa declaration và expression 
//declaration có thể gọi trước khi nó được định nghĩa
//expression thì không
printMessage2()