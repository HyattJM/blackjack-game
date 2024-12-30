import React from "react"
import { motion } from "framer-motion"

const Card = ({ card, hidden = false }) => {
  const suitSymbols = {
    hearts: "♥",
    diamonds: "♦",
    clubs: "♣",
    spades: "♠",
  }

  const cardSuit = suitSymbols[card?.suit] || "?"

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`w-16 h-24 rounded-lg flex flex-col items-center justify-center shadow-lg transform ${
        hidden ? "bg-gray-600" : "bg-white border border-gray-400"
      } hover:scale-105 transition-all`}
    >
      {hidden ? (
        <span className='text-gray-300 text-xl font-bold'>?</span>
      ) : (
        <>
          <p className='text-sm font-bold'>{card?.value}</p>
          <p
            className={`text-2xl ${
              card?.suit === "hearts" || card?.suit === "diamonds"
                ? "text-red-500"
                : "text-black"
            }`}
          >
            {cardSuit}
          </p>
        </>
      )}
    </motion.div>
  )
}

export default Card
