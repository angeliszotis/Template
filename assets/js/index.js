import {responsiveGalleryItem} from "./templates.js";
document.addEventListener('DOMContentLoaded', function() {
    let test = document.getElementById("jsonData").innerText;
    const clearfix = document.querySelector(".clearfix");
    JSON.parse(test).forEach((item) => {
        clearfix.insertAdjacentHTML("beforebegin", responsiveGalleryItem(item));
    });
})