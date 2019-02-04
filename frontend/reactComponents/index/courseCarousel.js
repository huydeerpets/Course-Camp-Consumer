import React from 'react';
import { Button, Carousel, Popover, Rate } from 'antd';
import { slickSliderOptions } from './helpers';
import _ from 'lodash';
import Localization from './localization';

const CourseCarousel = props => (
  <div id="courses-container">
    <div className="courses-text-container">
      <h1>
        <img src='/static/icons/paperWithBulletPoints.svg' />
        <span>
          <img alt="random designs" src='/static/backgroundImages/designs-on-edge.svg' />
          { Localization.CourseCarousel.Header }
        </span>
      </h1>
      <div id="courses-carousel">
        <Carousel { ...slickSliderOptions }>
          { props.courses.map((course, i) => (
            <div key={ i } className="inner-carousel">
              <div style={{ background: course.color }} className='top-info'>
                <h2 className="top-info-header">24 hours</h2>
              </div>
              <div className='carousel-copy'>
                <h1>{ _.truncate(course.title, { length: 30 }) }</h1>
                <p>{ _.truncate(course.summary, { length: 60 }) }</p>
                <p>Taught by
                  <a>{ _.truncate(` ${course.creator.name}`, { length: 20 }) }</a>
                </p>
                <p className='price'>
                  <img alt="Money icon" src="/static/icons/money.svg" />
                  { course.price }
                </p>
                <span>
                  <Rate style={ styles.Rating } disabled defaultValue={ course.rating } />
                </span>
              </div>
              <Popover content={ popOverContent() } title={ _.truncate(course.title, { length: 30 }) }>
                <Button style={{ background: course.color }} className='explore-button' type="primary" icon="eye">
                  View Course
                </Button>
              </Popover>
              <img alt="Preview Button" className='preview-button' src='/static/icons/video-play.svg' />
            </div>
          ))}
        </Carousel>
        <a className='see-all-link'>
          <span>{ Localization.SeeAll }</span>
        </a>
      </div>
    </div>
    <div className="skewed-background" />
  </div>
);

const popOverContent = () => (
  <div>
    <Button style={{ background: '#FFDE17', border: 'none', color: 'rgb(60,60,65)' }} type='primary'>{ Localization.CourseCarousel.Purchase }</Button>
  </div>
);

const styles = {
  Rating: { float: 'right', transform: 'translate(-10px, -30px)' }
};

export default CourseCarousel