import { Outlet } from 'react-router-dom';
import Navber from './../Header/Navber';
import Footer from './../Footer/Footer';
import{ Toaster } from 'react-hot-toast';
function Layout() {
    return (
        <div className='max-w-[1640px] mx-auto'>
            <Toaster />
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Layout
