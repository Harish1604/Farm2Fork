
var arr = [];
var messages = document.querySelectorAll('.img1 p');
var opencart = document.querySelector('.open-cart');
var cancelpopup = document.getElementById("cancel-popup");

function closebutton(event) {
    //event.target.parentElement.remove();
    var cart = document.querySelector('.cont');
    cart.style.display = 'none';
}

function disp(event) {
    var cart = document.querySelector('.cont');
    cart.style.display = cart.style.display === 'block' ? 'none' : 'block';
}

function message(index) {
    messages[index].innerText = "Added to Cart Successfully";
    arr.push(index);
    displayCart();
}

function displayCart() {
    let cartContainer = document.getElementById('carItem');
    let totalContainer = document.getElementById('total');
    let total = 0;

    if (arr.length === 0) {
        cartContainer.innerHTML = "Your cart is empty";
        totalContainer.innerHTML = "₹0.00";
        return;
    }

    let cartItemsHTML = arr.map((index) => {
        let itemDetails = '';
        let price = 0;
        switch (index) {
            case 0:
                itemDetails = "Milk - 1 Litre";
                price = 30;
                break;
            case 1:
                itemDetails = "Wheat - 1 Kg";
                price = 30;
                break;
            case 2:
                itemDetails = "Rice - 10 Kg";
                price = 500;
                break;
            
            case 3:
                itemDetails = "Coconut - 1 Piece";
                price = 20;
                break;
            case 4:
                itemDetails = "Coconut Oil - 250ml";
                price = 50;
                break;
            case 5:
                itemDetails = "Sugarcane - 2 Piece";
                price = 50;
                break;
            case 6:
                itemDetails = "Cane Juice - 1L";
                price = 70;
                break;
            case 7:
                itemDetails = "Drumstick - 3 Piece";
                price = 50;
                break;
            case 8:
                itemDetails = "Ginger - 100g";
                price = 50;
                break;
            case 9:
                itemDetails = "Tomato - 1kg";
                price = 50;
                break;
            case 10:
                itemDetails = "Pumpkin - 1piece";
                price = 30;
                break;

        }
        total += price;
        return `<div class='cart-item'>
                    <p>${itemDetails}</p>
                    <p>₹${price}</p>
                    <button class="btt" onclick='removeItem(${index})'>Remove</button>
                </div>`;
    }).join('');

    cartContainer.innerHTML = cartItemsHTML;
    totalContainer.innerHTML = `₹${total}.00`;
}

function removeItem(index) {
    arr.splice(arr.indexOf(index), 1);
    messages[index].innerText = ""; 
    displayCart();
}


var farmer_portal_access = document.querySelector(".farmer_portal_access") ;
var cart1 = document.querySelector(".cart") ;
farmer_portal_access.addEventListener('click',function(){
var confirmation = window.confirm("Are you Sure! You want to add a product to the customers' visibility") ;
if(confirmation == true)
  {
    cart1.style.display = "block" ;
    cart1.scrollIntoView({behaviour : "smooth" ,block : "start"})
  }
})

var popup_overlay = document.querySelector(".popup-overlay");
var popup_box = document.querySelector(".popup-box");
var addbutton = document.querySelector(".add");

addbutton.addEventListener("click", function () {
popup_overlay.style.display = "block";
popup_box.style.display = "block";
});

var cancel_product = document.getElementById("cancel_product");
cancel_product.addEventListener("click", function (event) {
event.preventDefault();
popup_overlay.style.display = "none";
popup_box.style.display = "none";
});

var product_input = document.getElementById("product_input");
var image_input = document.getElementById("image_input") ;
var cost_input = document.getElementById("cost_input");
var quantity_input = document.getElementById("quantity_input") ;
var add_product = document.getElementById("add_product");
var contain = document.querySelector(".container");

add_product.addEventListener("click", function (event) {
event.preventDefault();

var file = image_input.files[0];
var reader = new FileReader();

reader.onload = function (e) {
  var image_src = e.target.result;

  var division = document.createElement("div");
  division.setAttribute("class", "img1");
  division.innerHTML = `
    <img src="${image_src}" alt="" />
    <h2 class="name">${product_input.value}</h2>
    <h5 class="quantity">${quantity_input.value}</h5>
    <br />
    <h3 class="price">${cost_input.value}</h3>
    <button class="btn1" onclick="addToCart()">Add to Cart</button>
    <p class="dynamic"></p>`;

  contain.append(division);
  popup_overlay.style.display = "none";
  popup_box.style.display = "none";
};

if (file) {
  reader.readAsDataURL(file); // Read the selected file as a Data URL
} else {
  alert("Please select an image.");
}
});

var close = document.querySelector(".close") ;
close.addEventListener('click',function(){
cart1.style.display = "none" ;
})

