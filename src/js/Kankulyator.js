import React from 'react'
import '../css/Kankulyator.css'
import start from '../img/zakazz.jpeg'
import {BsCheck} from 'react-icons/bs'
import {BiInfoCircle} from 'react-icons/bi'

function kancards() {
    document.querySelector('.kan-cards').style = "border: 1px solid #ffcb13"
    document.querySelector('.check').style = 'display:flex'
    document.querySelector('.check2').style = 'display:none'
    document.querySelector('.check3').style = 'display:none'
    document.querySelector('.check4').style = 'display:none'
    document.querySelector('.kan-cards2').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards3').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards4').style = "1px solid #E9E9E9"
} 

function kancards2() {
    document.querySelector('.kan-cards2').style = "border: 1px solid #ffcb13"
    document.querySelector('.check2').style = 'display:flex'
    document.querySelector('.check').style = 'display:none'
    document.querySelector('.check3').style = 'display:none'
    document.querySelector('.check4').style = 'display:none'
    document.querySelector('.kan-cards').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards3').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards4').style = "1px solid #E9E9E9"
} 

function kancards3() {
    document.querySelector('.kan-cards3').style = "border: 1px solid #ffcb13"
    document.querySelector('.check3').style = 'display:flex'
    document.querySelector('.check4').style = 'display:none'
    document.querySelector('.check2').style = 'display:none'
    document.querySelector('.check').style = 'display:none'
    document.querySelector('.kan-cards2').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards4').style = "1px solid #E9E9E9"
} 

function kancards4() {
    document.querySelector('.kan-cards4').style = "border: 1px solid #ffcb13"
    document.querySelector('.check4').style = 'display:flex'
    document.querySelector('.check3').style = 'display:none'
    document.querySelector('.check2').style = 'display:none'
    document.querySelector('.check').style = 'display:none'
    document.querySelector('.kan-cards2').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards3').style = "1px solid #E9E9E9"
    document.querySelector('.kan-cards').style = "1px solid #E9E9E9"
} 

export default function Kankulyator() {
  return (
    <div style={{overflow:"hidden", background: "#F6F6F6"}}>
      <div className="kan-container">
        <div className="kan-header">
            <h1 className="kan-h01"><img src={start} alt="" />Калькуляторы</h1>
            <p className="kan-bigp">С другой стороны постоянный количественный рост и сфера нашей активности требуют от нас анализа соответствующий условий активизации. Повседневная практика показывает, что постоянный количественный рост и сфера нашей активности играет важную роль в формировании форм развития. Равным образом укрепление и развитие структуры представляет...</p>
            <div className="kan-content">
                <div className="kan-bigcard">
                    <div onClick={()=> kancards()} className="kan-cards">
                        <BiInfoCircle className='in'/>
                        <div className="kc-yellow"><BsCheck className="check"/></div>
                        <img src="https://beton2.netlify.app/static/media/8138748%201.4d3e9eae223ac949c9ec.png" alt="" />
                        <p className='kanC-p'>Фундамент по своим размерам</p>
                    </div>
                    <div onClick={()=> kancards2()} className="kan-cards2">
                    <BiInfoCircle className='in'/>
                        <div className="kc-yellow2"><BsCheck className="check2"/></div>
                        <img src="https://beton2.netlify.app/static/media/2a0ebe8113a93493e6f1a60826688129%201.ced4939b4266835c9d5f.png" alt="" />
                        <p className='kanC-p'>Пескобетон на стяжку</p>
                    </div>
                    <div onClick={()=> kancards3()} className="kan-cards3">
                    <BiInfoCircle className='in'/>
                        <div className="kc-yellow3"><BsCheck className="check3"/></div>
                        <img src="https://beton2.netlify.app/static/media/0bf106c90a0533d17ae2a41ec2bcd5b7%201.7d313ae0664298d53616.png" alt="" />
                        <p className='kanC-p'>Ленточный фундамент</p>
                    </div>
                    <div onClick={()=> kancards4()} className="kan-cards4">
                    <BiInfoCircle className='in'/>
                        <div className="kc-yellow4"><BsCheck className="check4"/></div>
                        <img src="https://beton2.netlify.app/static/media/2%204.310f976c72f46878c3aa.png" alt="" />
                        <p className='kanC-p'>Монолитная плита фундамента</p>
                    </div>
                </div>
                
                <div className="kan-inputs">
                    <div className="ki-small">                   
                        <p>Ширина,м:</p>
                        <input className='ki-input' type="number" id="number" placeholder='6'/>
                    </div>

                    <div className="ki-small">
                        <p>Длина,м:</p>
                        <input className='ki-input' type="number" id="number" placeholder='8'/>
                    </div>

                    <div className="ki-small">
                        <p>Длина,м:</p>
                        <input className='ki-input' type="number" id="number" placeholder='3'/>
                    </div>

                    <div className="ki-small">
                        <p>Марка бетона:</p>
                        <input className='ki-input' type="text" id="number" placeholder='salom'/>
                    </div>            
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
