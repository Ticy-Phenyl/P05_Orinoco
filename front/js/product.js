//Déclaration url API :
const url = "http://localhost:3000/api/furniture/";


//Récupérer url:
let searchParams = new URLSearchParams(window.location.search);
//Récupérer id du produit:
let productId = searchParams.get("id");
console.log(productId);

//Variables utilisées pour constituer la page + ajout class: 
let productCard = document.getElementById("product");
productCard.classList.add('card', 'shadow-lg', 'border-light', 'col-10', 'col-mb-3', 'mx-auto', 'text-center');

let titleDiv = document.getElementById("productTitle");
titleDiv.classList.add('text-center');

let imageDiv = document.getElementById("imgSelected");
imageDiv.classList.add('rounded', 'my-3', 'mx-auto', 'w-75');

let descriptionDiv = document.getElementById("dscrptnSelected");
descriptionDiv.classList.add('text-left', 'mx-2', 'mb-4');

let priceDiv = document.getElementById("prcSelected");
priceDiv.classList.add('mb-3');

let varnishDiv = document.getElementById('vrnshSelected');
varnishDiv.classList.add('w-25', 'mx-auto', 'my-4', 'custom-select', 'text-secondary');

let btnAdd = document.getElementById("addToCart");
btnAdd.classList.add('btn', 'btn-secondary', 'text-white', 'rounded', 'w-45', 'mx-auto', 'my-4', 'py-1');
btnAdd.innerHTML = 'Ajoutez au panier ' + '&nbsp' + `<i class="fas fa-cart-plus"></i>`;
btnAdd.style.fontSize = '1.5rem';

let btnToCart = document.getElementById("goToCart");
btnToCart.classList.add('btn', 'btn-secondary', 'text-white', 'rounded', 'w-45', 'mx-auto', 'my-4', 'py-1');
btnToCart.innerHTML = 'Allez au panier ' + '&nbsp' + `<i class="fas fa-cart-arrow-down"></i>`;
btnToCart.style.fontSize = '1.5rem';


//Appel API:
async function result(url) {
    let result = await fetch(url);
    return result.json();
}

//Affichage produit:
result(url + "/" + productId).then(product => {

    console.log(product);

    //Définition title:
    let productName = product.name;
    titleDiv.textContent = 'Personnalisez votre ' + productName + '.';

    //Si pas d'article sélectionné:
    if (productName === undefined) {
        titleDiv.textContent = "Vous n'avez pas sélectionné d'article:";
        titleDiv.innerHTML += '<br><a href="index.html">voir nos articles disponibles</a>';
        productCard.hidden = true;
    }

    //Définition de l'image: 
    let productImage = product.imageUrl;
    imageDiv.src = productImage;
    imageDiv.setAttribute('alt', product.name);

    //Définition de la description:
    let productDescription = product.description;
    descriptionDiv.textContent = 'Description: \r\n' + productDescription;

    //Définition du prix:
    let productPrice = product.price;
    priceDiv.textContent = productPrice / 100 + ' €';

    //Définition varnish avec instruction for in: 
    let productVarnish = product.varnish;
    for (let i in productVarnish) {
        let newOption = document.createElement("option");
        newOption.setAttribute('value', productVarnish[i]);
        newOption.text = productVarnish[i];
        newOption.classList.add('text-dark');
        varnishDiv.add(newOption);
    }

    // Retrait alerte varnsish une fois sélectionné:
    varnishDiv.addEventListener('click', () => {
        varnishDiv.classList.remove('border-danger', 'text-danger');

    });

    //Stocker varnish sélectionné:
    let lastSelect = localStorage.getItem('varnishDiv');
    if (lastSelect) {
        varnishDiv.value = lastSelect;
    }

    //Evenement onchange si changement vernis et log:
    varnishDiv.onchange = () => {
        lastSelect = varnishDiv[varnishDiv.selectedIndex].value;
        btnAdd.classList.replace('btn-secondary', 'btn-primary');
        console.log(lastSelect);
    };


    // Stockage localStorage si varnish ok: 
    btnAdd.addEventListener('click', () => {
        if (vrnshSelected.value == 'choisissez votre vernis') {
            varnishDiv.classList.add('border-danger', 'text-danger');
        } else {
            // Définiton de cart :
            let cart = JSON.parse(localStorage.getItem('cart'));

            if (cart === null) {
                cart = [];
            }

            let _id = productId;
            let name = productName;
            let imageUrl = productImage;
            let price = productPrice;
            let varnish = lastSelect;
            let quantity = 1;
            let description = productDescription;

            //Utilisation findIndex pr savoir si ajout cart ou juste ++:
            let index = cart.findIndex(newItem => newItem._id === _id);
            let indexA = cart.findIndex(newItem => newItem.varnish === varnish);

            if ((index !== -1) && (indexA !== -1)) {
                cart[index].quantity++;//Augmente seulement la qté car qté et vernis identiques 
            } else {
                cart.push({ _id, name, imageUrl, price, varnish, quantity, description }); //Si non existant ajoute item au localStorage

            }

            //Chgmt texte btn pr confirmer ajout et durée chgmt :
            btnAdd.innerHTML = 'Ajouté au panier ';

            function addedToCart() {
                btnAdd.innerHTML = "Ajouter au panier";
            }
            setTimeout(addedToCart, 3000);

            //On change colori btn et on ajoute le lien vers la page panier :
            btnToCart.classList.replace('btn-secondary', 'btn-success');
            btnToCart.href = 'cart.html';

            localStorage.setItem("cart", JSON.stringify(cart));
            console.log(cart);
        }

    });
});
