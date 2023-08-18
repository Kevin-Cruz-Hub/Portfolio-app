import React from 'react'
import { motion } from 'framer-motion'
export default function Sidebar() {
  return (

    <div className='flex flex-col absolute top-50 border-double border-3 border-yellow-400'>
      <motion.div
        className="box"
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      ><a href="https://www.linkedin.com/in/kevin-c-26b4b2b3/"><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png' alt='logo' className='h-12 w-75 m-2' /></a>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <a href="https://github.com/Liveitup889"><img src='https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg' alt='logo' className='h-10 w-100' /></a>
      </motion.div>
      <motion.div
        className="box"
        whileHover={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      ><a href="https://docs.google.com/document/d/1M5QFJ-Nqrj53eycxE77YVPQb4Nu1KCqW"><img src='https://t3.ftcdn.net/jpg/03/77/85/04/360_F_377850455_Gk0rRBzegH6YX9SZK9YbgyYyLwrVb9zi.jpg' alt='logo' className='h-10 w-75 m-2' /></a>
      </motion.div>
    </div>


  )
}
