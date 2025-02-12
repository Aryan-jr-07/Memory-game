const symbols = ['1', '2', '3', '4', '5', '6', '7', '8'];
let cards = [...symbols, ...symbols].sort(() => Math.random() - 0.5);

const gameBoard = document.getElementById("gameBoard");
let flippedCards = [], matchedPairs = 0;

cards.forEach(symbol => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.symbol = symbol;
    card.addEventListener("click", function () {
        if (flippedCards.length < 2 && !this.classList.contains("flipped")) {
            this.textContent = this.dataset.symbol;
            this.classList.add("flipped");
            flippedCards.push(this);
        }

        if (flippedCards.length === 2) {
            setTimeout(() => {
                const [card1, card2] = flippedCards;
                if (card1.dataset.symbol === card2.dataset.symbol) {
                    matchedPairs++;
                    if (matchedPairs === symbols.length) setTimeout(() => alert("You win!"), 500);
                } else {
                    card1.classList.remove("flipped"), card2.classList.remove("flipped");
                    card1.textContent = "", card2.textContent = "";
                }
                flippedCards = [];
            }, 1000);
        }
    });
    gameBoard.appendChild(card);
});