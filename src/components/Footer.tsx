function Footer() {
  return (
    <footer className='flex h-full flex-col items-center justify-center bg-ebony-clay text-center text-light-pink'>
      <p>&copy;{new Date().getFullYear()} Wedding Web. All Rights Reserved.</p>
      <p className=''>
        Created with ❤️ by{' '}
        <a
          href='https://instagram.com/yadija_'
          target='_blank'
          className='text-persian-pink hover:underline'
          rel='noreferrer'
        >
          @yadija_
        </a>
      </p>
    </footer>
  );
}

export default Footer;
