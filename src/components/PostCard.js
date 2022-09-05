import {
  FavoriteBorderOutlined,
  SendOutlined,
  CommentOutlined,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";

const PostCard = ({
  imageUrl,
  username,
  time,
  profilePicUrl,
  caption,
  likes,
}) => {
  return (
    <div className="border-2 rounded bg-white dark:border-none py-4 dark:text-gray-100 dark:bg-[#1A1A1A]">
      <div className="flex px-2 sm:px-4 mb-4">
        <Avatar className="mr-2" src={profilePicUrl} />
        <div>
          <h3 className="text-sm sm:text-md font-semibold">{username}</h3>
          <p className="text-xs sm:text-sm text-gray-500">{time} ago</p>
        </div>
      </div>
      <div className="flex justify-center dark:bg-[#0d0d0d]">
        <img className="object-contain max-h-[400px]" src={imageUrl} alt="" />
      </div>
      <div className="mx-2 sm:mx-4 mb-4">
        <p className="text-sm sm:text-md my-4 w-auto overflow-ellipsis">
          {caption}
        </p>
        <div className="space-x-4 my-2 border-t-2 dark:border-[#2E2E2E] pt-2">
          <FavoriteBorderOutlined className="cursor-pointer hover:text-gray-500" />
          <CommentOutlined className="cursor-pointer hover:text-gray-500" />
          <SendOutlined className="cursor-pointer hover:text-gray-500" />
        </div>
        <p className="text-current text-sm sm:text-md font-bold border-b-2 dark:border-[#2E2E2E] pb-2">
          {likes ? `${likes} likes` : "0 like"}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <Avatar sx={{ width: 32, height: 32 }} />
          <input
            className="flex-auto input px-2 "
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
