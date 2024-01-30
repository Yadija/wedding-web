import { useEffect, useState } from 'react';

import prewed from '../assets/prewed.jpg';

function Home({ setIsShow }: { setIsShow: () => void }) {
  const year = 2024;
  const month = 2;
  const day = 24;
  const targetDate = new Date(year, month - 1, day, 23, 59, 59);

  const calculateTimeRemaining = () => {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const timeRemaining = target - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className='relative flex h-screen flex-col items-center justify-center p-4 text-white drop-shadow-2xl'>
      <img
        src={prewed}
        alt='Prewed'
        className='absolute -z-10 size-full object-cover grayscale-[70%]'
      />

      <h4 className='text-xl md:text-3xl lg:text-4xl'>
        Kepada <span>Bapak/Ibu/Saudara/i, </span>
      </h4>
      <h1 className='py-4 font-sacramento text-6xl md:text-8xl lg:text-9xl'>
        John & Jane
      </h1>
      <p className='text-center text-xl md:text-2xl lg:text-3xl'>
        Akan melangsungkan resepsi pernikahan dalam:
      </p>

      <section className='my-4 flex gap-4 rounded-md bg-persian-pink px-8 py-10 font-bold text-ebony-clay shadow-lg md:text-2xl lg:text-3xl'>
        <p>{timeRemaining.days} Hari</p>
        <p>{timeRemaining.hours} Jam</p>
        <p>{timeRemaining.minutes} Menit</p>
        <p>{timeRemaining.seconds} Detik</p>
      </section>
      <button
        type='button'
        className='my-4 rounded-md bg-persian-pink px-4 py-2 text-ebony-clay shadow-lg hover:bg-ebony-clay hover:text-light-pink md:text-xl lg:text-2xl'
        onClick={setIsShow}
      >
        Lihat Undangan
      </button>
    </section>
  );
}

export default Home;
