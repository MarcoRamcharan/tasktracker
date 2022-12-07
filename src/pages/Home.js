import { Link } from "react-router-dom";
import {motion} from 'framer-motion'

function Home() {

  return (
    <div className="home">
      <h1>MARCO RMCHARAN</h1>
      <Link to='/dashboard/'>go to dashboard</Link>
      {/*<input type="text"
         value={email}
         onChange={(e) => setEmail(e.target.value)} 
      */}
      {/*<input type="text"
         value={password}
         onChange={(e) => setPassword(e.target.value)} 
      */}
    </div>
  )
}

export default Home
