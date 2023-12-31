import React, { useEffect, useState } from 'react'
import '../css/Partners.css'
import axios from 'axios'
import strelka from '../img/strelka.jpeg'
import betonk from '../img/betonk.jpeg'
import kamaz from '../img/kamaz.jpeg'
import shiving from '../img/shiving.jpeg'
import mashina from '../img/mashina.jpeg'


export default function Partners() {
  const[work,setWork] = useState([])

  function send() {
    var newPostData2=new FormData()
    newPostData2.append("type",3)
    newPostData2.append("organizatsiya",document.querySelector("#organizatsiya1").value)
    newPostData2.append("inn",document.querySelector("#inn1").value)
    newPostData2.append("liso_contact",document.querySelector("#liso_contact1").value)
    newPostData2.append("phone",document.querySelector("#phone1").value)
    newPostData2.append("sayt",document.querySelector("#sayt1").value)
    newPostData2.append("email",document.querySelector("#email1").value)
    newPostData2.append("mashina",document.querySelector("#mashina"))
    newPostData2.append("shving",document.querySelector("#shving"))
  
    axios.put(`https://dastafka-back.onrender.com/api/work`,newPostData2).then(res=>{
      // alert("ishladi")
    })
  }
  
  useEffect(() => {
    axios.get(`https://dastafka-back.onrender.com/api/work`).then(res=>{
      setWork(res.data)
      // alert=("iwladi")
    })
  }, [])

  function Pcycle() {
    document.querySelector(".min-cycle").style = 'display:flex; transition: 0.3s ease'
    document.querySelector(".min-cycle1").style = 'display:none'
  }

  function Pcycle1() {
    document.querySelector(".min-cycle1").style = 'display:flex; transition: 0.3s ease'
    document.querySelector(".min-cycle").style = 'display:none'
  }

  return (
    
    <div style={{overflow:"hidden", background: "#F6F6F6"}}>
      <div className="part-container">
        <div className="part-header">

            <div className="l-part-img">

            <div className="part-img-three">
            <div className="part-img-divs"></div>
            <img className='part-hands' src="https://beton2.netlify.app/static/media/5285548%202.aaa933946794e1f97653.png" alt="" />
            <img className='strelkas' src={strelka} alt="" />
          </div>

          <div className="lpart-text">
            <p className='lpart-p'>Если вы полностью соответствуете нашим запросам,</p>
            <p className='lpart-ho1'>пожалуйста оставьте заявку:</p>
          </div>

          <div className="part-img-two">
            <div className="part-img-div"></div>
            <img className='part-hand' src="https://beton2.netlify.app/static/media/5285548%202.aaa933946794e1f97653.png" alt="" />
            <img className='strelka' src={strelka} alt="" />
          </div>
        </div>

        <div className="r-part-input">
          <input type="text" id='organizatsiya1' placeholder='Наименование организации'/>
          <input type="text" name="" id="inn1" placeholder='ИНН'/>
          <input type="number" name="" id="liso_contact1" placeholder='Контактное лицо'/>
          <input type="text" id='phone1' placeholder='Телефон'/>
          <input type="text" id='sayt1' placeholder='Сайт'/>
          <input type="email" id='email1' placeholder='Email'/>
          <button className='send-btn' onClick={()=> send()}><p>Отправить запрос</p></button>
        </div>
        </div>

        <div className="part-main">
          <div className="pm-text">
            <p className="pm-p">В связи с большим количеством заявок</p>
            <p className="pm-h01">нам требуются водители,</p>
            <p className="pm-p">как со своим транспортом так и в наш автопарк.</p>
          </div>
          <div className="part-box">
            <div className="pb-left">
              <div className="pb-imh"></div>
              <img src={betonk} alt="" />
            </div>
            <div className="pb-right">
              <p className="pb-p">Мы готовы к сотрудничеству с отдельными людьми владеющими миксерами и швингами, так и с компаниями предоставляющие свои услуги в этой сфере.</p>
            </div>
          </div>

          <div className="part-box2">
            <div className="pb-right2">
              <p className="pb-p1">Мы готовы к сотрудничеству с отдельными людьми владеющими миксерами и швингами, так и с компаниями предоставляющие свои услуги в этой сфере.</p>
            </div>  
                      
            <div className="pb-left2">
              <div className="pb-imh2"></div>
              <img src={betonk} alt="" />
            </div>
          </div>

          <p className="pm-p">Для того, чтобы мы расмотрели вашу заявку:</p>

          <div className="pm-box">
            <div className="pm-cards">
            <div className="pmb-min"><p>01</p></div>
              <p className='pmc-p'>Быть пунктуальным, все делать вовремя.</p>
            </div>

            <div className="pm-cards">
            <div className="pmb-min"><p>02</p></div>
              <p className='pmc-p'>Если уметь Быть вежливым</p>
            </div>

            <div className="pm-cards">
            <div className="pmb-min"><p>03</p></div>
              <p className='pmc-p'>БОтдыхать в нерабочее время.</p>
            </div>

            <div className="pm-cards">
            <div className="pmb-min"><p>04</p></div>
              <p className='pmc-p'>Отдыхать в нерабочее время</p>
            </div>

            <div className="pm-cards">
            <div className="pmb-min"><p>05</p></div>
              <p className='pmc-p'>Уметь пользоваться современным телефоном</p>
            </div>
          </div>
        </div>

        <div className="part-main-end">
          <div className="l-part-img">
            <div className="part-img-three">
              <div className="part-img-divs"></div>
                <img className='part-hands' src={kamaz} alt="" />
              <img className='strelkas' src={strelka} alt="" />
            </div>

          <div className="lpart-text">
            <p className='lpart-p'>Если вы полностью соответствуете нашим запросам,</p>
            <p className='lpart-ho1'>пожалуйста оставьте заявку:</p>
          </div>

          <div className="part-img-two">
            <div className="part-img-div"></div>
            <img className='part-hand' src={kamaz} alt="" />
            <img className='strelka' src={strelka} alt="" />
          </div>
        </div>

        <div className="r-part-input">
          <div className="r-parta-cycles">
            <div onClick={()=> Pcycle()} className="p-cycle">
              <div className="min-cycle"></div>
            </div><p>Компания</p>

            <div onClick={()=> Pcycle1()} className="p-cycle1">
              <div className="min-cycle1"></div>
            </div>
            <p>Физ.лицо</p>
          </div>
          <input type="text" id='organizatsiya1' placeholder='Наименование организации'/>
          <input type="text" name="" id="inn1" placeholder='ИНН'/>
          <input type="number" name="" id="liso_contact1" placeholder='Контактное лицо'/>
          <input type="text" id='phone1' placeholder='Телефон'/>
          <input type="text" id='sayt1' placeholder='Сайт'/>
          <input type="email" id='email1' placeholder='Email'/>
          <div className="input-end">
            <p className="inp-end-h1">Ваш транспорт:</p>
            <div className="part-cars">
              <p className='p-cars-h1'>Машины:</p>
              <div className="l-cars">
                <button className='l-cars-btn' id='mashina'>2,5м3 <img src={mashina} alt="" /></button>
                <button className='l-cars-btn' id='mashina'>3м3 <img src={mashina} alt="" /></button>
                <button className='l-cars-btn' id='mashina'>5м3 <img src={mashina} alt="" /></button>
                <button className='l-cars-btn' id='mashina'>7м3 <img src={mashina} alt="" /></button>
                <button className='l-cars-btn' id='mashina'>9м3 <img src={mashina} alt="" /></button>
              </div>
              <p className='p-cars-h1'>Швинги:</p>
              <div className="r-cars">
                <button className='r-cars-btn' id='shving'>15м <img src={shiving} alt="" /></button>
                <button className='r-cars-btn' id='shving'>21м <img src={shiving} alt="" /></button>
                <button className='r-cars-btn' id='shving'>30м <img src={shiving} alt="" /></button>
                <button className='r-cars-btn' id='shving'>40м <img src={shiving} alt="" /></button>
                <button className='r-cars-btn' id='shving'>57м <img src={shiving} alt="" /></button>
              </div>
            </div>
          </div>
          
          <button className='send-btn' onClick={()=> send()}><p>Отправить запрос</p></button>
        </div>
        </div>

      </div>
    </div>
  )
}
