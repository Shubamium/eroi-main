"use client";
import React, { useState } from "react";
import "./header.scss";
import Link from "next/link";
import {
  FaDiscord,
  FaInstagram,
  FaInstagramSquare,
  FaSearch,
  FaYoutube,
} from "react-icons/fa";
import { usePathname } from "next/navigation";
import { CiMenuBurger } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill, RiTwitterXFill } from "react-icons/ri";
type Props = {};

export default function Header({}: Props) {
  const path = usePathname();
  const [fs, setFs] = useState(false);
  return (
    <>
      <header id="header">
        <div className="l">
          <Link href={"/"} className="btn logo">
            <img src="/g/logo_w.png" alt="" height={300} />
          </Link>
        </div>
        <nav>
          <div className="rw"></div>

          <div
            className={`btn btn-nav ${path.includes("talents") ? "act" : ""}`}
          >
            <Link href={"/talents"}>talents</Link>

            <div className="dropdown">
              <Link href="/talents/rift" className="btn btn-sub">
                GENERATION 1: RIFT
              </Link>
              <Link href="/talents/rift" className="btn btn-sub">
                GENERATION 2: RIFT
              </Link>
              <Link href="/talents/rift" className="btn btn-sub">
                GENERATION 3: RIFT
              </Link>
            </div>
          </div>
          <div className="rw"></div>
          <Link
            className={`btn btn-nav ${path.includes("about") ? "act" : ""}`}
            href={"/news"}
          >
            news
          </Link>
          <div className="rw"></div>
          <Link
            className={`btn btn-nav ${path.includes("news") ? "act" : ""}`}
            href={"https://e-roi.shop"}
          >
            shop
          </Link>
          <div className="rw"></div>
          <div className={`btn btn-nav ${path.includes("shop") ? "act" : ""}`}>
            <Link href="/contact">contact</Link>
            <div className="dropdown">
              <Link href="/jobs" className="btn btn-sub">
                JOBS
              </Link>
              <Link href="/inquiries" className="btn btn-sub">
                Business Inquiries
              </Link>
              <Link href="/other-inquiries" className="btn btn-sub">
                Other Inquiries
              </Link>
            </div>
          </div>

          <div className="rw"></div>
        </nav>
        <div className="icons">
          <div className="socials">
            <a href="#" className="btn btn-soc">
              <RiTwitterXFill />
            </a>
            <a href="#" className="btn btn-soc">
              <FaInstagram />
            </a>
            <a href="#" className="btn btn-soc">
              <FaYoutube />
            </a>
          </div>
          <button className="btn btn-nav" onClick={() => setFs(!fs)}>
            <GiHamburgerMenu />
          </button>
        </div>
      </header>
      <header
        id="fs"
        className={fs ? "visible" : " closed"}
        onClick={() => {
          setFs(false);
        }}
      >
        <div className="l">
          <div className="hp">
            <h2>
              NAVIGATION <div className="triangle"></div>
            </h2>
            <div className="line"></div>
            <div className="line b"></div>
          </div>
          <div className="sp">
            <img src="/g/logo_w.png" alt="" className="logo" />
            <div className="socials">
              <a href="#" target="_blank" className="btn btn-soc">
                <FaYoutube />
              </a>
              <a href="#" target="_blank" className="btn btn-soc">
                <FaDiscord />
              </a>
              <a href="#" target="_blank" className="btn btn-soc">
                <FaXTwitter />
              </a>
            </div>
          </div>
          <div className="fp">
            <div className="tagline">
              <p>
                UNCENSORED,UNFILTERED,UNFORGETTABLE. <span>EROI!</span>
              </p>
              <p className="copy">EROI PRODUCTIONS LTD</p>
            </div>
          </div>
        </div>
        <div className="r">
          <Link href="/talents" className="btn btn-nav">
            TALENTS
          </Link>
          <Link href="/about" className="btn btn-nav">
            ABOUT
          </Link>
          <Link href="/news" className="btn btn-nav">
            NEWS
          </Link>
          <Link href="https://eroi.shop" className="btn btn-nav">
            SHOP
          </Link>
          <Link href="/contact" className="btn btn-nav">
            CONTACT
          </Link>
          <Link href="/policies" className="btn btn-nav">
            POLICIES
          </Link>
        </div>
      </header>
    </>
  );
}
