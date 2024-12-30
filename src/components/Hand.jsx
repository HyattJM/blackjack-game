import React from "react"
import Card from "./Card"
import { motion } from "framer-motion"

const Hand = ({ title, cards, hidden = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='mb-6 text-center'
    >
      <h2 className='text-2xl font-bold mb-4'>{title}</h2>
      <motion.div
        className='flex justify-center space-x-4'
        initial='hidden'
        animate='visible'
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {cards.map((card, index) => (
          <Card key={index} card={card} hidden={hidden && index > 0} />
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Hand
