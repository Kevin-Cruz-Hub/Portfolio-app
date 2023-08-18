import { motion } from 'framer-motion'
function Home() {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="container-sm">
        <div className="flex items-center justify-center flex-col">
          <motion.div
             className="box"
             whileHover={{ scale: 1.1 }}
             transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img src="https://images.unsplash.com/photo-1615756257997-2bad02de466d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YW5pbWF0ZWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=900&q=60" alt="me" className="h-96 mt-40 mb-5 rounded-2xl shadow-white" />
          </motion.div>
          <h1>A Growing Software Engineer</h1>
        </div>
      </div>
    </motion.div>
  )
}
export default Home