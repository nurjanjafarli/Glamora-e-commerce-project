import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import supabase from "../../../../supabase";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const { data, error } = await supabase.from("blogs").select("*");
  if (error) throw error;
  return data || [];
});

export const createBlog = createAsyncThunk("blogs/createBlog", async (blog) => {
  const { data, error } = await supabase.from("blogs").insert(blog).single();
  if (error) throw error;
  return data;
});

export const deleteBlog = createAsyncThunk("blogs/deleteBlog", async (id) => {
  await supabase.from("blogs").delete().eq("id", id);
  return id;
});

export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ id, updates }) => {
    const { data, error } = await supabase
      .from("blogs")
      .update(updates)
      .eq("id", id);
    if (error) throw error;
    return data[0];
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogs: [],
    loading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(createBlog.fulfilled, (state, action) => {
        state.blogs.push(action.payload);
      })
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.filter(
          (blog) => blog && blog.id !== action.payload
        );
      })
      .addCase(updateBlog.fulfilled, (state, action) => {
        state.blogs = state.blogs.map((blog) =>
          blog && blog.id === action.payload.id ? action.payload : blog
        );
      });
  },
});

export default blogSlice.reducer;
