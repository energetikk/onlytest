'use client'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperPost } from '@/components/SwiperCustom/SwiperPost/SwiperPost';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './SwiperCustom.module.scss';


interface ISliderPosts {
    id: number,
    text: string,
    year: number
}

export const SwiperMain = ({sliderPosts} : { sliderPosts: ISliderPosts[] }) => {
    console.log(sliderPosts)
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={styles.wrapper}
    >
      {/* <SwiperSlide className={styles.swiper}>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {sliderPosts.map((item) => (
          <SwiperSlide key={item.id} className="slide-custom">
            <SwiperPost text={item.text} year={item.year} />
          </SwiperSlide>
        ))}


    </Swiper>
  );
};