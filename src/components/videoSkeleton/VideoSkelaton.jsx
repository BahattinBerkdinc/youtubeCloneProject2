import React from 'react';
import './videoskelaton.scss';
import { Col, Container, Row } from 'react-bootstrap';

const VideoSkeleton = () => {
  const skeletonCount = 50;

  return (
    <Container>
      <Row>
        {[...Array(skeletonCount)].map((_, index) => (
          <Col sm={12} md={6} lg={3} key={index} className='mb-3'>
            <div className="video-skeleton">
              <div className="thumbnail-skeleton"></div>
              <div className="title-skeleton"></div>
              <div className="channel-skeleton"></div>
              <div className="views-skeleton"></div>
              <div className="time-skeleton"></div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VideoSkeleton;
