import React from "react";
import AddPost from "./AddPost";
import PostCard from "./PostCard";
import Story from "./Story";
import Suggestion from "./Suggestion";
import { postData } from "../userData";

const Feed = () => {
  console.log(postData);
  return (
    <div className="bg-[#fafafa] dark:bg-black pt-4 px-2 md:mx-0">
      {/* container */}
      <div className="max-w-[800px] sm:mx-auto">
        {/* grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* grid item */}
          <div className="col-span-12 sm:col-span-8">
            <div className="mb-4">
              <Story />
            </div>
            <div className="mb-4">
              <AddPost />
            </div>
            <div className="mb-4 space-y-3">
              {/* imageUrl, profilePicUrl, caption, likes */}
              {postData.map((post, index) => (
                <PostCard key={index} postDetails={post} />
              ))}
            </div>
          </div>

          <div className="hidden sm:block sm:col-span-4">
            <Suggestion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
