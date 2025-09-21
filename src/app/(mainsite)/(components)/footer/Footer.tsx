import React from "react";

type Props = {};
import "./footer.scss";
import Link from "next/link";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiTwitterXFill, RiTwitterXLine } from "react-icons/ri";
import { ImTwitter } from "react-icons/im";
import { CiTwitter } from "react-icons/ci";
export default function Footer({}: Props) {
  return (
    <footer id="footer">
      <div className="fc">
        <div className="l">
          <img src="/g/logo_w.png" alt="" className="logo" />
          <div className="icons">
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
        </div>
        <div className="button-list">
          <Link href={"/policy"} className="btn">
            PRIVACY POLICY
          </Link>
          <Link href={"/tos"} className="btn">
            TERMS OF SERVICE
          </Link>
        </div>
      </div>
      <p>EROI! PRODUCTIONS 2025</p>
    </footer>
  );
}
