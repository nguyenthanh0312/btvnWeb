// var sum = (...arr) => {
//     let tong = 0;
//     for(let i=0;i<arr.length;i++){
//         tong += arr[i];
//     }
//     return tong;
// }
// var array = [1, 2, 3, 4, 5];
// var n = sum(...array);
// console.log(n)
//let a = 10;
// const goback = () => {
//     window.history.back();
// };
// setInterval(() =>{
//     console.log(navigator.onLine);
// }, 3000);

// function setCookie(cname, cvalue, exdays) {
//     const d = new Date();
//     d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
//     let expires = "expires=" + d.toUTCString();
//     document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// };
// let string = prompt("Enter your name: ");
// console.log("Hello " + string);
// setCookie("username", string, 3);
// getCookie = (cname) => {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//     let ca = decodedCookie.split(';');
//     for (let i = 0; i < ca.length; i++) {
//         let c = ca[i];
//         while (c.charAt(0) == ' ') {
//             c = c.substring(1);
//         }
//         if (c.indexOf(name) == 0) {
//             return c.substring(name.length, c.length);
//         }
//     }
//     return "";
// };
// let user = getCookie("username");
// console.log(user);
// deleteCookie = (cname) => {
//     document.cookie = cname + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
// };
// deleteCookie("username");


// import { kiemtrasoduong } from "./helper/kiemtrasoduong.js";
// import { ktchanle } from "./helper/kiemtrachanle.js";
// import { tinhtong } from "./helper/tinhtong.js";    
// tinhtong(5,4,(n)=>{
//     kiemtrasoduong(n);
//     ktchanle(n);
// })
fetch("https://dummyjson.com/products")
    .then((response) => response.json())
    .then(data => {
        // console.log(data);
        const newdata = data.products.map((item) =>{
            return `<li>${item.title}<li>`
        });
        const htmls = newdata.join("");
        const productsList = document.querySelector("#products");
        productsList.innerHTML = htmls;
    });
