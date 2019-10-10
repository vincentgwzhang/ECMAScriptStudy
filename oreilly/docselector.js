// https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video3_3

console.log(document.getElementById("h5id"));
console.log(document.getElementById("h5id").id);
console.log(document.getElementById("h5id").className);

const h5tag = document.getElementById("h5id");

h5tag.style.background = "#333";
h5tag.style.color = "white";
//h5tag.style.display = "none";
h5tag.innerText = "test";
h5tag.innerHTML = "<span style='color:red'>Vincent test</span>";

// console.log(document.querySelector("#h5id"));

// document.querySelector("li").style.color='red';//only find the first
// document.querySelector("ul li").style.color='red';//only find the first
// document.querySelector("li:last-child").style.color='red';
// document.querySelector("li:nth-child(3)").style.color='red';
// document.querySelector("ul li:nth-child(4)").textContent = "Hello world";
// document.querySelector("li:nth-child(odd)").style.color='red';//only find the first
// document.querySelector("li:nth-child(even)").style.color='red';//only find the first