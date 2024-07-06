function Footer() {
  return (
    <footer className="relative flex items-center justify-between pb-20 text-lg font-medium transition-colors ease-in-out text-slate font-inter">
      <div className="cursor-pointer hover:text-midnight">
        <a href="#">&copy; Wireframe Design Conf.</a>
      </div>
      <div className="flex items-center gap-12">
        <div className="flex items-center gap-12">
          <a href="#" className="hover:text-midnight">
            FAQ
          </a>
          <a href="#" className="hover:text-midnight">
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center gap-12">
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
