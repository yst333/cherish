import React from "react";
import Container from 'react-bootstrap/Container';

import Carousel from 'react-bootstrap/Carousel';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css';

import $ from "jquery";

// Carousels 맨 위에 Examples
// https://react-bootstrap.netlify.app/docs/components/carousel/

const Home = () => {
    return(   
        <>
            <div className="wrapper">                
                <Container>
                    <div className="carousel_tabs_cont">
                        <div className="carouselcont">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/flower-1.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/flower-2.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src="/images/flower-3.jpg"
                                alt="Third slide"
                                />
                                <Carousel.Caption>                                
                                </Carousel.Caption>
                            </Carousel.Item>
                            </Carousel>
                        </div>         


            {/* Tabbed components 맨 위에 Examples */}
            {/* https://react-bootstrap.netlify.app/docs/components/tabs/ */}

            <div className="tabscont">
            {/* 아래 defaultActiveKey="information" 설정하면
                information 탭 내용이 디폴트(기본) 선택되어 실행이 됩니다 */}
            <Tabs
                defaultActiveKey="information"
                id="uncontrolled-tab-example"
                className="mb-3"
                >
                <Tab eventKey="notice" title="공지사항" className="inform">
                <ul>
                    <li><a>방송통신위원회 공지사항 01</a><span className='date'>2023-06-18</span></li>
                    <li><a>방송통신위원회 공지사항 02</a><span className='date'>2023-06-19</span></li>
                    <li><a>방송통신위원회 공지사항 03</a><span className='date'>2023-06-20</span></li>
                    <li><a>방송통신위원회 공지사항 04</a><span className='date'>2023-06-21</span></li>
                    <li><a>방송통신위원회 공지사항 05</a><span className='date'>2023-06-22</span></li>                    
                </ul>
                </Tab>
                <Tab eventKey="information" title="방송국정보" className="inform">
                <ul>
                    <li><a>KBC 대한방송공사 고객센터 : 02-1234-5678</a><span className='date'>2023-06-18</span></li>
                    <li><a>SBO 공영방송공사 고객센터 : 02-1234-5679</a><span className='date'>2023-06-19</span></li>
                    <li><a>MBS 문화생활방송 고객센터 : 02-1234-5680</a><span className='date'>2023-06-20</span></li>
                    <li><a>TVY 궁금방송공사 고객센터 : 02-1234-5681</a><span className='date'>2023-06-21</span></li>
                    <li><a>KCO 세계방송공사 고객센터 : 02-1234-5682</a><span className='date'>2023-06-22</span></li>                       
                  </ul>
                </Tab>                
            </Tabs>
            </div>
            </div>
            </Container>
            </div>

            {/* react jquery 적용 예시 */}
            <div>
                <Container>
                    <div className="media">
                        <dl className="media01">
                            <a href='http://www.kbs.co.kr' target="_blank">
                                <dt>KBC 대한방송공사</dt>
                                <dd></dd>
                            </a>
                        </dl>
                        <dl className="media02">
                            <a href='http://www.sbs.co.kr' target="_blank">
                                <dt>SBO 공영방송공사</dt>
                                <dd></dd>
                            </a>
                        </dl>
                        <dl className="media03">
                            <a href='http://www.mbc.co.kr' target="_blank">
                                <dt>MBS 문화생활방송</dt>
                                <dd></dd>
                            </a>
                        </dl>
                        <dl className="media04">
                            <a href='http://www.ytn.co.kr' target="_blank">
                                <dt>TVY 궁금방송공사</dt>
                                <dd></dd>
                            </a>
                        </dl>
                        <dl className="media05">
                            <a href='http://www.mbn.co.kr' target="_blank">
                                <dt>KCO 세계방송공사</dt>
                                <dd></dd>
                            </a>
                        </dl>
                    </div>
                </Container>    
            </div>


        </>     
    );
};
export default Home;

$(function(){
    $(".media01").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media02").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media03").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media04").delay(100).animate({opacity:1, top: 0}, 600, "swing")
    $(".media05").delay(100).animate({opacity:1, top: 0}, 600, "swing")
});