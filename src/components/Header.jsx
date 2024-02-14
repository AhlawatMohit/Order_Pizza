import { motion } from "framer-motion"
import Hpizza from "../assets/Hpizza.png"
import { Link } from "react-router-dom"

const Header = () => {
  return (
<header>
    <motion.div animate={{ opacity: 0.9 }} className="logo">
    <Link to='/'>
        <img className="logo" src={Hpizza} alt="Pizza Logo" />
        </Link>
    </motion.div>
    <motion.div initial={{ y: -250 }} animate={{ y: -10 }} className="title">
        <h1>Pizza Bakery</h1>
    </motion.div>
</header>
  )
}

export default Header