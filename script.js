const gred = document.querySelector('.background-page');
const main_page = document.querySelector('.main-page');

document.addEventListener("mousemove", (e) => {
  rotateElement(e, gred);
});

function rotateElement(event, element) {
  // get mouse position
  const x = event.clientX;
  const y = event.clientY;
  // console.log(x, y);

  // find the middle
  const middleX = main_page.offsetWidth / 2;
  const middleY = main_page.offsetHeight / 2;

  // get offset from middle
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;
  console.log(offsetX, offsetY);

  element.style.setProperty("--rotateX", -1 * offsetY + "deg");
  element.style.setProperty("--rotateY", offsetX + "deg");
}

/* Animasi Nama */
const text = "Ida Bagus Maha Indra Prasada, S.Kom".split("");
const text_container = document.querySelector(".text-container");

text.forEach((char, index) => {
  const span = document.createElement("span");
  span.textContent = char;
  span.style.transitionDelay = '${index * 50}ms';
  text_container.appendChild(span);
})

//    +============+
//    | Definition |
//    +============+

var pengertian = document.querySelector("#pengertian");
var tujuan_manfaat = document.querySelector("#tujuan_manfaat");
var ciri2 = document.querySelector("#ciri2");
var struktur = document.querySelector("#struktur");
var kaidah = document.querySelector("#kaidah");

var pengertianButton = document.querySelector("#pengertianButton");
var tujuanManfaatButton = document.querySelector("#tujuanManfaatButton");
var ciriButton = document.querySelector("#ciriButton");
var strukturButton = document.querySelector("#strukturButton");
var kaidahButton = document.querySelector("#kaidahButton");

function pengertianSection() {
  pengertian.classList.add("active");
  pengertianButton.classList.add("active");
  if (
    tujuan_manfaat.classList.contains("active") ||
    ciri2.classList.contains("active") ||
    struktur.classList.contains("active") ||
    kaidah.classList.contains("active")
  ) {
    tujuan_manfaat.classList.remove("active");
    tujuanManfaatButton.classList.remove("active");
    ciri2.classList.remove("active");
    ciriButton.classList.remove("active");
    struktur.classList.remove("active");
    strukturButton.classList.remove("active");
    kaidah.classList.remove("active");
    kaidahButton.classList.remove("active");
  }
}

function tujuanManfaatSection() {
  tujuan_manfaat.classList.add("active");
  tujuanManfaatButton.classList.add("active");
  if (
    pengertian.classList.contains("active") ||
    ciri2.classList.contains("active") ||
    struktur.classList.contains("active") ||
    kaidah.classList.contains("active")
  ) {
    pengertian.classList.remove("active");
    pengertianButton.classList.remove("active");
    ciri2.classList.remove("active");
    ciriButton.classList.remove("active");
    struktur.classList.remove("active");
    strukturButton.classList.remove("active");
    kaidah.classList.remove("active");
    kaidahButton.classList.remove("active");
  }
}

function ciriSection() {
  ciri2.classList.add("active");
  ciriButton.classList.add("active");
  if (
    pengertian.classList.contains("active") ||
    tujuan_manfaat.classList.contains("active") ||
    struktur.classList.contains("active") ||
    kaidah.classList.contains("active")
  ) {
    pengertian.classList.remove("active");
    pengertianButton.classList.remove("active");
    tujuan_manfaat.classList.remove("active");
    tujuanManfaatButton.classList.remove("active");
    struktur.classList.remove("active");
    strukturButton.classList.remove("active");
    kaidah.classList.remove("active");
    kaidahButton.classList.remove("active");
  }
}

function strukturSection() {
  struktur.classList.add("active");
  strukturButton.classList.add("active");
  if (
    pengertian.classList.contains("active") ||
    tujuan_manfaat.classList.contains("active") ||
    ciri2.classList.contains("active") ||
    kaidah.classList.contains("active")
  ) {
    pengertian.classList.remove("active");
    pengertianButton.classList.remove("active");
    tujuan_manfaat.classList.remove("active");
    tujuanManfaatButton.classList.remove("active");
    ciri2.classList.remove("active");
    ciriButton.classList.remove("active");
    kaidah.classList.remove("active");
    kaidahButton.classList.remove("active");
  }
}

function kaidahSection() {
  kaidah.classList.add("active");
  kaidahButton.classList.add("active");
  if (
    pengertian.classList.contains("active") ||
    tujuan_manfaat.classList.contains("active") ||
    ciri2.classList.contains("active") ||
    struktur.classList.contains("active")
  ) {
    pengertian.classList.remove("active");
    pengertianButton.classList.remove("active");
    tujuan_manfaat.classList.remove("active");
    tujuanManfaatButton.classList.remove("active");
    ciri2.classList.remove("active");
    ciriButton.classList.remove("active");
    struktur.classList.remove("active");
    strukturButton.classList.remove("active");
  }
}