import React, { FunctionComponent } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { ISlideContent } from '../../models/publication-model'
import "../../styles/carousel.scss"
import "./carouselProject.scss"

type CarouselPropr = {
  slide: ISlideContent[];
}

export const CarouselProyect: FunctionComponent<CarouselPropr> = (slides: CarouselPropr) => {
  return (
    <div className='container-carousel'>
      <Carousel showArrows={true} >
        {slides.slide.map((slide, index) => {
          return (
            <div key={index}>
              <img src={slide.urlImg} className="img-carousel" />
              <p className="legend">{slide.title}
                <br />
                <small>
                  {slide.contents}
                </small>
              </p>
            </div>
          );
        })
        }
      </Carousel>
    </div>


  );
}
