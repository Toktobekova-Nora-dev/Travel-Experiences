"use client";
import React from "react";
import scss from "./NewsPage.module.scss";
import { Avatar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

interface NewsItem {
  name: string;
  decription: string;
  url: string;
}

const NewsPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewsItem>({
    defaultValues: {
      name: "",
      decription: "",
      url: "",
    },
  });

  const onSubmit = (data: NewsItem) => {
    const existing = localStorage.getItem("newsList");
    const parsed = existing ? JSON.parse(existing) : [];
    const updated = Array.isArray(parsed) ? [...parsed, data] : [data];
    localStorage.setItem("newsList", JSON.stringify(updated));
    alert("✅ Новость сохранена!");
    reset();
  };

  return (
    <div className={scss.content}>
      <div className={scss.stack}>
        <h1>Create News</h1>
        <Stack direction="row" spacing={1}>
          <Avatar alt="Admin" src="/static/images/avatar/2.jpg" />
        </Stack>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className={scss.form}>
        <input
          {...register("name", { required: "Name is required" })}
          className={scss.form_input}
          placeholder="Name"
        />
        <input
          {...register("decription", { required: "Description required" })}
          className={scss.form_input}
          placeholder="Description"
        />
        <input
          {...register("url", { required: "Image URL required" })}
          className={scss.form_input}
          placeholder="Image URL"
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NewsPage;
