import { Avatar } from "@mui/material";
import React from "react";

const Suggestion = () => {
  return (
    <div className="w-full">
      <h3 className="text-gray-400 font-semibold mb-4">Suggestions for you</h3>
      <div className="flex items-center gap-2  ml-2 mb-2">
        <div className="mr-1">
          <Avatar />
        </div>
        <div>
          <h4 className="font-semibold">john_doe</h4>
          <p className="text-sm text-gray-400">Follows you</p>
        </div>
      </div>
      <div className="flex items-center gap-2  ml-2 mb-2">
        <div className="mr-1">
          <Avatar />
        </div>
        <div>
          <h4 className="font-semibold">john_doe</h4>
          <p className="text-sm text-gray-400">Follows you</p>
        </div>
      </div>
      <div className="flex items-center gap-2  ml-2 mb-2">
        <div className="mr-1">
          <Avatar />
        </div>
        <div>
          <h4 className="font-semibold">john_doe</h4>
          <p className="text-sm text-gray-400">Follows you</p>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
