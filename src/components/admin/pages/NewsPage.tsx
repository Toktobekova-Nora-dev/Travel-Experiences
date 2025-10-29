"use client";
import React from "react";
import scss from "./NewsPage.module.scss";
import { Avatar, Stack } from "@mui/material";
import { useForm } from "react-hook-form";

const NewsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "Nora",
      decription: "Cute",
      url: "Img",
    },
  });

  console.log(errors);
  return (
    <div>
      <div className={scss.content}>
        <div className={scss.stack}>
          <h1>Create News</h1>
          <Stack direction="row" spacing={1}>
            <Avatar alt="Admin" src="/static/images/avatar/2.jpg" />
          </Stack>
        </div>

        <form
          onSubmit={handleSubmit((data) => console.log(data))}
          className={scss.form}
        >
          <input
            {...register("name", { required: true, minLength: 10 })}
            className={scss.form_input}
            type="text"
            placeholder="name"x
          />
          <input
            {...register("decription", {
              required: "This is required",
              minLength: {
                value: 50,
                message: "min length is four 4",
              },
            })}
            className={scss.form_input}
            type="text"
            placeholder="decription"
          />
          <input
            {...register("url", { required: true })}
            className={scss.form_input}
            type="text"
            placeholder="img"
          />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
};

export default NewsPage;
