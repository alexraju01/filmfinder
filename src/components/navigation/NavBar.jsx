import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faVideo,
  faGear,
  faRightFromBracket,
  faCompass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
// import IMAGES from "../../images/images";

// https://icons8.com/icons/set/user-
function NavBar() {
  return (
    <aside>
      <nav>
        {/* <div className="user">
          <div>
            <h2>Alex Raju</h2>
            <p>xxxxxx@gmail.com</p>
          </div>
        </div> */}
        <ul>
          <li>
            <FontAwesomeIcon id="user" icon={faUser} size="2xl" />
            <p>Movie</p>
          </li>

          <li>
            <FontAwesomeIcon id="home" icon={faHouse} size="2xl" />
            <p>Movie</p>
          </li>

          <li>
            <FontAwesomeIcon id="discover" icon={faCompass} size="2xl" />
            <p className="1">Coffee</p>
          </li>
          <li>
            <FontAwesomeIcon id="video" icon={faVideo} size="2xl" />
            <p>Setting</p>
          </li>
        </ul>

        <ul>
          <li>
            <span>
              {/* <FontAwesomeIcon id="setting" icon={faGear} size="2xl" /> */}
              <FontAwesomeIcon id="faRightFromBracket" icon={faRightFromBracket} size="2xl" />
            </span>
            <p>Setting</p>
          </li>
        </ul>

        <div className="user">
          <div>
            <h2>Alex Raju</h2>
            <p>xxxxxx@gmail.com</p>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default NavBar;
