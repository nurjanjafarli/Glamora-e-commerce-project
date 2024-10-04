import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./AdminBlogList.module.css";
import { useTranslation } from "react-i18next";
import { createBlog, deleteBlog, fetchBlogs, updateBlog } from "../BlogSlice/BlogSlice";
import { CircleLoader } from "react-spinners";

const AdminBlogList = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.blogs);
  const [newBlog, setNewBlog] = useState({ title: "", image: "" });
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  const handleCreate = () => {
    if (newBlog.title && newBlog.image) {
      dispatch(createBlog(newBlog)).then(() => {
        dispatch(fetchBlogs());
      });
      setNewBlog({ title: "", image: "" });
    } else {
      alert(t("adminBlogList.alertIncompleteForm"));
    }
  };

  const handleDelete = (id) => {
    if (id) {
      dispatch(deleteBlog(id)).then(() => {
        dispatch(fetchBlogs());
      });
    } else {
      alert(t("adminBlogList.alertInvalidDelete"));
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleUpdate = () => {
    if (editingBlog && editingBlog.id && editingBlog.title && editingBlog.image) {
      dispatch(updateBlog({ id: editingBlog.id, updates: editingBlog })).then(() => {
        dispatch(fetchBlogs());
      });
      setEditingBlog(null); // Reset after updating
    } else {
      alert(t("adminBlogList.alertInvalidEdit"));
    }
  };

  if (loading) {
    return (
      <div className={style.loader}>
        <CircleLoader size={150} />
      </div>
    );
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>{t("adminBlogList.title")}</h1>
      <div className={style.formContainer}>
        {/* Conditionally render the "Add Blog" form only when not editing */}
        {!editingBlog && (
          <BlogForm
            title={t("adminBlogList.addBlogTitle")}
            blog={newBlog}
            setBlog={setNewBlog}
            handleSubmit={handleCreate}
          />
        )}
        {editingBlog && (
          <BlogForm
            title={t("adminBlogList.editBlogTitle")}
            blog={editingBlog}
            setBlog={setEditingBlog}
            handleSubmit={handleUpdate}
          />
        )}
      </div>

      <div className={style.blogList}>
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) =>
            blog && blog.id ? ( 
              <BlogCard
                key={blog.id}
                blog={blog}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ) : null
          )
        ) : (
          <p>{t("adminBlogList.noBlogs")}</p>
        )}
      </div>
    </div>
  );
};

const BlogForm = ({ title, blog, setBlog, handleSubmit }) => {
  const { t } = useTranslation();
  return (
    <div className={style.blogForm}>
      <h2 className={style.formTitle}>{title}</h2>
      <input
        type="text"
        placeholder={t("adminBlogList.formBlogTitle")}
        value={blog.title}
        onChange={(e) => setBlog({ ...blog, title: e.target.value })}
        className={style.inputField}
      />
      <input
        type="text"
        placeholder={t("adminBlogList.formBlogImage")}
        value={blog.image}
        onChange={(e) => setBlog({ ...blog, image: e.target.value })}
        className={style.inputField}
      />
      <button onClick={handleSubmit} className={style.submitButton}>
        {title.includes(t("adminBlogList.addBlogTitle")) ? t("adminBlogList.addBlogButton") : t("adminBlogList.updateBlogButton")}
      </button>
    </div>
  );
};

const BlogCard = ({ blog, onEdit, onDelete }) => {
  const { t } = useTranslation();
  return (
    <div className={style.blogCard}>
      <div className={style.imageContainer}>
        <img src={blog.image} alt={blog.title} className={style.blogImage} />
      </div>
      <h3 className={style.blogTitle}>{blog.title}</h3>
      <div className={style.buttonContainer}>
        <button onClick={() => onEdit(blog)} className={style.editButton}>
          {t("adminBlogList.editButton")}
        </button>
        <button onClick={() => onDelete(blog.id)} className={style.deleteButton}>
          {t("adminBlogList.deleteButton")}
        </button>
      </div>
    </div>
  );
};

export default AdminBlogList;
