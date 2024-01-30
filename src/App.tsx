// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

import { useState } from 'react';
import { Mousewheel } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Content from './components/Content';
import Footer from './components/Footer';
import Home from './components/Home';
import Information from './components/Information';
import Location from './components/Location';

function App() {
  const [isShow, setIsShow] = useState(false);

  if (!isShow) return <Home setIsShow={() => setIsShow(true)} />;

  return (
    <section className='relative h-screen w-full'>
      <Swiper
        modules={[Mousewheel]}
        direction={'vertical'}
        mousewheel={true}
        className='h-full'
        speed={1500}
        slidesPerView={'auto'}
      >
        <SwiperSlide>
          <Content />
        </SwiperSlide>
        <SwiperSlide>
          <Information />
        </SwiperSlide>
        <SwiperSlide>
          <Location />
        </SwiperSlide>
        <SwiperSlide className='max-h-28'>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default App;
