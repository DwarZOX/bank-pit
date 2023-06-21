import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

const Carousel = ({ media }) => {

  const sliderRef = useRef(null);
  const Next = () => {
    sliderRef.current.slickNext();
  };

  const Prev = () => {
    sliderRef.current.slickPrev();
  };

  useEffect(() => {
    if (sliderRef.current) {
      // Update slider settings after media prop changes
      sliderRef.current.slickGoTo(0);
      sliderRef.current.slickPause();
      sliderRef.current.slickPlay();
    }
  }, [media]);

  const [autoplaySpeed, setAutoplaySpeed] = useState(5000)
  // const handleVideoLoadedData = (e) => {
  //   if (media.length === 0) return;
  //   const firstMediaType = media[0].type;
  //   if (firstMediaType === 'image') {
  //     setAutoplaySpeed(5000);
  //   } else if (firstMediaType === 'video') {
  //     const videoDuration = media[0].duration * 1000;
  //     setAutoplaySpeed(videoDuration);
  //   }
  // }

  // useEffect(() => {
  //   if (media.length === 0) return;
  //   const firstMediaType = media[0].type;
  //   if (firstMediaType === 'image') {
  //     setAutoplaySpeed(5000);
  //   } else if (firstMediaType === 'video') {
  //     const videoDuration = media[0].duration * 1000;
  //     setAutoplaySpeed(videoDuration);
  //   }
  // }, [media]);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: autoplaySpeed,
  };

  return (
      <div className='relative w-full overflow-hidden top-[50px] md:top-[60px]'>
          <Slider ref={sliderRef} {...settings}>
            {media.map((item, index) => (
              <div key={index} className='bg-video'>
                {item.type === 'video' ? (
                  <video src={item.source} className="w-full h-[40vh] md:h-auto object-cover object-[-105px] sm:odd:object-[-895px] odd:object-[-0px] md:odd:object-[-0px]" loop autoPlay muted />
                ) : (
                  <img src={item.source} className="w-full h-[40vh] md:h-auto object-cover object-[-10px] sm:object-[-95px] md:object-center" alt="Carousel Image" />
                )}
              </div>
            ))}
          </Slider>
          <div className="flex w-full justify-between items-center inset-0 absolute">
            <button onClick={Prev} className="text-xl md:text-2xl text-white md:text-black md:p-2 md:hover:bg-gray-300 md:bg-gray-200 md:hover:opacity-90 md:opacity-40 md:rounded-l-3xl md:rounded-r-xl">
              <MdOutlineArrowBackIos />
            </button>
            <button onClick={Next} className="text-xl md:text-2xl text-white md:text-black md:p-2 md:hover:bg-gray-300 md:bg-gray-200 md:hover:opacity-90 md:opacity-40 md:rounded-r-3xl md:rounded-l-xl">
              <MdOutlineArrowForwardIos />
            </button>
          </div> 
      </div>
 )
   
}

export default Carousel;