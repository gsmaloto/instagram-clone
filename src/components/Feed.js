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
            {/* imageUrl, profilePicUrl, caption, likes */}
            <PostCard
              profilePicUrl="https://assets.entrepreneur.com/content/3x2/2000/1651673015-shutterstock-2098527055.jpg"
              username="paparazzi"
              time="5h"
              imageUrl="https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/WOPA160517_D056-resized.jpg?crop=864%2C0%2C1728%2C2304&wid=600&hei=800&scl=2.88"
              caption="beautiful nature"
              likes="2,454"
            />
            <PostCard
              profilePicUrl="https://i.pinimg.com/originals/ab/6c/69/ab6c69b36287628b0eba043827c1c74a.jpg"
              username="aang"
              time="3w"
              imageUrl="https://static.tvtropes.org/pmwiki/pub/images/avatar_poster_4.png"
              caption="avatar the last airbender"
              likes="26,966"
            />
            <PostCard
              profilePicUrl="https://m.media-amazon.com/images/M/MV5BMTY2ODQ3NjMyMl5BMl5BanBnXkFtZTcwODg0MTUzNA@@._V1_.jpg"
              username="avatar"
              time="2d"
              imageUrl="https://i.rtings.com/assets/pages/jKbUPDz0/best-ps5-tv-202107-medium.jpg"
              caption="I want PS5 now!"
              likes="12,134"
            />
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
