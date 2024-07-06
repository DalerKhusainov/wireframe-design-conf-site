function Hero() {
  return (
    <section className="flex justify-between w-full mb-[130px]">
      {/* Event Information desktop */}
      <div className="hidden space-y-14 font-inter desktop:block">
        <div className="text-slate">
          <h3 className="mb-1 text-xs font-bold">Date</h3>
          <p className="text-sm">September 5 until</p>
          <p className="text-sm">September 7, 2024</p>
        </div>
        <div className="text-slate">
          <h3 className="mb-1 text-xs font-bold">Venue</h3>
          <p className="flex flex-col text-sm">
            <span>The Scotish Hydro center</span>
            <span>for Entertainment</span>
          </p>
        </div>
        <div className="text-slate">
          <h3 className="mb-1 text-xs font-bold">Online</h3>
          <p className="text-sm">Worldwide at 8AM EST.</p>
        </div>
      </div>
      <div className="w-full desktop:w-[75%] flex flex-col">
        <div className="mb-4 border-b-2 border-b-slate/10 desktop:border-b-0 pb-14 desktop:mb-6">
          <h1 className="text-3xl font-bold mobile:text-4xl tablet:text-5xl font-roboto mb-7 text-purple">
            A community-driven design conference.
          </h1>
          {/* Get Tickets mobile button */}
          <button className="block w-full py-4 text-lg text-center text-white transition-colors ease-in-out rounded mobile:hidden font-roboto bg-purple hover:bg-midnight">
            Get tickets
          </button>
        </div>
        {/* Event Information Tablet and mobile */}
        <div className="flex flex-col items-start gap-7 mobile:gap-0 mobile:justify-between mobile:flex-row mb-14 font-inter desktop:hidden">
          <div className="text-slate">
            <h3 className="mb-1 text-xs font-bold">Date</h3>
            <p className="text-sm">September 5 until</p>
            <p className="text-sm">September 7, 2024</p>
          </div>
          <div className="text-slate">
            <h3 className="mb-1 text-xs font-bold">Venue</h3>
            <p className="flex flex-col text-sm">
              <span>The Scotish Hydro center</span>
              <span>for Entertainment</span>
            </p>
          </div>
          <div className="text-slate">
            <h3 className="mb-1 text-xs font-bold">Online</h3>
            <p className="text-sm">Worldwide at 8AM EST.</p>
          </div>
        </div>
        <div className="space-y-8 text-lg font-medium mobile:space-y-5 mobile:text-xl text-pretty text-slate font-inter">
          <p>
            We’re inviting the top creative in the tech industry from all over
            the world to come learn, grow, scrape their knees, try new things,
            to be vulnerable, and to have epic adventures together, this time
            in-person and via a livestream.
          </p>
          <p>
            Only 65 in-person spots avaliable across a series of 5 homes on the
            Outer Banks of North Carolina. If you can’t attend, please join the
            live stream pass and become part of the conversation.{" "}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
