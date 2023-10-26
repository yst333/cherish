import React, { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import '../css/QnA.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// https://react-bootstrap.netlify.app/docs/components/accordion/

function QnA() {

  const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
    <div className="blank"></div>
    <Container>
      <div className="carousel-container">
        <img className='qnaImg' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
      </div>
    </Container>
    <div className="blank"></div>
    <Container className="qnaContainer">
      <h3 className="qnaTitle">자주묻는 질문</h3>
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>회원 가입의 혜택은 무엇인가요?</Accordion.Header>
        <Accordion.Body>
          회원으로 가입하시면 할인 혜택을 받을 수 있습니다. 이 할인은 특정 상품이나 특정 기간 동안 적용될 수 있으며, 일반 고객보다 저렴한 가격으로 아이돌 굿즈를 구매할 수 있습니다. 회원 가입자에게 선착순으로 특정 상품을 구매할 수 있는 기회를 주거나, 회원 전용 이벤트에 참여할 수 있는 기회를 제공할 수 있습니다. 회원 전용 포럼, 블로그, 댓글, 리뷰 등을 통해 다른 팬들과 소통하고 아이돌 굿즈 관련 정보를 공유할 수 있습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>배송 기간은 얼마나 걸리나요?</Accordion.Header>
        <Accordion.Body>
          배송 기간은 구매한 상품의 종류, 배송 위치 및 선택한 배송 방법에 따라 다를 수 있습니다. 배송 기간을 정확히 파악하려면 구체적인 주문을 진행하기 전에 제품 상세 페이지나 고객 서비스에 문의하여 정확한 정보를 확인하는 것이 좋습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>품절된 상품은 다시 입고될 예정이 있나요?</Accordion.Header>
        <Accordion.Body>
          품절된 상품이 다시 입고될지 여부는 아티스트 측의 정책과 상품의 유효 기간, 재고 상황에 따라 달라질 수 있습니다. 특정 아이돌 굿즈는 한정판 상품으로 한정된 수량만 생산될 수 있으며, 이런 경우 품절 시 재입고가 어려울 수 있습니다. 또한 아이돌 그룹의 활동이 종료되거나 관련된 이벤트가 종료되면 해당 상품은 품절된 후 재입고되지 않을 수 있습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>어떤 종류의 굿즈를 구매할 수 있나요? (포토카드, 의류, 포스터 등)</Accordion.Header>
        <Accordion.Body>
         일반적으로 판매되는 아이돌 굿즈의 종류로는 포토카드, 의류(티셔츠, 후디, 맨투맨, 스웨터 등), 포스터, 앨범 및 음반, 야광봉, 팔찌, 에코백, 스티커, 포토북 등이 있습니다. 특정 아이돌 굿즈를 얻고자 할 때는 해당 사이트나 회사의 제품 목록을 확인하고 주기적으로 업데이트된 정보를 확인하는 것이 좋습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>굿즈 관련 문의나 문제가 발생했을 때 어떻게 도움을 받을 수 있나요?</Accordion.Header>
        <Accordion.Body>
          홈페이지의 자주 묻는 질문(FAQ)을 확인하거나 문의 양식을 작성하여 질문이나 문제를 제기할 수 있습니다. 공식 소셜 미디어 플랫폼(예: 트위터, 페이스북, 인스타그램)을 통해 지원을 받을 수도 있습니다.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>어떤 결제 방법을 제공하나요?</Accordion.Header>
        <Accordion.Body>
          현재 제공되는 주요 결제 방법은 신용카드(Visa, MasterCard, American Express 등), 직불카드 또는 체크카드, PayPal, 가상계좌를 통한 은행 이체가 있습니다.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
    <div className="blank"></div>
    <Container className='csContainer'>
            <h2 className='csTitle'> 1:1 문의 </h2>
            <Form>
              <Form.Select aria-label="Default select example" name="CSCategory" id="CSCategory" className="CSCategory">
                <option>문의유형</option>
                <option value="1">회원가입</option>
                <option value="2">결제관련</option>
                <option value="3">배송관련</option>
                <option value="4">기타문의</option>
              </Form.Select>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>이름</Form.Label>
                    <Form.Control type="text" placeholder="이름을 남겨주세요" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>전화번호</Form.Label>
                    <Form.Control type="text" placeholder="연락처를 남겨주세요" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>문의내용</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="submit" className='qnaButton'>제출하기</Button>
            </Form>
        </Container>
    <div className="blank"></div>
    </>
  );
}

export default QnA;

