const dog = [{
    "id" : "MO231",
    "name" : "Pomeranian White",
    "gene" : "Male",
    "age" : "02",
    "price" : "6900000",
    "image" : "assets/image/dog/pw.png"
},
{
    "id" : "MO502",
    "name" : "Poodle Tiny Yellow",
    "gene" : "Female",
    "age" : "02",
    "price" : "3900000",
    "image" : "assets/image/dog/pty.png"
},
{
    "id" : "MO102",
    "name" : "Poodle Tiny Sepia",
    "gene" : "Male",
    "age" : "02",
    "price" : "4000000",
    "image" : "assets/image/dog/pts.png"
},
{
    "id" : "MO512",
    "name" : "Husky White",
    "gene" : "Male",
    "age" : "02",
    "price" : "8900000",
    "image" : "assets/image/dog/husky.png"
},
{
    "id" : "MO232",
    "name" : "Pembroke Corgi Cream",
    "gene" : "Male",
    "age" : "02",
    "price" : "7900000",
    "image" : "assets/image/dog/pcc.png"
},
{
    "id" : "MO502",
    "name" : "Pembroke Corgi Tricolor",
    "gene" : "Female",
    "age" : "02",
    "price" : "9000000",
    "image" : "assets/image/dog/pct.png"
},
{
    "id" : "MO233",
    "name" : "Alaskan Malamute Grey",
    "gene" : "Female",
    "age" : "02",
    "price" : "6500000",
    "image" : "assets/image/dog/amg.png"
},
{
    "id" : "MO512",
    "name" : "Poodle Tiny Dairy Cows",
    "gene" : "Male",
    "age" : "02",
    "price" : "5000000",
    "image" : "assets/image/dog/ptdc.png"
}]

const container = document.getElementById("dogList");

dog.forEach(dog => {
    const item = document.createElement("div");
    item.classList.add("card");

    item.innerHTML = `
        <div class="card-image">
        <img src="${dog.image}" alt="${dog.name}">
        </div>

        <div class="card-content">
        <h3>${dog.id} - ${dog.name}</h3>
        <p class="card-meta">
            Gene: ${dog.gene} &nbsp; • &nbsp; Age: ${dog.age} months
        </p>
        <p class="card-price">${dog.price} VND</p>
        </div>
    `;

    container.appendChild(item);
});

const product = [{
    "name" : "Zealandia Dog Nutrition",
    "product" : "Dog Food",
    "size" : "385gm",
    "price" : "140000",
    "image" : "assets/image/product/catFood.png"
},
{
    "name" : "Reflex Plus Adult Cat Food",
    "product" : "Cat Food",
    "size" : "1.5kg",
    "price" : "165000",
    "image" : "assets/image/product/reflex.png"
},
{
    "name" : "Cat Scratching ball toy kitten sisal rope ball",
    "product" : "Toy",
    "price" : "1100000",
    "image" : "assets/image/product/scratching.png"
},
{
    "name" : "Cute Pet Warm Nest",
    "product" : "Toy",
    "price" : "410000",
    "image" : "assets/image/product/warmNest.png"
},
{
    "name" : "NaturVet Dogs-Omega-Gold Plus Salmon Oil",
    "product" : "Toy",
    "price" : "350000",
    "image" : "assets/image/product/omega.png"
},
{
    "name" : "Costumes Fashion Pet Clother Cowboy Rider",
    "product" : "Costume",
    "size" : "1.5kg",
    "price" : "500000",
    "image" : "assets/image/product/cowboy.png"
},
{
    "name" : "Costumes Chicken Drumstick Headband",
    "product" : "Costume",
    "price" : "400000",
    "image" : "assets/image/product/costumes.png"
},
{
    "name" : "Plush Pet Toy",
    "product" : "Toy",
    "price" : "250000",
    "image" : "assets/image/product/plush.png"
}]

const container_product = document.getElementById("productList");

product.forEach(product => {
    const item = document.createElement("div");
    item.classList.add("card");

    item.innerHTML = `
        <div class="card-image">
        <img src="${product.image}" alt="${product.name}">
        </div>

        <div class="card-content">
        <h3>${product.name}</h3>
        <p class="card-meta">
            Product: ${product.product} &nbsp; • &nbsp; Size: ${product.size} months
        </p>
        <p class="card-price">${product.price} VND</p>
        </div>
    `;

    container_product.appendChild(item);
});

const knowledge = [{
    "tittle" : "What is a Pomeranian? How to Identify Pomeranian Dogs",
    "image"  : "assets/image/knowledge/pomeranian.png",
    "article" : "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circu..."
},
{
    "tittle" : "Dog Diet You Need To Know",
    "image" : "assets/image/knowledge/diet.png",
    "article" : "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially..."
},
{
    "tittle" : "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    "image" : "assets/image/knowledge/destroy.png",
    "article" : "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog..."
}]

const container_knowledge = document.getElementById("knowledgeList");

knowledge.forEach(knowledge => {
    const item = document.createElement("div");
    item.classList.add("card");

    item.innerHTML = `
        <div class="card-image">
        <img src="${knowledge.image}" alt="${knowledge.name}">
        </div>

        <div class="card-content">
        <h3>${knowledge.tittle}</h3>
        <p class="card-article">
            ${knowledge.article}
        </p>
        </div>
    `;

    container_knowledge.appendChild(item);
});
