function Content() {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-6 bg-linen px-4 text-sm text-ebony-clay sm:px-8 md:px-10 lg:px-20'>
      <section className='w-full max-w-lg text-center'>
        <h2 className='my-4 font-sacramento text-5xl font-bold text-persian-pink sm:text-6xl md:text-7xl'>
          Acara Pernikahan
        </h2>
        <h3 className='text-lg md:text-xl'>
          Diselenggarakan pada 25 Februari 2024 di Banjarmasin, Kalimantan Selatan.
        </h3>
        <p className='py-2 text-xs sm:text-sm'>
          Oleh karena itu, dengan segala hormat, kami bermaksud untuk mengundang
          Bapak/Ibu, Saudara/i, untuk hadir pada acara pernikahan kami.{' '}
        </p>
      </section>
      <section className='flex flex-col gap-10 sm:flex-row sm:gap-4'>
        <section className='flex gap-4 sm:gap-6'>
          <article className='text-right'>
            <h3 className='font-sacramento text-2xl font-bold text-persian-pink sm:text-3xl'>
              John Doe
            </h3>
            <p className='py-2 text-xs sm:text-sm'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur dolore,
              est aut minima voluptas obcaecati.
            </p>
            <p className='sm:text-base'>Putra dari Bapak ?? dan Ibu ???</p>
          </article>
          <img
            src='https://ui-avatars.com/api/?name=john%20doe&background=random'
            alt=''
            className='my-auto size-20 rounded-full shadow-md sm:size-24 md:size-32'
          />
        </section>
        <section className='flex flex-row-reverse gap-4 sm:gap-6'>
          <article>
            <h3 className='font-sacramento text-2xl font-bold text-persian-pink sm:text-3xl'>
              Jane Doe
            </h3>
            <p className='py-2 text-xs sm:text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae aliquid
              voluptas tenetur soluta asperiores aspernatur.
            </p>
            <p className='sm:text-base'>Putri dari Bapak ?? dan Ibu ???</p>
          </article>
          <img
            src='https://ui-avatars.com/api/?name=john%20doe&background=random'
            alt=''
            className='my-auto size-20 rounded-full shadow-md sm:size-24 md:size-32'
          />
        </section>
      </section>
    </section>
  );
}

export default Content;
