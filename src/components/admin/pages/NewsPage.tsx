import React from "react";
import scss from "./NewsPage.module.scss";
import { Avatar, Stack } from "@mui/material";
const NewsPage = () => {
  return (
    <div>
      <div className={scss.content}>
        <div className={scss.stack}>
          <h1>Create News</h1>
          <Stack direction="row" spacing={1}>
            <Avatar alt="Admin" src="/static/images/avatar/2.jpg" />
          </Stack>
        </div>

        <div className={scss.form}>
          <input type="text" placeholder="Title" />
          <input type="file" />
          <button>Save</button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
