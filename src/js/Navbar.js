import React from 'react'
import '../css/Navbar.css'
import {HiOutlineNewspaper} from 'react-icons/hi'
import {BsFillCalculatorFill} from 'react-icons/bs'
import {PiFilesFill} from 'react-icons/pi'
import {ImPriceTags} from 'react-icons/im'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillPeopleFill} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import {FaRegHandshake} from 'react-icons/fa'
import {RiMenu3Line} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'
import logo1 from '../img/logo.jpeg'
import {FaHandshakeAngle} from 'react-icons/fa'
import logo2 from '../img/phone.jpeg'
import {MdOutlineManageAccounts} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'

function bosh() {
  window.location="/"
}

function news() {
  window.location="/News"
}

function cal() {
  window.location="/Kankulyator"
}

function menu() {
  document.querySelector('.media-nav').style = 'position: fixed; right: 0; top: 0;'
  document.querySelector('.media-links a').style = 'display:block;'
  document.querySelector('.qora').style = 'display:block'
}

function close() {
  document.querySelector('.media-nav').style = 'position: fixed; right: -700px;'
  document.querySelector('.qora').style = 'display:none'
}


export default function Navbar() {

  return (
    <div>
      <div className="big-navbar">
       <div className="navbar">
        <div className="nav-2">
        <div className="nav-logo">
          <img src={logo1} onClick={()=> bosh()} className='logo1' />
        </div>
        <div className="nav-links">
          <nav>
            <a onClick={()=> news()} href="#" ><HiOutlineNewspaper className='ico'/>Новости</a>
            <a onClick={()=> cal()} href="#" ><BsFillCalculatorFill className='ic'/>Калькуляторы</a>
            <a href="#" ><FaRegHandshake className='ico'/>Партнеры</a>
            <a href="#" ><PiFilesFill className='ic'/>Стать партнером</a>
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
            <img src='https://beton2.netlify.app/static/media/Group%20144.2037305d3f00deaa1fc8.png' className='logo2' alt="" />
            <div className="nav-ic">
              <MdOutlineManageAccounts className='acount' id='acount'/>
              <RiMenu3Line onClick={()=> menu()} className='bx-x' id='menu-bars'/>
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
       
       <div className="media-nav">
          <div className="ic-im">
            <img src={logo1} alt="" className='med-img'/>
            <div className="med-icon"><RiMenu3Line className='med-ic' onClick={()=> close()}/></div>
          </div>
          <div className="media-links">
            <p><a onClick={()=> news()} href="#" ><HiOutlineNewspaper className='med-a'/>Новости</a></p>
            <p><a onClick={()=> cal()} href="#" ><BsFillCalculatorFill className='med-a'/>Калькуляторы</a></p>
            <p><a href="#" ><FaRegHandshake className='med-a'/>Партнеры</a></p>
            <p><a href="#" ><PiFilesFill className='med-a'/>Стать партнером</a></p>
            <p><a href="#" ><ImPriceTags className='med-a'/>Программа лояльности</a></p>
          </div>

          <div className="media-btn">
          <button className='med-btni'><BsFillTelephoneFill className='ic1'/>Перезвоните мне</button>
          <button className='med-btni2'><BsFillPeopleFill className='ic1'/>Личный кабинет</button>
          </div>

          <div className="media-footer">
            <img className='med-logo2' src='https://beton2.netlify.app/static/media/Group%20144.2037305d3f00deaa1fc8.png' alt="" />
          </div>
        </div>
        </div>
    </div>
  )
}