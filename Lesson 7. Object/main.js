//OBJECT IN JAVASCRIPT (key : value)
console.log(`OBJECT IN JAVASCRIPT:`)
var emailKey= "email"

var myInfo = {
    name: "Huynh Gia Huy",
    age: 18,
    class: "DA24",
    address: "Ho Chi Minh city",
    phone: "0901313256",
    [emailKey]: "huykute3011@gmail.com",
    getName: function(){                //Methods (phương thức)
        return this.name;
    },
    getAge: function(){
        return this.age
    }
}

var myKey = "class"


//myInfo.email = "huykute3011@gmail.com"      //add vào array
console.log(myInfo)
console.log(myInfo.name)                    //recommend
console.log(myInfo[myKey])

delete myInfo.class
console.log(myInfo)

console.log( myInfo.getName())
console.log(myInfo.getAge())
 



/*
    OBJECT CONSTRUCTOR
*/
console.log(`
OBJECT CONSTRUCTOR:`)
function User(firstName, lastName, avatar) {
    this.firstName=firstName
    this.lastName=lastName
    this.avatar=avatar

    this.getName = function(){
        return `${this.firstName} ${this.lastName}`
    }
}

var author = new User("Huy", "Huynh", "Avatar")
var user = new User("Han", "Huynh", "Avatar")

author.title ="Designer in HCMC"
user.comment ="Good designer!"


console.log(author)
//console.log(author.constructor === User)          //true
console.log(user)
console.log(author.getName())
console.log(user.getName())

/*
BT: tạo constructor parrot với thuộc tính name, leg, speed. them vao 1 animal ten parrot
*/

var Animal = function(name,leg,speed){
    this.name=name
    this.leg=leg
    this.speed=speed
}

var parrot = new Animal("Vet",2,"50 km/h")
console.log(parrot)



//Object prototype
console.log(`
PROTOTYPE:`)
function SV(firstName,lastName,avatar,Class){
    this.firstName=firstName
    this.lastName=lastName
    this.avatar=avatar
    this.Class=Class
    this.getTenSV= function(){
        return `${firstName} ${lastName}`
    }
    this.getClass = function(){
        return`${Class}`
    }
}

SV.prototype.age = 18
SV.prototype.getAgeSV= function(){
    return `${this.age}`
}
var user1= new SV("A","Nguyễn", "Avatar 1","DA24")
var user2 = new SV("B","Nguyễn","Avatar 2")

//console.log(user1.age)
console.log(user1.getTenSV())
console.log(user1.getAgeSV())
console.log(user1)


/*
Assignment: Constructor Student(fName, lName) và tạo thêm method riêng getFullName (prototype)
*/

var Student = function(firstName, lastName){
    this.firstName=firstName
    this.lastName=lastName
}

Student.prototype.getNameSV = function(){
    return `${this.firstName} ${this.lastName}`
}

var hocsinh = new Student("Huỳnh", "Gia Huy")

console.log(hocsinh)
console.log(hocsinh.getNameSV())



//Đối tượng date
console.log(`
DATE:`)
var date = new Date()
console.log(date)
var year = date.getFullYear()
var month = date.getMonth() + 1         // 0 - 11
var day = date.getDate()
console.log(`Hôm nay là ngày ${day}/${month}/${year}`)

function updateClock(){
    const date = new Date()
    var hour = date.getHours()
    var minute=date.getMinutes()
    var second = date.getSeconds()
    

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    console.log(`${hour}:${minute}:${second}`)
}
function printtg(){
    console.log ("Thời Gian: ")
}
printtg()
//setInterval(updateClock,1000)
updateClock()



/*
Math object

- Math.PI
- Math.round()
- Math.abs()
- Math.ceil()
- Math.floor()
- Math.random()
- Math.min()
- Math.max()
*/
console.log(`
MATH:`)
var pi = Math.PI
console.log("Số pi =",pi)
console.log("Round =",Math.round(pi))
console.log("Absolute =",Math.abs(-pi))
console.log("Ceil (làm tròn trên):",Math.ceil(pi))
console.log("Floor (làm tròn dưới):",Math.floor(pi))
console.log("Random 1-10:")
console.log((Math.floor(Math.random() * 10)))
console.log(`Bài tập thực hành:
    `)
var random = (Math.floor(Math.random()*5))
console.log(random)
var prize = [
    "10 spins",         //[0]
    "20 spins",         
    "100 lucky spins",
    "1 lucky spins",
    "Good luck next time",     //[4]
]
console.log(prize[random])

var randomNV = Math.floor(Math.random()*100)         //100 values
var rate50 = Math.floor(Math.random()*100)
var randomVK = Math.floor(Math.random()*100)     
let pity = parseInt(localStorage.getItem("pity")) || 0;

function savepity(randomNV){
    pity+=1
    
    if(pity>=90){
        console.log("HARD PITY! MAX 90 ROLL = 1 Nhân Vật Cấp S")
        pity = 0
    }
    else if(randomNV <=1.6666){
        console.log("Pity thứ",pity)
        pity = 0
    }
    console.log("Pity: ",pity)
    localStorage.setItem("pity",pity)    
}
//MENU
console.log(`          ~Banner Phương Thảo Ước Thệ~
Nhân vật cấp S (1.000%): Alice 
    - Nhân vật up rate kỳ này: 'Alice' 50% tỉ lệ trúng
    - 50% tỉ lệ còn lại sẽ trúng Nhân vật cấp S Khác`)
console.log(`Items:
    `)
if(pity >=89){
    console.log("Guaranteed S-Rank Character")
    console.log("Alice: Nhân vật cấp S")
}


if(randomNV <=1.6666){
    if(rate50 <= 50){    
        console.log("Alice: Nhân vật cấp S")
    }
    else{
        var nvLechrate = [
            "Lycaon: Nhân vật cấp S",
            "Rina: Nhân vật cấp S",
            "Soldier 11: Nhân vật cấp S",
            "Koleda: Nhân vật cấp S",
            "Grace: Nhân vật cấp S",
            "Nekomata: Nhân vật cấp S",
        ]
        var randomLechrate = Math.floor(Math.random()*5)
        console.log(nvLechrate[randomLechrate])
    }
}
else if(randomNV >= 2 && randomNV <=20){
    var nv4s = [
        "Anby: Nhân vật cấp A",
        "Sett: Nhân vật cấp A",
        "Nicole: Nhân vật cấp A",
    ]
    var random4s = Math.floor(Math.random()* 3)
    console.log(nv4s[random4s])
}
else if(randomNV >20 && randomNV <=100){
    console.log("Kiếm Súng: Vũ khí cấp B")
}

savepity(randomNV)


console.log(Math.min(-100,1,90,50,40))
console.log(Math.max(-100,1,90,50,40))