const symbols = ['1', '2', '3', '4', '5', '6', '7', '8'];
let cards = [...symbols, ...symbols];
cards.sort(() => 0.5 - Math.random());

const gameBoard = document.getElementById("gameBoard");
let flippedCards = [];
let matchedPairs = 0;

cards.forEach((symbol, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.dataset.index = index;
    card.addEventListener("click", flipCard);
    gameBoard.appendChild(card);
});

function flipCard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
        this.textContent = this.dataset.symbol;
        this.classList.add("flipped");
        flippedCards.push(this);
    }

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    if (card1.dataset.symbol === card2.dataset.symbol) {
        matchedPairs++;
        flippedCards = [];
        if (matchedPairs === symbols.length) {
            setTimeout(() => alert("You win!"), 500);
        }
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.textContent = "";
        card2.textContent = "";
        flippedCards = [];
    }
}