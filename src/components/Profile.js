import React from "react";
import { useSelector } from "react-redux";
import { userData } from "../userData";
const Profile = () => {
  const { fname, lname, profilePic, username, posts } = useSelector(
    (state) => state.userLogin
  );
  console.log(posts);

  return (
    <div className="min-h-[calc(100vh-60px)] pt-4 px-4 dark:bg-black dark:text-white">
      <div className="flex items-center justify-center flex-col sm:flex-row max-w-[800px] mx-auto py-4 dark:bg-[#1A1A1A] rounded">
        <div className="mb-4 sm:mr-12 ">
          <img
            src={profilePic}
            alt=""
            className="object-cover rounded-full w-36 h-36"
          />
        </div>
        <div>
          <div className="flex items-center justify-center mb-4 sm:justify-start">
            <h4 className="mr-4 text-2xl font-light">{username}</h4>
            <button className="p-2 text-xs border-2 rounded">
              Edit Profile
            </button>
          </div>
          <div className="flex justify-center gap-4 sm:justify-start">
            <p className="text-sm font-light">
              <span className="font-semibold">14</span> posts
            </p>
            <p className="text-sm font-light">
              <span className="font-semibold">1,242</span> followers
            </p>
            <p className="text-sm font-light">
              <span className="font-semibold">23</span> following
            </p>
          </div>
          <h3 className="mt-4 text-2xl text-center sm:text-left">
            {fname} {lname}
          </h3>
          <p className="text-xs max-w-[300px] mt-2 font-light sm:text-left text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            magnam illo provident rerum
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 h-300px max-w-[800px] mx-auto mt-8 ">
        {posts.map((post, index) => (
          <div className="h-[250px] max-w-[300px]" key={index}>
            <img className="object-cover w-full h-full" src={post} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
