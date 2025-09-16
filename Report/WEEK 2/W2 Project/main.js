/**
 *Viết chương trình quản lý học sinh đơn giản: nhập danh sách điểm (array)
 *In bảng xếp loại theo thang A/B/C/D
 *Tính điểm trung bình, điểm cao nhất, thấp nhất; 
 kèm menu thao tác (thêm/xóa/in).
 */

//A: từ 8.5 điểm trở lên,
//B: 7.0 - 8.4
//C: 5.5 - 6.9
//D: 4.0 - 5.4
//CÒN LẠI: <4.0
 //tóm tắt đơn giản (có 5 môn trong học kì, bạn A có kết quả trung bình từng môn học như sau):
 var scores = JSON.parse(localStorage.getItem("scores")) || []
 

console.log(`0. Input student information`)
var studentID = prompt(`Student Information
Student ID number:`)
while(studentID.trim().length ===0 || typeof studentID  !== "string" )
{
    var studentID = prompt(`Student Information
Syntax error! Please Input Student ID:`)
}

var studentName = prompt(`Student Information 
FullName:`)
while(!studentName ||studentName.trim().length === 0 || typeof studentName !== "string" || studentName.trim().length < 2 ){
    var studentName = prompt(`Student Information 
Syntax error! Please Input FullName (more than 2 words):`)
}
var classID = prompt("Class ID:")
while(classID.trim().length === 0 || typeof classID !=="string" ){
    var classID = prompt("Syntax error! Please Input Class ID:")
}
console.log(`Student ID: ${studentID}`)
console.log(`Student Full Name: ${studentName}`)
console.log(`Class ID: ${classID}`)

console.log(`            --- STUDENT SCORE MANAGEMENT MENU ---`)
console.log(`                      --- GPA COUNT ---`) 
console.log(`
    
`)
console.log("1. Add grade")
console.log("2. Remove grades")
console.log("3. Print grades list")
console.log("4. Exit Menu")

while (true){
    var choice = (parseInt(prompt(`Welcome to Student Score Management
    choose an option (1->4)`)))                         //choice la number
    while(isNaN(choice) || choice.length === 0 || choice < 1 
    || choice > 4 || choice === " "){
        var choice = (parseInt(prompt(`Welcome to Student Score Management
    choose an option (1->4)`)))
    }
    console.log(`You have chosen ${choice}.`)

    switch (choice){
        case 1:
            var addmore = "y"
            while (addmore == "y" || addmore == "yes" ){
                var newGrade = parseFloat(prompt("Input new grade:"))
                while (isNaN(newGrade) || newGrade.length === 0 || newGrade < 0 
                || newGrade > 10 || newGrade ===" " ){
                    var newGrade = parseInt(prompt("Input new grade:"))
                }
                scores.push(newGrade)
                localStorage.setItem("scores", JSON.stringify(scores));
                console.log(scores)
                var addmore = prompt("DO YOU WANT TO ADD MORE GRADES? (y/n)")
            }
            break
        case 2:
            for (var index = 0; index < scores.length ; index++ ){
                console.log(`Subject ${index+1} grade: ${scores[index]} `)
            }
            
            var deleteGrade = prompt("Remove grade: select the ordinal number:")
            while(isNaN(deleteGrade) || deleteGrade.length === 0 || deleteGrade < 0 
            || deleteGrade > scores.length || deleteGrade == " "){
                var deleteGrade = prompt(`Syntax Error, 
            SELECT THE ORDINAL NUMBER OF THE GRADE YOU WANT TO DELETE `)
            }
            var deleteCount = prompt(`Remove grade: How many grade do you want to remove?
            (option if "you want to DELETE SEQUENT" or "just delete 1 value press 1")`)
            
            
            scores.splice(deleteGrade-1 ,deleteCount)
            localStorage.setItem("scores", JSON.stringify(scores));
            
            console.log("THE GRADE IS COMPLETELY REMOVED!")
            console.log("NEW GRADE LIST:", scores)
            break
        
        case 3: //in grade list tinh diem tb, max, min
            console.log("STUDENT GRADE LIST:")
            for (var index = 0; index < scores.length; index ++){
                console.log(`Subject ${index+1} grade: ${scores[index]}`)
            }
            //tb
            var total = 0
            for (var value of scores){
                total += value
            }
            var average = total / scores.length
            console.log("Average Grade =", average)

            //max
            var highestGrade= scores[0]
            for (index = 0; index < scores.length ; index++){
                if(scores[index] > highestGrade){
                    highestGrade = scores[index]
                }
            }
            console.log("Highest Grade =", highestGrade)

            //min
            var lowestScore = scores[0]
            for(index = 0; index < scores.length ; index ++){
                if (lowestScore > scores[index]){
                    lowestScore = scores[index]
                }
            }
            console.log("Lowest Grade =",lowestScore)

            
            if (average >=8.5 ){
                console.log(`Student Ranked: A `)                                           
            } else if(average >= 7 && average <8.5){
                console.log(`Student Rank: B`)
            } else if(average >=5.5 && average < 7){
                console.log("Student Rank: C")
            } else if(average >=4.0 && average < 5.5){
                console.log("Student Rank: D")
            } else{
                console.log("Student Rank: Others")
            }                                       
            break
        case 4:
            console.log("THANK YOU FOR USING OUR SERVICE!")
            break

    }
    if (choice ===4){
        break
    }
}