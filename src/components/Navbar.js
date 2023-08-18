import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <div className='flex justify-around p-4 bg-slate-900 text-yellow-300 font-black text-2xl'>
      <Link to={'/'}><div className='ease-in duration-200 hover:text-yellow-600 active:text-yellow-500'>Home</div></Link>
      <Link to={'/about'}><div className='ease-in duration-200 hover:text-yellow-600 active:text-yellow-500'>About</div></Link>
      <Link to={'/skills'}><div className='ease-in duration-200 hover:text-yellow-600 active:text-yellow-500'>Skills</div></Link>
      <Link to={'/projects'}><div className='ease-in duration-200 hover:text-yellow-600 active:text-yellow-500'>Projects</div></Link>
      <Link to={'/contact'}><div className='ease-in duration-200 hover:text-yellow-600 active:text-yellow-500'>Contact</div></Link>
    </div>
  )
}
export default Navbar;