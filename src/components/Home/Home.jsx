
import { useLoaderData } from 'react-router-dom';
import Banner from './../Header/Banner';
import Categories from './../Categories/Categories';
function Home() {
    const categories = useLoaderData()
    return (
        <div className=''>
            <Banner></Banner>
            this is product container
            <div>
                {/* nav categories  */}
                <div>
                    <Categories categories={categories}></Categories>
                </div>
                {/* product view section  */}
                <div></div>
            </div>
        </div>
    )
}

export default Home
