import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <Link to={'/'}><div>Home</div></Link>
      <Link to={'/about'}><div>About</div></Link>
      <Link to={'/skills'}><div>Skills</div></Link>
      <Link to={'/projects'}><div>Projects</div></Link>
      <Link to={'/contact'}><div>Contact</div></Link>
    </div>
  )
}
export default Navbar;