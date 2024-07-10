import React from 'react'
import Header from "./common/Header";
import Footer from "./common/Footer";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom"
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFoundPage from "./pages/NotFoundPage";
import Shop from "./pages/Shop";
import ContactUs from "./pages/Contact";
import Blog from "./pages/Blog";

const App = () => {
  return (
    <div>
      <Router>
        <Header />

        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/cart' element={<Cart></Cart>} />
          <Route path='/shop' element={<Shop></Shop>} />
          <Route path='/contact' element={<ContactUs></ContactUs>} />
          <Route path='/about' element={<AboutUs></AboutUs>} />
          <Route path='/blog' element={<Blog></Blog>} />
          <Route path='/*' element={<NotFoundPage></NotFoundPage>} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
