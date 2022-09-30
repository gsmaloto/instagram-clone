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
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/userLogin/userLoginSlice";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  const userLogged = useSelector((state) => state.userLogin);
  console.log(userLogged.profilePic);
  const dispatch = useDispatch();

  const handleLogout = () => dispatch(logout());

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
      <nav className="border-b-2 dark:border-transparent sticky top-0 z-50 bg-white dark:text-gray-100 dark:bg-[#1A1A1A] w-full">
        <div className="flex items-center justify-between h-[60px] w-full sm:max-w-[1000px] px-2 mx-auto">
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
              className="cursor-pointer"
              onClick={() => {
                setDarkMode(!darkMode);
                localStorage.setItem("darkMode", !darkMode);
              }}
            >
              {darkMode ? <DarkModeOutlinedIcon /> : <WbSunnyOutlinedIcon />}
            </div>
          </div>

          <ul className="hidden gap-4 sm:flex">
            <div className="hidden sm:block">
              <SearchOutlinedIcon className="absolute mt-1 ml-1 text-gray-400" />
              <input type="text" placeholder="Search" className="pl-8 input" />
            </div>
            {navLInks.map(({ icon }, index) => (
              <li key={index} className="cursor-pointer ">
                {icon}
              </li>
            ))}

            <li className="relative">
              <Avatar
                className="cursor-pointer"
                alt="Remy Sharp"
                sx={{ width: 24, height: 24 }}
                src={userLogged?.profilePic}
                onClick={() => setShowMenu(true)}
              />
              {showMenu && (
                <div className="absolute right-0 p-4 space-y-2 text-sm bg-gray-800">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaRegUserCircle />
                    <p>Profile</p>
                  </div>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <FaRegUserCircle />
                    <p>Profile</p>
                  </div>
                  <div
                    onClick={handleLogout}
                    className="text-center border-t-2 border-gray-700 cursor-pointer"
                  >
                    <p>Log Out</p>
                  </div>
                </div>
              )}
            </li>
          </ul>
          <div className="flex items-center block gap-4 sm:hidden">
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
        <ul className="flex flex-col items-end gap-6 mt-16 mr-8 ">
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
