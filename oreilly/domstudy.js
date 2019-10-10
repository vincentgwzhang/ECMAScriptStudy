// https://learning.oreilly.com/videos/modern-javascript-from/9781789539509/9781789539509-video3_2

let val;
val = document;

val = document.all;
val = document.all[2];
val = document.head;
val = document.body;
val = document.doctype;
val = document.URL;
val = document.contentType;
val = document.forms.length;
val = document.links;
val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].getAttribute("src");

let scripts = document.scripts;

let scriptsArray = Array.from(scripts);
scriptsArray.forEach(function (script) {
    console.log(script);
});
console.log(typeof scripts);