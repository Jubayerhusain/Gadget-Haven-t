function Footer() {
  return (
      <div className="bg-gradient-to-r from-blue-200 to-purple-300 py-14 rounded-2xl">
        <footer>
          <h1 className="text-4xl font-bold text-center my-2 text-gray-700">
            Gadget Heaven
          </h1>
          <p className="text-lg font-normal text-center text-gray-700">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </footer>
        <div className="border-2 border-dashed my-10"></div>
        <footer className="footer text-gray-800 p-10  justify-around">
          <nav>
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Product Support</a>
            <a className="link link-hover">Shipping & Delivery</a>
            <a className="link link-hover">Order Tracking</a>
            <a className="link link-hover">Returns</a>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Career</a>
          </nav>
          <nav>
            <h6 className="footer-title">Lagal</h6>
            <a className="link link-hover"> Terms of Service</a>
            <a className="link link-hover"> Privacy Policy</a>
            <a className="link link-hover">Cookie Policy</a>
          </nav>
        </footer>
      </div>
  );
}

export default Footer;
