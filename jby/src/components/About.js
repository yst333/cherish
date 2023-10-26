import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import ReactPlayer from "react-player";
import Button from 'react-bootstrap/Button';
import '../css/react_player.css';


// https://react-bootstrap.netlify.app/docs/components/buttons

class About extends Component {
    render() {
        return (
            <div>
                <Container>
                <div className="videoName">
                    <h1>회사 소개 유튜브 동영상입니다!
                    <Button variant="outline-primary" href="/">홈으로Go!</Button>
                    </h1>
                </div>
                <div className='player'>
                    <ReactPlayer
                    // 컴포넌트에서 유튜브 동영상 위치 지정
                    url='https://www.youtube.com/watch?v=uKod3Wbvj4s'
                    // 자동 실행 설정(true)
                    playing={true}                   
                    // 음소거 설정(true)
                    // 참고로, 자동 재생 설정은 playing과 muted를 true로 설정해야 합니다.
                    muted={true}
                    // 플레이어 컨트롤 노출 설정(true)
                    controls={true}
                    // 반복 재생 설정(true)
                    loop={true}
                    />
                </div>
                </Container>                
            </div>
     );
   }
}


export default About;