import React from 'react'
import '../css/Footer.css'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsFillPeopleFill} from 'react-icons/bs'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'

export default function Footer() {
  return (
    <div style={{display:"flex", justifyContent: "center", background: "#F6F6F6"}}>
      <div className="footer">
        <div className="footer-two">
        <div className="footer-left">
            <div className="footer-logo2"><img src='https://beton2.netlify.app/static/media/Group%20144.2037305d3f00deaa1fc8.png' alt="" /></div>
                <p className='footer-emil'>zakaz@beton-taxi.ru</p>
                <div className="footer-btns">
                    <button className='footer-btn1'><BsFillPeopleFill className='ic1'/>Личный кабинет</button>
                    <button className='footer-btn'><BsFillTelephoneFill className='ic1'/>Перезвоните мне</button>
                </div>
        </div>
        <div className="footer-midle">
            <div className="footer-links">
                <p><a href="#" >Новости</a></p>
                <p><a href="#" >Калькуляторы</a></p>
                <p><a href="#" >Партнеры</a></p>
                <p><a href="#" >Стать партнером</a></p>
                <p><a href="#" >Программа лояльности</a></p>
            </div>

            <div className="footer-links2">
                <p>Гарантия</p>
                <p>Оставить претензию</p>
            </div>
        </div>

        </div>
        <div className="footer-right">
            <div style={{marginRight: "1rem"}} className="footer-icon"><FaTelegramPlane/></div>
            <div className="footer-icon"><BsWhatsapp/></div>
        </div>
      </div>
    </div>
  )
}