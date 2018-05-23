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
let deck = createDeck();

for (let i = 0; i < deck.length; i++) {
  console.log(dock[i]);
}

let playerCard = [deck[0], deck[2]];

console.log('Welcome to Blackjack!');

console.log('You are dealth: ');
console.log(' ' + playerCard[0]);
console.log(' ' + playerCard[1]);
console.log(' ' + playerCard[2]);
console.log(' ' + playerCard[3]);
