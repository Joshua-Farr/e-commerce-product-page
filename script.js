const customerCart = document.getElementById("shopping-cart-card");
const navigationMenu = document.getElementById("main-nav-menu");
const shoppingCartDisplayArea = document.getElementById("cart-details");
const numItems = document.getElementById("num-items-to-add-to-cart");

let imageIndex = 0;
let productImages = new Array(
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg")
console.log(productImages);





let shoppingCart = [];
let numCartItems = 0;


document.addEventListener("click", function(e){
    if(e.target.id === "customer-shopping-cart"){
        console.log("clicked!");
        customerCart.classList.toggle("hide");
    }else if(e.target.id === "hamburger-menu" || e.target.id ==="close-menu"){
        console.log("clicked!");
        navigationMenu.classList.toggle("hide");
        
        // Closing the shoppingcart if its open
        if(!customerCart.classList.contains("hide")){
            customerCart.classList.toggle("hide");
        }
    }else if(e.target.id ==="subtract-one"){
        if(numCartItems){
            numCartItems--;
            numItems.innerText = numCartItems;
        }

    }else if(e.target.id ==="add-one"){
            numCartItems++;
            numItems.innerText = numCartItems;
    }else if(e.target.id === "next-item" || e.target.id ==="previous-item"){
        console.log("changing image!")
        changeImage(e);
    }
});



// function addToCart(name, imgUrl, price, quantity){
//     const item = {
//         itemName: name,
//         itemImg: imgUrl,
//         itemPrice: price,
//         itemQuantity:quantity
//     }
//     return item;
// }
 

function addItemToShoppingCart(item){
    shoppingCart.push(addToCart(item)); //???? Not sure...
}

function calculateTotalPrice(price, quantity){
    return price * quantity;
}

function renderShoppingCart(){

    // console.log("rendering shopping cart")
    shoppingCartDisplayArea.innerHTML +=
    `<div class="order-details">
        <img src="./images/image-product-1-thumbnail.jpg" class="item-thumbnail" alt="">
            <div class="item-details">
                <h3>Fall Limited Edition Sneakers</h3>
                <h3>$125.00 x 3 <span class ="total-price"><strong>$375.00</strong></span></h3>
            </div>
        <img src="./images/icon-delete.svg" alt="">
    </div>
  <button class="checkout-button">Checkout</button>`

}



function changeImage(e){
    const currentImage = document.getElementById("product-img");

    if(e.target.id === "next-item"){
        if(imageIndex === 3){
            imageIndex = 0;
        } else{
            imageIndex++;  
        }
    }else if(e.target.id === "previous-item"){
        if(imageIndex === 0){
            imageIndex = 3;
        } else {
            imageIndex--;
        }
    }
    currentImage.src = productImages[imageIndex];
}



function addToCart(){
    if(numItems.innerText){
        


        numItems.innerText = 0;
    }
}












renderShoppingCart();

addToCart("Fall Limited Sneakers", 125, 3);
