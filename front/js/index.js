//Lien élément html avec JS :
const furniture = document.getElementById('furnitures');

//recupération des données de l'API
fetch('http://localhost:3000/api/furniture')

    .then(response => response.json())
    .then(products => {

        console.log(products);

        //Création card et style :
        for (let i = 0; i < products.length; i++) {

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
            newCard.classList.add('card', 'shadow-lg', 'h-100');
            newImageUrl.classList.add('card-img-top', 'mb-2');
            newImageUrl.setAttribute('alt', products[i].name);
            newImageUrl.src = products[i].imageUrl;
            newName.classList.add('card-title', 'text-center');
            newName.textContent = products[i].name;
            newPrice.classList.add('text-center');
            newPrice.textContent = products[i].price / 100 + ' €';
            newDescription.classList.add('card-text', 'text-center', 'px-2');
            newDescription.textContent = products[i].description;
            newVarnish.classList.add('text-center');
            newVarnish.innerHTML = `<i>Disponible en : \r\n</i>` + products[i].varnish;
            newBtn.classList.add('btn', 'btn-secondary', 'mx-auto', 'text-white');
            newBtn.href = "product.html?id=" + products[i]._id;
            newBtn.textContent = 'Personnalisez le produit';


            //Fctn au passage souris sur btn: 
            function mouseInnOut() {
                newBtn.addEventListener("mouseenter", () => {
                    newBtn.classList.replace('btn-secondary', 'btn-primary');
                });
                newBtn.addEventListener("mouseleave", () => {
                    newBtn.classList.replace('btn-primary', 'btn-secondary');
                })
            }
            mouseInnOut();

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

    .catch((error) => {
        console.log(error);
    });
