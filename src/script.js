import data from './data.json' assert { type: "json" };

var div = document.getElementById('sliders');
var butons = document.getElementById('buttons');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');

var main = document.getElementById('main').style;
main.width = '100%';
main.height = '80vh';
main.display = 'flex';
main.flexDirection = 'column';
main.justifyContent = 'center';
main.alignItems = 'center';

var p = document.createElement('p');
p.setAttribute('title','body');
p.style.textAlign = 'center';


var span = document.createElement('span');
span.setAttribute('title','name');
span.className = 'slide';
span.style.margin = '20px';
span.style.fontSize = '20px';



var img = document.createElement('img');
img.setAttribute('alt','profile')
img.style.width = '150px';
img.style.height = '150px';
img.style.borderRadius = '50%';
img.style.objectFit = 'cover';


var i = 0;
p.appendChild(document.createTextNode(data.slides[i].body.slice(0,200)))
span.appendChild(document.createTextNode(data.slides[i].name));
img.setAttribute('src',data.slides[i].img)


btn.addEventListener('click',() => {
    i < 3 ? i = i + 1 : i = 0
    span.innerText = data.slides[i === 3 ? 3 : i].name;
    p.innerText = data.slides[i === 3 ? 3 : i].body.slice(0,200);
    img.setAttribute('src',data.slides[i === 3 ? 3 : i].img)
});


btn2.addEventListener('click',() => {
    i < 3 ? i = i + 1 : i = 0
    span.innerText = data.slides[i === 3 ? 3 : i].name;
    p.innerText = data.slides[i === 3 ? 3 : i].body.slice(0,200);
    img.setAttribute('src',data.slides[i === 3 ? 3 : i].img)

});

div.appendChild(img);
div.appendChild(span);
div.appendChild(p);


for (let i = 0; i < butons.children.length; i++) {
    butons.children[i].style.border = 'none'
    butons.children[i].style.outline = 'none'
    butons.children[i].style.fontSize = '20px'
    butons.children[i].style.color = 'white'
    butons.children[i].style.background = 'black';
    butons.children[i].style.margin = '0px 10px';
    butons.children[i].style.width = '50px';
    butons.children[i].style.height = '34px';
    butons.children[i].style.borderRadius = '1px';
    butons.children[i].style.cursor = 'pointer';
}