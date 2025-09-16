/*
1. Tham số
- Định nghĩa
- Kiểu dữ liệu
- Tính private
- 1 tham số
- Nhiều tham số

2. Truyền tham số 
- 1 tham số 
- Nhiều tham số

3. Arguments?
- Đối tượng arguments
- Giới thiếu vòng for

*/

function printlog(message){
    console.log(message)   //tham so
}
printlog("Day la a")
printlog("Day la b")   //doi so

function hamvidu1(message){
    console.log(typeof message)   
}
hamvidu1(["1","2"])

function hamvidu2(mes1, mes2){
    console.log(mes1,mes2)
}
hamvidu2()

function hamvidu3(){
    console.log(arguments)
}
hamvidu3("log 1", "log 2", "log 3")

function hamvidufor(){
    for(var param of arguments){
        console.log(param)
    }
}
hamvidufor("log 1", "log 2", "log 3")

function print(message){
    console.log(message)
}
print("me may beo")

function vonglapfor(){
    string = ""
    for(var phantu of arguments){
        string += `${phantu} - `
    }
    console.log(string)
}
vonglapfor("log","bep", "gao")