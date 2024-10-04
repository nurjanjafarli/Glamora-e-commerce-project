import React, { useEffect, useState } from "react";
import supabase from "../../../../supabase";
import style from "./BlogList.module.css";
import { Link, useSearchParams } from "react-router-dom";
import { CircleLoader } from "react-spinners";

const BlogList = () => {
    const [searchParams] = useSearchParams();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data, error } = await supabase
        .from("blogs") 
        .select("*");

      if (error) {
        console.error("Error fetching blogs:", error);
      } else {
        setBlogs(data);
      }
      setLoading(false);
    };

    fetchBlogs();
  }, []);
  if (loading) {
    return (
      <div className={style.loader}>
        <CircleLoader size={200} /> 
      </div>
    );
  }


  return (
    <div className={style.fullblogContainer}>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <div className={style.imagebox}>
         <Link to={`/blogs/blogsPage/singleBlog?id=${blog.id}`}><img src={blog.image} alt="" /></Link>   
          </div>
         
      <h2>{blog.title}</h2>
        </div>
       
      ))}
    </div>
  );
};

export default BlogList;
