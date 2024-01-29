function Home({ setIsShow }: { setIsShow: () => void }) {
  return (
    <section className='relative flex h-screen flex-col items-center justify-center p-4 text-white drop-shadow-2xl'>
      <img
        src='./src/assets/prewed.jpg'
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

      <section className='my-4 flex gap-4 rounded-sm bg-light-pink px-8 py-10 text-ebony-clay shadow-lg md:text-2xl lg:text-3xl'>
        <p>20 Hari</p>
        <p>12 Jam</p>
        <p>30 Menit</p>
        <p>20 Detik</p>
      </section>
      <button
        type='button'
        className='my-4 rounded-sm bg-light-pink px-4 py-2 text-ebony-clay shadow-lg hover:bg-ebony-clay hover:text-light-pink md:text-xl lg:text-2xl'
        onClick={setIsShow}
      >
        Lihat Undangan
      </button>
    </section>
  );
}

export default Home;
