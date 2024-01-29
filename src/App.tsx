// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

import { useState } from 'react';
import { Mousewheel } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import Content from './components/Content';
import Home from './components/Home';

function App() {
  const [isShow, setIsShow] = useState(true);

  if (!isShow) return <Home setIsShow={() => setIsShow(true)} />;

  return (
    <section className='relative h-screen w-full'>
      <Swiper
        modules={[Mousewheel]}
        direction={'vertical'}
        mousewheel={true}
        className='h-screen'
        speed={1500}
      >
        <SwiperSlide>
          <Content />
        </SwiperSlide>
        <SwiperSlide>
          <section className='flex h-screen items-center justify-center bg-red-300'>
            <h2>Slide 2</h2>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default App;
