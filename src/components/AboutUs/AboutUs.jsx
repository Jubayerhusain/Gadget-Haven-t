function AboutUs() {
  return (
    <div>
      <div
        className="hero min-h-[600px] mt-0 mb-14 rounded-2xl"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2016/11/29/02/07/drone-1866742_960_720.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="">
            <h1 className="mb-5 text-5xl font-bold text-purple-200">Who we are ??</h1>
            <p className="text-5xl font-bol mb-5">
              Gives you quality services at the best prices.
            </p>
            <p className="text-xl fonr-semibold mb-4 w-6/12 mx-auto">
              Dignissim dictumst curae nunc lectus leo pretium rutrum. Mauris
              class suscipit dictumst est praesent letius integer fusce
              convallis si. Conubia integer senectus duis blandit lectus nec.
            </p>
            <button className="btn bg-purple-600 text-gray-100 font-semibold hover:bg-purple-700">Send Massage</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
