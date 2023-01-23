import Link from 'next/link';
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Zoom from 'react-reveal/Zoom';

const ContentWritingProcess = () => {
  return (
    <div>
      <div>
        <Container>
          <Col lg={8} className="m-auto text-center text-dark mt-5 pt-5">
            <div className="StartUp">
              <span class="BgText">Process</span>
              <div className="OurServicesHeading">
                
                  <h2>Content Writing</h2>
                
                <p>
                  <Link href='/smart-contracts-development'>Shaping time and resources</Link> into creative writing by proficiently following a well-organized and efficient writing process. We are the content writing company that is best known for going out of the way to present extraordinary blog writing services for their esteemed clientele.
                </p>
              </div>
            </div>
          </Col>
          <div className="WhyChooseUs">
            <img className="w-100 processImg" src={"/Assets/Services/ContentWritting/ContentWrittingProcessImg.png"} alt="ContentWrittingProcessImg"></img>
            <Row className="mobile-view">
              <Col>
                <Card className="WhyChooseUSCards text-dark">
                  <Col lg={8} className="m-auto text-center p-0">
                    <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon01.png"} alt="ContentWrittingIcon01"></img>
                    <p><b>Brief</b></p>
                  </Col>
                </Card>
              </Col>
              <Col>
                <Card className="WhyChooseUSCards text-dark">
                  <Col lg={8} className="m-auto text-center p-0">
                    <p><b>Brain Storming</b></p>
                    <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon03.png"} alt="ContentWrittingIcon03"></img>
                  </Col>
                </Card>
              </Col>

              <Col>
                <Card className="WhyChooseUSCards text-dark">
                  <Col lg={8} className="m-auto text-center p-0">
                    <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon06.png"} alt="ContentWrittingIcon06"></img>
                    <p><b>Wireframe</b></p>
                  </Col>
                </Card>
              </Col>
              <Col>
                <Card className="WhyChooseUSCards text-dark">
                  <Col lg={8} className="m-auto text-center p-0">
                    <p><b>Keyword Research</b></p>
                    <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon07.png"} alt="ContentWrittingIcon07"></img>
                  </Col>
                </Card>
              </Col>
              <Col>
                <Card className="WhyChooseUSCards text-dark">
                  <Col lg={8} className="m-auto text-center p-0">
                    <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon08.png"} alt="ContentWrittingIcon08"></img>
                    <p><b>Writing</b></p>
                  </Col>
                </Card>
              </Col>
              <Col>
                <Card className="WhyChooseUSCards text-dark">
                  <Col lg={8} className="m-auto text-center p-0">
                    <p><b>Delivery</b></p>
                    <img className="w-50 position-relative mb-4" src={"/Assets/Services/Icons/Icon09.png"} alt="ContentWrittingIcon09"></img>
                  </Col>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default ContentWritingProcess