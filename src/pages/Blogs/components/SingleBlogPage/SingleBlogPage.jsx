import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import supabase from "../../../../supabase";
import style from "./SingleBlogPage.module.css";
import BlogList from "../BlogList/BlogList";
import FootImage from "../../../About/components/FootImage/FootImage";
import { CircleLoader } from "react-spinners";

const SingleBlogPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        if (!id) {
          throw new Error("No blog ID provided");
        }

        const { data, error } = await supabase
          .from("blogs")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          throw error;
        }

        setBlog(data);
      } catch (error) {
        setError("Error fetching blog post.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className={style.loader}>
        <CircleLoader size={200} /> 
      </div>
    );
  }

  if (error) return <p>{error}</p>;
  if (!blog) return <p>Blog not found</p>;

  return (

    <div className={style.fullBlogcontainer}>
      <h1> {blog.title}</h1>
      <div className={style.photos}>
        <img src={blog.image} alt={blog.title} />
      </div>
      <div className={style.txt}>
        <p>{blog.description}</p>
      </div>
      <div><FootImage/></div>
    </div>
  );
};

export default SingleBlogPage;
