
import { configureStore } from "@reduxjs/toolkit";
import BlogReducer from "./pages/Blogs/components/BlogSlice/BlogSlice";



const store = configureStore({
  reducer: {
    blogs: BlogReducer,
  },
});

export default store;
