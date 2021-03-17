


let searchParams = new URLSearchParams(window.location.search); //use URLSearchParams constructor to get values of url parameters
let productId = searchParams.get("id"); // get id product


//Variables utilisées pour constituer la page + ajout class: 
let productCard = document.getElementById("product");
productCard.classList.add('card', 'border-light', 'col-10', 'mx-auto', 'text-center');

let titleDiv = document.getElementById("productTitle");
titleDiv.classList.add('text-center');

let imageDiv = document.getElementById("imgSelected");
imageDiv.classList.add('rounded', 'mx-3', 'my-3');

let descriptionDiv = document.getElementById("dscrptnSelected");
descriptionDiv.classList.add('text-left', 'mx-2', 'mb-4');

let priceDiv = document.getElementById("prcSelected");
priceDiv.classList.add('mb-3')

let varnishDiv = document.getElementById('vrnshSelected');
varnishDiv.classList.add('w-25', 'mx-auto', 'my-4');

let cartDiv = document.getElementById("crtSelected");
cartDiv.classList.add('btn', 'btn-secondary', 'rounded', 'w-45', 'mx-auto', 'my-4', 'py-1');
cartDiv.innerHTML = 'Ajoutez au panier   ' + `<i class="fas fa-cart-plus"></i>`;
cartDiv.style.fontSize = '1.5rem';
cartDiv.href = 'cart.html';



fetch("http://localhost:3000/api/furniture/" + productId) // GET camera according to the id
    .then(datas => datas.json()) // datas in JSON format convert to an object and return a promise
    .then(datas => {

        //Définition title:
        let productName = datas["name"];  // pt être remplacé par datas.name
        titleDiv.textContent = 'Personnalisez votre ' + productName + '.';

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

    })
    .catch(error => {
        console.log(error);
        alert("Trying to reconnect......");
        setTimeout(function () { document.location.reload() }, 1000);
    });


// Ajout au panier:

cartDiv.addEventListener('click', () => {
    let nameStorage = localStorage.getItem('varnish');
    if (nameStorage == null) {
        cartDiv.href = "#";
        varnishDiv.classList.add('border-danger');
    } else {
        console.log('varnish');
    }
});


