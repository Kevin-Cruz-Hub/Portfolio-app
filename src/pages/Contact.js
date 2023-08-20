import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

function Contact() {
  const [fact, setFact] = useState([])
  console.log(fact)
  const apiKey = process.env.REACT_APP_PORTFOLIO_API_KEY
  // const category = 'success'

  // Get Api data
  const options = {
    method: 'GET',
    headers: { 'x-api-key': apiKey }
  }
  const mood = ['happiness', 'life', 'learning', 'inspirational', 'dreams']
  let rand = Math.floor(Math.random() * mood.length -1)
  console.log(rand)
  const url = `https://api.api-ninjas.com/v1/quotes?category=${mood[rand]}`


  useEffect(() => {
    const getFact = async () => {
      fetch(url, options)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
          setFact(data)
        })
        .catch(err => {
          console.log(`error ${err}`)
        });
    }
    getFact()

  }, [])



  // fact.map((quote) => console.log(quote.quote))
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <div className="container-sm flex justify-center flex-col">
        <div>
          <h1 className='text-6xl m-10'>Contact Page</h1>
        </div>
        <div className='text-2xl'>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Please enter name" />
              <Form.Label>Phone Number:</Form.Label>
              <Form.Control type="number" placeholder="Phone Number" />
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Have a question, Want to work together?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <button>Submit</button>
          </Form>
        </div>
        <div className='m-10'>
          <p>Random Quote:</p>
          {
            fact.map((quote) => 
              <>
                <p className='text-2xl'>{quote.quote}</p>
                <p>Quoted by: {quote.author}</p>
                <p className=''>Category: {quote.category}</p>
              </>
            
            )
          }
        </div>
      </div>
    </motion.div>
  )
}
export default Contact;