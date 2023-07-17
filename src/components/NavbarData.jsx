// import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
// import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";

export const sidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome className="left-menu-icon " size={20} />,
    className: "navtext",
  },
  {
    title: "Discover",
    path: "/discover",
    icon: <AiIcons.AiOutlineCompass className="left-menu-icon " size={20} />,
    className: "navtext",
  },
  {
    title: "Films",
    path: "/films",
    icon: <BsIcons.BsFilm className="left-menu-icon " size={20} />,
    className: "navtext",
  },
];
