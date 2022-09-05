import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import Avatar from "@mui/material/Avatar";
import React, { useEffect, useState } from "react";
const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
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
      <nav className="border-b-2 dark:border-transparent sticky top-0 z-50 bg-white  dark:text-gray-100 dark:bg-[#1A1A1A] w-full">
        <div className="flex items-center justify-between h-[60px] w-full sm:max-w-[1000px] px-2  md:mx-4 lg:mx-auto">
          <div className="flex gap-2">
            <img
              className="h-8"
              src={
                darkMode
                  ? "https://www.pngkey.com/png/full/828-8286178_mackeys-work-needs-no-elaborate-presentation-or-distracting.png"
                  : "https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
              }
              alt=""
            />
            <div
              onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("darkMode", !darkMode);
              }}
            >
              {darkMode ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
            </div>
          </div>

          <ul className="gap-4 hidden sm:flex">
            <div className=" hidden sm:block">
              <SearchOutlinedIcon className="absolute ml-1 mt-1 text-gray-400" />
              <input type="text" placeholder="Search" className="input pl-8" />
            </div>
            {navLInks.map(({ icon }, index) => (
              <li key={index} className="cursor-pointer ">
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
        className={`fixed w-52 bg-white font-light dark:text-white dark:bg-[#2E2E2E] top-0  h-full z-50 duration-300 ease-in-out ${
          open ? "right-0" : "-right-full"
        }`}
      >
        <CloseIcon
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4"
        />
        <ul className="flex mr-8 gap-6 flex-col items-end mt-16  ">
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
