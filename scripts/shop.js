// Put images dynamically in wrappers
function insertImages(){
    let imageWraps = document.querySelectorAll('.product-image');
    for(let i = 0; i < imageWraps.length; i++){
        imageWraps[i].src = `images/prod${i}.jpg`;
    }
}
insertImages()

// Put dynamically names and prices
let prodNamesPrices = [
    {
        name: 'Cream Soft',
        price: 50,
        image: 'images/prod0.jpg'
    },
    {
        name: 'Powder Rose',
        price: 20,
    },
    {
        name: 'Tonique White',
        price: 30,
    },
    {
        name: 'Nail Polish',
        price: 40,
    },
    {
        name: 'Cream Soft',
        price: 50,
    },
    {
        name: 'Powder Rose',
        price: 60,
    },
    {
        name: 'Tonique White',
        price: 70,
    },
    {
        name: 'Tonique White',
        price: 10,
    }
]
function insertProductNamesPrices(prodNamesPrices){
    let nameWraps = document.querySelectorAll('.p-head');

    let prodNamesLength = prodNamesPrices.length;
    for(let i=0; i < prodNamesLength; i++){
            nameWraps[i].textContent = prodNamesPrices[i].name;
    }

    let priceWraps = document.querySelectorAll('.p-price');
    for(let i=0; i < prodNamesLength; i++){
        priceWraps[i].textContent = `${prodNamesPrices[i].price} $`;
    }
}
insertProductNamesPrices(prodNamesPrices);


function addToCart(){
    let cartBtn = document.querySelectorAll('.add-to-cart');
    let cartWrapper = document.querySelector('.cart-details')
    let myCart = document.querySelector('.shop-cart')
    let emptyCart = document.querySelector('.cart-empty')

    // Empty cart message here


    // iterate and add new item to cart
    for(let i =0; i<cartBtn.length; i++){
        cartBtn[i].addEventListener('click', (e) => {
            let newItem = document.createElement('p');
            let itemDetails = document.createTextNode(`Product: ${prodNamesPrices[i].name} Price: ${prodNamesPrices[i].price} $`);
            newItem.append(itemDetails);
            cartWrapper.append(newItem);
            myCart.style.marginBottom = '20px'

            emptyCart.textContent = ''
            newItem.addEventListener('click', () => {
                newItem.textContent = ''
            })
        })
    }
    
}
addToCart()
