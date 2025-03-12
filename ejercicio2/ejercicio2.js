//2.1
let div1 =document.createElement('div');
document.body.appendChild(div1)

//2.2
let div2 = document.createElement('div')
let p2 = document.createElement('p')
p2.textContent = 'Este es un párrafo de un div';
div2.appendChild(p);
document.body.appendChild(div2)


//2.3
let div3 = document.createElement('div')
for (let i=1; i <= 6; i++) {
  let p = document.createElement('p')
  p.textContent = 'Párrafo ${i}';
  div3.appendChild(p)
}

document.body.appendChild(div3)

//2.4
let p4 = document.createElement('p');
p4.textContent = 'Soy dinámico!';
document.body.appendChild(p4);

//2.5
let h2 = document.querySelector('.fn-insert-here');
h2.textContent = 'Wubba Lubba dub dub'

//2.6
const apps = ['Facebook', 'Netflix', 'Instagram','Snapchat','Twitter']
let ul = document.createElement('li')

apps.forEach(app => {
  let li= document.createElement('li')
  li.textContent = app;
  ul.appendChild(li)
});

document.body.appendChild(ul);

//2.7
document.querySelectorAll('.fn-remove-me').forEach(element => element.remove());

//2.8
let pMedio = document.createElement('p')
pMedio.textContent = 'Voy en medio!';

let divs = document.querySelectorAll('div');
document.body.insertBefore(pMedio, divs[1]);

//2.9 
document.querySelectorAll('.fn-insert-here').forEach(div => {
  let pDentro = document.createElement('p');
  pDentro.textContent = 'Voy dentro!';
  div.appendChild(pDentro);
});
