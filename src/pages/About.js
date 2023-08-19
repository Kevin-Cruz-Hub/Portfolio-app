import { motion } from 'framer-motion'
function About() {
  const afiliates = ['https://www.monroecollege.edu/sites/default/files/2021-06/GraduationFacebookBackgrounds.png', 'https://images.credly.com/images/1d9d2038-abf7-49b4-a8db-c6fb884dfdb5/blob.png', 'https://static.wixstatic.com/media/71febe_199e81aa24c54776afd4631127249adf~mv2.jpg/v1/fill/w_406,h_68,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/publicolor_logo__magenta_rgb.jpg', 'https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/520/original/logos-per-scholas-02.jpg', 'https://www.npower.org/wp-content/uploads/2021/01/NP-Social-Default.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/2048px-Coursera-Logo_600x600.svg.png']
  const interests = [
    {
      activity: 'Judo',
      img: 'https://c8.alamy.com/comp/KHY0KD/judo-illustration-KHY0KD.jpg'
    }
    , {
      activity: 'Muay Thai',
      img: 'https://as1.ftcdn.net/v2/jpg/01/80/22/42/1000_F_180224254_kj2Hccjpag5vfQmGIVOK7aS57Hrz2XJc.jpg'
    },
    {
      activity: 'Cooking',
      img: 'https://t4.ftcdn.net/jpg/03/32/75/39/360_F_332753934_tBacXEgxnVplFBRyKbCif49jh0Wz89ns.jpg'
    },
    {
      activity: 'Coding',
      img: 'https://woz-u.com/wp-content/uploads/2022/06/Evolution-of-Coding-scaled.jpg'
    },
    {
      activity: 'Gaming',
      img: 'https://builtin.com/sites/www.builtin.com/files/styles/og/public/2022-09/gaming.png'
    }
    ,
    {
      activity: 'Anime',
      img: 'https://img.asmedia.epimg.net/resizer/Qz7jHTJFDLeCAmVgfhOO666FuDo=/360x203/cloudfront-eu-central-1.images.arcpublishing.com/diarioas/7FLY3ULLSRH2VCC3DDTEQDXMKI.jpg'
    }
    ,
    {
      activity: 'Learning New Things',
      img: 'https://reputationtoday.in/wp-content/uploads/2020/05/how-design-thinking-transforming-learning-experience-free-ebook-777x437.jpg'
    }
    ,
    {
      activity: 'Art',
      img: 'https://static.displate.com/280x392/displate/2023-03-23/a6be6290e8f7595f681810c7945370a9_27a2286b8e7ea5899a44b2a501dafc5a.jpg'
    }
    ,
    {
      activity: 'Science',
      img: 'https://beyondexclamation.com/wp-content/uploads/2020/12/10-1.jpg'
    }
    ,
    {
      activity: 'Math',
      img: 'https://img.freepik.com/free-vector/math-background_23-2148144700.jpg'
    }
  ]
  return (
    <motion.div
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth}}
    >
      <div className="container-sm mt-10">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl mb-3">About</h1>
          <p>
            My name is Kevin Cruz, I have a background in customer service,
            programming, and Computer Information Systems. I am proficient
            with hardware/software troubleshooting, frontend development,
            python, and googling. I graduated with a Bachelor's Degree in
            Computer Information Systems from Monroe College after graduating
            I earned my Security+ and a few other Google IT certifications,
            currently I am training at Per Scholas to become a
            Software Engineer. Growing up I volunteered at a program called
            Publicolor where I received an abundance of encouragement and guidance growing up
            that aided in me pursuing my college degree. I am interested in gaining
            knowledge in this field to develop my skills and be able to
            thrive in any position I am fortunate enough to earn.
          </p>
          <div className="flex flex-wrap m-10">
            {
              afiliates.map((close, index) =>
                <motion.div
                  className="box"
                  whileHover={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <div className="m-2"><img src={close} key={index} alt="img" className="h-20 rounded-xl" /></div>
                </motion.div>
              )
            }
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <h1 className="text-6xl mb-3">Interests</h1>
          <div className='flex flex-wrap'>
            {
              interests.map((interest, index) =>
                <motion.div
                  className="box"
                  whileHover={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <div className='m-2' key={index}>
                    <img src={interest.img} alt='img' className="h-20 rounded-xl" />
                    <p>{interest.activity}</p>
                  </div>
                </motion.div>)
            }
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default About;