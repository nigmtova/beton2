import React, { useEffect, useState } from 'react'
import '../css/Partners.css'
import axios from 'axios'
import strelka from '../img/strelka.jpeg'


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
    newPostData2.append("mashina",3)
    newPostData2.append("shving",3)
  
    axios.post(`https://dastafka-back.onrender.com/api/work`,newPostData2).then(res=>{
      alert("ishladi")
    })
  }
  
  useEffect(() => {
    axios.get(`https://dastafka-back.onrender.com/api/work`).then(res=>{
      setWork(res.data)
      alert=("iwladi")
    })
  }, [])


  return (
    
    <div style={{overflow:"hidden", background: "#F6F6F6"}}>
      <div className="part-container">
        <div className="part-header">

            <div className="l-part-img">
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
      </div>
    </div>
  )
}
