//On log le localStorage pr s'assurer qu'il ne contient que le total: 
console.log(localStorage);

//Récupérer orderId ds URL:
let searchParams = new URLSearchParams(window.location.search);

let orderId = searchParams.get("id");

//On récupère le total de la commande:
let total = JSON.parse(localStorage.getItem('total'));
console.log(total);

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

const numberOrder = document.createElement('p');
numberOrder.classList.add('mt-1');
numberOrder.id = 'numberOrder';
numberOrder.textContent = orderId;
numberOrderTitle.appendChild(numberOrder);

const titleTableDiv = document.createElement('div');
cardBodyDiv.appendChild(titleTableDiv);

const titleTable = document.createElement('h4');
titleTable.classList.add('text-left', 'ml-1');
titleTable.textContent = 'Montant de votre commande:';
titleTable.style.fontSize = '1.25rem';
titleTableDiv.appendChild(titleTable);

const ammountOrder = document.createElement('span');
ammountOrder.classList.add('ml-1');
ammountOrder.setAttribute('style', 'white-space: pre');
ammountOrder.textContent = '\r\n' + total + '€';
titleTable.appendChild(ammountOrder);





