import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Avatar from "@mui/material/Avatar";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const dark = true;
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);
  const navLInks = [
    {
      icon: <HomeIcon />,
      title: "Home",
    },
    {
      icon: <SendOutlinedIcon />,
      title: "Inbox",
    },
    // {
    //   icon: <AddCircleOutlineOutlinedIcon />,
    //   title: "Create Post",
    // },
    {
      icon: <ExploreOutlinedIcon />,
      title: "Explore",
    },
    {
      icon: <FavoriteBorderIcon />,
      title: "Activity",
    },
  ];
  return (
    <>
      <nav className="border-b-2 dark:border-transparent sticky top-0 z-50 bg-white dark:bg-[#1A1A1A] w-full">
        <div className="flex items-center justify-between h-[60px] w-full sm:max-w-[1000px] px-2  md:mx-4 lg:mx-auto">
          <img
            className="h-8"
            src={
              dark
                ? "https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                : "https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
            }
            alt=""
          />

          <ul className="gap-4 hidden sm:flex">
            <div className=" hidden sm:block">
              <SearchOutlinedIcon className="absolute mt-1 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none dark:text-gray-100 dark:placeholder:text-gray-500 bg-[#efefef] dark:bg-[#2e2e2e] px-6 py-1 active:outline-0"
              />
            </div>
            {navLInks.map(({ icon }, index) => (
              <li key={index} className="cursor-pointer dark:text-gray-100">
                {icon}
              </li>
            ))}

            <li>
              <Avatar
                className="cursor-pointer"
                alt="Remy Sharp"
                sx={{ width: 24, height: 24 }}
                src="/static/images/avatar/1.jpg"
              />
            </li>
          </ul>
          <div className="sm:hidden block flex gap-4 items-center">
            {/* <div className="">
              <SearchOutlinedIcon className="absolute mt-1 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#efefef] px-6 py-1 active:outline-0 w-32"
              />
            </div> */}
            <Avatar
              className="cursor-pointer"
              alt="Remy Sharp"
              sx={{ width: 24, height: 24 }}
              src="/static/images/avatar/1.jpg"
            />
            <MenuIcon
              onClick={() => {
                setOpen(true);
              }}
            />
          </div>
        </div>
      </nav>
      {/* overlay */}
      {open && (
        <div className="overflow-hidden fixed top-0 left-0 bg-[#00000060] w-full h-full z-50" />
      )}

      {/* menu */}
      <nav
        className={`fixed w-52 bg-white top-0  h-full z-50 duration-300 ease-in-out ${
          open ? "right-0" : "-right-full"
        }`}
      >
        <CloseIcon
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4"
        />
        <ul className="flex mr-8 gap-4 flex-col items-end mt-16  ">
          {navLInks.map(({ title, icon }, index) => (
            <li key={index} className="cursor-pointer">
              {title} {icon}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
