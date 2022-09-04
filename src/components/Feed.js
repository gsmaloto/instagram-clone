import React from "react";
import PostCard from "./PostCard";
import Story from "./Story";
import Suggestion from "./Suggestion";

const Feed = () => (
  <div className="bg-[#fafafa]">
    <div className="max-w-[800px] mx-auto sm:px-2 ">
      <div className="flex items-start gap-8 justify-center mx-2 sm:mx-0">
        <div className=" max-w-full">
          <div className="my-4">
            <Story />
          </div>
          <div className="space-y-3 mb-4">
            <PostCard imageUrl="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88" />
            <PostCard imageUrl="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" />
            <PostCard imageUrl="https://wallpaperaccess.com/full/3770389.jpg" />
          </div>
        </div>

        <div className="hidden sm:block w-[1000px] ">
          <Suggestion />
        </div>
      </div>
    </div>
  </div>
);

export default Feed;
