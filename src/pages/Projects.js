import { motion } from 'framer-motion'
function Projects() {
  return (

    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth}}
    >
      <div className="container-sm">
        <div className='text-6xl mb-9 flex justify-center'>
          <h1>Projects</h1>
        </div>
          <div className='flex justify-around flex-row flex-wrap'>
            <a href='https://contact-app-two-gray.vercel.app/'><img src={require('../images/Contacts-app.png')} alt='work' className='h-56 mb-5 border-4 border-yellow-400 ease-in duration-200 hover:border-green-600 rounded-lg'/></a>
            <a href='https://crypto-prices-app-chi.vercel.app/'><img src={require('../images/Crypto-app.png')} alt='work' className='h-56 border-4 border-yellow-400 ease-in duration-200 hover:border-green-600 rounded-lg'/></a>
            <a href='#'><img src={require('../images/Movie-app.png')} alt='work' className='h-56 border-4 border-yellow-400 ease-in duration-200 hover:border-green-600 rounded-lg'/></a>
            <a href='#'><img src={require('../images/RPS.png')} alt='work' className='h-56 border-4 border-yellow-400 ease-in duration-200 hover:border-green-600 rounded-lg'/></a>
          </div>
      </div>
    </motion.div>
  )
}
export default Projects;