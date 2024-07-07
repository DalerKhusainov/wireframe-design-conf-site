function Footer() {
  return (
    <footer className="flex flex-col-reverse items-center pb-20 text-sm font-medium transition-colors ease-in-out tablet:text-lg tablet:flex-row mobile:justify-between text-slate font-inter">
      <div className="cursor-pointer hover:text-midnight">
        <a href="#">&copy; Wireframe Design Conf.</a>
      </div>
      <div className="flex flex-col items-center gap-4 mb-12 tablet:mb-0 mobile:gap-12 mobile:flex-row">
        <div className="flex items-center gap-6 tablet:gap-12">
          <a href="#" className="hover:text-midnight">
            FAQ
          </a>
          <a href="#" className="hover:text-midnight">
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center gap-6 tablet:gap-12">
          <a href="#" className="hover:text-midnight">
            Terms of Service
          </a>
          <a href="#" className="hover:text-midnight">
            Code of Conduct
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
