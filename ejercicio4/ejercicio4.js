document.addEventListener('DOMContentLoaded', () => {
  // 1.1 Crear un botón con id 'btnToClick' y agregar evento 'click'
  let button = document.createElement('button');
  button.id = 'btnToClick';
  button.textContent = 'Haz click aquí';
  document.body.appendChild(button);

  button.addEventListener('click', (event) => {
      console.log('Evento de click:', event);
  });

  // 1.2 Evento 'focus' en el input con clase 'focus'
  let focusInput = document.querySelector('.focus');
  focusInput.addEventListener('focus', (event) => {
      console.log('Valor del input en focus:', event.target.value);
  });

  // 1.3 Evento 'input' en el input con clase 'value'
  let valueInput = document.querySelector('.value');
  valueInput.addEventListener('input', (event) => {
      console.log('Valor actual del input:', event.target.value);
  });
});
