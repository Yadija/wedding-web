function Location() {
  return (
    <section className='flex h-screen flex-col items-center justify-center gap-6 bg-linen px-8 text-center text-ebony-clay'>
      <section className='flex w-full max-w-xl flex-col text-center sm:max-w-2xl lg:max-w-3xl'>
        <h2 className='my-2 font-sacramento text-5xl font-bold text-persian-pink sm:text-6xl md:text-7xl'>
          Lokasi Acara
        </h2>
        <section>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7966.245811033093!2d114.59086898784594!3d-3.319789653447315!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de423c056111e21%3A0x4ae811d975e09880!2sTaman%20Siring%200%20Kilometer%20Banjarmasin!5e0!3m2!1sen!2ssg!4v1706576692141!5m2!1sen!2ssg'
            width='100%'
            title='location'
            allowFullScreen
            className='mb-4 h-56 rounded-md border-2 border-persian-pink sm:h-[350px]'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
          <a
            href='https://maps.app.goo.gl/eWqVYs48SvJq2U6m6'
            target='_blank'
            className='rounded-md border border-persian-pink bg-persian-pink p-2 hover:bg-transparent hover:text-ebony-clay'
            rel='noreferrer'
          >
            Klik untuk membuka peta
          </a>
        </section>

        <section className='mt-4 rounded-md border border-persian-pink'>
          <h3 className='border-b border-b-persian-pink p-2 font-bold uppercase'>Note</h3>
          <p className='p-4 text-xs sm:text-base'>
            Diharapkan untuk tidak salah alamat dan tanggal. Manakala tiba di tujuan namun
            tidak ada tanda-tanda sedang dilangsungkan pernikahan, boleh jadi Anda salah
            jadwal, atau salah tempat.
          </p>
        </section>
      </section>
    </section>
  );
}

export default Location;
