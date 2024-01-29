function Information() {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-6 bg-ebony-clay px-8 text-center text-light-pink'>
      <section className='flex w-full max-w-xl flex-col gap-6 text-center sm:max-w-2xl lg:max-w-3xl'>
        <h2 className='my-4 font-sacramento text-5xl font-bold text-persian-pink sm:text-6xl md:text-7xl'>
          Informasi Acara
        </h2>
        <section className='rounded-md border border-persian-pink'>
          <h3 className='border-b border-b-persian-pink p-2 font-bold uppercase'>
            Alamat
          </h3>
          <p className='p-4'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, a?
          </p>
        </section>
      </section>

      <section className='flex w-full max-w-xl flex-col gap-6 text-center sm:max-w-2xl sm:flex-row lg:max-w-3xl'>
        <section className='flex-1 rounded-md border border-persian-pink'>
          <h3 className='border-b border-b-persian-pink p-2 font-bold uppercase'>
            Akad Nikah
          </h3>
          <section className='flex justify-between gap-4 p-4'>
            <section>
              <p>clock</p>
              <p>08:00 - 10:00</p>
            </section>
            <section>
              <p>calendar</p>
              <p>Minggu, 25 Februari 2024</p>
            </section>
          </section>
        </section>
        <section className='flex-1 rounded-md border border-persian-pink'>
          <h3 className='border-b border-b-persian-pink p-2 font-bold uppercase'>
            Resepsi
          </h3>
          <section className='flex justify-between gap-4 p-4'>
            <section>
              <p>clock</p>
              <p>11:00 - selesai</p>
            </section>
            <section>
              <p>calendar</p>
              <p>Minggu, 25 Februari 2024</p>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
}

export default Information;
