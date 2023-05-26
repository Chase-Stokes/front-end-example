import React, {useState} from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
//@ts-ignore
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu: React.FC = () => {
  return (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#gpt'>What is GPT3?</a></p>
      <p><a href='#possibility'>Open AI</a></p>
      <p><a href='#features'>Case Studies</a></p>
      <p><a href='#blog'>Library</a></p>
    </>
  )
}

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);
  return (
    <div className='gpt_navbar'>
      <div className='gpt_navbar_links'>
        <div className='gpt_navbar_links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt_navbar_links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt_navbar_sign'>
        <p>Sign In</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='gpt_navbar_menu'>
        {toggleMenu ? <RiCloseLine color='#fff' onClick={(() => setToggleMenu(false))} /> : <RiMenuLine color='#fff' onClick={(() => setToggleMenu(true))} />}
        {toggleMenu && (
          <div className='gpt_navbar_menu_container scale-up-center'>
            <div className='gpt_navbar_menu_container_links'>
              <Menu />
              <div className='gpt_navbar_menu_container_links_sign'>
                <p>Sign In</p>
                <button type='button'>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>  
    </div>
  );
}

export default Navbar;