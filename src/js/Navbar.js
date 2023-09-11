import React from 'react'
import '../css/Navbar.css'
import {HiOutlineNewspaper} from 'react-icons/hi'
import {BsFillCalculatorFill} from 'react-icons/bs'
import {RiFileEditLine} from 'react-icons/ri'
import {ImPriceTags} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaRegHandshake} from 'react-icons/fa'
import logo1 from '../img/logo.jpeg'
import logo2 from '../img/phone.jpeg'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'

function bosh() {
  window.location="/Home"
}

function menu() {
  document.querySelector('.nav-links').style = 'position: absolute; right: 0; top: 0;'
  document.querySelector('nav a').style = 'display:block;'
}


export default function Navbar() {
  // const navRef = useRef();

  // const showNavbar = () => {
  //   navRef.current.classList.toggle("responsive_nav");
  // }

  return (
    <div>
       <div className="navbar">
        <div className="nav-2">
        <div className="nav-logo">
          <img src={logo1} onClick={()=> bosh()} className='logo1' />
        </div>
        <div className="nav-links">
          <nav>
            <a href="#" ><HiOutlineNewspaper className='ico'/>Новости</a>
            <a href="#" ><BsFillCalculatorFill className='ic'/>Калькуляторы</a>
            <a href="#" ><FaRegHandshake className='ico'/>Партнеры</a>
            <a href="#" ><RiFileEditLine className='ic'/>Стать партнером</a>
            <a href="#" ><ImPriceTags className='ic'/>Программа лояльности</a>
            {/* <button className='nav-btn nav-close-btn' onClick={showNavbar}>
              <FaTimes/>
            </button> */}
          </nav>
          {/* <button className='nav-btn' onClick={showNavbar}> */}
            {/* <FaBars/>
          </button> */}

        </div>
        <div className="nav-logo2">
            <img src={logo2} className='logo2' alt="" />
            <div className="nav-ic">
              <MdOutlineManageAccounts className='acount' id='acount'/>
              <AiOutlineMenu onClick={()=> menu()} className='bx-x' id='menu-bars'/>
            </div>
        </div>
        </div>
        
        <div className="nav-bot-link">
          <h4>Гарантия</h4>
          <h4>Оставить претензию</h4>
          <button className='nav-btni'><BsFillTelephoneFill className='ic1'/>Перезвоните мне</button>
          <button className='nav-btni2'><BsFillPeopleFill className='ic1'/>Личный кабинет</button>
        </div>
       </div>
    </div>
  )
}
