const Footer = () => {
  return (
    <footer className="w-full lg:w-[94%] text-center font-inter font-normal max-w-auto mx-auto">
      <div className="flex flex-row flex-wrap justify-between items-center mt-28 px-4 md:px-6">
        <img src="/assets/logo/logo-footer.png" alt="Logo" className="mb-6 lg:mb-0" />
        {[1, 2, 3].map((item, index) => (
          <div key={index} className="text-base font-inter font-medium text-left mb-6 lg:mb-0">
            <p className="text-base font-inter font-bold">Links</p>
            {['Home', '6sense Technology', 'About', 'FAQ', 'Tutorial'].map((link) => (
              <p className="py-1">
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                >
                  {link}
                </a>
              </p>
            ))}
          </div>
        ))}


      </div>

      <p className="text-base my-10">Copyright © 2024 6SENSE - All rights reserved.</p>
    </footer>
  );
};

export default Footer;
