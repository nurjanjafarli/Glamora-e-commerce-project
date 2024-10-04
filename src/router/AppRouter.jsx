import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Shop from "../pages/Shop/Shop";
import Header from "../layout/Header/Header";
import Footer from "../layout/Footer/Footer";
import Contact from "../pages/Contact/Contact";
import FaqPage from "../pages/FaqPage/FaqPage";
import ProductPage from "../pages/Shop/components/ProductPage/ProductPage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasketPage from "../pages/BasketPage/BasketPage";
import Wislist from "../pages/Wishlist/Wislist";
import Blogs from "../pages/Blogs/Blogs";

import SingleBlogPage from "../pages/Blogs/components/SingleBlogPage/SingleBlogPage";
import Register from "../pages/Register/Register";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import Login from "../pages/Login/Login";
import AdminBlogList from "../pages/Blogs/components/AdminBlogList/AdminBlogList";
import Checkout from "../pages/Checkout/Checkout";
import ThankYouPage from "../pages/ThankYouPage/ThankYouPage";
import { GlobalDataContext } from "../context/ModeContext";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const AppRouter = () => {
  const [token, setToken] = useState(false);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token"));
      setToken(data);
    }
  }, []);
  const { darkMode } = useContext(GlobalDataContext);
  return (
    <>
      <main className={darkMode ? "dark" : "light"}>
        {" "}
        <BrowserRouter>
          {token ? <Header token={token} /> : <Header />}
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />

<ScrollToTop />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<About />} path="/about" />
            <Route element={<Shop />} path="/shop" />
            <Route element={<FaqPage />} path="/faq" />
            <Route element={<Contact />} path="/contact" />

            <Route element={<ProductPage />} path="/shop/productPage/product" />
            <Route element={<BasketPage />} path="/basketPage" />
            <Route element={<Wislist />} path="/wishlist" />
            <Route element={<Blogs />} path="/blogs" />
            <Route element={<Register />} path="/register" />
            <Route element={<Login setToken={setToken} />} path="/login" />
            <Route
              element={<SingleBlogPage />}
              path="/blogs/blogsPage/singleBlog"
            />

            <Route path="/admin/blogs" element={<AdminBlogList />} />

            <Route
              path="/checkout"
              element={token ? <Checkout /> : <Navigate to="/login" replace />}
            />
            <Route path="/thankYouPage" element={<ThankYouPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>

          {<Footer />}
        </BrowserRouter>
      </main>
    </>
  );
};

export default AppRouter;
