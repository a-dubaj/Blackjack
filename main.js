let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spaded'];
let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine', 'Eight', 'Seven', 'Six',
  'Five', 'Four', 'Three', 'Two'
];

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
      deck.push(value[valueIdx] + ' of ' + suits[suitIdx]);
    }
  }
  return deck;
}

function getNextCard() {
  return deck.shift();
}

let deck = createDeck();

for (let i = 0; i < deck.length; i++) {
  console.log(dock[i]);
}

let playerCard = [getNextCard(), getNextCard()];

console.log('Welcome to Blackjack!');

console.log('You are dealth: ');
console.log(' ' + playerCard[0]);
console.log(' ' + playerCard[1]);
