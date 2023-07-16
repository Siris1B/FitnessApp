import { Link } from 'react-router-dom';

import logo from '../../resources/images/Logo.png';

import './navBar.scss';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <Link to='/' className="navbar__logo">
            <img src={logo} alt="#" className="navbar__logo__img"/>
        </Link>
        <div className="navbar__category">
            <Link to='/' className="navbar__home">Home</Link>
            <Link to='/' className="navbar__exercises">Exercises</Link>
        </div>
   </nav>
  )
}

export default NavBar;