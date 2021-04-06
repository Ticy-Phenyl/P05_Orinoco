


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
cardDiv.classList.add('card', 'my-4', 'mx-auto');
divResumeorder.appendChild(cardDiv);

const resumeOrder = document.createElement('h2');
resumeOrder.classList.add('card-header', 'bg-info', 'text-white', 'text-center', 'py-3');
resumeOrder.textContent = 'Récapitulatif de votre commande';
resumeOrder.style.fontSize = '1.5rem';
cardDiv.appendChild(resumeOrder);

//Création card-body et contenu:
const cardBodyDiv = document.createElement('div');
cardBodyDiv.classList.add('card-body', 'bg-light');
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
numberOrder.textContent = '\r\n xxxx----xxxxx';
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

const liTable = document.createElement('li');
liTable.classList.add('list-group-item', 'justify-content-between', 'ml-1', 'd-flex');
liTable.textContent = 'Dining Table';
ulTable.appendChild(liTable);

const liSpan = document.createElement('span');
liSpan.textContent = 1099 + ' €';
liTable.appendChild(liSpan);

const liTable1 = document.createElement('li');
liTable1.classList.add('list-group-item', 'justify-content-between', 'ml-1', 'd-flex');
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
liSpan2.textContent = 1099 + ' €';
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
