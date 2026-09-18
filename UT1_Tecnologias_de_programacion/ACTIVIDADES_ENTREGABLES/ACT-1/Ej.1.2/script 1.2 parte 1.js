const MAX = 100;
let seguir = true;
for (let i = 1; seguir == true; i++) {
  document.body.innerHTML += "<p>" + i + "</p>";
  if (i == MAX) seguir = false;
}
