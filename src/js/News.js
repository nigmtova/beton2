import React from 'react'
import '../css/News.css'
import start from '../img/zakazz.jpeg'
import nwimg from '../img/nwimg.jpeg'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {BsArrowUpRight} from 'react-icons/bs'

function article() {
  window.location="/Article.js"
}

export default function News() {
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

        <div className="news-swiper1">
          <h1 className="swiper1-h1">Смотри, что у нас нового!</h1> 
          <div className="swip1-imges">
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
          </div>
        </div>
        </div>

        <div className="news-main">
          <div className="nw-left">
            <div className="nw-left-card">
              <div className="nw-left-c2">
                <img src={nwimg} alt="" />            
                <div className="nw-left-h1">
                <p className='nwl-h1'>Новая марка<br /> бетона уже<br /> доступна</p>
                <p className='nwl-p'>Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения системы обучения кадров, соответствует насущным потребностям.</p>
            </div>
              </div>

            </div>
          </div>
          
          <div className="nw-right">
            <div className="nw-cards">
              <p className='nw-h01'>Новая марка бетона уже<br /> доступна на сайте</p>
              <BsArrowUpRight className='nw-cards-ic'/>
              <p className="nw-p">Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
              <hr />
            </div>

            <div className="nw-cards">
              <p className='nw-h01'>Новая марка бетона уже<br /> доступна на сайте</p>
              <BsArrowUpRight className='nw-cards-ic'/>
              <p className="nw-p">Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
              <hr />
            </div>

            <div className="nw-cards">
              <p className='nw-h01'>Новая марка бетона уже<br /> доступна на сайте</p>
              <BsArrowUpRight className='nw-cards-ic'/>
              <p className="nw-p">Разнообразный и богатый опыт реализация намеченных плановых заданий требуют определения и уточнения систем...</p>
              <hr />
            </div>
          </div>
        </div>

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
