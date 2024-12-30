// Generate a standard deck of 52 cards
export const createDeck = () => {
  const suits = ["hearts", "diamonds", "clubs", "spades"]
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ]

  const deck = []
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ value, suit })
    }
  }
  return deck
}

// Shuffle the deck using Fisher-Yates algorithm
export const shuffleDeck = (deck) => {
  const shuffled = [...deck]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[i]]
  }
  return shuffled
}
