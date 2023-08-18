import { motion } from 'framer-motion'
function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div class="container-sm">
        <div>
          <h1>This is the Projects page</h1>
        </div>
      </div>
    </motion.div>
  )
}
export default Projects;