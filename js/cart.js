//Setup localStorage:
if (!localStorage.getItem('cart')) {
  localStorage.setItem('cart', JSON.stringify([]));
};

//Récupérer contenu localStorage: 
let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);

//Affichage contenu h1 #title :
let titleDiv = document.getElementById('title');
if (cart.length === 0) {
  titleDiv.textContent = 'Votre panier est vide';
} else if (cart.length === 1) {
  titleDiv.textContent = 'Voici votre article :';
} else {
  titleDiv.textContent = 'Voici vos articles :';
};

//Création section panier où vont figurer les articles:
const resumeCart = document.getElementById('resumeCart');
resumeCart.classList.add('col-lg', 'mb-2', 'pt-4', 'ml-2');
//"Titre" du panier:
const titleCartDiv = document.createElement('h2');
titleCartDiv.classList.add('mb-1', 'text-center');

//H2 selon si articles dans le panier: 
/*if (cart.length === 0) {
 
  
} else {
  titleCartDiv.textContent = 'Articles dans votre panier';
}*/
resumeCart.appendChild(titleCartDiv);

//Variable montant total panier:
let totalAmmountCart = 0;
let articleNumber = 1;
let article;
let articlePrice;
//let tableau = [];
let ttotal;
let montantParArticle = [];
let totalArticle;
let totttal;

// -------- Contenu du panier ----------
//Div contenant les articles:
const cartDiv = document.createElement('div');
cartDiv.classList.add('row', 'mb-4');
resumeCart.appendChild(cartDiv);

//Articles: 
for (let i in cart) {

  article = cart[i];
  articlePrice = cart[i].price;
  totalArticle = cart[i].price * cart[i].quantity;

  //Div article:
  const divArticle = document.createElement('div');
  cartDiv.appendChild(divArticle);


  //Image article:
  const divImage = document.createElement('div');
  divImage.classList.add('col-md-4', 'col-lg-3', 'col-xl-3', 'border-top', 'mt-4', 'px-0');
  cartDiv.appendChild(divImage);

  const imageArticle = document.createElement('img');
  imageArticle.classList.add('float-left', 'rounded', 'mt-4', 'w-75');
  imageArticle.setAttribute('alt', article.name);
  imageArticle.src = article.imageUrl;
  divImage.appendChild(imageArticle);


  //Nom, varnish et btn suppression article:
  const divName = document.createElement('div');
  divName.classList.add('col-md-7', 'col-lg-9', 'col-xl-9', 'mt-4', 'border-top', 'borderTopGray');
  cartDiv.appendChild(divName);

  const removeArticle = document.createElement('button');
  removeArticle.classList.add('close', 'float-right', 'mt-2');
  removeArticle.innerHTML = '<i class="fas fa-trash-alt"></i>';
  divName.appendChild(removeArticle);

  const nameArticle = document.createElement('h4');
  nameArticle.classList.add('my-4', 'text-left');
  nameArticle.textContent = article.name;
  divName.appendChild(nameArticle);

  const varnishArticle = document.createElement('p');
  varnishArticle.classList.add('text-muted', 'text-left', 'mb-5');
  varnishArticle.textContent = 'Vernis sélectionné: ' + article.varnish;
  divName.appendChild(varnishArticle);

  const divQtyetPrice = document.createElement('div');
  divQtyetPrice.classList.add('border-primary')
  divName.appendChild(divQtyetPrice);


  //Boutons quantité article:
  const quantityDiv = document.createElement('div');
  quantityDiv.classList.add('text-left', 'justify-space-between',);
  quantityDiv.name = 'quantity';
  quantityDiv.classList.add('mt-n5');
  quantityDiv.setAttribute('onkeypress', 'return false');
  divQtyetPrice.appendChild(quantityDiv);

  const quantitySelected = document.createElement('span');
  quantitySelected.classList.add('text-center');
  quantitySelected.textContent = 'Quantité:  \xa0 ' + article.quantity;
  quantitySelected.style.fontSize = '1.5rem';
  quantitySelected.style.border = 'none';
  quantitySelected.value = article.quantity;
  quantityDiv.appendChild(quantitySelected);

  const quantityDecrease = document.createElement('i');
  quantityDecrease.classList.add('btn', 'text-left');
  quantityDecrease.setAttribute('onclick', 'window.location.reload();');
  quantityDecrease.innerHTML = `<i class="fas fa-minus"></i>`;
  quantitySelected.appendChild(quantityDecrease);
  quantityDecrease.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[i].quantity--;
    localStorage.setItem('cart', JSON.stringify(cart))
  });

  const quantityIncrease = document.createElement('i');
  quantityIncrease.classList.add('btn', 'text-left');
  quantityIncrease.setAttribute('onclick', 'window.location.reload();');
  quantityIncrease.innerHTML = `<i class="fas fa-plus"></i>`;
  quantitySelected.appendChild(quantityIncrease);
  quantityIncrease.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[i].quantity++;
    localStorage.setItem('cart', JSON.stringify(cart))
  });


  //Prix article
  const priceArticle = document.createElement('p');
  priceArticle.textContent = article.price / 100 + ' €';
  priceArticle.classList.add('text-right', 'my-0', 'justify-space-between');
  priceArticle.style.fontSize = '1.5rem';
  quantityDiv.appendChild(priceArticle);





  //Montant total des articles du panier:
  articleNumber = article.quantity;
  totalAmmountCart += articlePrice * articleNumber;


  console.log(articlePrice / 100);
  console.log(articleNumber);
  console.log(totalArticle / 100);
  console.log(totalAmmountCart / 100);


  //Conditions si qté = 0:
  if (article.quantity == 0) {
    priceArticle.textContent = 0 + " €";
    quantityDecrease.remove();
  }

  //Suppression article au clic:
  removeArticle.addEventListener('click', () => {
    divImage.remove();
    divName.remove();

    let cart = JSON.parse(localStorage.getItem('cart'));



    let index = cart.findIndex(newItem => newItem.price === cart[i].price);
    console.log(cart[index]);

    if (index !== -1) {
      localStorage.removeItem(cart[i]);
    }








    totttal = totalAmmountCart - cart[i].price;

    console.log(totalAmmountCart / 100);
    console.log(cart[i].price / 100);
    console.log(totttal / 100);


    console.log(cart[i]);







    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);





  });

  console.log(cart);



}

/*let totall = [];

for (let m = 0; m < cart.length; m++) {
  totalAmmountCart = cart[m].price;

  totall.push(totalAmmountCart);
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(reducer);
const prixFinal = totall.reduce(reducer, 0);
console.log(prixFinal / 100);

*/


//Total du panier: 
const totalCartDiv = document.createElement('ul');
totalCartDiv.classList.add('d-inline', 'w-100', 'border-top', 'border-bottom', 'py-2', 'mt-3');
cartDiv.appendChild(totalCartDiv);

const totalCart = document.createElement('li');
totalCart.classList.add('justify-content-between', 'd-flex', 'font-weight-bold');
totalCart.style.fontSize = '1.6rem';
totalCart.textContent = 'Total panier';
totalCartDiv.appendChild(totalCart);

const ammountCart = document.createElement('span')
ammountCart.classList.add('font-weight-bold', 'mr-3');
ammountCart.textContent = totalAmmountCart / 100 + ' €';
totalCart.appendChild(ammountCart);

//Bouton validation panier:
const buttonOk = document.createElement('button');
buttonOk.classList.add('btn-success', 'text-white', 'rounded', 'offset-10', 'p-2', 'my-3', 'mr-2');
buttonOk.setAttribute('id', 'validBtn');
buttonOk.textContent = 'Validez votre panier';
cartDiv.appendChild(buttonOk);



// --------- Formulaire validation commande ---------
//Section contenant le formulaire:
const submitDiv = document.createElement('section');
submitDiv.classList.add('mx-auto');
submitDiv.hidden = true;
resumeCart.appendChild(submitDiv);

const colDiv = document.createElement('div', 'text-center');
colDiv.classList.add('col-lg', 'mx-auto');
submitDiv.appendChild(colDiv);

const cardDiv = document.createElement('div');
cardDiv.classList.add('card', 'my-4');
colDiv.appendChild(cardDiv);

const coordonneesTitle = document.createElement('h3');
coordonneesTitle.classList.add('card-header', 'bg-info', 'text-white', 'text-center', 'py-3');
coordonneesTitle.textContent = 'Vos coordonnées';
cardDiv.appendChild(coordonneesTitle);

const coordonneesBody = document.createElement('div');
coordonneesBody.classList.add('card-body');
cardDiv.appendChild(coordonneesBody);

const formBody = document.createElement('form');
coordonneesBody.appendChild(formBody);


//Partie pour le mail:
const maskMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const formDiv2 = document.createElement('div');
formDiv2.classList.add('form-group', 'text-left');
formBody.appendChild(formDiv2);

const votreMail = document.createElement('label')
votreMail.htmlFor = 'mail';
votreMail.textContent = 'Votre mail:'
formDiv2.appendChild(votreMail);

const yourMail = document.createElement('input');
yourMail.classList.add('form-control', 'my-2');
yourMail.id = 'mail';
yourMail.type = 'text';
yourMail.placeholder = 'Lightning@chocolatelab.jp';
yourMail.required = true;
votreMail.appendChild(yourMail);

//Si mail incorrect:
const correctMail = document.createElement('p');
correctMail.classList.add('text-danger');
correctMail.style.visibility = 'hidden';
correctMail.textContent = 'Merci de renseigner votre mail';
votreMail.appendChild(correctMail);
yourMail.addEventListener('focusout', () => {
  if ((maskMail.test(yourMail.value) != true) || (yourMail.value === '')) {
    correctMail.style.visibility = 'visible';
  } else {
    correctMail.style.visibility = 'hidden';
  }
});


//Partie pour le nom de famille:
const maskNameAndfirstName = /^[A-Za-z, \-, ]+$/;
const formDiv0 = document.createElement('div');
formDiv0.classList.add('form-group', 'text-left');
formBody.appendChild(formDiv0);

const votreNom = document.createElement('label')
votreNom.htmlFor = 'lastName';
votreNom.textContent = 'Votre nom:'
formDiv0.appendChild(votreNom);

const yourName = document.createElement('input');
yourName.classList.add('form-control', 'my-2');
yourName.id = 'lastName';
yourName.minLength = 2;
yourName.type = 'text';
yourName.placeholder = 'Entrez votre nom';
yourName.required = true;
votreNom.appendChild(yourName);

//Si nom incorrect:
const correctName = document.createElement('p');
correctName.classList.add('text-danger');
correctName.style.visibility = 'hidden';
correctName.textContent = 'Merci de renseigner votre nom';
votreNom.appendChild(correctName);
yourName.addEventListener('focusout', () => {
  if ((maskNameAndfirstName.test(yourName.value) != true) || (yourName.value === '')) {
    correctName.style.visibility = 'visible';
  } else {
    correctName.style.visibility = 'hidden';
  }
});


//Partie pour le prénom:
const votrePrenom = document.createElement('label')
votrePrenom.classList.add('ml-2');
votrePrenom.htmlFor = 'firstName';
votrePrenom.textContent = 'Votre prénom:'
formDiv0.appendChild(votrePrenom);

const yourFirstname = document.createElement('input');
yourFirstname.classList.add('form-control', 'my-2');
yourFirstname.id = 'firstName';
yourFirstname.minLength = 2;
yourFirstname.type = 'text';
yourFirstname.placeholder = 'Entrez votre prénom';
yourFirstname.required = true;
votrePrenom.appendChild(yourFirstname);

//Si prénom incorrect:
const correctFirstName = document.createElement('p');
correctFirstName.classList.add('text-danger');
correctFirstName.style.visibility = 'hidden';
correctFirstName.textContent = 'Merci de renseigner votre prénom';
votrePrenom.appendChild(correctFirstName);
yourFirstname.addEventListener('focusout', () => {
  if ((maskNameAndfirstName.test(yourFirstname.value) != true) || (yourFirstname.value === '')) {
    correctFirstName.style.visibility = 'visible';
  } else {
    correctFirstName.style.visibility = 'hidden';
  }
})


//Partie pour l'adresse:
const maskAdressAndCity = /^[0-9a-zA-Z, ]+$/;
const formDiv3 = document.createElement('div');
formDiv3.classList.add('form-group', 'text-left');
formBody.appendChild(formDiv3);

const votreAdresse = document.createElement('label');
votreAdresse.htmlFor = 'adresse';
votreAdresse.textContent = 'Votre adresse:';
formDiv3.appendChild(votreAdresse);

const yourAddress = document.createElement('input');
yourAddress.classList.add('form-control', 'my-2');
yourAddress.id = 'address';
yourAddress.type = 'text';
yourAddress.placeholder = '17, rue de la Gloire';
yourAddress.required = true;
votreAdresse.appendChild(yourAddress);

//Si adresse incorrecte:
const correctedAddress = document.createElement('p');
correctedAddress.classList.add('text-danger');
correctedAddress.style.visibility = 'hidden';
correctedAddress.textContent = 'Merci de renseigner votre adresse';
votreAdresse.appendChild(correctedAddress);
yourAddress.addEventListener('focusout', () => {
  if ((maskAdressAndCity.test(yourAddress.value) != true) || (yourAddress.value === '')) {
    correctedAddress.style.visibility = 'visible';
  } else {
    correctedAddress.style.visibility = 'hidden';
  }
})


//Partie pour le code postal:
let maskCP = /\d*\.?\d+/;
const formDiv4 = document.createElement('div');
formDiv4.classList.add('form-group', 'text-left');
formBody.appendChild(formDiv4);

const votreCodePostal = document.createElement('label');
votreCodePostal.htmlFor = 'code Postal';
votreCodePostal.textContent = 'Votre Code Postal:';
formDiv4.appendChild(votreCodePostal);

const yourPostalCode = document.createElement('input');
yourPostalCode.classList.add('form-control', 'my-2', 'w-50');
yourPostalCode.id = 'postalCode';
yourPostalCode.placeholder = 'Code Postal';
yourPostalCode.minLength = 5;
yourPostalCode.maxLength = 5;
yourPostalCode.required = true;
votreCodePostal.appendChild(yourPostalCode);

//Si CP incorrect:
const correctCP = document.createElement('p');
correctCP.classList.add('text-danger');
correctCP.style.visibility = 'hidden';
correctCP.textContent = 'Merci de renseigner votre code postal';
votreCodePostal.appendChild(correctCP);
yourPostalCode.addEventListener('focusout', () => {
  if ((maskCP.test(yourPostalCode.value) != true) || (yourPostalCode.value === '')) {
    correctCP.style.visibility = 'visible';
  } else {
    correctCP.style.visibility = 'hidden';
  }
})


//Partie pour la ville:
const votreVille = document.createElement('label');
votreVille.classList.add('ml-2');
votreVille.htmlFor = 'city';
votreVille.textContent = 'Votre Ville:';
formDiv4.appendChild(votreVille);

const yourCity = document.createElement('input');
yourCity.classList.add('form-control', 'my-2');
yourCity.id = 'city';
yourCity.type = 'text';
yourCity.placeholder = 'Ville';
yourCity.required = true;
votreVille.appendChild(yourCity);

//Si ville incorrecte:
const correctCity = document.createElement('p');
correctCity.classList.add('text-danger');
correctCity.style.visibility = 'hidden';
correctCity.textContent = 'Merci de renseigner votre adresse';
votreVille.appendChild(correctCity);
yourCity.addEventListener('focusout', () => {
  if ((maskAdressAndCity.test(yourCity.value) != true) || (yourCity.value === '')) {
    correctCity.style.visibility = 'visible';
  } else {
    correctCity.style.visibility = 'hidden';
  }
})


//Apparition formulaire coordonnées onclick:
buttonOk.addEventListener('click', () => {
  submitDiv.hidden = false;
  submitDiv.scrollIntoView();
})


//Bouton validation formulaire:
const buttonCmd = document.createElement('a');
buttonCmd.classList.add('btn', 'btn-success', 'text-white', 'rounded', 'text-center', 'p-2');

buttonCmd.textContent = 'Validez votre commande';
coordonneesBody.appendChild(buttonCmd);



//------------ Stockage données formulaire --------------



//Vérification et récupération des input:

buttonCmd.addEventListener('click', () => {

  let product = [];
  //Articles in cart:
  product.push(cart);


  //Variables user input:
  const cmde = {
    contact: {
      firstName: yourFirstname.value,
      lastName: yourName.value,
      address: yourAddress.value,
      city: yourCity.value,
      email: yourMail.value,
    },
    products: product
  };
  console.log(cmde);

  //Headers requête:
  const options = {
    method: "POST",
    body: JSON.stringify(cmde),
    headers: { "Content-Type": "application/json" },
  };


  // Envoi de la requête et stockage items pr conf cmde:
  fetch("http://localhost:3000/api/furniture/order", options)
    .then((response) => response.json())
    .then((data) => {
      localStorage.clear();
      console.log(data)
      localStorage.setItem("orderId", data.orderId);
      localStorage.setItem("total", totalAmmountCart / 100);

      //OrderId présent ds url page confirmation:
      buttonCmd.href = 'orderSent.html?id=' + data.orderId;
      localStorage.removeItem("orderId");
    })
    .catch((error) => {
      alert("Erreur : " + error);
    });

});
