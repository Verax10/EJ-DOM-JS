document.addEventListener('DOMContentLoaded', () => {
  // 1.1 Crear una lista ul > li a partir del array countries
  const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
  let ul = document.createElement('ul');
  countries.forEach(country => {
      let li = document.createElement('li');
      li.textContent = country;
      ul.appendChild(li);
  });
  document.body.appendChild(ul);

  // 1.2 Eliminar el elemento con la clase .fn-remove-me
  document.querySelector('.fn-remove-me').remove();

  // 1.3 Crear una lista ul > li dentro del div con data-function="printHere"
  const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
  let div = document.querySelector('[data-function="printHere"]');
  let ulCars = document.createElement('ul');
  cars.forEach(car => {
      let li = document.createElement('li');
      li.textContent = car;
      ulCars.appendChild(li);
  });
  div.appendChild(ulCars);

  // 1.4 Crear dinámicamente divs con h4 y img
  const imageCountries = [
      { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
      { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
      { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
      { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
      { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
  ];
  imageCountries.forEach(country => {
      let div = document.createElement('div');
      let h4 = document.createElement('h4');
      let img = document.createElement('img');
      h4.textContent = country.title;
      img.src = country.imgUrl;
      div.appendChild(h4);
      div.appendChild(img);
      document.body.appendChild(div);
  });

  // 1.5 Crear un botón que elimine el último div
  let button = document.createElement('button');
  button.textContent = 'Eliminar último';
  document.body.appendChild(button);

  button.addEventListener('click', () => {
      let divs = document.querySelectorAll('body > div');
      if (divs.length > 0) {
          divs[divs.length - 1].remove();
      }
  });

  // 1.6 Crear un botón en cada div para eliminar ese div específico
  imageCountries.forEach(country => {
      let div = document.createElement('div');
      let h4 = document.createElement('h4');
      let img = document.createElement('img');
      let btn = document.createElement('button');
      h4.textContent = country.title;
      img.src = country.imgUrl;
      btn.textContent = 'Eliminar';
      btn.addEventListener('click', () => div.remove());
      div.appendChild(h4);
      div.appendChild(img);
      div.appendChild(btn);
      document.body.appendChild(div);
  });
});
