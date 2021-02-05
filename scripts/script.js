"use strict";
function hideShippingBar() {
    // Removes pink bar from the top of the website after some time
    let shipBox = document.getElementById("shipping-box");
    let btnClose = document.getElementById("btnClose");
    // setTimeout(() =>{
    //     shipBox.classList.toggle("hide")
    // },5000)
    function closeBar() {
        shipBox.classList.remove("flex-box");
        shipBox.classList.toggle("hideBar");
    };
    btnClose.addEventListener('click', closeBar, false);
}
hideShippingBar();
