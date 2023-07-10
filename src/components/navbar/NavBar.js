import logo from '../../resources/images/Logo.png';

import './navBar.scss';

const NavBar = () => {
  return (
    <nav className='navbar'>
        <a href="#" className="navbar__logo">
            <img src={logo} alt="#" className="navbar__logo__img"/>
        </a>
        <div className="navbar__category">
            <a href="#" className="navbar__home">Home</a>
            <a href="#" className="navbar__exercises">Exercises</a>
        </div>
   </nav>
  )
}

export default NavBar;