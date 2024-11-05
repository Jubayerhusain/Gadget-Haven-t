import bannerIMage from "./../../assets/banner.jpg";
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
            <h1 className="mb-5 text-5xl font-bold text-purple-200">
              Who we are ??
            </h1>
            <p className="text-5xl font-bol mb-5">
              Gives you quality services at the best prices.
            </p>
            <p className="text-xl fonr-semibold mb-4 w-6/12 mx-auto">
              Dignissim dictumst curae nunc lectus leo pretium rutrum. Mauris
              class suscipit dictumst est praesent letius integer fusce
              convallis si. Conubia integer senectus duis blandit lectus nec.
            </p>
            <button className="btn bg-purple-600 text-gray-100 font-semibold hover:bg-purple-700">
              Send Massage
            </button>
          </div>
        </div>
      </div>

      <div>
        {/* review section  */}
        <div className="flex items-center justify-center space-x-14">
          <div className="border-2 border-purple-200 shadow-xl rounded-lg p-8 text-center w-[400px] my-5 space-y-2">
            <h1 className="text-5xl font-bold text-purple-700">4.8+</h1>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-700">
              Review Customer
            </h2>
            <p className="text-md text-gray-600 font-semibold">
              Gadget Heaven is a sleek and feature-rich web platform that
              simplifies the experience of exploring and purchasing the latest
              tech gadgets.{" "}
            </p>
          </div>
          <div className="border-2 border-purple-200 shadow-xl rounded-lg p-8 text-center w-[400px] my-5 space-y-2">
            <h1 className="text-5xl font-bold text-purple-700">A+</h1>
            <div className="rating gap-1">
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-red-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-orange-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-yellow-400"
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-lime-400"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-3"
                className="mask mask-heart bg-green-400"
              />
            </div>
            <h2 className="text-2xl font-bold text-gray-700">Business Class</h2>
            <p className="text-md text-gray-600 font-semibold">
              The navigation menu is intuitive and well-organized, allowing
              users to effortlessly switch between different sections and
              features.{" "}
            </p>
          </div>
        </div>
      </div>
      <div>
        {/* Our Vison And Misson  */}
        <div className="border-2 border-purple-200 p-8 rounded-2xl my-14 flex space-x-7 shadow-xl">
          <div>
            <img
              className="w-[800px] h-[500px] rounded-xl"
              src={bannerIMage}
              alt=""
            />
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl font-bold text-purple-700">
              Excellent electronic service with affordability
            </h1>
            <div className="shadow-xl rounded-2xl px-4 py-8 w-[800px]">
              <h1  className="text-2xl font-bold text-gray-700 py-3">Vision</h1>
              <h1 className="text-md text-gray-600 font-semibold">
                Our vision at Gadget Heaven is to become the leading destination
                for tech enthusiasts, offering a seamless and engaging platform
                for discovering, comparing, and purchasing the latest and most
                innovative gadgets.{" "}
              </h1>
            </div>
            <div className="shadow-xl rounded-2xl px-4 py-8 w-[800px]">
              <h1  className="text-2xl font-bold text-gray-700 py-3">Vision</h1>
              <h1 className="text-md text-gray-600 font-semibold">
                Our vision at Gadget Heaven is to become the leading destination
                for tech enthusiasts, offering a seamless and engaging platform
                for discovering, comparing, and purchasing the latest and most
                innovative gadgets.{" "}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
