function NavBar() {
  return (
    <nav className="flex flex-col items-start mobile:items-center mobile:flex-row mobile:justify-between mb-[88px]">
      <h3 className="flex flex-col mb-6 text-xl font-bold mobile:mb-0 mobile:text-lg tablet:text-xl text-purple font-roboto">
        <span>Wireframe</span>
        <span>Design Conf.</span>
      </h3>
      <ul className="flex items-center justify-between w-full gap-16 text-lg font-medium transition-colors ease-in-out mobile:w-auto mobile:text-sm tablet:text-lg font-inter text-purple">
        <li>
          <a href="#" className="hover:text-midnight">
            Speakers
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-midnight">
            Schedule
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-midnight">
            Partners
          </a>
        </li>
      </ul>
      <button className="hidden px-4 py-1 text-lg text-white transition-colors ease-in-out rounded mobile:block desktop:py-2 desktop:px-6 font-roboto bg-purple hover:bg-midnight">
        Get tickets
      </button>
    </nav>
  );
}

export default NavBar;
