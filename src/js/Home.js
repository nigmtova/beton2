import React, { useEffect, useState } from 'react'
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
import fstar from '../img/fullstar.jpeg'
import hstar from '../img/halfstar.jpeg'
import g2 from '../img/2g.jpeg'
import location from '../img/location.jpeg'
import men from '../img/men.jpeg'
import loc from '../img/loc.jpeg'
import qr from '../img/qr.jpeg'
import computer from '../img/computer.jpeg'
import file from '../img/File.jpeg'
import homiy from '../img/homiy.jpeg'
import men2 from '../img/men2.jpeg'
import iphone2 from '../img/iphone2.jpeg'
import back from '../backgray.svg'
import blogo3 from '../img/betonl3.jpeg'
import {BsArrowLeft} from 'react-icons/bs'
import {BsArrowRight} from 'react-icons/bs'
import {BsCheck} from 'react-icons/bs'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {AiFillStar} from 'react-icons/ai'
import axios from 'axios'

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';


// // import required modules
// import { Pagination } from 'swiper/modules';

function cards1() {
  document.querySelector('.min-z1').style = "border: 1px solid #ffcb13"
  document.querySelector('.chek').style = 'display:flex'
  document.querySelector('.chek3').style = 'display:none'
  document.querySelector('.chek1').style = 'display:none'
  document.querySelector('.chek2').style = 'display:none'
  document.querySelector('.min-z2').style = "border: none"
  document.querySelector('.min-z3').style = "border: none"
  document.querySelector('.min-z4').style = "border: none"
}

function cards2() {
  document.querySelector('.min-z2').style = "border: 1px solid #FFCB13"
  document.querySelector('.chek1').style = 'display:flex'
  document.querySelector('.chek3').style = 'display:none'
  document.querySelector('.chek').style = 'display:none'
  document.querySelector('.chek2').style = 'display:none'
  document.querySelector('.min-z1').style = "border: none"
  document.querySelector('.min-z3').style = "border: none"
  document.querySelector('.min-z4').style = "border: none"
}

function cards3() {
  document.querySelector('.min-z3').style = "border: 1px solid #FFCB13"
  document.querySelector('.chek2').style = 'display:flex'
  document.querySelector('.chek3').style = 'display:none'
  document.querySelector('.chek1').style = 'display:none'
  document.querySelector('.chek').style = 'display:none'
  document.querySelector('.min-z2').style = "border: none"
  document.querySelector('.min-z1').style = "border: none"
  document.querySelector('.min-z4').style = "border: none"
}

function cards4() {
  document.querySelector('.min-z4').style = "border: 2px solid #FFCB13"
  document.querySelector('.chek3').style = 'display:flex'
  document.querySelector('.chek').style = 'display:none'
  document.querySelector('.chek1').style = 'display:none'
  document.querySelector('.chek2').style = 'display:none'
  document.querySelector('.min-z2').style = "border: none"
  document.querySelector('.min-z3').style = "border: none"
  document.querySelector('.min-z1').style = "border: none"
}

// function btns1() {
//   document.querySelector('.bir-div').style = "display: block;"
//   document.querySelector('.btns1').style = "background: #FFCB13;"
//   document.querySelector('.btns2').style = "background: #EBEBEB;"
//   document.querySelector('.iki-div').style = "display: none;"
// }

// function btns2() {
//   document.querySelector('.iki-div').style = "display: block;"
//   document.querySelector('.btns2').style = "background: #FFCB13"
//   document.querySelector('.btns1').style = "background: #EBEBEB"
//   document.querySelector('.bir-div').style = "display: none;" 
// }

export default function Home() {
  const[homiy,setHomiy]= useState([])
  const[homiy1,setHomiy1]= useState([])
  const [page,setPage] = useState(1)
  
useEffect(() => {
  axios.get(`https://dastafka-back.onrender.com/api/homeiy`).then(res=>{
    setHomiy(res.data)
    setHomiy1(res.data)
  })
}, []);
function partner(id) {
  axios.get(`https://dastafka-back.onrender.com/api/homeiy`).then(res=>{
    const Filter=(item=>res.data==item.id)
    setHomiy1(Filter)
  })
}
  
  return ( 
    <div style={{overflow:"hidden", background: "#F6F6F6"}}>
      <div className="qora"></div>
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
              <div className="min-check"><BsCheck className="chek"/></div>
                <img className='min-bet' src={bet} alt="" />
                <p>Бетон</p>
              </div>

              <div onClick={()=> cards2()} className="min-z2">
                <div className="min-check"><BsCheck className="chek1"/></div>
                <img className='min-cem' src={cem} alt="" />
                <p>Пескобетон</p>
              </div>

              <div onClick={()=> cards3()} className="min-z3">
              <div className="min-check"><BsCheck className="chek2"/></div>
                <img className='min-qum' src={qum} alt="" />
                <p>Строительный <br/>раствор</p>
              </div>

              <div onClick={()=> cards4()} className="min-z4">
              <div className="min-check"><BsCheck className="chek3"/></div>
                <h1>Специальный бетон</h1>
                <p>Отправим ваш запрос <br />на все заводы</p>
              </div>
              </div>

              <div className="b-rage">
                <div className="rage-p"><p><span>1</span>/9</p></div>
                <div className="z-rage">
                  <div className="k-rage"></div>
                </div>
              </div>


              <div className="z-btns">
                <button className='z-btn1'><a href="#"><BsArrowLeft className='b-i1'/>Назад</a></button>
                <button className='z-btn2'><a href="#">Далее<BsArrowRight className='b-i2'/></a></button>
              </div>

            </div>
          </div>
          <div className="h-service">
            <div className="s-left">
              <div className="l-cards1">
                <img src={inf} alt="" />
                <p className='span-swiper'><span>5 проверенных</span><br /> <span>поставщиков</span> бетона – ваша надежность и уверенность в качестве</p>
                <p className='l-big-p'>Сотрудничаем только с ведущими поставщиками бетона, имеющими автоматизированное производство и собственные аттестованные лаборатории для контроля качества. Не работаем с ненадежными заводами, поскольку применение бетона без технологического и лабораторного контроля чревато непредсказуемыми последствиями.</p>
              </div>

              <div className="l-cards">
                <img src={hand} alt="" />
                <p className='span-swiper'>Более <span>3500 клиентов</span><br /> уже выбрали нас</p>
                <p className='l-big-p'>Именно столько человек уже воспользовались преимуществами нашего сервиса доставки бетона. Постоянное расширение клиентской базы позволяет нам гордиться, что нас выбирает большое количество людей. Мы благодарны за оказываемое доверие и непрерывно развиваемся для того, чтобы выполнять все поставки на самом высоком уровне.</p>
              </div>

              <div className="l-cards">
                <img src={home2} alt="" />
                <p className='span-swiper'>Более <span>500 м3 бетона</span> доставляем в день</p>
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
              {/* <img className='kamaz' src={kamaz} alt="" /> */}
            </div>

            <div className="h-part">
              <div className="part-h1"> 
              <h1 className="pa">Наши партнеры</h1>
                {homiy.map(item=>{
                  return(
                    <img className='homiy-imegs' onClick={()=> partner(item.id)} src={item.image} alt="" />
                  )
                })}  
              </div>
                  
                
             
              {homiy.map((item,key)=> {
                if(key<1)
return(
                <div className="part-info">
                <div className="part-img">
                {/* <img src={item.image} alt="" /> */}
                  <div className="part-imges">
                    <img className='gg2' src={g2} alt="" />
                    <div className="star-d"><p>{item.gisstar}</p>{item.gisstar===1?(<><AiFillStar className='yellow'/><AiFillStar className='black'/><AiFillStar className='black'/><AiFillStar className='black'/><AiFillStar className='black'/></>):(item.gisstar==2?(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='black'/><AiFillStar className='black'/><AiFillStar className='black'/></>):(item.gisstar==3?(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='black'/><AiFillStar className='black'/></>):(item.gisstar==4?(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='black'/></>):(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/></>))))}</div>
                  </div>
                  <div className="part-imges">
                    <img className='blogo3' src={blogo3} alt="" />
                    <div className="star-d"><p>{item.taxistar}</p>{item.taxistar===1?(<><AiFillStar className='yellow'/><AiFillStar className='black'/><AiFillStar className='black'/><AiFillStar className='black'/><AiFillStar className='black'/></>):(item.taxistar==2?(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='black'/><AiFillStar className='black'/><AiFillStar className='black'/></>):(item.taxistar==3?(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='black'/><AiFillStar className='black'/></>):(item.taxistar==4?(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='black'/></>):(<><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/><AiFillStar className='yellow'/></>))))}</div>
                  </div>
                </div>

                <div className="part-text">
                    <p className='part-uzun'>{item.description} </p>
                  <div className="s-hesht">
                    <span className="heshteg">#245 заводов</span> <span className="heshteg">#своя аттестованная лаборатория</span> <span className="heshteg">#свой транспорт</span><br />
                    <span className="heshteg">#свои швинги</span>
                  </div>
                </div>
              </div>
              )
              
              })
              }
              
             
              
            </div>
        </div>
        </div>

        <div className="main">
          <div className="main-header">
            <div className="mh-left">
              <img src={men} alt="" />
            </div>
            <div className="mh-right">
              <h1 className='mr-h1'>Наши приемущества</h1>
              <div className="mh-btn">
                {/* {page===1?():()} */}
                <button style={page===1?{background: "#FFCB13", transition: "0.3s ease"}:{background: "#EBEBEB"}} className='btns1' onClick={()=>setPage(1)}>Для физических лиц</button>
                <button style={page===2?{background: "#FFCB13", transition: "0.3s ease"}:{background: "#EBEBEB"}} className='btns2' onClick={()=>setPage(2)}>Для юридических лиц</button>
              </div>
              {page===1?( <div className="bir-div">

                <div className="bir-divs">
                  <div className="bir-left">
                    <img src={location} alt="" />
                  </div>
                  <div className="bir-right">
                    <p className="bir-bow">Заказ без забот.</p><br />
                    <p className='bir-kic'>Наш сервис доставки бетона предлагает ту же простоту и удобство взаимодействия, как и заказ пиццы по телефону. Это максимально легкий и быстрый процесс.</p>
                  </div>
                </div>

                <div className="bir-divs">
                  <div className="bir-left">
                    <img src={loc} alt="" />
                  </div>
                  <div className="bir-right">
                    <p className="bir-bow">Полный контроль.</p><br />
                    <p className='bir-kic'>Полностью контролируем процесс выполнения заказа по поставке бетона. Вы можете следить за поставкой в режиме онлайн, ходом работ, включая заливку, и быть уверены в том, что заказ будет выполнен в полном объеме.</p>
                  </div>
                </div>

                <div className="bir-divs">
                  <div className="bir-left">
                    <img src={qr} alt="" />
                  </div>
                  <div className="bir-right">
                    <p className="bir-bow">Все в одном месте.</p><br/>
                    <p className='bir-kic'>У нас вы найдете все, что вам нужно – бетон, строительный раствор, пескобетон. Если вам требуется особый состав, то мы сделаем запрос у наших поставщиков.</p>
                  </div>
                </div>
              </div>):(<>

            <div className="iki-div">
              <div className="bir-divs">
                <div className="bir-left">
                  <img src={loc} alt="" />
                </div>
                <div className="bir-right">
                  <p className="bir-bow">Полный контроль.</p><br />
                  <p className='bir-kic'>При больших объемах заливки и одновременной подаче нескольких десятков машин у вас есть возможность точно регулировать время доставки бетона. Мы предоставляем гибкость и адаптируемся к вашим требованиям.</p>
                </div>
              </div>

              <div className="bir-divs">
                <div className="bir-left">
                  <img src={computer} alt="" />
                </div>
                <div className="bir-right">
                  <p className="bir-bow">Удобство заказа и дозаказа.</p><br />
                  <p className='bir-kic'>Если вам потребуется дополнительный объем бетона в ближайшее время, вы всегда можете осуществить дозаказ и быть уверены в своевременной доставке.</p>
               </div>
              </div>

              <div className="bir-divs">
                <div className="bir-left">
                  <img src={file} alt="" />
                </div>
                <div className="bir-right">
                  <p className="bir-bow">Полная документация.</p><br/>
                  <p className='bir-kic'>Мы предоставляем вам онлайн доступ к паспортам качества и сертификацию на каждую партию отгруженного бетона. Вы можете быть уверены в качестве поставляемой продукции и иметь все необходимые документы для отчетности в личном кабинете. Если нужны оригиналы документов, то вы можете их заказать.</p>
                </div>
                </div>
              </div></>)}
             

              
            </div>
          </div>

          <div className="main-footer">
            <p className='mf-h1'>Чего же еще не хватает, все учтено и вы сейчас можете воспользоваться <span>лучшим сервисом в городе!</span></p>
            <div className="mf-two">
            <div className="mf-left">
              <img className='ip2' src={iphone2} alt="" />
            </div>

            <div className="mf-right">
              <div className="mf-cards">
                <div className="mf-box"><p>Доступно 24/7</p></div>
                <p className='mf-p'>В любое время в приложении можно сделать заказ на поставку бетона, задать вопрос консультанту, посмотреть историю заказов, оставить отзыв и многое другое.</p>
              </div>

              <div className="mf-cards">
                <div className="mf-box1"><p>Большой выбор опций и услуг при оформлении заказа</p></div>
                <p className='mf-p'>Возможность выбора всех необходимых параметров для заказа бетона онлайн (марка бетона, объем поставки, специальные добавки и др.).</p>
              </div>

              <div className="mf-cards">
                <div className="mf-box"><p>Оплата через приложение</p></div>
                <p className='mf-p'>Выбор любого удобного способа оплаты – банковская карта, наличный, безналичный расчет или по частям, а также оплата через различные платежные системы.</p>
              </div>

              <div className="mf-cards">
                <div className="mf-box1"><p>Оплата бонусами</p></div>
                <p className='mf-p'>На каждую отгруженную поставку начисляются бонусы, которые можно использовать для оплаты последующих заказов, получая тем самым прекрасную возможность для экономии.</p>
              </div>

              <div className="mf-cards">
                <div className="mf-box"><p>Доступно 24/7</p></div>
                <p className='mf-p'>В любое время в приложении можно сделать заказ на поставку бетона, задать вопрос консультанту, посмотреть историю заказов, оставить отзыв и многое другое.</p>
              </div>

              <div className="mf-cards">
                <div className="mf-box1"><p>Большой выбор опций и услуг при оформлении заказа</p></div>
                <p className='mf-p'>В любое время в приложении можно сделать заказ на поставку бетона, задать вопрос консультанту, посмотреть историю заказов, оставить отзыв и многое другое.</p>
              </div>
            
            </div></div>
          </div>

          <div className="main-end">
            <div className="main-end-p">
              <p><a href="#">Скачать приложение</a></p>
            </div>

            <div className="main-e-prog">
              <img src={ag} alt="" />
              <img src={ap} alt="" />
              <img src={ge} alt="" />
              <img src={go} alt="" />
              <img src={ru} alt="" />
              <img src={ag} alt="" />
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}
