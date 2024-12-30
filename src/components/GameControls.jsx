// Buttons (Hit, Stand, Double, Split, Quit) for the player to interact with the game

const GameControls = () => {
  return (
    <div className='grid grid-cols-5'>
    <h1>Game Controls</h1>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Hit</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Stand</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Double</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Split</button>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Quit</button>
    </div>
  )
}

export default GameControls