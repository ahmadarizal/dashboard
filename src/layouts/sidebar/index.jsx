// react-router packages
import { NavLink, useLocation } from "react-router-dom";

// react packages
import { useState, useEffect } from "react";

// other packages
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// react icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { MdMenu } from "react-icons/md";

// component
import SubMenu from "./SubMenu";

const Sidebar = () => {
  let isTab = useMediaQuery({ query: "(max-width: 768px)" });
  const { pathname } = useLocation();

  // sidebar open state
  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  const Sedebar_animation = isTab
    ? // mobile view
      {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        // System view
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    if (isTab) {
      // mobile
      setIsOpen(false);
    } else {
      // laptop
      setIsOpen(true);
    }
  }, [isTab]);

  // pathname change -> close sedebar (only mobile view)
  useEffect(() => {
    isTab && setIsOpen(false);
  }, [pathname]);

  const subMenusList = [
    {
      // main menu name like(all apps, setting)
      name: "build",
      icon: RiBuilding3Line,
      // submenus
      menus: ["auth", "app settings", "stroage", "hosting"],
    },
    {
      name: "analytics",
      icon: TbReportAnalytics,
      menus: ["dashboard", "realtime", "event"],
    },
  ];

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>
      <motion.div
        variants={Sedebar_animation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
      >
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 mx-3 py-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            alt="logo products"
            width={45}
          />
          <span className="text-xl whitespace-pre">Fire One</span>
        </div>

        {/* menus */}
        <div className="flex flex-col h-full">
          {/* first */}
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] md:h-[68%]">
            <li>
              <NavLink to="/" className={"link"}>
                <AiOutlineAppstore size={23} className="min-w-max" />
                All Apps
              </NavLink>
            </li>
            <li>
              <NavLink to="/authentication" className={"link"}>
                <BsPerson size={23} className="min-w-max" />
                Authentication
              </NavLink>
            </li>
            <li>
              <NavLink to="/stroage" className={"link"}>
                <HiOutlineDatabase size={23} className="min-w-max" />
                Stroage
              </NavLink>
            </li>

            {/* with sumenu */}
            {/* mobile view most show submenus */}
            {(isOpen || isTab) && (
              <div className="border-y py-5 border-slate-300">
                <small className="pl-3 text-slate-500 inline-block mb-2">
                  Product categories
                </small>
                {subMenusList.map((menu) => (
                  <div key={menu.name} className="flex flex-col gap-1">
                    <SubMenu data={menu} />
                  </div>
                ))}
              </div>
            )}

            <li>
              <NavLink to="/settings" className={"link"}>
                <SlSettings size={23} className="min-w-max" />
                Settings
              </NavLink>
            </li>
          </ul>
          {/* secoud */}
          {isOpen && (
            <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
              <div className="flex items-center justify-between border-y border-slate-300 p-4">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl ">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>

        {/* control button */}
        <motion.div
          animate={
            isOpen
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{
            duration: 0,
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer md:block hidden"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      <div className="m-3 md:hidden" onClick={() => setIsOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
};

export default Sidebar;
