document.addEventListener('DOMContentLoaded', () => {
  const albums = [
      "De Mysteriis Dom Sathanas",
      "Reign of Blood",
      "Ride the Lightning",
      "Painkiller",
      "Iron Fist"
  ];

  // Crear la lista UL
  let ul = document.createElement('ul');

  // Recorrer el array y crear un LI por cada álbum
  albums.forEach(album => {
      let li = document.createElement('li');
      li.textContent = album;
      ul.appendChild(li);
  });

  // Insertar la lista en el body
  document.body.appendChild(ul);
});
