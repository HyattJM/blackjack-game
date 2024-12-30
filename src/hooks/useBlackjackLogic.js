import { useState } from "react"
import { createDeck, shuffleDeck } from "../utils/deckUtils"

const useBlackjackLogic = () => {
  // Initial State
  const [deck, setDeck] = useState(shuffleDeck(createDeck()))
  const [playerHand, setPlayerHand] = useState([])
  const [dealerHand, setDealerHand] = useState([])
  const [gameStatus, setGameStatus] = useState("waiting") // waiting | playing | win | lose | draw

  // Utility function to calculate hand value
  const calculateHandValue = (hand) => {
    let value = 0
    let aces = 0

    hand.forEach((card) => {
      if (card.value === "A") {
        aces += 1
        value += 11 // Count ace as 11 initially
      } else if (["K", "Q", "J"].includes(card.value)) {
        value += 10
      } else {
        value += parseInt(card.value, 10)
      }
    })

    // Adjust for aces if value exceeds 21
    while (value > 21 && aces > 0) {
      value -= 10
      aces -= 1
    }

    return value
  }

  // Deal initial cards
  const dealCards = () => {
    const newDeck = [...deck]
    setPlayerHand([newDeck.pop(), newDeck.pop()])
    setDealerHand([newDeck.pop(), newDeck.pop()])
    setDeck(newDeck)
    setGameStatus("playing")
  }

  // Player action: Hit
  const playerHit = () => {
    if (gameStatus !== "playing") return

    const newDeck = [...deck]
    const newCard = newDeck.pop()
    setPlayerHand((prev) => [...prev, newCard])
    setDeck(newDeck)

    const playerValue = calculateHandValue([...playerHand, newCard])
    if (playerValue > 21) {
      setGameStatus("lose") // Player busts
    }
  }

  // Dealer action
  const dealerTurn = () => {
    let newDeck = [...deck]
    let currentDealerHand = [...dealerHand]

    while (calculateHandValue(currentDealerHand) < 17) {
      const newCard = newDeck.pop()
      currentDealerHand.push(newCard)
    }

    setDealerHand(currentDealerHand)
    setDeck(newDeck)
    evaluateGame(currentDealerHand)
  }

  // Evaluate game outcome
  const evaluateGame = (dealerFinalHand) => {
    const playerValue = calculateHandValue(playerHand)
    const dealerValue = calculateHandValue(dealerFinalHand)

    if (dealerValue > 21 || playerValue > dealerValue) {
      setGameStatus("win")
    } else if (playerValue < dealerValue) {
      setGameStatus("lose")
    } else {
      setGameStatus("draw")
    }
  }

  // Restart the game
  const restartGame = () => {
    setDeck(shuffleDeck(createDeck()))
    setPlayerHand([])
    setDealerHand([])
    setGameStatus("waiting")
  }

  return {
    playerHand,
    dealerHand,
    gameStatus,
    actions: {
      dealCards,
      playerHit,
      dealerTurn,
      restartGame,
    },
  }
}

export default useBlackjackLogic
