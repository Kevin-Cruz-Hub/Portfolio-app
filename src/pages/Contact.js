import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Form';

function Contact() {
  const [fact, setFact] = useState(null)
  console.log(fact)
  const apiKey = process.env.REACT_APP_PORTFOLIO_API_KEY
  // const category = 'success'

  // Get Api data
  const options = {
    method: 'GET',
    headers: { 'x-api-key': apiKey }
  }
  const mood=['happiness', 'success', 'learning']
  let rand = Math.floor(Math.random() * mood.length)
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
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <div className="container-sm flex justify-center flex-col">
        <div>
          <h1 className='text-6xl m-8'>Contact Page</h1>
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
              <Form.Label>What would you like to tell me?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </div>
        <div>
          <p>Random Fact:</p>
          {
            
          }
        </div>
      </div>
    </motion.div>
  )
}
export default Contact;