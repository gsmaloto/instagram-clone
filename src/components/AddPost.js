import SendOutlined from "@mui/icons-material/SendOutlined";
import { Avatar } from "@mui/material";
import React from "react";

const AddPost = () => {
  return (
    <div className="flex items-center w-full rounded bg-white dark:bg-[#1A1A1A] border-2 dark:border-none p-4">
      <div className="mr-4">
        <Avatar />
      </div>
      <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          className="flex-1 mr-2 dark:placeholder:text-gray-500 bg-[#efefef] dark:bg-[#2e2e2e]  dark:text-gray-200 px-2 py-2 sm:py-4 rounded-lg outline-none"
          type="text"
          placeholder="What's on your mind?"
        />
        <button type="submit ">
          <SendOutlined className="dark:text-white" />
        </button>
      </form>
    </div>
  );
};

export default AddPost;
