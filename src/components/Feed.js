import React from "react";
import AddPost from "./AddPost";
import PostCard from "./PostCard";
import Story from "./Story";
import Suggestion from "./Suggestion";

const Feed = () => (
  <div className="bg-[#fafafa] dark:bg-black pt-4 px-2 md:mx-0">
    {/* container */}
    <div className="max-w-[800px] sm:mx-auto">
      {/* grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* grid item */}
        <div className="sm:col-span-8 col-span-12">
          <div className="mb-4">
            <Story />
          </div>
          <div className="mb-4">
            <AddPost />
          </div>
          <div className="space-y-3 mb-4">
            <PostCard imageUrl="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88" />
            <PostCard imageUrl="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
            <PostCard imageUrl="https://wallpaperaccess.com/full/3770389.jpg" />
          </div>
        </div>

        <div className="hidden sm:block sm:col-span-4">
          <Suggestion />
        </div>
      </div>
    </div>
  </div>
);

export default Feed;
