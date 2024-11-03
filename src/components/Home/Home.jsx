import { useLoaderData, Outlet } from "react-router-dom";
import Banner from "./../Header/Banner";
import Categories from "./../Categories/Categories";
function Home() {
  const categories = useLoaderData();
  return (
    <div className="">
      <Banner></Banner>
      <div>
        <h1 className="text-5xl font-bold text-center text-gray-700 my-8 py-8">Explore Cutting-Edge Gadgets</h1>
        <div className="flex justify-between my-14">
          {/* nav categories  */}
          <div>
            <Categories categories={categories}></Categories>
          </div>
          {/* product view section  */}
          <div>
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
