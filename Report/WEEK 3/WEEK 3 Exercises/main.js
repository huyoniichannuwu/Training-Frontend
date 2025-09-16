// 1.	Cho mảng users [{id, name, age}]. Tạo mảng tên những người >= 18 bằng filter+map.
// 2.	Tính tổng đơn hàng: carts [{name, price, qty}]. Dùng reduce để ra tổng tiền và số mặt hàng.
// 3.	Viết hàm counter() dùng closure: có next() trả về số tăng dần, reset().
// 4.	Sắp xếp mảng products theo price tăng/giảm; xử lý khi price bằng nhau theo name.
// 5.	Chuyển danh sách key-value thành object và ngược lại (entries <-> fromEntries).
// 6.	Viết hàm groupBy(arr, key) -> object nhóm phần tử theo giá trị key.
// 7.	Dùng bind để cố định this cho method log của object logger.
// 8.	Chuyển object với giá trị là số thành JSON và parse lại, kiểm tra bằng === (chú ý kiểu).


//1.Tạo mảng tên những người >= 18 bằng filter+map.
console.log("Bài 1:")
var users = [
    {
        id:1,
        name:"Huỳnh",
        age:18
    },
    {
        id:2,
        name:"Gia",
        age:17
    },
    {
        id:3,
        name:"Huy",
        age:18
    },
    {
        id:4,
        name:"Hưng",
        age:20
    },
    {
        id:5,
        name:"Hùng",
        age:21
    },
]
console.log(users)
var baiMot = function(arr){
    var filterArr = users.filter(function(value,index){
        return value.age >= 18
    })
    var mapArr = filterArr.map(function(value,index){
        return `Name: ${value.name}`
    })
    return mapArr 
}
console.log("Mảng tên những người >= 18",baiMot(users))

//2.Tính tổng đơn hàng: carts [{name, price, qty}]. 
// Dùng reduce để ra tổng tiền và số mặt hàng.
console.log(`
Bài 2:`)
var carts = [
    {
        name: "Sữa bò",                 //150
        price: 30000,
        qty: 5,
    },
    {
        name: "Rong biển",
        price: 35000,                   //70
        qty: 1,
    },
    {
        name: "Mì tôm",
        price: 5000,
        qty: 7,
    },
    {
        name: "Há cảo",                 //100
        price: 50000,                   
        qty: 2,
    },
    {
        name: "Xúc xích",
        price: 20000,                   //80
        qty: 4,
    },
]
//in ra tổng số hàng
var getTotalPrice = (arr) =>{
    
    index = 0
    var totalPrice = arr.reduce(function(accumulator,currentValue){
        index++
        var perSP= currentValue.price * currentValue.qty
        var total =accumulator + perSP
        console.table({
            "Lượt": index,
            //"Đã tính tiền sản phẩm": accumulator,     //BIẾN LƯU TRỮ
            "Tên sản phẩm": currentValue.name,
            "Đơn giá": currentValue.price,
            "Số lượng": currentValue.qty,
            "Tiền hàng lượt này": perSP,           //giá một sản phẩm * số sản phẩm
            "Tổng cổng lại": total
        }
        )
        return total
    },0)
    return totalPrice
}

console.log(`Tổng tiền của đơn hàng trên: ${getTotalPrice(carts)}`)


//bài 3.Viết hàm counter() dùng closure: có next() trả về số tăng dần, reset().
console.log(`
Bài 3:`)
var Makecounter = function (start = 0) {
    let c = start;
    return{
        next(){return ++c},
        reset(){c=0}

    }
}
var counter = Makecounter(10)

console.log(counter.next());                //11
console.log(counter.next());                //12
counter.reset()                             //0
console.log(counter.next())                 //1


//bài 4.Sắp xếp mảng products theo price tăng/giảm; xử lý khi price bằng nhau theo name.
console.log(`
Bài 4:`)
var products = [
    {
        name: "Sữa bò",                 //150
        price: 35000,
    },
    {
        name: "Rong biển",
        price: 35000,                   //70
    },
    {
        name: "Mì tôm",
        price: 5000,
    },
    {
        name: "Há cảo",                 //100
        price: 35000,                   
    },
    {
        name: "Xúc xích",
        price: 20000,                   //80
    },
    {
        name:"Thùng bia 333",
        price:300000,
    }
]


//dùng .sort() reduce ve gia truoc

// var pricegiamdan = products.sort(function(a,b){
//     if (a.price !== b.price)
//     {
//         return b.price - a.price            //giảm dần
//     }    
//     return a.name.localeCompare(b.name)         
// })
// console.log("Giảm dần:",pricegiamdan)

var pricetangdan = products.sort(function(a,b){
    if (a.price !== b.price){                        //(thap,cao) => thap - cao => tăng dần
    return a.price-b.price
    }
    
    return a.name.localeCompare(b.name)   
})

console.log("Tăng dần:",pricetangdan)

//bài 5.Chuyển danh sách key-value thành object và ngược lại (entries <-> fromEntries).
console.log(`
Bài 5:`)
var vdobject = {
    name: "Huỳnh Gia Huy",
    age:18,
    address: "Ho Chi Minh City"
}
//entries
for (var [key,value] of Object.entries(vdobject)){
    console.log(key,":",value)
}

//fromEntries
console.log(Object.fromEntries(Object.entries(vdobject)))

//bài 6.Viết hàm groupBy(arr, key) -> object nhóm phần tử theo giá trị key.

console.log(`
Bài 6:`)
var students = [
    {
        name: "Huỳnh",
        age:18,
    },
    {
        name:"Gia",
        age:19,
    },
    {
        name: "Huy",
        age:19,
    }
]


function groupBy(arr, key){
  return arr.reduce(function (acc, item){
    var k = item[key];
    (acc[k] ||= []).push(item);
    return acc;
  }, {});
}

console.log(groupBy(students,"age"))


//bài 7.Dùng bind để cố định this cho method log của object logger.
console.log(`
Bài 7:`)
const logger = {
  prefix: '[LOG]',
  log(msg){ console.log(this.prefix, msg); }
};

logger.log('hello');     // [LOG] hello
//const f = logger.log;    // tách ra => this mất
try{ f('oops'); }catch(e){ console.log('this lost'); }

const bound = logger.log.bind(logger);
bound('ok');             // [LOG] ok


//bài 8.Chuyển object với giá trị là số thành JSON và parse lại, 
// kiểm tra bằng === (chú ý kiểu).
console.log(`
Bài 8:`)
var Obj = {
    huy: 10,
    hung: 20,
    kiet: 30,
}
console.log("ta có Object:",Obj)
var jsonString = JSON.stringify(Obj)
console.log("ta có chuỗi JSON:",jsonString)

//parse
var parseObj = JSON.parse(jsonString)
console.log("Paste object:",parseObj)

//kiểm tra
console.log("So sánh Huy:",Obj.huy === parseObj.huy)
console.log("So sánh Hung:",Obj.hung === parseObj.hung)
console.log("So sánh Kiet:",Obj.huy === parseObj.huy)

console.log(typeof Obj.huy)
console.log(typeof parseObj.huy)            //đều có kiểu number