// Je séléctionne et stocke
const switchBox = document.querySelector(".switch");
const btn = document.querySelector(".btn");
const icone = document.querySelector("i");
const container = document.querySelector(".container");
const titre = document.querySelector("h1");

// Je soumets la div switch à une action au clic
switchBox.addEventListener("click", function () {
  // Je déplace le cercle
  btn.classList.toggle("btn-change");
  // Je déplace l'icone'
  icone.classList.toggle("icone-change");
  // Je change l'icone
  icone.classList.toggle("fa-moon"); // Je désactive la classe "fa-moon"
  icone.classList.toggle("fa-sun"); // J'ajoute et active la classe "fa-sun"
  // Je change la couleur de fond du container
  container.classList.toggle("container-change");
  // Je change la couleur de fond du switch
  switchBox.classList.toggle("switch-change");

  // Je modifie le texte du titre
  if (titre.innerText === "Dark mode") {
    titre.innerText = "Light mode";
  } else {
    titre.innerText = "Dark mode";
  }
});
