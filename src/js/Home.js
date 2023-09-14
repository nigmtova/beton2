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
import truck from '../img/truck.jpeg'
import good from '../img/good.jpeg'
import home1 from '../img/home1.jpeg'
import inf from '../img/infor.jpeg'
import hand from '../img/hand.jpeg'
import home2 from '../img/house2.jpeg'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {MdKeyboardArrowRight} from 'react-icons/md'

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
        <div className="c-h">
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

          <div className="h-service">
            <div className="s-left">
              <div className="l-cards">
                <img src={inf} alt="" />
                <p className='span-p'><span>5 проверенных</span><br /> <span>поставщиков</span> бетона – ваша надежность и уверенность в качестве</p>
                <p className='l-big-p'>Сотрудничаем только с ведущими поставщиками бетона, имеющими автоматизированное производство и собственные аттестованные лаборатории для контроля качества. Не работаем с ненадежными заводами, поскольку применение бетона без технологического и лабораторного контроля чревато непредсказуемыми последствиями.</p>
              </div>

              <div className="l-cards">
                <img src={hand} alt="" />
                <p className='span-p'>Более <span>3500 клиентов</span><br /> уже выбрали нас</p>
                <p className='l-big-p'>Именно столько человек уже воспользовались преимуществами нашего сервиса доставки бетона. Постоянное расширение клиентской базы позволяет нам гордиться, что нас выбирает большое количество людей. Мы благодарны за оказываемое доверие и непрерывно развиваемся для того, чтобы выполнять все поставки на самом высоком уровне.</p>
              </div>

              <div className="l-cards">
                <img src={home2} alt="" />
                <p className='span-p'>Более <span>500 м3 бетона</span> доставляем в день</p>
                <p className='l-big-p'>Ежедневно доставляем не менее 500 м3 бетона, что служит показателем оптимизации и высокой производительности нашего сервиса.Поэтому, вне зависимости от масштабов реализуемого проекта, вы можете положиться на нас при заказе нужного количества бетона.</p>
              </div>
            </div>


            <div className="s-right">
              <div className="r-cards">
                <img src={truck} alt="" />
                <p className='span-p'>Мощный автопарк: <br /><span>180+ миксеров<br />и 27+ бетононасосов</span></p>
                <p className='r-big-p'>Собственный автопарк – это наше преимущество и гарантия оперативной доставки бетона на вашу строительную площадку. Имеющиеся в наличии миксеры свыше 180 ед. вмещают различный объем бетона – от 2.5 до 12 м3. Более 27 ед. наших бетононасосов доставляют бетон на высоту от 21 до 76 метров. Все это обеспечивает надежность и своевременность каждой доставки.</p>
              </div>

              <div className="r-cards">
                <img src={good} alt="" />
                <p className='span-p'>Надежность <br />и удовлетворенность: более <span>98% клиентов</span> полностью довольны нашим сервисом!</p>
                <p className='r-big-p'>Мы гордимся тем, что наш сервис поставки бетона отличается в высшей степени надежностью и качеством. Подтверждение этому – отзывы 98% благодарных клиентов. Наша цель заключается в доверии заказчиков и поддержке наивысшего стандарта обслуживания, поэтому мы оперативно реагируем на каждое пожелание заказчиков.</p>
              </div>

              <div className="r-cards">
                <img src={home1} alt="" />
                <p className='span-p'>Более сотни <span>25-этажных</span> домов можно построить из проданного через наш сервис бетона</p>
                <p className='r-big-p'>Мы гордимся тем, что продали свыше 40.000 м3 бетона за последний год. Его достаточно для заливки 14,2 футбольных полей или постройки более сотни 25-этажных домов. Быстрая доставка, надежный и качественный материал от ключевых поставщиков нашего города позволяют реализовывать самые амбициозные строительные проекты в кратчайшие сроки.</p>
              </div>
            </div>
          </div>

            <div className="hd-info">
              <div className="hd-left">
              <p className='hl-p'>Немного <br />о нас</p>
              </div>
              <div className="t">
                <p className='t-p'>О сервисе</p>
                <p className="t-katap">Сервис «БЕТОН ТАКСИ» предоставляет вам ряд уникальных преимуществ. Во-первых, это обеспечение оперативной поставки бетона, позволяющей сэкономить время и деньги без отставания от графика строительства. Во-вторых, это гарантия высокого качества бетона, поскольку поставки осуществляются только с заводов проверенных поставщиков.</p>
                <p className='hd-more'>Читать полностью <MdKeyboardArrowRight/></p>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}
