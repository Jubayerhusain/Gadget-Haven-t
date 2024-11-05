import bannerIMage from "./../../assets/banner.jpg";
import man1 from "./../../assets/man1.jpg";
import man2 from "./../../assets/man2.jpg";
import man3 from "./../../assets/man3.jpg";
import man4 from "./../../assets/man4.jpg";
import { SiShopee } from "react-icons/si";
import { AiOutlineProduct } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import { FaShippingFast } from "react-icons/fa";
import { GrSecure } from "react-icons/gr";

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
              <h1 className="text-2xl font-bold text-gray-700 py-3">Vision</h1>
              <h1 className="text-md text-gray-600 font-semibold">
                Our vision at Gadget Heaven is to become the leading destination
                for tech enthusiasts, offering a seamless and engaging platform
                for discovering, comparing, and purchasing the latest and most
                innovative gadgets.{" "}
              </h1>
            </div>
            <div className="shadow-xl rounded-2xl px-4 py-8 w-[800px]">
              <h1 className="text-2xl font-bold text-gray-700 py-3">Vision</h1>
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
      {/* meet out team section  */}
      <div className="mt-28">
        <h1 className="text-5xl font-bold text-purple-700 text-center pt-8">
          Meet Out Team{" "}
        </h1>
      </div>
      <div className="border-b-2 border-dashed border-gray-400 my-14"></div>
      <div className="flex justify-around  my-20">
        <div className="card card-compact bg-base-100 w-80 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
              <img src={man4} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-2xl text-gray-700 text-center my-2">
              Jubayer Husain
            </h2>
            <p className="text-center text-md font-semibold">Founder</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-80 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
              <img src={man3} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-2xl text-gray-700 text-center my-2">
              Freddie Scott
            </h2>
            <p className="text-center text-md font-semibold">Co-Founder</p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-80 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
              <img src={man2} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-2xl text-gray-700 text-center my-2">
              Jackson Hussain
            </h2>
            <p className="text-center text-md font-semibold">
              Business Manager
            </p>
          </div>
        </div>
        <div className="card card-compact bg-base-100 w-80 shadow-xl">
          <div className="avatar flex justify-center">
            <div className="ring-primary ring-offset-base-100 w-40 rounded-full ring ring-offset-2">
              <img src={man1} />
            </div>
          </div>
          <div className="card-body">
            <h2 className="font-bold text-2xl text-gray-700 text-center my-2">
              Peter Stevens
            </h2>
            <p className="text-center text-md font-semibold">
              Marketing Manager
            </p>
          </div>
        </div>
      </div>
      {/* why You Buy section  */}
      <div>
        <div className="text-5xl font-bold text-purple-700 text-center my-20 flex space-x-2 w-3/12 mx-auto">
          <h1>Why You Buy!</h1>
          <p>
            <SiShopee />
          </p>
        </div>
        <div className="flex justify-between items-center mb-24">
          {/* cart 01  */}
          <div className="rounded-xl shadow-xl p-8 flex space-x-3">
            <p className="text-5xl font-bold text-purple-700">
              <AiOutlineProduct />
            </p>
            <div>
              <h1 className="font-bold text-2xl text-gray-700 text-start">
                Original Product
              </h1>
              <p className="text-start text-md font-semibold my-2">
                100% Original product that covered warranty by the vendor.
              </p>
            </div>
          </div>
          {/* cart 02  */}
          <div className="rounded-xl shadow-xl p-8 flex space-x-3">
            <p className="text-5xl font-bold text-purple-700">
              <GrAnnounce />
            </p>
            <div>
              <h1 className="font-bold text-2xl text-gray-700 text-start">
              30 Days Warranty
              </h1>
              <p className="text-start text-md font-semibold my-2">
              You have the right to return your orders within 30 days.
              </p>
            </div>
          </div>
          {/* cart 03  */}
          <div className="rounded-xl shadow-xl p-8 flex space-x-3">
            <p className="text-5xl font-bold text-purple-700">
              <FaShippingFast />
            </p>
            <div>
              <h1 className="font-bold text-2xl text-gray-700 text-start">
              Global Shipping
              </h1>
              <p className="text-start text-md font-semibold my-2">
              Your orders are shipped seamlessly between countries.
              </p>
            </div>
          </div>
          {/* cart 04  */}
          <div className="rounded-xl shadow-xl p-8 flex space-x-3">
            <p className="text-5xl font-bold text-purple-700">
              <GrSecure />
            </p>
            <div>
              <h1 className="font-bold text-2xl text-gray-700 text-start">
              100% Secure
              </h1>
              <p className="text-start text-md font-semibold my-2">
              Your payments are secure with our private security network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
