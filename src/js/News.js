import React, { useState } from 'react'
import '../css/News.css'
import start from '../img/zakazz.jpeg'
import nwimg from '../img/nwimg.jpeg'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {BsArrowUpRight} from 'react-icons/bs'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect } from 'react'
import axios from 'axios'

function article() {
  window.location="/Article.js"
}



export default function News() {
const[news1,setNews1] = useState ([])
const[news2,setNews2] = useState ([])
const[news3,setNews3] = useState ([])

useEffect(() => {
  axios.get(`https://dastafka-back.onrender.com/api/news`).then(res=>{
    setNews1(res.data)
    setNews2(res.data)
  })
}, [])
function newsend1(id) {
  axios.get(`https://dastafka-back.onrender.com/api/news`).then(res=>{
    const Filter=res.data.filter(item=>item.id==id)
    setNews2(Filter)
  })
}
  return (
    <div style={{overflow:"hidden", background: "#F6F6F6"}}>
      <div className="news-container">

        <div className="news-header"><h1 className="nh-h01"><img src={start} alt="" />Новости</h1>        
        <div className="news-min-container">
          <div className="nr-content">
          <div className="nh-left">
            <img src="https://beton2.netlify.app/static/media/Mask%20group.9d0f328c5974e1c657eb.png" alt="" />
          </div>

          <div className="nh-right">
            <p className='news-p'>Новая марка бетона уже<br /> доступна</p>
            <p className="nr-p">Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.</p>
            <p onClick={()=> article()}><a className='stat-a' href="#">Читать новость</a></p>
          </div>
          </div> 
        </div>
<h1 className="swiper1-h1">Смотри, что у нас нового!</h1>
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {news1.map(item=>{
          return(
            <SwiperSlide><div className="swp-left-img">
              <div className="for_swiper_img"><img src={item.image} alt="" /></div>
              <div className="swiper-text">
                <p className='swiper-p'>{item.title}</p>
                <div className="swp-img-dale"><HiArrowNarrowRight className='swiper-ic'/></div>
              </div>
            </div></SwiperSlide>
          )
        })}
        
      </Swiper>
        <div className="news-swiper1">
           
          {/* <div className="swip1-imges">
            <div className="swp-left-img">
              <img src="https://beton2.netlify.app/static/media/rasm1.3ebdf068154233ab0b9f.png" alt="" />
              <div className="swiper-text">
                <p className='swiper-p'>Новая марка бетона уже<br /> доступна на сайте</p>
                <div className="swp-img-dale"><HiArrowNarrowRight className='swiper-ic'/></div>
              </div>
            </div>

            <div className="swp-right-img">
              <img src="https://beton2.netlify.app/static/media/rasm2.1de8775e3b8f983d3036.png" alt="" />
              <div className="swiper-text">
                <p className='swiper-p'>Новая марка бетона уже<br /> доступна на сайте</p>
                <div className="swp-img-dale"><HiArrowNarrowRight className='swiper-ic'/></div>
              </div>
            </div>
          </div> */}
        </div>
        </div>

        <div className="news-main">
          <div className="nw-left">
            <div className="nw-left-card">
              {news2.map((item,key)=>{
                if(key<1){
return(
                  <div className="nw-left-c2">
                <img src={item.image} alt="" />            
                <div className="nw-left-h1">
                <p className='nwl-h1'>{item.title}</p>
                <p className='nwl-p'>{item.min_description}</p>
            </div></div>
                )
                }
                
              })}
              
              

            </div>
          </div>
          
          <div className="nw-right">
            {news1.map(item=>{
              return(
                <div onClick={()=>{newsend1(item.id)}} className="nw-cards">
              <p className='nw-h01'>{item.title}</p>
              <BsArrowUpRight className='nw-cards-ic'/>
              <p className="nw-p">{item.min_description}</p>
              <hr />
            </div>
              )
            })}
            
          </div>
        </div>

        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {news3.map(item=>{
          return(
            <SwiperSlide>           <div className="swp-left-img">
            <img src={item.imege} alt="" />

            <div className="nf-yellow"></div>
              <div className="swiper-text">
                <p className='swt-p'>2+1</p>
                <p className='swt-p1'>Новая акция партии бетона</p>
                <div className="swp-img-dale"><HiArrowNarrowRight className='swiper-ic'/></div>
              </div>
          </div></SwiperSlide>
          )
        })}
        
      </Swiper>
        <div className="news-footer">
          <div className="nf-header"><img className='startt' src={start} alt="" /><h1 className='nfh-h01'>Наши акции</h1></div>
          <div className="swip1-imges">
            <div className="swp-left-img">
              <img src="https://beton2.netlify.app/static/media/qiz1.b848d4987cd0ad72be09.png" alt="" />

              <div className="nf-yellow"></div>
                <div className="swiper-text">
                  <p className='swt-p'>2+1</p>
                  <p className='swt-p1'>Новая акция партии бетона</p>
                  <div className="swp-img-dale"><HiArrowNarrowRight className='swiper-ic'/></div>
                </div>
            </div>

            <div className="swp-right-img">
              <img src="https://beton2.netlify.app/static/media/qiz1.b848d4987cd0ad72be09.png" alt="" />

              <div className="nf-yellow"></div>
                <div className="swiper-text">
                  <p className='swt-p'>2+1</p>
                  <p className='swt-p1'>Новая акция партии бетона</p>
                  <div className="swp-img-dale"><HiArrowNarrowRight className='swiper-ic'/></div>
                </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
