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
if (cart.length === 0) {
  titleCartDiv.innerHTML = '<a href="index.html">Ajoutez des articles</a>';
  titleCartDiv.classList.add('mx-auto');
} else {
  titleCartDiv.textContent = 'Articles dans votre panier';
}
resumeCart.appendChild(titleCartDiv);

//Variable montant total panier:
let totalAmmountCart = 0;
let articleNumber = 0;

// -------- Contenu du panier ----------
//Div contenant les articles:
const cartDiv = document.createElement('div');
cartDiv.classList.add('row', 'mb-4');
resumeCart.appendChild(cartDiv);

//Articles: 
for (let i in cart) {
  //Image article:
  const divImage = document.createElement('div');
  divImage.classList.add('col-md-4', 'col-lg-3', 'col-xl-3', 'border-top', 'mt-4', 'px-0');
  cartDiv.appendChild(divImage);

  const imageArticle = document.createElement('img');
  imageArticle.classList.add('float-left', 'rounded', 'mt-4', 'w-75');
  imageArticle.setAttribute('alt', cart[i].cartName);
  imageArticle.src = cart[i].cartImage;
  divImage.appendChild(imageArticle);

  //Nom & varnish article:
  const divName = document.createElement('div');
  divName.classList.add('col-md-7', 'col-lg-9', 'col-xl-9', 'mt-4', 'border-top', 'borderTopGray');
  cartDiv.appendChild(divName);

  const nameArticle = document.createElement('h4');
  nameArticle.classList.add('my-4', 'text-left');
  nameArticle.textContent = cart[i].cartName;
  divName.appendChild(nameArticle);

  const varnishArticle = document.createElement('p');
  varnishArticle.classList.add('text-muted', 'text-left', 'mb-5');
  varnishArticle.textContent = 'Vernis sélectionné: ' + cart[i].cartVarnish;
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
  quantitySelected.textContent = 'Quantité:  \xa0 ' + cart[i].cartQuantity;
  quantitySelected.style.fontSize = '1.5rem';
  quantitySelected.style.border = 'none';
  quantitySelected.value = cart[i].cartQuantity;
  quantityDiv.appendChild(quantitySelected);

  const quantityDecrease = document.createElement('i');
  quantityDecrease.classList.add('btn', 'text-left');
  quantityDecrease.setAttribute('onclick', 'window.location.reload();');
  quantityDecrease.innerHTML = `<i class="fas fa-minus"></i>`;
  quantitySelected.appendChild(quantityDecrease);
  quantityDecrease.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[i].cartQuantity--;
    localStorage.setItem('cart', JSON.stringify(cart))
  });

  const quantityIncrease = document.createElement('i');
  quantityIncrease.classList.add('btn', 'text-left');
  quantityIncrease.setAttribute('onclick', 'window.location.reload();');
  quantityIncrease.innerHTML = `<i class="fas fa-plus"></i>`;
  quantityDiv.appendChild(quantityIncrease);
  quantityIncrease.addEventListener('click', () => {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart[i].cartQuantity++;
    localStorage.setItem('cart', JSON.stringify(cart))
  });

  //Prix article
  const priceArticle = document.createElement('p');
  priceArticle.textContent = cart[i].cartPrice / 100 + ' €';
  priceArticle.classList.add('text-right', 'my-0', 'justify-space-between');
  priceArticle.style.fontSize = '1.5rem';
  quantityDiv.appendChild(priceArticle);

  //Montant total des articles du panier:
  articleNumber = cart[i].cartQuantity;
  totalAmmountCart += cart[i].cartPrice * articleNumber;

  //Conditions si qté = 0:
  if (cart[i].cartQuantity === 0) {
    priceArticle.textContent = 0 + " €";
    quantityDecrease.remove();
  }

}

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
if (cart.length === 0) {
  buttonOk.style.display = 'none';
  cartDiv.hidden = true;
}


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


//Partie pour le mail:
const formDiv2 = document.createElement('div');
formDiv2.classList.add('form-group', 'text-left');
coordonneesBody.appendChild(formDiv2);

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


//Partie pour le nom de famille:
const formDiv0 = document.createElement('div');
formDiv0.classList.add('form-group', 'text-left');
coordonneesBody.appendChild(formDiv0);

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


//Partie pour l'adresse:
const formDiv3 = document.createElement('div');
formDiv3.classList.add('form-group', 'text-left');
coordonneesBody.appendChild(formDiv3);

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


//Partie pour le code postal:
const formDiv4 = document.createElement('div');
formDiv4.classList.add('form-group', 'text-left');
coordonneesBody.appendChild(formDiv4);

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


//Apparition formulaire coordonnées onclick:
buttonOk.addEventListener('click', () => {
  submitDiv.hidden = false;
  submitDiv.scrollIntoView();
})


//Bouton validation formulaire:
const buttonCmd = document.createElement('a');
buttonCmd.classList.add('btn-success', 'text-white', 'rounded', 'text-center', 'p-2');
buttonCmd.href = 'orderSent.html';
buttonCmd.textContent = 'Validez votre commande';
coordonneesBody.appendChild(buttonCmd);



//------------ Stockage données formulaire --------------

let products = [];
let contact;

//Vérification et récupération des input:

buttonCmd.addEventListener('click', () => {
  //RegEx input :
  let maskMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let maskNameAndfirstName = /^[A-Za-z, \-, ]+$/;
  let maskAdressAndCity = /^[0-9a-zA-Z, ]+$/;
  let maskCP = /\d*\.?\d+/;

  //Si RegEx ok:
  if ((maskMail.test(yourMail.value) === true) && (maskNameAndfirstName.test(yourName.value, yourFirstname.value) === true) && (maskAdressAndCity.test(yourAddress.value, yourCity.value) === true) && (maskCP.test(yourPostalCode.value) === true)) {

    //Variables user input:
    contact = {
      firstName: yourFirstname.value,
      lastName: yourName.value,
      address: yourAddress.value,
      cp: yourPostalCode.value,
      city: yourCity.value,
      email: yourMail.value,
    };
    console.log(contact);

    //Articles in cart:
    for (let i in cart) {
      products.push(cart[i].productId);
    };

    contact.push;
    localStorage.setItem('userContact', JSON.stringify(contact));

    console.log(localStorage);

  }


  //LocalStorage contenant datas input et contenu panier:
  let send = {
    contact,
    products,
    totalAmmountCart
  }
  console.log(send);

  //Envoi à l'api:
  const post = async function (data) {
    try {
      /*Execution de la requête GET*/
      let response = await fetch('http://localhost:3000/api/furniture/order', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.ok) {

        let data = await response.json();
        console.log(data.orderId);
        localStorage.setItem("responseOrder", data.orderId);
        window.location = "orderSent.html";
        localStorage.removeItem("cart");

      } else {
        console.error('Retour du serveur : ', response.status);
        alert('Erreur : ' + response.status);
      }
    } catch (error) {
      alert("Erreur : " + error);
    }
  };
  post(send);

});

