document.getElementById("main-action").onclick = function () {
  document.getElementById("cars").scrollIntoView({behavior:"smooth"})
}

let buttons = document.getElementsByClassName("car-button")
for(i=0; i<buttons.length; i++) {
  buttons[i].onclick = function () {
    document.getElementById("price").scrollIntoView({behavior:"smooth"})
  }
}

document.getElementById("price-action").onclick = function () {
  if (document.getElementById("name").value === "") {
    alert ("Заполните поле имя!")
  } else if (document.getElementById("phone").value === "") {
    alert ("Заполните поле телефон!")
  } else if (document.getElementById("car").value === "") {
    alert ("Заполните поле автомобиль!")
  } else {
    alert ("Спасибо за заявку!")
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let layer = document.querySelector('.price-img');
document.addEventListener('mousemove', (event) => {
      layer.style.transform = 'translate3d(' + ((event.clientX * 0.1) / 8) + 'px,' + ((event.clientY * 0.7) / 8) + 'px,0px)';
});

  const elem = document.querySelector(".main");
document.addEventListener('scroll', () => {
      elem.style.backgroundPositionX = '0' + (1.5 * window.pageYOffset) + 'px';
})
});