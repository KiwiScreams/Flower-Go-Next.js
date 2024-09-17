"use client";
import Link from "next/link";
import Image from "next/image";
import Heart from "../../app/assets/images/icons/Heart.svg";
import Profile from "../../app/assets/images/icons/Profile.svg";
import Buy from "../../app/assets/images/icons/Buy.svg";
import "./Header.css";
import { useState } from "react";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="desktop">
        <h1 className="logo">Flower Go</h1>
        <nav>
          <ul>
            <li className="active">Home</li>
            <li>Red Rose</li>
            <li>Lotus</li>
            <li>Jasmine</li>
            <li>Contact</li>
          </ul>
        </nav>
        <ul>
          <li>
            <Image src={Heart} alt="" />
          </li>
          <li>
            <Image src={Profile} alt="" />
          </li>
          <li>
            <Image src={Buy} alt="" />
          </li>
        </ul>
      </header>
      <header className="mobile">
        <h1 className="logo">Flower Go</h1>
        <nav className={isOpen ? "nav show" : "nav"}>
          <ul>
            <li className="active">Home</li>
            <li>Red Rose</li>
            <li>Lotus</li>
            <li>Jasmine</li>
            <li>Contact</li>
            <li className="close">
              <span onClick={() => setIsOpen(false)}>x</span>
            </li>
          </ul>
        </nav>
        <ul>
          <li>
            <Image src={Heart} alt="" />
          </li>
          <li>
            <Image src={Profile} alt="" />
          </li>
          <li>
            <Image src={Buy} alt="" />
          </li>
        </ul>
        <div className="bar-container" onClick={handleToggle}>
          <div className={`bar1 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar2 ${isOpen ? "change" : ""}`}></div>
          <div className={`bar3 ${isOpen ? "change" : ""}`}></div>
        </div>
      </header>
    </>
  );
};

export default Header;
