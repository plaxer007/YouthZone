"use strict";
window.addEventListener('load', (event) => {
    document.body.style.opacity = 1;
  });
  // Removes pink bar from the top on click
function hideShippingBar() {
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