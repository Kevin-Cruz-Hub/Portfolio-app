import { motion } from 'framer-motion'
function Home() {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth}}
    >
      <div className="container-sm over">
        <div className="flex items-center justify-center flex-col">
          <motion.div
             className="box"
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src={require('../images/Me.png')} alt='work' className='h-80 m-20 rounded-lg'/>
          </motion.div>
          <h1>A Growing Software Engineer</h1>
        </div>
      </div>
    </motion.div>
  )
}
export default Home