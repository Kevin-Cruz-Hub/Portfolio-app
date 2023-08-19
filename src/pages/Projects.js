import { motion } from 'framer-motion'

function Projects() {
  return (

    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth}}
    >
      <div className="container-sm">
        <div className='text-6xl flex justify-center'>
          <h1>Projects</h1>
        </div>
          <div>
            <a href='https://contact-app-two-gray.vercel.app/'><img src={require('../images/Contacts-app.png')} alt='work'/></a>
            <a href='https://crypto-prices-app-chi.vercel.app/'><img src={require('../images/Crypto-app.png')} alt='work'/></a>
          </div>
      </div>
    </motion.div>
  )
}
export default Projects;