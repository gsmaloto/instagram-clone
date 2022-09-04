import { Avatar } from "@mui/material";
import React from "react";

const Story = () => {
  return (
    <div className="gap-4 overflow-x-auto px-4  flex items-center border-2 rounded bg-white">
      <div className="flex flex-col gap-2 overflow-col items-center  my-4">
        <div className="h-10 w-10 sm:h-12 sm:w-12  outline outline-offset-2 outline-2 outline-red-600  rounded-full">
          <Avatar sx={{ width: "100%", height: "100%" }} />
        </div>
        <p className="text-sm text-center text-gray-600 overflow-hidden overflow-ellipsis w-[60px]">
          kalifragisasdjs
        </p>
      </div>
    </div>
  );
};

export default Story;
