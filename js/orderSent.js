console.log(localStorage);
let cart = localStorage.cart;
console.log(cart);
let contact = JSON.parse(localStorage.getItem('userContact'));
let orderId = localStorage.orderId;
console.log(orderId);
let i = 0;
let articleNumber = 0;
articleNumber += cart[i].cartQuantity;
let totalAmmountCart = 0;



//Contenu titre page:
const thanksTitle = document.getElementById('title');
thanksTitle.textContent = 'Merci pour votre commande';


//--------- Card du récapitulatif de commande:
//Création card et titre:
const enterPoint = document.getElementById('orderConfirmation');

const divResumeorder = document.createElement('section')
divResumeorder.classList.add('mx-auto', 'w-50');
enterPoint.appendChild(divResumeorder);

const cardDiv = document.createElement('div');
cardDiv.classList.add('card', 'rounded', 'my-4', 'mx-auto');
divResumeorder.appendChild(cardDiv);

const resumeOrder = document.createElement('h2');
resumeOrder.classList.add('card-header', 'bg-info', 'text-white', 'text-center', 'py-3');
resumeOrder.textContent = 'Récapitulatif de votre commande';
resumeOrder.style.fontSize = '1.5rem';
cardDiv.appendChild(resumeOrder);

//Création card-body et contenu:
const cardBodyDiv = document.createElement('div');
cardBodyDiv.classList.add('card-body', 'rounded', 'bg-light');
cardDiv.appendChild(cardBodyDiv);

const numberOrderDiv = document.createElement('div');
numberOrderDiv.classList.add('mb-4', 'px-2', 'rounded', 'py-1');
numberOrderDiv.style.backgroundColor = '#e9ecef';
cardBodyDiv.appendChild(numberOrderDiv);

const numberOrderTitle = document.createElement('h3');
numberOrderTitle.classList.add('text-left', 'ml-1');
numberOrderTitle.textContent = 'Votre numéro de commande:';
numberOrderDiv.appendChild(numberOrderTitle);

const numberOrder = document.createElement('span');
numberOrder.classList.add('ml-1');
numberOrder.setAttribute('style', 'white-space: pre;');
numberOrder.textContent = '\r\n' + orderId;
numberOrderTitle.appendChild(numberOrder);

const titleTableDiv = document.createElement('div');
cardBodyDiv.appendChild(titleTableDiv);

const titleTable = document.createElement('h4');
titleTable.classList.add('text-left', 'ml-1');
titleTable.textContent = 'Contenu de votre commande:';
titleTable.style.fontSize = '1.25rem';
titleTableDiv.appendChild(titleTable);

const ulTable = document.createElement('ul');
ulTable.classList.add('list-group', 'list-group-flush')
cardBodyDiv.appendChild(ulTable);

//Nom & prix pr chaque article du panier:
for (i in cart) {
    const liTable = document.createElement('li');
    liTable.classList.add('list-group-item', 'justify-content-between', 'ml-1', 'd-flex');
    liTable.textContent = cart[i].cartQuantity + ' \r\n' + cart[i].cartName;
    ulTable.appendChild(liTable);

    const liSpan = document.createElement('span');
    liSpan.textContent = cart[i].cartPrice * cart[i].cartQuantity / 100 + ' €';
    liTable.appendChild(liSpan);

    totalAmmountCart += cart[i].cartPrice / 100;
}

const liTable1 = document.createElement('li');
liTable1.classList.add('list-group-item', 'text-muted', 'justify-content-between', 'ml-1', 'd-flex');
liTable1.textContent = 'Frais de port';
ulTable.appendChild(liTable1);

const liSpan1 = document.createElement('span');
liSpan1.textContent = 'Offert';
liTable1.appendChild(liSpan1);

const liTable2 = document.createElement('li');
liTable2.classList.add('list-group-item', 'justify-content-between', 'ml-1', 'd-flex', 'font-weight-bold');
liTable2.textContent = 'Total';
ulTable.appendChild(liTable2);

const liSpan2 = document.createElement('span');
liSpan2.classList.add('font-weight-bold');
liSpan2.textContent += totalAmmountCart + ' €';
liTable2.appendChild(liSpan2);


//Partie coordonnées: 
const coordonneesDiv = document.createElement('div');
coordonneesDiv.classList.add('mt-1', 'px-2', 'rounded', 'py-1');
coordonneesDiv.style.backgroundColor = '#e9ecef';
cardBodyDiv.appendChild(coordonneesDiv)

const coordonneesTitle = document.createElement('h5');
coordonneesTitle.classList.add('text-left', 'ml-1');
coordonneesTitle.style.fontSize = '1.25rem';
coordonneesTitle.textContent = 'Vos coordonnées:';
coordonneesDiv.appendChild(coordonneesTitle)

//Paragraphes contenant valeurs input user:
const pNameFirstName = document.createElement('p');
pNameFirstName.classList.add('mx-3', 'mb-0', 'text-left', 'mt-2');
pNameFirstName.textContent = contact.lastName + ' ' + contact.firstName;
cardBodyDiv.appendChild(pNameFirstName);

const pAddress = document.createElement('p');
pAddress.classList.add('mx-3', 'mb-0', 'text-left', 'mt-n1');
pAddress.textContent = contact.address;
cardBodyDiv.appendChild(pAddress);

const pCpCity = document.createElement('p');
pCpCity.classList.add('mx-3', 'mb-0', 'text-left', 'mt-n1');
pCpCity.textContent = contact.cp + ' ' + contact.city;
cardBodyDiv.appendChild(pCpCity);

const pMail = document.createElement('p');
pMail.classList.add('mx-3', 'mb-0', 'text-left', 'mt-3');
pMail.textContent = contact.email;
cardBodyDiv.appendChild(pMail);

localStorage.clear()



