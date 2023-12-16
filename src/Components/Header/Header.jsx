// SCSS
import './Header.scss'

// Images
import ProjectLogo from "../../img/Logo.svg";
import SearchImg from "../../img/Search.svg"
import UserLogo from "../../img/Oval.png"


export default function Header() {
  return (
    <header>
      <div className="container parent">
        <div>
          <a href="#"><img src={ProjectLogo} alt="img" /></a>
        </div>
        <div>
          <a href="#" className="link">Box Office</a>
          <a href="#" className="link">Media</a>
          <a href="#" className="link">Society</a>
          <a href="#" className="link">Ratings</a>
          <a href="#" className="link">DVD & Blu-Ray</a>
        </div>
        <div>
          <img className="search-icon" src={SearchImg} alt="img" />
          <img src={UserLogo} alt="img" />
        </div>
      </div>
    </header>
  );
}
