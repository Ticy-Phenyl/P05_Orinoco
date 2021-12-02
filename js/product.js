//Récupérer url:
let searchParams = new URLSearchParams(window.location.search);

//Récupérer id du produit:
let productId = searchParams.get("id");


//Variables utilisées pour constituer la page + ajout class: 
let productCard = document.getElementById("product");
productCard.classList.add('card', 'shadow-lg', 'border-light', 'col-10', 'col-mb-3', 'mx-auto', 'text-center');

let titleDiv = document.getElementById("productTitle");
titleDiv.classList.add('text-center');

let imageDiv = document.getElementById("imgSelected");
imageDiv.classList.add('rounded', 'mx-3', 'my-3');

let descriptionDiv = document.getElementById("dscrptnSelected");
descriptionDiv.classList.add('text-left', 'mx-2', 'mb-4');

let priceDiv = document.getElementById("prcSelected");
priceDiv.classList.add('mb-3')

let varnishDiv = document.getElementById('vrnshSelected');
varnishDiv.classList.add('w-25', 'mx-auto', 'my-4', 'custom-select', 'text-secondary');

let cartDiv = document.getElementById("crtSelected");
cartDiv.classList.add('btn', 'btn-secondary', 'text-white', 'rounded', 'w-45', 'mx-auto', 'my-4', 'py-1');
cartDiv.innerHTML = 'Ajoutez au panier ' + '&nbsp' + `<i class="fas fa-cart-plus"></i>`;
cartDiv.style.fontSize = '1.5rem';
cartDiv.href = 'cart.html';

//Récupérer produit selon son id:
fetch("http://localhost:3000/api/furniture/" + productId)
    //Passage de json à objet:
    .then(datas => datas.json())
    .then(datas => {

        //Définition title:
        let productName = datas["name"];  // pt être remplacé par datas.name
        titleDiv.textContent = 'Personnalisez votre ' + productName + '.';

        //Si pas d'article sélectionné:
        if (productName === undefined) {
            titleDiv.textContent = "Vous n'avez pas sélectionné d'article:";
            titleDiv.innerHTML += '<br><a href="index.html">voir nos articles disponibles</a>';
            productCard.hidden = true;
        }

        //Définition de l'image: 
        let productImage = datas["imageUrl"];
        imageDiv.src = productImage;
        imageDiv.setAttribute('alt', datas["name"]);

        //Définition de la description:
        let productDescription = datas["description"];
        descriptionDiv.textContent = 'Description: \r\n' + productDescription;

        //Définition du prix:
        let productPrice = datas["price"];
        priceDiv.textContent = productPrice / 100 + ' €';

        //Définition varnish avec instruction for in: 
        let productVarnish = datas["varnish"];
        for (let i in productVarnish) {
            let newOption = document.createElement("option");
            newOption.setAttribute('value', productVarnish[i])
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
        varnishDiv.onchange = () => {
            lastSelect = varnishDiv.options[varnishDiv.selectedIndex].value;
            cartDiv.classList.replace('btn-secondary', 'btn-primary');
            console.log(lastSelect);
        }


        // Fonction stockage localStorage si varnish ok: 
        function setUpStorage() {
            cartDiv.addEventListener('click', () => {
                if (vrnshSelected.value == 'choisissez votre vernis') {
                    cartDiv.removeAttribute('href');
                    varnishDiv.classList.add('border-danger', 'text-danger');
                } else {
                    let cart = JSON.parse(localStorage.getItem('cart'));

                    let _id = productId;
                    let name = productName;
                    let imageUrl = productImage;
                    let price = productPrice;
                    let varnish = lastSelect;
                    let quantity = 1;
                    let description = productDescription;
                    let index = cart.findIndex(newItem => newItem._id === _id);
                    if (index !== -1) {
                        cart[index].quantity++; //Augmente seulement la qté
                    } else {
                        cart.push({ _id, name, imageUrl, price, varnish, quantity, description }); //Si non existant ajoute item au localStorage
                    }

                    localStorage.setItem("cart", JSON.stringify(cart));

                }

            })
        }
        setUpStorage();
    })
    .catch(error => {
        console.log(error);
        alert("Tentative de reconnexion.....");
        setTimeout(function () { document.location.reload() }, 1000);
    });