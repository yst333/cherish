import React from "react";
import Container from 'react-bootstrap/Container';

const url = "https://www.kcc.go.kr/user.do";

const Footer = () => {
    return(
        <div>
            <Container>
                <br /><br />
                <hr />
                <h1>하단 공통 표현(Footer)</h1>
                <br />
                <p>회사 주소 : 서울시 행복한구 즐거운아파트 101동 1004호, 연락처 : 010-1234-7979</p>
                <br />
                <button onClick={()=>{window.open(url)}} >방송통신위원회 웹사이트 바로가기</button>
            </Container>
        </div>
    );
};

export default Footer;