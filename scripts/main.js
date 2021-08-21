const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art");

const desc = document.getElementById("desc");
const price = document.getElementById("price");

const free = document.getElementById("free");
const express = document.getElementById("express");

const shippingField = document.getElementById("shipping");

const total = document.getElementById("total");

free.addEventListener = ("click", function () {
    shippingField.innerText = "5";
    updateTotal();
});
express.addEventListener = ("click", function () {
    shippingField.innerText = "30";
    updateTotal();
});

// update Total
function updateTotal() {
    console.log(shippingField.innerText, price.innerText);
}


div1.addEventListener("click", function () {
    img.src = "images/1.jpg";
    price.innerText = "750$";

});
div2.addEventListener("click", function () {
    img.src = "images/2.jpg";
    price.innerText = "550$";
});
div3.addEventListener("click", function () {
    img.src = "images/3.jpg";
    price.innerText = "250$";
});


