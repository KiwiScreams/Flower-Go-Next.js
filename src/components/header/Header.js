import Link from "next/link";
import Image from "next/image";
import Heart from "../../app/assets/images/icons/Heart.svg";
import Profile from "../../app/assets/images/icons/Profile.svg";
import Buy from "../../app/assets/images/icons/Buy.svg";
import "./Header.css";
const Header = () => {
  return (
    <>
      <header>
        <h1>Flower Go</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Red Rose</li>
            <li>Lotus</li>
            <li>Jasmine</li>
            <li>Contact</li>
          </ul>
        </nav>
        <ul>
          <li>
            <Image src={Heart} alt="" width={400} height={300} />
            <Image src={Profile} alt="" width={400} height={300} />
            <Image src={Buy} alt="" width={400} height={300} />
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;
