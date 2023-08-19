import {useState, useEffect} from 'react'
import { motion } from 'framer-motion'
function Contact() {
  const [word, setWord] = useState(null)
  const apiKey = process.env.REACT_APP_PORTFOLIO_API_KEY
  const url = `https://random-words5.p.rapidapi.com/getRandom`

  const getWord = async ()=>{
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)
      setWord(data)
    } catch (error) {
      
    }
  }
  console.log(word)
  // const value = fact[0].quote
  // console.log(fact)
  // Get Api data
  // const getFact = async() =>{
  //   try{
  //     const resp = await fetch(url,{
  //       headers:{
  //         'X-Api-Key':apiKey
  //       }
  //     })
  //     const data = await resp.json()
  //     setFact(data)
  //     // console.log(data)
  //   }catch(e){
  //     console.log('Error fetching data\n',e)
  //   }
  // }

  // useEffect(()=>{
  //   getFact()
  // },[])
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth}}
    >
      <div className="container-sm">
        <div>
          <h1>This is the Contact Page</h1>
          {
          }
        </div>
      </div>
    </motion.div>
  )
}
export default Contact;