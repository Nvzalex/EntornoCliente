const MAX = 100;
let seguir = true;
for (let i = 0; seguir == true; i++) {
  document.body.innerHTML += "<p>" + i + "</p>";
  if (i == MAX) seguir = false;
}

const MAX2 = 1000;
let seguir2 = true;
for (let i = 900; seguir2 == true; i++) {
  document.body.innerHTML += "<p>" + i + "</p>";
  if (i == MAX2) seguir2 = false;
}
