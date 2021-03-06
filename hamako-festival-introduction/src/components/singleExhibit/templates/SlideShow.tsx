/* 紹介文横の画像、動画のスライドショー*/
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slideShow.css';
import { FC } from 'react';
import Slider from 'react-slick';

const settings = {
  /* 操作系*/
  dots: true,
  arrows: true,
  /* 自動再生*/
  autoplay: true,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  /* 繰り返し*/
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  /* 見た目調整*/
  /* ↓だめだった*/
  /* adaptiveHeight: true,*/
};

type Props = {
  images: string[];
  videos: string[];
};

const SlideShow: FC<Props> = (props: Props) => {
  const { images, videos } = props;

  return (
    <section className="slider-container">
      <Slider {...settings} className="slider">
        {images.map((image, i) => {
          return (
            <div key={i}>
              <img src={image} alt="image" />
            </div>
          );
        })}
        {videos.map((v) => {
          return (
            <video autoPlay loop playsInline controls>
              <source src={v} />
              Sorry, this video is not available.
            </video>
          );
        })}
      </Slider>
    </section>
  );
};

export { SlideShow };
