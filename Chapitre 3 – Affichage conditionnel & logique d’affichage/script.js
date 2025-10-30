let produits = [
    { nom: "PC portable", prix: 900 },
    { nom: "Souris", prix: 25 },
    { nom: "Clavier", prix: 40 },
    { nom: "Écran", prix: 150 }
  ];
  
  let liste = document.getElementById("produits");
  
  // Filtrer les produits à moins de 100€
  let produitsFiltres = produits.filter(p => p.prix < 100);
  
  // Si aucun produit ne correspond, afficher un message
  if (produitsFiltres.length === 0) {
    liste.innerHTML = "<li>Aucun produit en promotion.</li>";
  } else {
    produitsFiltres.forEach(p => {
      let li = document.createElement("li");
      li.textContent = `${p.nom} – ${p.prix} €`;
      liste.appendChild(li);
    });
  }
  let produits2 = [
    {nome : "pc portable" , prix: 282 },
    {nome : "souris" , prix : 23},
    {nome : "clavier" , prix},
    {nome : "rcran" , prix} ,
  ];
  let liste2 = document.getElementById("produits");
   if(produitsfiltres.length === 0) {
    liste.innerHTML = "<li>aucun produit en promotion.</li>";
   }


  