import React from "react"
import Hand from "./components/Hand"
import useBlackjackLogic from "./hooks/useBlackjackLogic"

const App = () => {
  const { playerHand, dealerHand, gameStatus, actions } = useBlackjackLogic()

  return (
    <div className='min-h-screen bg-gradient-to-b from-green-700 to-green-900 text-white flex flex-col items-center p-4'>
      <h1 className='text-4xl font-extrabold mb-8'>Blackjack</h1>
      <div className='w-full max-w-3xl p-4 bg-green-600 rounded-lg shadow-md text-center'>
        <Hand
          title="Dealer's Hand"
          cards={dealerHand}
          hidden={gameStatus === "playing"}
        />
        <Hand title="Player's Hand" cards={playerHand} />
        <div className='flex flex-col items-center mt-4 space-y-4'>
          {gameStatus === "waiting" && (
            <button
              className='px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded text-xl font-bold transition-all'
              onClick={actions.dealCards}
            >
              Deal Cards
            </button>
          )}
          {gameStatus === "playing" && (
            <div className='flex space-x-4'>
              <button
                className='px-6 py-3 bg-blue-500 hover:bg-blue-700 rounded text-xl font-bold transition-all'
                onClick={actions.playerHit}
              >
                Hit
              </button>
              <button
                className='px-6 py-3 bg-red-500 hover:bg-red-700 rounded text-xl font-bold transition-all'
                onClick={actions.dealerTurn}
              >
                Stand
              </button>
            </div>
          )}
          {gameStatus !== "playing" && gameStatus !== "waiting" && (
            <button
              className='px-6 py-3 bg-green-500 hover:bg-green-700 rounded text-xl font-bold transition-all'
              onClick={actions.restartGame}
            >
              Restart Game
            </button>
          )}
        </div>
        {gameStatus !== "playing" && gameStatus !== "waiting" && (
          <p
            className={`text-2xl font-extrabold mt-4 ${
              gameStatus === "win"
                ? "text-green-400"
                : gameStatus === "lose"
                  ? "text-red-400"
                  : "text-yellow-400"
            }`}
          >
            {gameStatus === "win"
              ? "🎉 You Win!"
              : gameStatus === "lose"
                ? "😢 You Lose!"
                : "🤝 It's a Draw!"}
          </p>
        )}
      </div>
    </div>
  )
}

export default App
