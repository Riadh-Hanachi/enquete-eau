// script.js
const sousRegionsData = {
  tunis: ["Bab Bhar", "El Menzah", "La Marsa", "Carthage"],
  sfax: ["Sfax Ville", "Sfax Sud", "Sakiet Ezzit"],
  sousse: ["Sousse Ville", "Akouda", "Hammam Sousse"],
  ariana: ["Ariana Ville", "Soukra", "Raoued"]
  // Compléter avec d'autres régions si nécessaire
};

document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user && pass) {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("questionnaireForm").classList.remove("hidden");
  } else {
    alert("Identifiants requis !");
  }
});

function chargerSousRegions() {
  const region = document.getElementById("region").value;
  const sousRegion = document.getElementById("sousRegion");
  sousRegion.innerHTML = "<option value=''>-- Sélectionnez --</option>";

  if (sousRegionsData[region]) {
    sousRegionsData[region].forEach(sr => {
      const opt = document.createElement("option");
      opt.value = sr;
      opt.textContent = sr;
      sousRegion.appendChild(opt);
    });
  }
}

function afficherChampOrigine() {
  const source = document.getElementById("source").value;
  const origineDiv = document.getElementById("origineEauDiv");
  if (source === "Eau en vrac") {
    origineDiv.classList.remove("hidden");
  } else {
    origineDiv.classList.add("hidden");
  }
}
