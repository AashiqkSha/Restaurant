import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log In / Registration</a>
        <div />
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
              <li><a href="#about" onClick={() => setToggleMenu(false)}>About</a></li>
              <li><a href="#menu" onClick={() => setToggleMenu(false)}>Menu</a></li>
              <li><a href="#awards" onClick={() => setToggleMenu(false)}>Awards</a></li>
              <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;


/**import React from 'react';
import './Navbar.css';
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <img src={images.gericht} alt='app-logo' />
    </div>
    <ul className="nav-links">
      <li className="p__opensans"><a href="#Home">Home</a></li>
      <li className="p__opensans"><a href="#Home">Menu</a></li>
      <li className="p__opensans"><a href="#Home">About</a></li>
      <li className="p__opensans"><a href="#Home">Contact</a></li>
    </ul>
    <div className="nav-login">
      <a className="p__opensans" href="/">LogIn</a>
    <div />  
    <a href='/'className="p__opensans">BookTable</a>
    </div>
    <div className="navbar-smallscreen">
      <GiHamburgerMenu color="#ffff" fontSize={27} onClick={()=>{}} />
      <div className="navbar-smallscreen_overlay flex_center slide-bottom">
        <MdOutlineRestaurantMenu color="#fff" className="overlay_close" fontSize={27} onClick={() => {}}/>
        <ul className="nav-links-smallscreen">
           <li className="p__opensans"><a href="#Home">Home</a></li>
           <li className="p__opensans"><a href="#Home">Menu</a></li>
           <li className="p__opensans"><a href="#Home">About</a></li>
           <li className="p__opensans"><a href="#Home">Contact</a></li>
        </ul>
      
      </div>
    </div>

  </nav>
  
);

export default Navbar;**/
