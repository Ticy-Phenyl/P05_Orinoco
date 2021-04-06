

const furniture = document.getElementById('furnitures');


//recupération des données de l'API
fetch('http://localhost:3000/api/furniture')

    .then(response => response.json())

    .then(donnees => {

        //Création card et style :
        // retour à for i etc si foreach ko
        for (let item = 0; item < donnees.length; item++) {

            // Eléments card :
            let newProduct = document.createElement('div');
            let newCard = document.createElement('div');
            let newImageUrl = document.createElement('img');
            let newName = document.createElement('h2');
            let newDescription = document.createElement('p');
            let newPrice = document.createElement('h3');
            let newVarnish = document.createElement('p');
            let newBtn = document.createElement('a');


            // Class/content des éléments :
            newProduct.classList.add('col-12', 'col-lg-4', 'my-3');
            newCard.classList.add('card', 'shadow-lg');
            newImageUrl.classList.add('card-img-top', 'mb-2');
            newImageUrl.setAttribute('alt', donnees[item].name);
            newImageUrl.src = donnees[item].imageUrl;
            newName.classList.add('card-title', 'text-center');
            newName.textContent = donnees[item].name;
            newDescription.classList.add('card-text', 'text-center', 'px-2');
            newDescription.textContent = donnees[item].description;
            newPrice.classList.add('text-center');
            newPrice.textContent = donnees[item].price / 100 + ' €';
            newVarnish.classList.add('text-center');
            newVarnish.textContent = 'Disponible en: \r\n' + donnees[item].varnish;
            newBtn.classList.add('btn', 'btn-secondary', 'mx-4', 'text-white');
            newBtn.href = "product.html?id=" + donnees[item]._id;
            newBtn.textContent = 'Personnalisez le produit';


            //Intégration à index.html:   
            furniture.appendChild(newProduct);
            newProduct.appendChild(newCard);
            newCard.appendChild(newImageUrl);
            newCard.appendChild(newName);
            newCard.appendChild(newPrice);
            newCard.appendChild(newDescription);
            newCard.appendChild(newVarnish);
            newCard.appendChild(newBtn);


        }

    })

    .catch ((error) => {
    console.log(error);
})
