// Données des cartes
const cards = [
  { id: 1, name: "Pikachu", rarity: "Common", description: "Un Pokémon électrique rapide et adorable.", price: "150 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png" },
  { id: 2, name: "Charizard", rarity: "Rare Ultra", description: "Un dragon puissant cracheur de flammes.", price: "1200 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png" },
  { id: 3, name: "Bulbasaur", rarity: "Common", description: "Un Pokémon plante avec une graine sur le dos.", price: "200 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" },
  { id: 4, name: "Mewtwo", rarity: "Rare Rainbow", description: "Un Pokémon légendaire créé par manipulation génétique.", price: "3000 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/150.png" },
  { id: 5, name: "Gengar", rarity: "Rare Holo", description: "Un esprit joueur venant de l'ombre.", price: "850 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/094.png" },
  { id: 6, name: "Snorlax", rarity: "Rare", description: "Un géant paresseux qui adore dormir.", price: "600 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png" },
  { id: 7, name: "Eevee", rarity: "Common", description: "Un Pokémon mignon capable de multiples évolutions.", price: "300 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/133.png" },
  { id: 8, name: "Lucario", rarity: "Rare Ultra", description: "Un combattant agile qui maîtrise l'aura.", price: "1000 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/448.png" },
  { id: 9, name: "Rayquaza", rarity: "Rare Rainbow", description: "Un dragon céleste gardien des cieux.", price: "2500 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/384.png" },
  { id: 10, name: "Squirtle", rarity: "Common", description: "Une petite tortue maîtrisant l'eau.", price: "180 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" },
  { id: 11, name: "Jigglypuff", rarity: "Common", description: "Un Pokémon chanteur connu pour endormir ses adversaires.", price: "160 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png" },
  { id: 12, name: "Machamp", rarity: "Rare", description: "Un maître du combat possédant quatre bras puissants.", price: "700 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/068.png" },
  { id: 13, name: "Alakazam", rarity: "Rare Ultra", description: "Un expert en télékinésie doté d’un immense intellect.", price: "1300 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/065.png" },
  { id: 14, name: "Gyarados", rarity: "Rare Holo", description: "Un Pokémon serpent de mer très redouté.", price: "1500 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/130.png" },
  { id: 15, name: "Dragonite", rarity: "Rare Rainbow", description: "Un dragon bienveillant mais incroyablement puissant.", price: "2800 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/149.png" },
  { id: 16, name: "Arcanine", rarity: "Rare", description: "Un Pokémon légendaire connu pour sa vitesse fulgurante.", price: "900 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/059.png" },
  { id: 17, name: "Lapras", rarity: "Rare Holo", description: "Un Pokémon aquatique doux et protecteur.", price: "1100 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/131.png" },
  { id: 18, name: "Umbreon", rarity: "Rare Ultra", description: "Une évolution sombre d’Eevee, mystérieuse et élégante.", price: "1400 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/197.png" },
  { id: 19, name: "Espeon", rarity: "Rare Ultra", description: "Une évolution psychique d’Eevee, raffinée et intuitive.", price: "1350 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/196.png" },
  { id: 20, name: "Tyranitar", rarity: "Rare Holo", description: "Un Pokémon colosse capable de détruire des montagnes.", price: "1700 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/248.png" },
  { id: 21, name: "Metagross", rarity: "Rare Rainbow", description: "Un Pokémon acier-psy à la puissance calculée.", price: "2600 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/376.png" },
  { id: 22, name: "Greninja", rarity: "Rare Ultra", description: "Un ninja rapide comme l'éclair, maître de l’eau.", price: "1200 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/658.png" },
  { id: 23, name: "Zoroark", rarity: "Rare", description: "Un illusionniste redoutable capable de duper ses adversaires.", price: "900 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/571.png" },
  { id: 24, name: "Sylveon", rarity: "Rare Ultra", description: "Une évolution féérique d’Eevee, douce mais puissante.", price: "1500 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png" },
  { id: 25, name: "Blastoise", rarity: "Rare Holo", description: "Un colosse aquatique armé de canons dorsaux.", price: "2000 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png" },
  { id: 26, name: "Venusaur", rarity: "Rare", description: "Une plante géante contrôlant son énergie solaire.", price: "1900 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png" },
  { id: 27, name: "Absol", rarity: "Rare", description: "Un Pokémon solitaire capable de prédire les catastrophes.", price: "800 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/359.png" },
  { id: 28, name: "Darkrai", rarity: "Rare Rainbow", description: "Un être mystérieux capable d’invoquer des cauchemars.", price: "3200 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/491.png" },
  { id: 29, name: "Dialga", rarity: "Rare Rainbow", description: "Le maître du temps, capable de le plier à sa volonté.", price: "3500 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/483.png" },
  { id: 30, name: "Palkia", rarity: "Rare Rainbow", description: "Le maître de l’espace, contrôlant les dimensions.", price: "3400 $", image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/484.png" }
];


let currentPage = 1;
let filteredCards = cards;

// NOTIFICATIONS 
function showNotification(message, color) {
  const notification = document.getElementById("notification");
  const notifText = document.getElementById("notification-text");
  if (!notification) return;
  
  notifText.textContent = message;
  notification.style.backgroundColor = color === "green" ? "#22c55e" : "#ec4899";
  notification.classList.remove("translate-x-full");
  setTimeout(() => notification.classList.add("translate-x-full"), 2000);
}

//FAVORIS
function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites")) || [];
}

function addFavorite(card) {
  const favorites = getFavorites();
  if (!favorites.find(c => c.id === card.id)) {
    favorites.push(card);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    showNotification(`${card.name} ajouté aux favoris !`, "pink");
  }
}

function removeFavorite(cardId) {
  const favorites = getFavorites().filter(c => c.id !== cardId);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function displayFavorites() {
  const container = document.getElementById("favorites-container");
  const noFavMsg = document.getElementById("no-favorites");
  if (!container) return;

  const favorites = getFavorites();
  container.innerHTML = "";
  
  if (favorites.length === 0) {
    if (noFavMsg) noFavMsg.classList.remove("hidden");
    return;
  }
  if (noFavMsg) noFavMsg.classList.add("hidden");

  favorites.forEach(card => {
    const div = document.createElement("div");
    div.className = "relative w-90 h-[490px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform mx-auto bg-transparent backdrop-blur-md";
    div.innerHTML = `
      <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover">
      <div class="absolute bottom-0 w-full bg-gradient-to-t from-purple-900/90 via-purple-900/60 to-transparent p-4 text-white z-10">
        <h2 class="text-2xl font-bold text-yellow-400 mb-1">${card.name}</h2>
        <p class="text-sm mb-1">Rareté: ${card.rarity}</p>
        <p class="text-gray-300 mb-2 text-xs">${card.description}</p>
        <p class="text-lg font-bold mb-2">${card.price}</p>
        <div class="flex gap-2">
          <button class="bg-red-500 text-white px-3 py-1 rounded-lg font-bold hover:bg-red-600 remove-fav text-xs">Remove</button>
          <button class="bg-yellow-400 text-black px-3 py-1 rounded-lg font-bold hover:bg-yellow-500 add-cart-fav text-xs">Add to carte</button>
        </div>
      </div>
    `;

    div.querySelector(".remove-fav").onclick = () => {
      removeFavorite(card.id);
      displayFavorites();
    };

    div.querySelector(".add-cart-fav").onclick = () => {
      addToCart(card);
      showNotification(`${card.name} ajouté avec succès`, "green");
    };

    container.appendChild(div);
  });
}

//  PANIER 
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function addToCart(card) {
  const cart = getCart();
  const existing = cart.find(item => item.id === card.id);
  
  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ ...card, quantity: 1 });
  }
  saveCart(cart);
}

function removeFromCart(cardId) {
  saveCart(getCart().filter(item => item.id !== cardId));
  displayCartItems();
}

function changeQuantity(cardId, delta) {
  let cart = getCart();
  const item = cart.find(c => c.id === cardId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) cart = cart.filter(c => c.id !== cardId);
  
  saveCart(cart);
  displayCartItems();
}

function displayCartItems() {
  const container = document.getElementById("cart-items");
  if (!container) return;

  const cart = getCart();

  if (cart.length === 0) {
    container.innerHTML = `
      <p class="text-white text-center text-xl mb-4">Votre panier est vide.</p>
      <a href="market.html" class="block text-center text-yellow-400 font-bold hover:underline">Voir le Market</a>
    `;
    document.getElementById("cart-subtotal").textContent = "$0.00";
    document.getElementById("cart-tax").textContent = "$0.00";
    document.getElementById("cart-total").textContent = "$0.00";
    return;
  }

  let subtotal = 0;
  container.innerHTML = "";

  cart.forEach(item => {
    const itemTotal = parseFloat(item.price.replace("$", "")) * item.quantity;
    subtotal += itemTotal;

    const div = document.createElement("div");
    div.className = "flex items-center justify-between bg-purple-900/30 rounded-lg p-4 mb-4";
    div.innerHTML = `
      <div class="flex items-center gap-4">
        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-contain rounded-lg">
        <div>
          <h3 class="text-yellow-400 font-bold">${item.name}</h3>
          <p class="text-white">$${parseFloat(item.price.replace("$", "")).toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}</p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button class="bg-red-500 text-white px-2 py-1 rounded" onclick="changeQuantity(${item.id}, -1)">-</button>
        <span class="text-white font-bold">${item.quantity}</span>
        <button class="bg-green-500 text-white px-2 py-1 rounded" onclick="changeQuantity(${item.id}, 1)">+</button>
        <button class="ml-2 bg-pink-500 text-white px-2 py-1 rounded" onclick="removeFromCart(${item.id})">Supprimer</button>
      </div>
    `;
    container.appendChild(div);
  });

  const tax = subtotal * 0.2;
  const total = subtotal + tax;

  document.getElementById("cart-subtotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("cart-tax").textContent = `$${tax.toFixed(2)}`;
  document.getElementById("cart-total").textContent = `$${total.toFixed(2)}`;
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const elem1 = document.getElementById("cart-count");
  const elem2 = document.getElementById("cart-count-mobile");
  if (elem1) elem1.textContent = count;
  if (elem2) elem2.textContent = count;
}

function clearCart() {
  localStorage.removeItem("cart");
  displayCartItems();
  showNotification("Panier vidé !", "pink");
}

function checkout() {
  const cart = getCart();
  if (cart.length === 0) {
    showNotification("Votre panier est vide !", "pink");
    return;
  }
  
  cart.forEach(card => addToMyDeck(card));
  clearCart();
  showNotification("Merci pour votre achat !", "green");
}

// MY DECK 
function getMyDeck() {
  return JSON.parse(localStorage.getItem("myDeck")) || [];
}

function saveMyDeck(deck) {
  localStorage.setItem("myDeck", JSON.stringify(deck));
}

function addToMyDeck(card) {
  const deck = getMyDeck();
  const existing = deck.find(c => c.id === card.id);
  
  if (existing) {
    existing.quantity = (existing.quantity || 1) + (card.quantity || 1);
  } else {
    deck.push({ ...card, quantity: card.quantity || 1 });
  }
  saveMyDeck(deck);
}

function removeFromMyDeck(cardId) {
  let deck = getMyDeck();
  const existing = deck.find(c => c.id === cardId);
  
  if (existing) {
    existing.quantity -= 1;
    if (existing.quantity <= 0) deck = deck.filter(c => c.id !== cardId);
  }
  saveMyDeck(deck);
}

function displayMyDeck(list = getMyDeck()) {
  const container = document.getElementById("deck-container");
  const emptyMsg = document.getElementById("empty-deck");
  if (!container) return;

  container.innerHTML = "";
  
  if (list.length === 0) {
    if (emptyMsg) emptyMsg.classList.remove("hidden");
    return;
  }
  if (emptyMsg) emptyMsg.classList.add("hidden");

  list.forEach(card => {
    const div = document.createElement("div");
    div.className = "relative w-80 h-[520px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform bg-transparent backdrop-blur-md";
    div.innerHTML = `
      <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover">
      <div class="absolute bottom-0 w-full bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent p-4 text-white">
        <h2 class="text-2xl font-bold text-yellow-400 mb-1">${card.name}</h2>
        <p class="text-sm mb-1">Rareté : ${card.rarity}</p>
        <p class="text-gray-300 text-xs mb-2">${card.description}</p>
        <p class="text-lg font-bold mb-1">${card.price}</p>
        <p class="text-sm font-semibold mb-2">Quantité : <span class="text-yellow-400">${card.quantity || 1}</span></p>
        <button class="bg-red-500 text-white px-3 py-1 rounded-lg font-bold hover:bg-red-600 text-xs remove-deck">Revendre 1</button>
      </div>
    `;

    div.querySelector(".remove-deck").onclick = () => {
      removeFromMyDeck(card.id);
      showNotification(`${card.name} retiré du deck.`, "pink");
      displayMyDeck();
    };

    container.appendChild(div);
  });
}

//  MARKET
function displayCards(list) {
  const container = document.getElementById("cards-container");
  if (!container) return;
  
  container.innerHTML = list.length === 0 ? `<p class="text-white text-center text-xl">Aucune carte trouvée.</p>` : "";

  list.forEach(card => {
    const div = document.createElement("div");
    div.className = "relative w-90 h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white hover:scale-105 transition-transform mx-auto bg-transparent backdrop-blur-md";
    div.innerHTML = `
      <img src="${card.image}" alt="${card.name}" class="w-full h-full object-cover">
      <div class="absolute bottom-0 w-full bg-gradient-to-t from-purple-900/90 via-purple-900/50 to-transparent p-4 text-white">
        <h2 class="text-2xl font-bold text-yellow-400 mb-1">${card.name}</h2>
        <p class="text-sm mb-1">Rareté: ${card.rarity}</p>
        <p class="text-gray-300 mb-2 text-xs">${card.description}</p>
        <p class="text-lg font-bold mb-2">${card.price}</p>
        <div class="flex gap-2">
          <button class="bg-yellow-400 text-black px-2 py-1 rounded-lg font-bold hover:bg-yellow-500 text-xs add-cart">Add to carte</button>
          <button class="bg-pink-500 text-white px-2 py-1 rounded-lg font-bold hover:bg-pink-600 text-xs add-fav">Favoris</button>
        </div>
      </div>
    `;

    div.querySelector(".add-cart").onclick = () => {
      addToCart(card);
      showNotification(`${card.name} ajoutée au panier !`, "green");
    };
    div.querySelector(".add-fav").onclick = () => addFavorite(card);

    container.appendChild(div);
  });
}

function paginate() {
  const start = (currentPage - 1) * 6;
  displayCards(filteredCards.slice(start, start + 6));
}

//  FILTERS 
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.onclick = () => {
    const rarity = btn.dataset.rarity;
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("ring-4", "ring-yellow-300"));
    btn.classList.add("ring-4", "ring-yellow-300");

    if (window.location.pathname.includes("my_deck.html")) {
      const deck = getMyDeck();
      displayMyDeck(rarity ? deck.filter(c => c.rarity === rarity) : deck);
    } else {
      filteredCards = rarity ? cards.filter(c => c.rarity === rarity) : cards;
      currentPage = 1;
      paginate();
    }
  };
});

//  SEARCH
const searchInput = document.getElementById("search-input");
if (searchInput) {
  searchInput.oninput = (e) => {
    filteredCards = cards.filter(c => c.name.toLowerCase().includes(e.target.value.toLowerCase()));
    currentPage = 1;
    paginate();
  };
}

// PAGINATION 
const prevBtn = document.getElementById("prev-page");
const nextBtn = document.getElementById("next-page");

if (prevBtn) prevBtn.onclick = () => { if (currentPage > 1) { currentPage--; paginate(); }};
if (nextBtn) nextBtn.onclick = () => { if (currentPage < Math.ceil(filteredCards.length / 6)) { currentPage++; paginate(); }};

document.querySelectorAll(".page-num").forEach(btn => {
  btn.onclick = () => { currentPage = parseInt(btn.dataset.page); paginate(); };
});

//SLIDER 
if (window.location.pathname.includes("index.html") || window.location.pathname.endsWith("/")) {
  const slider = document.getElementById("autoSlider");
  if (slider) {
    cards.slice(0, 4).forEach(card => {
      const div = document.createElement("div");
      div.className = "relative w-90 h-[490px] min-w-full bg-transparent text-white border-4 border-white rounded-2xl overflow-hidden flex flex-col items-center justify-end p-6 backdrop-blur-md shadow-2xl";
      div.innerHTML = `
        <div class="flex-1 flex items-center justify-center w-full relative z-10">
          <img src="${card.image}" alt="${card.name}" class="w-[85%] h-auto max-h-[350px] object-contain">
        </div>
        <div class="text-center mt-4 relative z-10">
          <h2 class="text-2xl font-bold text-yellow-400 mb-1">${card.name}</h2>
          <p class="text-sm text-gray-300 mb-1">Rareté : ${card.rarity}</p>
          <p class="text-lg font-bold">${card.price}</p>
        </div>
      `;
      slider.appendChild(div);
    });

    let index = 0;
    setInterval(() => {
      index = (index + 1) % slider.children.length;
      slider.style.transform = `translateX(-${index * 100}%)`;
    }, 3000);
  }
}

// MOBILE MENU
const mobileToggle = document.getElementById("mobile-toggle");
const mobileMenu = document.getElementById("mobile-menu");

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});




// PLAY
let playDeck = [], hand = [], aiDeck = [], aiField = [], playerField = [];
let currentTurn = "player";
let draggedCardIndex = null;


function startPlayerTurn() {
  currentTurn = "player";
  renderGame();
}

function startAITurn() {
  currentTurn = "ai";
  renderGame();
  setTimeout(aiPlay, 1500);
}

function nextTurn() {
  if (currentTurn === "player") {
    startAITurn();
  } else {
    startPlayerTurn();
  }
}


function renderGame() {
  const deckZone = document.getElementById("deck-zone");
  const handZone = document.getElementById("hand-zone");

  if (deckZone) {
    deckZone.innerHTML = playDeck.map(c => `
      <div onclick="piocher()" class="bg-purple-800/50 border border-yellow-400 rounded-lg p-2 text-center cursor-pointer hover:bg-purple-700 transition">
        <img src="${c.image}" alt="${c.name}" class="w-20 h-20 mx-auto rounded-md mb-1">
        <h4 class="text-white text-sm font-bold">${c.name}</h4>
        <p class="text-yellow-300 text-xs">Quantité: ${c.quantity}</p>
      </div>
    `).join("");
  }

  if (handZone) {
    handZone.innerHTML = hand.map((c, i) => `
      <div draggable="true" data-card-index="${i}" class="hand-card bg-blue-800/50 border-2 border-blue-400 rounded-lg p-2 text-center cursor-grab">
        <img src="${c.image}" alt="${c.name}" class="w-20 h-20 mx-auto rounded-md mb-1 pointer-events-none">
        <h4 class="text-white text-sm font-bold pointer-events-none">${c.name}</h4>
      </div>
    `).join("");

    document.querySelectorAll('.hand-card').forEach(card => {
      card.ondragstart = (e) => {
        if (currentTurn !== "player") { e.preventDefault(); return; }
        draggedCardIndex = parseInt(e.target.dataset.cardIndex);
        e.target.style.opacity = '0.5';
      };
      card.ondragend = (e) => e.target.style.opacity = '1';
    });
  }

  const aiZone = document.querySelector(".ai-field-zone");
  if (aiZone) {
    aiZone.innerHTML = aiField.map(c => `
      <div class="arena-card ${c.mode === "defense" ? "bg-green-900/50 border-green-400" : "bg-red-900/50 border-red-400"} h-32 rounded-lg flex flex-col items-center justify-center border-2">
        <img src="${c.image}" class="w-16 h-16 object-contain mb-1">
        <p class="text-white text-xs font-bold">${c.name}</p>
        <p class="text-yellow-300 text-[10px]">${c.mode === "defense" ? "🛡️" : "⚔️"}</p>
      </div>
    `).join("") + "<div class='empty-slot'></div>".repeat(Math.max(0, 5 - aiField.length));
  }

  const playerZone = document.querySelector(".player-field-zone");
  if (playerZone) {
    playerZone.innerHTML = Array(5).fill(0).map((_, idx) => {
      const card = playerField[idx];
      if (card) {
        return `
          <div class="arena-card ${card.mode === "defense" ? "bg-green-800/50 border-green-400" : "bg-blue-900/50 border-blue-400"} h-32 rounded-lg flex flex-col items-center justify-center border-2">
            <img src="${card.image}" class="w-16 h-16 object-contain mb-1">
            <p class="text-white text-xs font-bold">${card.name}</p>
            <p class="text-yellow-300 text-[10px]">${card.mode === "defense" ? "🛡️" : "⚔️"}</p>
          </div>
        `;
      }
      return `<div class="drop-zone empty-slot border-2 border-dashed border-blue-400/50 h-32 rounded-lg flex items-center justify-center text-blue-400/50 text-xs" data-slot="${idx}">Glisser ici</div>`;
    }).join("");

    document.querySelectorAll('.drop-zone').forEach(zone => {
      zone.ondragover = (e) => {
        e.preventDefault();
        zone.classList.add('bg-blue-500/30', 'border-blue-300');
      };
      zone.ondragleave = () => zone.classList.remove('bg-blue-500/30', 'border-blue-300');
      zone.ondrop = (e) => {
        e.preventDefault();
        zone.classList.remove('bg-blue-500/30', 'border-blue-300');

        if (draggedCardIndex === null || currentTurn !== "player") return;
        if (playerField.length >= 5) { showNotification("Le terrain est plein !", "pink"); return; }

        const slotIndex = parseInt(zone.dataset.slot);
        if (playerField[slotIndex]) { showNotification("Case occupée !", "pink"); return; }

        showModeChoice(draggedCardIndex, slotIndex);
        draggedCardIndex = null;
      };
    });
  }

  const deckCount = document.getElementById("deck-count");
  const handCount = document.getElementById("hand-count");
  const turnText = document.getElementById("turn-info");

  if (deckCount) deckCount.textContent = playDeck.reduce((a, c) => a + c.quantity, 0);
  if (handCount) handCount.textContent = hand.length;
  if (turnText) turnText.textContent = currentTurn === "player" ? "🟢 À ton tour !" : "🔴 Tour adversaire...";
}


function showModeChoice(cardIndex, slotIndex) {
  const choiceBox = document.getElementById("mode-choice");
  choiceBox.classList.remove("hidden");

  const selectMode = (mode) => {
    const card = hand.splice(cardIndex, 1)[0];
    card.mode = mode;
    playerField[slotIndex] = card;
    choiceBox.classList.add("hidden");

    nextTurn();
  };

  const btnD = document.getElementById("defense-btn");
  const btnA = document.getElementById("attaque-btn");
  const newBtnD = btnD.cloneNode(true);
  const newBtnA = btnA.cloneNode(true);
  btnD.parentNode.replaceChild(newBtnD, btnD);
  btnA.parentNode.replaceChild(newBtnA, btnA);

  newBtnD.onclick = () => selectMode("defense");
  newBtnA.onclick = () => selectMode("attaque");
}


function aiPlay() {
  if (aiDeck.length === 0 || aiField.length >= 5) {
    nextTurn();
    return;
  }

  const idx = Math.floor(Math.random() * aiDeck.length);
  const card = aiDeck[idx];
  card.mode = Math.random() > 0.5 ? "attaque" : "defense";

  aiField.push(card);
  aiDeck.splice(idx, 1);

  nextTurn();
}


function piocher() {
  if (currentTurn !== "player") { showNotification("Pas votre tour !", "pink"); return; }
  if (hand.length >= 5) { showNotification("Main pleine !", "pink"); return; }
  if (!playDeck.length) { showNotification("Plus de cartes !", "pink"); return; }

  const i = Math.floor(Math.random() * playDeck.length);
  const card = playDeck[i];
  hand.push({ ...card });
  card.quantity--;

  if (card.quantity <= 0) playDeck = playDeck.filter(c => c.id !== card.id);

  renderGame();
  showNotification(`${card.name} piochée !`, "green");
}


function endTurn() {
  if (currentTurn !== "player") return;
  nextTurn();
}

window.addEventListener("DOMContentLoaded", () => {
  updateCartCount();

  if (window.location.pathname.includes("play.html")) {
    playDeck = JSON.parse(JSON.stringify(getMyDeck()));
    aiDeck = JSON.parse(JSON.stringify(getMyDeck()));
    renderGame();
  } else if (window.location.pathname.includes("Favorites.html")) {
    displayFavorites();
  } else if (window.location.pathname.includes("my_deck.html")) {
    displayMyDeck();
  } else if (window.location.pathname.includes("carte.html")) {
    displayCartItems();
  } else if (window.location.pathname.includes("market.html")) {
    paginate();
  }
});
