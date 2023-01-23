import React from 'react'
import { Col } from 'react-bootstrap'

const WatchNow = () => {
    return (
        <div className='WatchNowBanner'>
            <Col lg={6} className='m-auto'>
                <div class="spanProcess" data-aos="flip-up">
                    <h2>Watch Now</h2>
                </div>
                <div className="youtubeVideo position-relative">
                    <iframe className='shadow' src="https://www.youtube-nocookie.com/embed/F1fKY6DsVLU?controls=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </Col>
        </div>
    )
}

export default WatchNow