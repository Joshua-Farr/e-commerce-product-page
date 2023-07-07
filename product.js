class Product{
    constructor(name, imgUrl, price, quantity){

        this.name = name;
        this.imgUrl = imgUrl;
        this.price = price;
        this.quantity = parseInt(quantity);
        this.totalPrice = price * quantity;
    }

    shoppingCartHtml(){
        let html = 
        `<div class="order-details">
            <img src="./images/image-product-1-thumbnail.jpg" class="item-thumbnail" alt="">
                <div class="item-details">
                    <h3>Fall Limited Edition Sneakers</h3>
                    <h3>${this.price} x ${this.quantity} <span class ="total-price"><strong>$${this.totalPrice}</strong></span></h3>
                </div>
            <img src="./images/icon-delete.svg" id="remove-from-cart-btn" alt="">
        </div>`
    

      return html;
    }

    updateQuantity(num){
        this.quantity += parseInt(num);
        this.totalPrice = this.recalcTotalPrice();
    }

    recalcTotalPrice(){
        return (this.quantity * this.price)
    }

}


export default Product


