// script carrusel con splide js
document.querySelectorAll('.splide').forEach((carrusel) => {
  new Splide(carrusel, {
    type: 'loop',
    perPage: 4,
    focus: "center",
    breakpoints: {
      640: {
        perPage: 1,
        focus: "center"
      },
      1024: {
        perPage: 3,
        focus: "center"
      },
    },
  }).mount();
});
//validacion inicio sesion
const iniciarSesion = document.getElementById('iniciar')
iniciarSesion.onclick = function () {
  const email = document.getElementById('email').value;
  const password = document.getElementById('Contraseña').value;
  if (email == '' || password == '') {
    return alert('Rellene los campos por favor')
  }
  if (email == 'admin@gmail.com' && password == '123456') {
    window.location.href = '/Assets/pages/admin.html'
  }
}



