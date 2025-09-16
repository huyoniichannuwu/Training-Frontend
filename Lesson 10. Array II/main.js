/**
 * Array method
 *      forEach()   -   duyệt từng phần tử
 *      every()
 *      some()
 *      find()
 *      filter()
 *      map()
 *      reduce()
 */



var courses = [
    {
        id:1,
        name:"Javascript",
        coin:250
    },

    {
        id:2,
        name:"HTML & CSS",
        coin: 0,
    },
    {
        id:3,
        name:"PHP",
        coin: 0,
    },
    {
        id:4,
        name:"Python",
        coin:400,
    },
    {
        id:5,
        name:"Ruby",
        coin:400
    },
    {
        id:6,
        name:"Ruby",
        coin:500
    }
]
//DUYỆT PHẦN TỬ vong lap for
for ( var index = 0;index< courses.length;index++){
    console.log(courses[index])
}
//DUYỆT PHẦN TỬ, forEach của array
courses.forEach(function(course,index){
    console.log(index,course)
})


//every -> xét tất cả phần tử trong mảng theo 1 điều kiện (BOOLEAN)
//some -> xét chỉ cần 1 điều kiện RETURN đúng trong mảng là sẽ duyệt TRUE (BOOLEAN)
var isFree= courses.some(function(course,index){
    console.log(index)
    return course.coin ===0
})

console.log(isFree)

//search = FIND() (TRƯỜNG HỢP SỬ DỤNG: AI GHI TRƯỚC THÌ SẼ LẤY ĐÁP ÁN ĐÓ)
var searchcourse= courses.find(function(course,index){
    return course.name=== "Ruby"
})

console.log(searchcourse)      //in ra Object Ruby bao gồm id,name,coin 

//search = FILTER() (TRƯỜNG HỢP SỬ DỤNG: DUYỆT HẾT NGUYÊN MẢNG)
var filtercourse= courses.filter(function(course,index){
    
    return course.name ==="Ruby"
})
console.log(filtercourse)

//MAP - Thay đổi 'element' trong ARRAY
var newCourse = courses.map(function(course, index){
    return `Khóa học ${course.name}`            //chỉ muốn in ra các khóa học
        //index:index,
        //id : course.id,
        //`Khóa học ${course.name}`,
        //coin: course.coin,
        //coinText: `Gia: ${course.coin}`,
        //originArray: courses                  //thêm các chữ như khóa học, coinText dùng MAP
    
}) 
console.log(newCourse)


//REDUCE() - 
var totalCoin = 0
for ( var index = 0; index < courses.length; index ++){
    totalCoin += courses[index].coin 
}
console.log(`Tổng Coin của các khóa học: ${totalCoin} (For(x;y;z) loop)`)

var totalCoin = 0
for (var course of courses){
    totalCoin += course.coin
}
console.log(`Tổng số tiền các khóa học: ${totalCoin} (For...of loop)`)

//VD REDUCE
var index = 0
var tinhCoin = (accumulator, currentValue, currentIndex, originArray) => {                //accumulator = biến lưu trữ
    index++ 
    var total = accumulator + currentValue.coin
    console.table({
        "Lượt chạy": index,
        "Biến tích trữ": accumulator,
        "Giá khóa học": (currentValue.coin),
        "Tích trữ được số coin": total,
    })
    
    return total
}
var totalCoin = courses.reduce(tinhCoin,0)     //giá trị 2: initial value: giá trị khởi tạo
                                                //giống việc tạo biến totalCoin = 0
console.log(`Tổng coin của khóa học trên: ${totalCoin}`)

//Bài tập , mảng sport cùng số huy chương vàng => tính ra số huy chương vàng
console.log(`
Assignment:`)
var sports = [
    {
        name: "Cầu lông",
        gold: 10,
    },
    {
        name:"Bóng đá",
        gold: 10,
    },
    {
        name:"Bóng bàn",
        gold:15,
    },
    {
        name:"Bơi lội",
        gold: 15,
    },
    {
        name:"Đấu vật",
        gold: 50,
    },
]

var getTotalGold = function(arr){
    var totalGold = arr. reduce(function(accumulator,currentValue){
        return accumulator + currentValue.gold
    },0)   //initial Value (critical value)
    return totalGold
}
console.log(`Tổng số huy chương vàng (SEA GAME 29): ${getTotalGold(sports)}`)

console.log(`
    
Nếu không có Initial Value:`)
var coin = [
    10,
    10,
    15,
    15,
    70,
]

var totalCoin = coin.reduce(function(accumulator,currentValue){
    return accumulator + currentValue
})

console.log(totalCoin)

//Flat - "Làm phẳng" mảng từ Depth array - "Mảng sâu"
var depthArr = [1,2,[3,4],5,6,[7,8,9],]

var flatArr = depthArr.reduce(function(flatprint,currentArr){
    return flatprint.concat(currentArr)}
,[])        //initial value = mảng

console.log(flatArr)

//lấy các khóa học đưa vào mảng mới
var khoahoc = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "Javascript",
            },
            {
                id:2,
                title: "HTML & CSS",
            },
        ]
    },
    {
        topic:"Back-end",
        courses: [
            {
                id:1,
                title: "PHP",
            },
            {
                id: 2,
                title: "Ruby",
            },
        ]
    }
]

console.log(`
Bài tập(normal):`)
var Tongkhoahoc = khoahoc.reduce(function(totalKhoahoc,currentValue){
        
    return totalKhoahoc.concat(currentValue.courses)
        
    },[])
console.log(Tongkhoahoc)

console.log(`
function Bài tập:`)
function getTotalCourse(arr){
    var totalCourse = arr.reduce(function(total,currentValue){
        return total.concat(currentValue.courses)
    }, [])
    return totalCourse
}
console.log(getTotalCourse(khoahoc))

//in ra html
var htmls = getTotalCourse(khoahoc).map(function(course,index){
    return `
    <div>
        <h2>${course.title}</h2>
        <p>ID: ${course.id}</p>
    </div>
    `
})

console.log(htmls.join(""))


console.log(`
Assignment:`)

var watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
  }
];

//function calculateRating => tính điểm trung bình IMDB của những bộ phim
//Christopher Nolan làm đạo diễn. (BTVN)    (CRITICAL)
var calculateRating = function(arr){
    var christopherNolan = arr.filter(function(value,index){
        return value.Director === "Christopher Nolan"
    })
    var totalIMDB = christopherNolan.reduce(function(accumulator,currentValue){
        return accumulator + Number(currentValue.imdbRating)
    },0)                // 0 => INITIAL VALUE  khi tính tổng của arr
    //tính điểm trung bình
    var averageIMDB = totalIMDB / christopherNolan.length
    return averageIMDB
}

console.log(`
Các bộ phim của "Christopher Nolan" có số điểm trung bình là: ${calculateRating(watchList)}`)

console.log(`
Hiểu hơn về reduce:`)
//Phương thức reduce 2 
Array.prototype.reduce2 = function(callback, initialValue){                        //initialValue same as RESULT
    var index = 0
    if(arguments.length <2){                                                      //trường hợp KHÔNG CÓ INITIAL VALUE  
        index = 1
        initialValue = this[0]
    }
    
    for(;index < this.length; index++){
        initialValue = callback(initialValue, this[index], index, this)            //same as (accumulator,currentValue,currentIndex,originArr)
    }
    return initialValue
}


var numbers = [1,2,3,4,5]       //15

//cộng tổng các số trong arr numbers
var gettotalNumbers = (arr) =>{
    var totalNumbers = arr.reduce2(function(accumulator,currentValue){
        return accumulator+currentValue
    })
    return totalNumbers
}
console.log(gettotalNumbers(numbers))



//dùng reduce
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],                                        //mảng 2 chiều
];

var arrToObj = function(arr){
    var toObject = arr.reduce(function(accumulator,currentValue){                   //accumulator: biến tích trữ
        (accumulator[currentValue[0]] = currentValue[1])           //accumulator như kết quả                           
        return accumulator
    },{})
    return toObject
}
console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }



// String/Array include() method
console.log("Include method:")
var title = "Huỳnh Gia Huy"
console.log(title.includes("Gia"))
//console.log(title.includes("Gia","position" to start))     \
var courses = [
    "Javascript", "PHP", "Dart",
]
console.log(courses.includes("PHP"))      
//console.log(courses.includes("PHP","FROM INDEX"...)) 
//3+-3 (GIỚI THIỆU TH)
console.log(courses.includes("Javascript",-3))
