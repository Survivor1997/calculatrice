const affichage = document.querySelector("#ecran");
const boutons = document.querySelectorAll(
  ".chiffres button:not(#parenthese,#pourcent,#effacerLeDernier,#effacerTout)"
);
for (let i = 0; i < boutons.length; i++) {
  boutons[i].addEventListener("click", function () {
    affichage.textContent += boutons[i].textContent;
  });
}
const operation = document.querySelectorAll(".operation button:not(#egal)");
for (let i = 0; i < operation.length; i++) {
  operation[i].addEventListener("click", function () {
    affichage.textContent += operation[i].textContent;
  });
}
const reponse = document.getElementById("egal");
reponse.addEventListener("click", function () {
  let expression = affichage.textContent;
  console.log("Expression :", JSON.stringify(expression));
  if (expression === "") return;
  try {
    let resultat = eval(expression);
    affichage.textContent = resultat;
  } catch (error) {
    affichage.textContent = "Erreur";
  }
});
const cleanAll = document.getElementById("effacerTout");
cleanAll.addEventListener("click", function () {
  affichage.textContent = "";
});

const percent = document.getElementById("pourcent");
percent.addEventListener("click", function () {
  affichage.textContent = Number(affichage.textContent) / 100;
});
const clean = document.getElementById("effacerLeDernier");
clean.addEventListener("click", function () {
  affichage.textContent = affichage.textContent.slice(0, -1);
});
let openParenthe = true;
const parenth = document.getElementById("parenthese");
parenth.addEventListener("click", function () {
  if (openParenthe) {
    affichage.textContent += "(";
    openParenthe = false;
  } else {
    affichage.textContent += ")";
    openParenthe = true;
  }
});
