import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faChevronRight,
  faFilm,
  faPerson,
  // faGear,
  // faRightFromBracket,
  faCompass,
  // faUser,
} from "@fortawesome/free-solid-svg-icons";
// import { useState } from "react";
import { NavLink } from "react-router-dom";

// import IMAGES from "../../images/images";

// https://icons8.com/icons/set/user-
function NavBar() {
  return (
    <>
      <nav>
        <div className="navlinks">
          <li>
            <FontAwesomeIcon className="icon" icon={faHouse}></FontAwesomeIcon>
            {/* <p>hello</p> */}
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faCompass}></FontAwesomeIcon>
            {/* <p>hello</p> */}
          </li>
          <li>
            <FontAwesomeIcon className="icon" icon={faFilm}></FontAwesomeIcon>
            {/* <p>hello</p> */}
          </li>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
