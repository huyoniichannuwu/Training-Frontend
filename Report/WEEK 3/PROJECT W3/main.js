//Project W3
//Xây dựng module quản lý giỏ hàng: thêm/sửa/xóa sản phẩm.
//Tính tổng tiền, áp mã giảm giá %, export các hàm.
// Viết các test case ở cuối file để chứng minh chạy đúng.

console.log(`                     ---QUẢN LÝ GIỎ HÀNG---`)
console.log(`1. Thêm sản phẩm`)
console.log(`2. Sửa sản phầm`)
console.log(`3. Xóa sản phẩm`)
console.log(`4. Thanh toán và đóng ứng dụng`)
while (true){


    var cart = JSON.parse(localStorage.getItem("cart")) || []
    var choice = parseInt(prompt(`QUẢN LÝ GIỎ HÀNG! XIN CHÀO QUÝ KHÁCH
1. Thêm sản phẩm
2. Sửa sản phẩm
3. Xóa sản phẩm
4. Thanh toán và đóng ứng dụng`))

    //điều kiện choice
    while(isNaN(choice) || choice < 1 || choice > 4){
        var choice = prompt("Nhap lai")
    }
    console.log(`
    Bạn chọn ${choice}`)
    switch (choice) {
        case 1:
            var again = "y"
            while(again == "y"|| again =="yes"|| again ==true ){
                var tenSp =prompt("Nhập tên sản phẩm:")
                while(tenSp.trim().length === 0 ||tenSp === null){
                    var tenSp =prompt("Syntax Error! Nhập lại tên sản phẩm (more than 1 word):")
                }

                var donGia =parseInt(prompt("Nhập đơn giá:"))
                while(donGia.lensgth === 0|| isNaN(donGia) ||
                    donGia<=0 || donGia == " "){
                    var donGia =parseInt(prompt("Syntax Error! Nhập lại đơn giá"))
                }

                var soSp = (prompt("Nhập số lượng sản phẩm"))
                while(soSp.trim().length === 0 || isNaN(soSp) ||
                    soSp <=0 || soSp == " "){
                    var soSp = prompt("Syntax Error! Nhập lại số lượng sản phẩm")
                }
                
                cart.push({
                name: tenSp,
                price: parseInt(donGia),
                number: parseInt(soSp)})
                localStorage.setItem("cart", JSON.stringify(cart));

                console.log(`Giỏ hàng: ${cart.length} sản phẩm` )
                var print = cart.map(function(product,index){
                    return `Product Name: ${product.name} - Price: ${product.price} VNĐ - Number of product: ${product.number}`
                })
                console.log(print)

                //continue
                var again = prompt("Add another product (y/n)")
                
            }
            break
        case 2: //sửa
            var print = cart.map(function(product,index){
                    return `STT: ${index+1} - Product Name: ${product.name} - Number of product: ${product.number}`
                })
                console.log(print)
            
                var indexNumber = prompt("Hãy chọn số thứ tự sản phẩm quý khách muốn sửa:")
            while(indexNumber > cart.length || isNaN(indexNumber) || indexNumber == " "){
                var editNumber = prompt("Syntax Error! Hãy chọn số thứ tự sản phẩm quý khách muốn sửa!")
            }
            
            var soSpNew = prompt("Điền số sản phẩm quý khách muốn thay đổi:")
                while(soSpNew.trim().length === 0 || isNaN(soSpNew) ||
                    soSpNew <=0 || soSpNew == " "){
                    var soSpNew = prompt("Syntax Error! Hãy điền số sản phẩm quý khách muốn thay đổi:")
                }

            cart[indexNumber-1].number = parseInt(soSpNew)
            
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(`Đã sửa thành công`)
            console.log("Giỏ hàng hiện tại đã cập nhật:")
            var print = cart.map(function(product,index){
                    return `STT: ${index+1} - Product Name: ${product.name} - Price: ${product.price} VNĐ - Number of product: ${product.number}`
                })
                console.log(print)
            break
        case 3: //xóa
            var print = cart.map(function(carts, index){
                return `STT: ${index+1} - Tên hàng: ${carts.name}`
            })
            console.log(print)
            
            var deleteItem = prompt("Số thứ tự sản phẩm bạn muốn xóa:")
            while(deleteItem.length === 0 || isNaN(deleteItem || deleteItem<1)){
                var deleteItem = prompt("Syntax Error! Hãy nhập số thứ tự sản phẩm muốn xóa:")        
            }
            
            var deleteCount = prompt(`Bạn muốn xóa bao nhiêu sản phẩm?
            (Nếu không xóa hãy điền 0)`)
            while(deleteCount.length === 0 || isNaN(deleteItem )){
            var deleteCount = prompt(`Lỗi! Bạn muốn xóa bao nhiêu sản phẩm? 
            (Nếu không xóa hãy điền 0)`)
            }

            cart.splice(deleteItem-1,deleteCount)
            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(`Đã xóa thành công!`)
            console.log("Giỏ hàng hiện tại đã cập nhật:")
            var print = cart.map(function(product,index){
                    return `Product Name: ${product.name} - Price: ${product.price} VNĐ - Number of product: ${product.number}`
                })
                console.log(print)
            break
        case 4: //print
            console.log(`
Giỏ hàng:`)
            console.log(cart)
            var index = 0
            var getTotalPrice = function(arr){
                var totalPrice = arr.reduce(function(accumulator,currentValue){
                    index++
                    var perSp = currentValue.price * currentValue.number
                    var total = accumulator + perSp
                    console.table({
                        "Lượt tính tiền": index,
                        "Tên sản phẩm": currentValue.name,
                        "Giá trị sản phẩm": perSp,
                        "Tổng tiền": total,
                    })
                    return total
                },0)
                return totalPrice
            }

            console.log("Tổng tiền:", getTotalPrice(cart), "VNĐ")
            
            alert("BẠN CÓ MỘT PHIẾU RANDOM GIẢM GIÁ (nhấn 'OK' để tiếp tục)")
            var discount = Math.floor(Math.random() * 100)
            if (discount<= 1){
                alert("YOU OWN 50% DISCOUNT!")
                console.log("Tổng tiền (Đã áp mã giảm giá):", getTotalPrice(cart)*0.5, "VNĐ")
                console.log("Đã thoát ứng dụng thành công!")
            }    
            else if (discount > 20 &&discount <= 50 ) {
                alert("YOU OWN FREE A 'CHAI NƯỚC TƯƠNG MAGGIE'")
                console.log("Đã thoát ứng dụng thành công!")
            }
                
            else if (discount >1 && discount <=20){
                alert("YOU OWN 20% DISCOUNT!")
                console.log("Tổng tiền (Đã áp mã giảm giá):", getTotalPrice(cart)*0.8, "VNĐ")
                console.log("Đã thoát ứng dụng thành công!")
            }
                
            else if (discount > 50){
                console.log("Chúc bạn may mắn lần sau!")
                console.log("Đã thoát ứng dụng thành công!")
            }
            
    }
    if (choice === 4)
        break

}

//export getTotalPrice()