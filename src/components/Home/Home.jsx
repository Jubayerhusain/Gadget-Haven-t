
import { useLoaderData } from 'react-router-dom';
import Banner from './../Header/Banner';
import Categories from './../Categories/Categories';
function Home() {
    const categories = useLoaderData()
    return (
        <div className=''>
            <Banner></Banner>
            <div className='flex justify-between my-14'>
                {/* nav categories  */}
                <div>
                    <Categories categories={categories}></Categories>
                </div>
                {/* product view section  */}
                <div>
                    this is product view container
                </div>
            </div>
        </div>
    )
}

export default Home
