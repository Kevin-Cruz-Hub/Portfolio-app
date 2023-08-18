import { motion } from 'framer-motion'
import Accordion from 'react-bootstrap/Accordion'
function Skills() {
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="container-sm">
        <div className='flex justify-center items-center flex-col'>
        <h1 className="text-6xl mb-3">Skills</h1>
          <div className='bg-slate-500'>
            <Accordion className='bg-slate-500'>
              <Accordion.Item eventKey="0">
                <Accordion.Header className='bg-slate-900 ease-in'><p className='text-yellow-300'>HTML</p></Accordion.Header>
                <Accordion.Body className='bg-slate-500 ease-in'>
                 HTML is a standard language for web development .
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header className='bg-slate-600'>HTML</Accordion.Header>
                <Accordion.Body className='bg-slate-500'>
                 HTML is a standard language for web development .
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Skills