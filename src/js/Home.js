import React from 'react'
import '../css/Home.css'
import iphone from '../img/iphone.jpeg'
import pizza1 from '../img/pizza1.jpeg'
import pizza2 from '../img/pizza2.jpeg'
import ag from '../img/appgallery.jpeg'
import ap from '../img/appstore.jpeg'
import ge from '../img/getapps.jpeg'
import go from '../img/googleplay.jpeg'
import ru from '../img/rustore.jpeg'
import bet from '../img/betoni.jpeg'
import qum from '../img/qum.jpeg'
import cem from '../img/cement.jpeg'
import zakazz from '../img/zakazz.jpeg'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'

function cards1() {
  document.querySelector('.min-z1').style = "border: 1px solid #FFCB13"
  document.querySelector('.min-z2').style = "border: none"
  document.querySelector('.min-z3').style = "border: none"
  document.querySelector('.min-z4').style = "border: none"
}

function cards2() {
  document.querySelector('.min-z2').style = "border: 1px solid #FFCB13"
  document.querySelector('.min-z1').style = "border: none"
  document.querySelector('.min-z3').style = "border: none"
  document.querySelector('.min-z4').style = "border: none"
}

function cards3() {
  document.querySelector('.min-z3').style = "border: 1px solid #FFCB13"
  document.querySelector('.min-z2').style = "border: none"
  document.querySelector('.min-z1').style = "border: none"
  document.querySelector('.min-z4').style = "border: none"
}

function cards4() {
  document.querySelector('.min-z4').style = "border: 1px solid #FFCB13"
  document.querySelector('.min-z2').style = "border: none"
  document.querySelector('.min-z3').style = "border: none"
  document.querySelector('.min-z1').style = "border: none"
}

export default function Home() {
  return (
    <div>
      <div className="container">
        <div className="baner">
            <div className="b-left">
                <div className="dum">
                <img className='ip' src={iphone} alt="" /></div>
                <div className="k-dum"></div>
            </div>
            <div className="orta">
                <h1><span>Купить бетон</span> также просто, <br />как заказать пиццу</h1>
                <p>Скачивай наше приложение!</p>
            </div>
            <div className="progg">
                <img src={ag} alt="" />
                <img src={ap} alt="" />
                <img src={ge} alt="" />
                <img src={go} alt="" />
                <img src={ru} alt="" />
                <img src={ag} alt="" />
            </div>
            <div className="b-right">
                <img className='piz2' src={pizza2} alt="" />
                <img className='piz1' src={pizza1} alt="" />
            </div>
            <div className="dale"><BsArrowRight className='icc'/></div>
        </div>

        <div className="header">
          <div className="zakaz">
            <div className="z-h1">
              <h1 className='z-h01'><img src={zakazz} alt="" />Заказ бетона</h1>
            </div>

            <div className="k-zakaz">
              <p className='k-p'>Что необходимо?</p>
              
              <div className="big-z">
              <div onClick={()=> cards1()} className="min-z1">
                <img src={bet} alt="" />
                <p>Бетон</p>
              </div>

              <div onClick={()=> cards2()} className="min-z2">
                <img src={cem} alt="" />
                <p>Пескобетон</p>
              </div>

              <div onClick={()=> cards3()} className="min-z3">
                <img src={qum} alt="" />
                <p>Строительный <br/>раствор</p>
              </div>

              <div onClick={()=> cards4()} className="min-z4">
                <h1>Специальный бетон</h1>
                <p>Отправим ваш запрос <br />на все заводы</p>
              </div>
              </div>

              <div className="z-rage">
                <div className="k-rage"></div>
              </div>

              <div className="z-btns">
                <button className='z-btn1'><a href="#"><BsArrowLeft className='b-i1'/>Назад</a></button>
                <button className='z-btn2'><a href="#">Далее<BsArrowRight className='b-i2'/></a></button>
              </div>

            </div>
          </div>

          <div className="h-left">
          <div className="h-info">
            <h1>Немного <br />о нас</h1>
          </div>
              <p>Сервис «БЕТОН ТАКСИ» предоставляет вам ряд уникальных преимуществ. Во-первых, это обеспечение оперативной поставки бетона, позволяющей сэкономить время и деньги без отставания от графика строительства. Во-вторых, это гарантия высокого качества бетона, поскольку поставки осуществляются только с заводов проверенных поставщиков.</p>
          </div>

        </div>
      </div>
    </div>
  )
}
