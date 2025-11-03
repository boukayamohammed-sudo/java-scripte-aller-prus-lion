let produits = [
    { nom: "PC portable", prix: 900, image: "https://linksolutions.ma/wp-content/uploads/2024/12/ordinateur-portable-hp-laptop-15-fd0315nk-i3-1315u-8gb-256gb-w11-sku-b63kxea-linksolutions.webp" },
    { nom: "Clavier mécanique", prix: 45, image: "https://www.leparisien.fr/resizer/jLdJ7iw15I_p5VA9ox-pEgHabPo=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/lpguideshopping/FEFWJJBK55A5Y32HBZHBBXHVZM.jpg" },
    { nom: "Souris sans fil", prix: 25, image: "https://www.cdiscount.com/pdt2/7/3/5/1/700x700/dor9331538407735/rw/souris-sans-fil-rechargeable-souris-bluetooth-ecl.jpg" },
  ];
  let catalogue = document.getElementById("catalogue");
  
  produits.forEach(p => {
    let carte = document.createElement("div");
    carte.className = "carte";
    carte.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <h3>${p.nom}</h3>
      <p>Prix : ${p.prix} €</p>
    `;
    catalogue.appendChild(carte);
  });
  