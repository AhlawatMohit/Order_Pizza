import { Link } from "react-router-dom";
import { motion } from 'framer-motion';


const Home = () => {
  return (
  <>
<motion.div 
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{  duration: 1.5, delay: 1 }}
 className="home container">
    <motion.h2>
    Welcome to Pizza Bakery
    </motion.h2>
    <Link to="/base">
    <motion.button 
    whileHover={{ 
      scale: 1.1,
      textShadow: "0px 0px 20px rgb(225 ,225 ,225)",
      boxShadow: " 0px 0px 20px rgb(225 ,225 ,225)",
       }}
    >
        Create Your Pizza.
    </motion.button>
    </Link>
</motion.div>
  </>
  )
}

export default Home
