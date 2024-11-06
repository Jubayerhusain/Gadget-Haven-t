import bannerImage from "./../../assets/banner.jpg";
function Banner() {
  return (
    <div className="min-h-[780px]">
      <div className=" bg-[#9538E2] min-h-[500px] rounded-b-2xl relative">
        <div className="text-center">
          <h1 className="font-bold text-4xl w-6/12 text-white mx-auto pt-10 pb-2">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className=" font-normal text-gray-50 w-4/12 mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
        <div className="text-center mt-4">
          <button className=" bg-white rounded-3xl border-2 py-1 px-3">
            Shop Now
          </button>
        </div>
        <div className="absolute top-72 left-[24%]">
          <div className="w-[820px] h-[470px] border-2 bg-white/20 border-white rounded-xl p-6">
            <img
              className="w-full h-full rounded-xl"
              src={bannerImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
