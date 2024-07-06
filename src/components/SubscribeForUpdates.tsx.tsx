function SubscribeForUpdates() {
  return (
    <section className="relative mb-20 border-b border-b-slate/10">
      <h2 className="z-50 mb-6 text-3xl font-bold text-purple font-roboto">
        Subscribe for updates
      </h2>
      <p className="z-50 text-xl font-medium text-slate font-inter mb-11">
        Sign up to our newsletter to get the latest information Wireframe Design
        Conf.
      </p>
      <div className="max-w-[500px] z-50 mb-20 gap-6 flex items-center justify-between">
        <input
          type="text"
          placeholder="Write your email"
          className="w-full pl-3 py-2 shadow-sm rounded border placeholder:text-slate/30 border-slate/30 placeholder:text-[18px] text-slate focus:outline-1 focus:outline-slate"
        />
        <button className="px-6 py-2 z-50 text-[16px] text-white transition-colors ease-in-out rounded font-roboto bg-purple hover:bg-midnight">
          Subscribe
        </button>
      </div>
    </section>
  );
}

export default SubscribeForUpdates;
