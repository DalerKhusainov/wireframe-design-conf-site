import bgSmallImage from "../assets/background-images/bg-small.png";
import bgLineImage from "../assets/background-images/bg-image-line.png";
import bgImageBlurDot from "../assets/background-images/bg-image-blur-dot.png";

function Schedule() {
  return (
    <section className="mb-[130px] relative">
      <img
        className="absolute top-0 mobile:-top-20 z-10 h-full rotate-180 left-0 mobile:-left-[360px]"
        src={bgSmallImage}
        alt="Background image"
      />
      <img
        src={bgLineImage}
        alt="Background image"
        className="absolute bottom-0 mobile:-bottom-[100px] right-0 mobile:-right-[450px] w-full blur-xl opacity-30"
      />
      <img
        src={bgImageBlurDot}
        alt="Background image"
        className="absolute -bottom-[300px] mobile:-bottom-[600px] -left-[100px] mobile:-left-[600px] w-full"
      />
      <h2 className="z-50 mb-6 text-2xl font-bold mobile:text-3xl text-purple font-roboto">
        Our three-day schedule is jam-packed with fun, inventure, creative
        geniuses.
      </h2>
      <p className="mobile:text-xl relative text-lg z-50 font-medium text-slate text-pretty font-inter mb-[92px]">
        We’re inviting the top creatives in the tech industry from all the world
        to come learn, grow, scrape their knees, try new things, to be
        vulnerable, and to have epic adventures together, this time both
        in-person and via a livestream.
      </p>
      <div className="z-50 grid grid-cols-1 gap-8 mobile:grid-cols-3">
        {/* September 5 Col */}
        <div className="z-50">
          <h3 className="mb-3 text-lg font-bold tablet:text-xl text-slate font-inter">
            September 5
          </h3>
          <p className="mb-10 text-xs font-medium tablet:text-sm text-slate font-inter">
            Our first is jam-packed with wonderful people and exiciting
            workshops.
          </p>
          <div className="px-10 py-10 text-center bg-white rounded-md shadow-lg tablet:px-6 tablet:py-14 desktop:px-0">
            <div className="pb-10 mb-10 border-b desktop:mx-auto desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium tablet:text-sm text-slate">
                09:00AM - 11:00AM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Morning livestream with Rebecca
              </div>
            </div>
            <div className="pb-10 mb-10 desktop:mx-auto border-b desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium desktop:text-sm text-slate">
                11:00AM - 02:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Lunch
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Dimitri Koczera
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-medium desktop:text-sm text-slate">
                02:00PM - 04:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Geraldo Lam
              </div>
            </div>
          </div>
        </div>
        {/* September 6 Col */}
        <div className="z-50">
          <h3 className="mb-3 text-lg font-bold tablet:text-xl text-slate font-inter">
            September 6
          </h3>
          <p className="mb-10 text-xs font-medium text-slate font-inter">
            Our first is jam-packed with wonderful people and exiciting
            workshops.
          </p>
          <div className="px-10 py-10 text-center bg-white rounded-md shadow-lg tablet:px-6 tablet:py-14 desktop:px-0">
            <div className="pb-10 mb-10 border-b desktop:mx-auto desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium tablet:text-sm text-slate">
                09:00AM - 11:00AM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Morning livestream with Rebecca
              </div>
            </div>
            <div className="pb-10 mb-10 desktop:mx-auto border-b desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium tablet:text-sm text-slate">
                11:00AM - 02:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Lunch
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Dimitri Koczera
              </div>
            </div>
            <div className="pb-10 mb-10 desktop:mx-auto border-b desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium desktop:text-sm text-slate">
                02:00PM - 04:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Geraldo Lam
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-medium desktop:text-sm text-slate">
                02:00PM - 04:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Geraldo Lam
              </div>
            </div>
          </div>
        </div>
        {/* September 7 Col */}
        <div className="z-50">
          <h3 className="mb-3 text-lg font-bold tablet:text-xl text-slate font-inter">
            September 7
          </h3>
          <p className="mb-10 text-xs font-medium text-slate font-inter">
            Our first is jam-packed with wonderful people and exiciting
            workshops.
          </p>
          <div className="px-10 py-10 text-center bg-white rounded-md shadow-lg tablet:px-6 tablet:py-14 desktop:px-0">
            <div className="pb-10 mb-10 border-b desktop:mx-auto desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium tablet:text-sm text-slate">
                09:00AM - 11:00AM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Morning livestream with Rebecca
              </div>
            </div>
            <div className="pb-10 mb-10 desktop:mx-auto border-b desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium desktop:text-sm text-slate">
                11:00AM - 02:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Lunch
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Dimitri Koczera
              </div>
            </div>
            <div className="pb-10 mb-10 desktop:mx-auto border-b desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium tablet:text-sm text-slate">
                02:00PM - 04:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Geraldo Lam
              </div>
            </div>
            <div className="pb-10 mb-10 desktop:mx-auto border-b desktop:w-[80%] border-b-slate/10">
              <div className="mb-2 text-xs font-medium tablet:text-sm text-slate">
                02:00PM - 04:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Geraldo Lam
              </div>
            </div>
            <div>
              <div className="mb-2 text-xs font-medium tablet:text-sm text-slate">
                02:00PM - 04:00PM PST
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Hangout session
              </div>
              <div className="text-sm font-medium tablet:text-lg text-slate font-inter">
                Geraldo Lam
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
