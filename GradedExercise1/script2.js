const storeData = [
    {
    id:1,
    name: "Lord of the Rings",
    image: "Products_files/LOTR.jpg",   
    price: "30.00 EUR",
    writer: "J . R . R Tolkien",
    highlights: "The Lord of the Rings is an epic[1] high fantasy novel[a] by the English author and scholar J. R. R. Tolkien. Set in Middle-earth, the world at some distant time in the past, the story began as a sequel to Tolkien's 1937 <br> children's book The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, The Lord of the Rings is one of the best-selling books ever written, with over 150 million copies sold.",
    inCart: 0,
    },
    {
    id:2,
    name: "Don Quixote",
    image: "Products_files/dq.jpg",   
    price: "35.00 EUR",
    writer: "Miguel de Cervantes",
    highlights: "The Ingenious Gentleman Don Quixote of La Mancha (Modern Spanish: El ingenioso hidalgo (in Part 2, caballero) Don Quijote de la Mancha, , is a Spanish novel by Miguel de Cervantes. It was published in two parts, <br> in 1605 and 1615. A founding work of Western literature, it is often labeled 'the first european modern novel' and many authors consider it to be the best literary work ever written. Don Quixote also holds the distinction <br> of being the second-most-translated book in the world after the Bible.",
    inCart: 0,
    },
    {
    id:3,
    name: "Ecce Homo",
    image: "Products_files/niet.jpg",   
    price: "25.00 EUR",
    writer: "Friedrich Nietzsche",
    highlights: "Ecce Homo: How One Becomes What One Is (German: Ecce homo: Wie man wird, was man ist) is the last original book written by philosopher Friedrich Nietzsche before his death in 1900. It was written in 1888 <br> and was not published until 1908.",
    inCart: 0,
    },
    {
    id:4,
    name: "A Clockwork Orange",
    image: "Products_files/Orange.jpg",   
    price: "40.00 EUR",
    writer: "Anthony Burgess",
    highlights: "A Clockwork Orange is a dystopian satirical black comedy novel by English writer Anthony Burgess, published in 1962. It is set in a near-future society that has a youth subculture of extreme violence. <br>The teenage protagonist, Alex, narrates his violent exploits and his experiences with state authorities intent on reforming him. The book is partially written in a Russian-influenced argot called 'Nadsat' <br>, which takes its name from the Russian suffix that is equivalent to '-teen' in English. According to Burgess, it was a jeu d'esprit written in just three weeks.",
    inCart: 0,
    },
    {
    id:5,
    name: "Iliad the odyssey",
    image: "Products_files/ili.jpg",   
    price: "30.00 EUR",
    writer: "c. 8th century BCE, has many writers or writer is unknown",
    highlights: "The Odyssey is one of two major ancient Greek epic poems attributed to Homer. It is one of the oldest extant works of literature still read by contemporary audiences. As with the Iliad, the poem is divided into 24 books.<br> It follows the Greek hero Odysseus, king of Ithaca, and his journey home after the Trojan War. After the war itself, which lasted ten years, his journey lasts for ten additional years, <br> during which time he encounters many perils and all his crewmates are killed. In his absence, Odysseus is assumed dead, and his wife Penelope and son Telemachus must contend <br> with a group of unruly suitors who compete for Penelope's hand in marriage.",
    inCart: 0,
    },
];

function createShopItem(store){
    return `
    <div class="itemList" onClick="createInfoView(${store.id})">
    <h1 class="name">${store.name}</h1>
    <div class="image">
        <img src="${store.image}">
    </div>
    <p class="price">${store.price}</p>
</div>`
}

function createInfoView(storeId) {
    console.log(storeId);
    const book = storeData.find(storeElement => storeElement.id === storeId);
    if(book === undefined) {
        console.log('Error: Item not found')
        return;
    }

    const body = document.querySelector('body');

    body.innerHTML =`

    <div class="header">
                <div class="flex">
                        <div class="item"><img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixFQB4WSgKYreYMSJyHuRxSBa1JrYeG-9gg&usqp=CAU"></div>
                        <div class="item"><h1 class="title">Lazando</h1></div>
                </div>
            
                <div class="account">
                    <button>Account</button>
                    <button onClick="showShoppingCartView()">Shopping cart</button>
                    <span class="cart1">0</span>
                </div>
   
            <div class="menu">
                    <button onClick="backButton()">Products</button>
                    <button onClick="backButton()">Sales</button>
                    <button onClick="backButton()">Contact us</button>
                    <button onClick="backButton()">Terms of Service</button>

            </div>
    </div>

    <div id="infoView">
        <button class="back" onClick="backButton()">back</button>
        <div class="bookTitle"> 
            <h1>${book.name}</h1>
        </div>
        <div class="productInfo">

        <div>
            <img class="cover" style=" height: 500px; width: 340px; " src=${book.image}>
                <div class="bookInfo">
                    <div>${book.writer}</div>
                    <div>${book.price}</div>
                    <div>${book.highlights}</div>

                </div>

                <div class="cartButton">
                    <button class="addToCart" onClick="addCart"> Add to cart</button>
                    
                </div>
        </div>
    </div>
    `;
}



function showItemListView() {

    const body = document.querySelector('body');
    const itemListElement = document.createElement('div');
    itemListElement.classList.add('itemList');
    itemListElement.id = "listOfItems";
    itemListElement.innerHTML = storeData.map(element => createShopItem(element)).join("");
    
    body.appendChild(itemListElement);
}   

function backButton() {
    document.getElementById("infoView").remove();
    showItemListView();
}
function showShoppingCartView() {

    const body = document.querySelector('body');

    body.innerHTML =`
    <div class="header">
    <div class="flex">
            <div class="item"><img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSixFQB4WSgKYreYMSJyHuRxSBa1JrYeG-9gg&usqp=CAU"></div>
            <div class="item"><h1 class="title">Lazando</h1></div>
    </div>

    <div class="account">
        <button>Account</button>

            <button onClick="showShoppingCartView()">Shopping cart</button>
            


    </div>

<div class="menu">
            <button onClick="backButton2()">Products</button>
            <button onClick="backButton2()">Sales</button>
            <button onClick="backButton2()">Contact us</button>
            <button onClick="backButton2()">Terms of Service</button>

</div>
</div>
    <div id="shoppingCart">
    <div class="cart">

        <div class="backToMainPage">
                <button onClick="backButton2()">Back</button>
        </div>
        <div class="inShoppingCart">
            <img src="Products_files/LOTR.jpg">
            <div>
                <p class="name">Lord of the Rings</p>
            </div>
            <p class="price">30.00 EUR</p>
            <input type="number" class="cart-quantity-input" min="0" value="0" max="30" step="1">
            <button id="remove" class="removeItem" onClick="removeItem()" >remove item</button>
        </div>
    </div>
    <div class="priceOfItems">
        <p>TOTAL:</p>
        <p style="    position: absolute;
        left: 70px;
        bottom: 100px;">30.00 EUR</p> 
        <div class="shoppingCartButtons">
                <button> Purchase </button>
                <button> Clear shopping cart</button>
        </div>
        
    </div>
</div>
    
    
    `
}

function backButton2() {
    document.getElementById("shoppingCart").remove();
    showItemListView();
}


function removeItem(){
    document.getElementById("remove").parentElement.remove();
}

function addCart(){
    let carts = document.querySelectorAll('.addToCart');

        for(let i=0; i <carts.length; i++) {
            carts[i].addEventListener("click", () => {
                cartNumbers();
            })
        }

    function onLoadCartNumbers(){
        let productNumbers = localStorage.getItem("cartNumbers");

        if(productNumbers){
            document.querySelector(".cart1 span").textContent = productNumbers;
        }

    }

    function cartNumbers(){
       
        let productNumbers = localStorage.getItem("cartNumbers");
        console.log(productNumbers);

        productNumbers = parseInt(productNumbers);
    

        if( productNumbers ){

            localStorage.setItem("cartNumbers", productNumbers + 1);
            document.querySelector(".cart1 span").textContent = productNumbers + 1;
        } else {
            localStorage.setItem("cartNumbers", 1);
            document.querySelector(".cart1 span").textContent =1;
        }
   onLoadCartNumbers()
    }
}
