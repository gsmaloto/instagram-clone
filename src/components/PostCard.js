import {
  FavoriteBorderOutlined,
  SendOutlined,
  CommentOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const PostCard = ({ imageUrl }) => {
  return (
    <div className="border-2 rounded bg-white dark:border-none py-4 dark:text-gray-100 dark:bg-[#1A1A1A]">
      <div className="flex px-4 mb-4">
        <Avatar className="mr-2" />
        <div>
          <h3 className="text-sm sm:text-md font-semibold">gsmaloto</h3>
          <p className="text-xs sm:text-sm text-gray-500">3h ago</p>
        </div>
      </div>
      <div className="flex justify-center">
        <img className="object-contain max-h-[400px]" src={imageUrl} alt="" />
      </div>
      <div className="mx-4 mb-4">
        <p className="text-sm sm:text-md my-4 w-auto overflow-ellipsis">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          distinctio sapiente eligendi ipsa. Nihil, voluptate id aliquid fuga
          qui iste unde suscipit dolores voluptatem obcaecati dolore illo
          laborum in voluptatibus, a dicta rerum reiciendis velit quae alias
          facere optio! Laborum.
        </p>
        <div className="space-x-4 my-2 border-t-2 dark:border-[#2E2E2E] pt-2">
          <FavoriteBorderOutlined className="cursor-pointer hover:text-gray-500" />
          <CommentOutlined className="cursor-pointer hover:text-gray-500" />
          <SendOutlined className="cursor-pointer hover:text-gray-500" />
        </div>
        <p className="text-current text-sm sm:text-md font-bold border-b-2 dark:border-[#2E2E2E] pb-2">
          1,435 likes
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Avatar sx={{ width: 32, height: 32 }} />
          <input
            className="flex-auto input px-0 "
            type="text"
            placeholder="Add a comment..."
          />
          <SendOutlined className="cursor-pointer flex-none" />
        </div>
      </div>
    </div>
  );
};

export default PostCard;
