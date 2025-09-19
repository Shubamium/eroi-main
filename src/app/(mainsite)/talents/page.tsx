import React from "react";

type Props = {};
import "./ts.scss";
import CenterText from "../(components)/centerText/CenterText";
import { FaRepeat, FaXTwitter } from "react-icons/fa6";
import { FaPatreon, FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { RiRepeatFill } from "react-icons/ri";
import { BsRepeat } from "react-icons/bs";
import { FiRepeat } from "react-icons/fi";
export default function page({}: Props) {
  return (
    <main id="p_ts">
      <section id="banner">
        <div className="data">
          <h2>GENERATION 1</h2>
        </div>
        <img src="/g/cpc1.png" alt="" />
      </section>

      <section id="bio">
        <CenterText
          h="BACKSTORY PLACEHOLDER"
          sh="RIFTED TOGETHER"
          content={
            <>
              <p>
                Sometimes it feels like time isn’t real — not in the cosmic
                sense, but in the everyday way that Tuesday melts into
                Wednesday, and your coffee goes cold while you blink. You try to
                hold on to a thought, a plan, maybe even a version{" "}
              </p>
              <p>
                ,and your coffee goes cold while you blink. You try to hold on
                to a thought, a plan, maybe even a version, a plan, maybe even a
                version
              </p>
            </>
          }
        />
      </section>

      <section id="tswitch">
        <div className="confine">
          <div className="l">
            <p className="sh">THE PLACEHOLDER VTUBER</p>
            <h2 className="h">PLACEHOLDER NAME</h2>
            <div className="socials">
              <a href="#" target="_blank" className="btn btn-social">
                <FaXTwitter />
              </a>
              <a href="#" target="_blank" className="btn btn-social">
                <FaYoutube />
              </a>
              <a href="#" target="_blank" className="btn btn-social">
                <FaPatreon />
              </a>
            </div>
            <p className="bio">
              Sometimes it feels like time isn’t real — not in the cosmic sense,
              but in the everyday way that Tuesday melts into Wednesday, and
              your coffee goes cold while you blink. You try to hold on to a
              thought, a plan, maybe even a version
            </p>
            <div className="action">
              <Link href="/talents/slug" className="btn btn-action">
                DETAILS+
              </Link>
            </div>
          </div>
          <div className="r">
            <button className="btn btn-cycle">
              <FiRepeat />
              <img src="/g/talico.png" alt="" className="cycleart" />
            </button>
            <img src="/g/talico.png" alt="" className="mart" />
          </div>
        </div>
      </section>

      <section id="twoart">
        <img src="/g/cpc2.png" alt="" className="art at" />
        <img src="/g/cpc3.png" alt="" className="art ab" />
      </section>

      <section id="shoprift">
        <div className="confine">
          <h2 className="t">
            SHOP RIFT <div className="triangle"></div>
          </h2>
          <div className="sr">
            <a href="#" target="_blank" className="btn btn-sr">
              <div className="ap">
                <img src="/g/talart.png" alt="" className="art" />
              </div>
              <h2>PLACEHOLDER NAME</h2>
            </a>
            <a href="#" target="_blank" className="btn btn-sr">
              <div className="ap">
                <img src="/g/talart.png" alt="" className="art" />
              </div>
              <h2>PLACEHOLDER NAME</h2>
            </a>
            <a href="#" target="_blank" className="btn btn-sr">
              <div className="ap">
                <img src="/g/talart.png" alt="" className="art" />
              </div>
              <h2>PLACEHOLDER NAME</h2>
            </a>
            <a href="#" target="_blank" className="btn btn-sr">
              <div className="ap">
                <img src="/g/talart.png" alt="" className="art" />
              </div>
              <h2>PLACEHOLDER NAME</h2>
            </a>
            <a href="#" target="_blank" className="btn btn-sr">
              <div className="ap">
                <img src="/g/talart.png" alt="" className="art" />
              </div>
              <h2>PLACEHOLDER NAME</h2>
            </a>
            <a href="#" target="_blank" className="btn btn-sr">
              <div className="ap">
                <img src="/g/talart.png" alt="" className="art" />
              </div>
              <h2>PLACEHOLDER NAME</h2>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
