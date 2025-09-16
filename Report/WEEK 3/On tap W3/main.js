//Xây dựng module quản lý giỏ hàng: thêm/sửa/xóa sản phẩm
//  tính tổng tiền, áp mã giảm giá %, export các hàm.
//  Viết các test case ở cuối file để chứng minh chạy đúng.

console.log(`                       Computer Shop`)
console.log("1. Add Product")
console.log("2. Edit Product")
console.log("3. Remove Product")
console.log("4. Payment and exit the program")
while(true){
    var choice = prompt(`WELCOME TO COMPUTER SHOP
    1. Add Product
    2. Edit Product
    3. Remove Product
    4. Payment and exit the program

    Input a task number: 
    `)

    //dieu kien choice
    while (choice.length === 0|| isNaN(choice) || choice < 1 || choice > 4){
        var choice = (prompt(`WELCOME TO COMPUTER SHOP
    1. Add Product
    2. Edit Product
    3. Remove Product
    4. Payment and exit the program

    Input a valid task number: 
    `))
    }

    console.log("you choose", Number(choice))

    var cart =JSON.parse(localStorage.getItem("cart")) ||[]

    switch (Number(choice)){
        case 1:                     //create
            var yes = "y"
            while(yes == "y" || yes == "yes" || yes == "Y" || yes == true)
            {
                var productName = prompt("Input a new product name:")
                while (productName.trim().length === 0 || productName === null || productName.length < 2)
                {
                    var productName = prompt("INVALID NAME! Input a new product name (more than 1 word):")
                }
                
                var productPrice = parseInt(prompt ("Input the product price:"))
                while (productPrice < 0 || isNaN(productPrice) || productPrice === " "|| productPrice < 999){
                    var productPrice = parseInt(prompt ("INVALID PRICE! Input the product price:"))
                }
                
                var soLuong = parseInt(prompt("Input the number of product:"))
                while ( soLuong < 0 || isNaN(soLuong) || soLuong == " "){
                    var soLuong = parseInt(prompt("INVALID NUMBER! Input the number of product:"))
                }
                
                
                cart.push({
                    name:productName,
                    price:productPrice,
                    number:soLuong,
                })
                localStorage.setItem("cart", JSON.stringify(cart));
                console.log(cart.map(function(value,index){
                    return `Product name: ${value.name} - price: ${value.price} - quantity: ${value.number}`

                }))
                var yes = prompt("Do you want to add more (y/n):")
            }
            break
                
        case 2:         //edit
            console.log(cart.map(function(value,index){
                console.log(value.name,value.price)
                return `STT: ${index+1} - Product name: ${value.name} - Quantity: ${value.number}`
            }))
            var editIndex =parseInt(prompt("Input index you want to edit:"))            //1 index+1
            while(isNaN(editIndex) || editIndex < 0 || editIndex > cart.length){
                var editIndex = parseInt(prompt("Syntax Error! Input index you want to edit again!"))
            }
            var editSoluong = parseInt(prompt("Input Quantity you want to edit:"))
            while(isNaN(editSoluong) || editSoluong < 0){
                var editSoluong = parseInt(prompt("Syntax Error! Input Quantity you want to change again!"))
            }
            
            cart[editIndex-1].number =  parseInt(editSoluong)
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart)
            break
        case 3:
            console.log(cart.map(function(value,index){
                return `STT: ${index+1} - Product name: ${value.name}`
            }))
            console.log(cart.length)
            var deleteValue = parseInt(prompt("Input STT you want to remove:"))
            while(isNaN(deleteValue) || deleteValue < 0 || deleteValue > cart.length){
                var deleteValue = parseInt(prompt("Nhap Syntax Error! Input STT you want to remove again!"))
            }

            var deleteCount = parseInt(prompt("How many product you want to delete ( if not delete anything, input 0"))
            while(isNaN(deleteCount) || deleteCount <0) {
                var deleteCount = parseInt(prompt("Syntax Error! Input again!"))
            }
            
            var deleteLogic = cart.splice(deleteValue-1,deleteCount)
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log("Xoa thanh cong, gio hang duoc cap nhat")
            console.log(cart)
            break
        case 4:
            //print console.table
            console.log(cart.map(function(value, index){
                return `STT: ${index+1} - name: ${value.name} - price: ${value.price} VNĐ - quantity: ${value.number}`
            }))
            
            var getTotalCost = function(arr){
                var totalCost= arr.reduce(function(accumulator,currentValue, currentIndex){
                    var perSp = currentValue.price * currentValue.number
                    console.table({
                        "Product":currentIndex+1,
                        "Product Name": currentValue.name,
                        "Product Unit Price":currentValue.price,
                        "Product quantity":currentValue.number,
                        "Product Price": perSp,
                        "Total Price": accumulator + perSp,
                    })
                    return accumulator+perSp                    //QUAN TRONG: RETURN CÁI GÌ thì biến lưu trữ sẽ hiện cái đó
                },0)
               
                return  totalCost
            }
            console.log("Total Price:",getTotalCost(cart),"VNĐ")
            alert("You have a random voucher, press OK!")
            var random = Math.floor(Math.random()*10)
            if (random<=1){
                alert("YOU HAVE A 40% DISCOUNT")
                console.log("Total Price:",getTotalCost(cart) * 0.6,"VNĐ")
                console.log("Completely close the application!")
            }
            else if(random>1 && random<=10){
                alert("YOU OWN A CHINSU TƯƠNG ỚT!")
                console.log("Completely close the application!")
            }
            break
            
    }
    if (choice === "4")
        break

}
