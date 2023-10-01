function Footer() {
  return (
    <footer className="flex items-center justify-center space-x-4 py-8 max-lg:mt-20">
      <h1 className="font-Poppins max-md:text-[.8rem]">
        © Copyright 2023 Silvio Neres
      </h1>
      <span className="mb-2 text-2xl">|</span>
      <h1 className="font-SuperBoys text-2xl max-md:text-sm">
        <span>#</span>
        <span className="text-red-400">RANDOM</span>
        <span className="text-blue-900">FOOD</span>
      </h1>
    </footer>
  );
}

export default Footer;
