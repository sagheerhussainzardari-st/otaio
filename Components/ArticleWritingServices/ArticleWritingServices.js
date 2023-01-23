import React from 'react'
import { Col, Container, Row } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import GetStarted from '../Buttons/GetStarted';
import { ArticleWriting } from '../../utilities/ContentWritingServices';
import ShowMoreContent from '../ShowMoreText/ShowMoreContent'
import Link from 'next/link'
const ArticleWritingServices = () => {
  return (
    <div className="mt-5 pt-5">
      <Container>
        <Row>
          <Col lg={7} className="m-auto">
            
              <div className="StartUp pt-5 mt-5">
                <span className="BgText">{ArticleWriting.heading}</span>
                <div className="OurServicesHeadingUl">
                  <ul>
                    
                      <h2>{ArticleWriting.title}</h2>
                    
                    
                      <p>
                        You can rely on us for profoundly investigated and conceptual pieces with a clear-cut message. From history to fiction - our <strong>article writing services</strong> cover everything.
                        <ShowMoreContent>
                          <span>
                            Our writing professionals always do thorough <Link href='/corporate-video-production'>research before producing any content for you. </Link> We are well-versed in providing marvelous, kicking content writing services that add beauty to your web presence online.
                          </span>
                        </ShowMoreContent>
                      </p>
                      <Row>
                        {ArticleWriting.list.map((li, id) => {
                          if (id < 4) {
                            return (
                              <Col lg={6}>
                                <li>
                                  <b>{li}</b>
                                </li>
                              </Col>
                            );
                          }
                          return (
                            <Col lg={6}>
                              <li>
                                <b>{li}</b>
                              </li>
                            </Col>
                          );
                        })}
                      </Row>
                    
                    <Col lg="3">
                      <GetStarted buttonText={ArticleWriting.button[0]} buttonClass={ArticleWriting.button[1]} />
                    </Col>
                  </ul>
                </div>
              </div>
            
          </Col>
          <Col lg={5} className="m-auto">
            
              <img
                className="w-100"
                src={ArticleWriting.ArticleWritingImagePath}
                alt="ArticleWriting.ArticleWritingImagePath"
              ></img>
            
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ArticleWritingServices