import { motion } from 'framer-motion'
function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div class="container-sm">
        <div>
          <h1>This is the Contact Page</h1>
        </div>
      </div>
    </motion.div>
  )
}
export default Contact;