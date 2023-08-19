import { motion } from 'framer-motion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';

function Skills() {
  const Skills = [{
    ek: 1,
    Skill: 'HTML',
    def: 'Hypertext Markup Language, a standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.'
  },
  {
    ek: 2,
    Skill: 'CSS',
    def: 'Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.'
  },
  {
    ek: 3,
    Skill: 'JavaScript',
    def: 'JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.'
  },
  {
    ek: 4,
    Skill: 'Python',
    def: 'Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development'
  },
  {
    ek: 5,
    Skill: 'Bootstrap',
    def: 'Bootstrap is the most popular CSS Framework for developing responsive and mobile-first websites'
  },
  {
    ek: 6,
    Skill: 'SQL',
    def: 'Structured query language (SQL) is a programming language for storing and processing information in a relational database.'
  },
  {
    ek: 7,
    Skill: 'Linux Terminal',
    def: 'Kali Linux/Ubuntu, The Linux terminal is application software that runs on commands. This text-based app provides a command-line interface (CLI) to control & perform operations on Linux computers. The "terminal" is one of the most widely-used tools all Linux operating systems deliver as a default application. '
  },
  {
    ek: 8,
    Skill: 'Microsoft Office',
    def: 'The Microsoft Office 365 suite is a hosted, online version of the traditional installed version of Microsoft Office software. This online service is subscription-based and includes Office, SharePoint Online,and Microsoft Office Web Apps. '
  },
  {
    ek: 9,
    Skill: 'GitHub',
    def: 'GitHub is an online software development platform. It\'s used for storing, tracking, and collaborating on software projects.'
  },
  {
    ek: 10,
    Skill: 'React',
    def: 'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'
  },
  {
    ek: 11,
    Skill: 'MongoDB',
    def: 'MongoDB is a non-relational document database that provides support for JSON-like storage. The MongoDB database has a flexible data model that enables you to store unstructured data'
  },
  {
    ek: 12,
    Skill: 'Nodejs',
    def: 'js (Node) is an open source, cross-platform runtime environment for executing JavaScript code. Node is used extensively for server-side programming, making it possible for developers to use JavaScript for client-side and server-side code without needing to learn an additional language.'
  }
  // },
  // {
  //   ek: ,
  //   Skill: '',
  //   def: ''
  // }
  // },
  // {
  //   ek: ,
  //   Skill: '',
  //   def: ''
  // }
]

  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{color:'greenyellow'  }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth }}
    >
      <div className="container-sm">
        <div className='flex justify-center items-center flex-col'>
          <h1 className="text-6xl mb-3">Skills</h1>
          <Accordion className='flex flex-wrap flex-col'>
            {
              Skills.map((skills)=>
            <Card className='w-96'>
              <Card.Header className='bg-slate-900'>
                <CustomToggle eventKey={skills.ek} className='ease-in duration-300'><p>{skills.Skill}</p></CustomToggle>
              </Card.Header>
              <Accordion.Collapse eventKey={skills.ek} className='ease-in duration-300'>
                <Card.Body>{skills.def}</Card.Body>
              </Accordion.Collapse>
            </Card>
              )
            }
            
          </Accordion>
        </div>
      </div>
    </motion.div >
  )
}
export default Skills