import Product from "./product.js"


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
    }else if(e.target.id === "add-to-cart-btn"){
        addToCart();
    }else if(e.target.id === "next-item" || e.target.id ==="previous-item"){
        console.log("changing image!")
        changeImage(e);
    }else if(e.target.id === "product-thumbnail"){
        const index = e.target.dataset.index;
        console.log(index);

        imageIndex = index;
        console.log(imageIndex);
         document.getElementById("product-img").src = productImages[imageIndex];
    }else if( e.target.id === "remove-from-cart-btn"){
        shoppingCart.pop();
        shoppingCartDisplayArea.innerHTML = "";
    }
});




function addToCart(){
    if(parseInt(numItems.innerText)){
        console.log("Adding to the cart!", numItems.innerText)
   
        if(!shoppingCart.length){
            const name = document.getElementById("product-title").innerText;
            const imgUrl = document.getElementById("product-img").src;
            const price = document.getElementById("adjusted-price")
                .innerText.slice(1,document.getElementById("adjusted-price").innerText.length);;
            const quantity = numItems.innerText;
            
            let newProduct = new Product(name, imgUrl, price, quantity);
            console.log(newProduct);
        
            shoppingCart.push(newProduct);
        }else {
            shoppingCart[0].updateQuantity(numItems.innerText);


        }
        
        numItems.innerText = 0;
        numCartItems = 0;
        console.log(shoppingCart);
    renderShoppingCart();
    
    }
}



function changeImage(e){
    const currentImage = document.getElementById("product-img");

    if(e.target.id === "next-item"){
        if(imageIndex === 3 || imageIndex === 4 ){
            imageIndex = 0;
        } else{
            imageIndex++;  
        }
    }else if(e.target.id === "previous-item"){
        if(imageIndex === 0 || imageIndex === -1){
            imageIndex = 3;
        } else {
            imageIndex--;
        }
    }
    currentImage.src = productImages[imageIndex];
}

function renderShoppingCart(){
    shoppingCartDisplayArea.innerHTML = ""

    for(let i=0; i< shoppingCart.length; i++){
        console.log(shoppingCart[i])
        shoppingCartDisplayArea.innerHTML+=shoppingCart[i].shoppingCartHtml();
    }
    shoppingCartDisplayArea.innerHTML += `<button class="checkout-button">Checkout</button>`;
}


function removeFromShoppingCart(){

}











