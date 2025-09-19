import React from "react";

type Props = {};
import "./talent.scss";
import { CgMail } from "react-icons/cg";
import { FaXTwitter } from "react-icons/fa6";
import { RiMailFill } from "react-icons/ri";
export default function page({}: Props) {
  return (
    <main id="p_td">
      <section id="banner">
        <img src="/g/talart.png" alt="" className="ta" />
        <h2>PLACEHOLDER NAME</h2>
      </section>
      <section id="bio-panel">
        <div className="pl t"></div>
        <div className="pl r"></div>
        <div className="panel">
          <div className="ph">
            <div className="h">
              <h2>PLACEHOLDER</h2>
              <div className="sub">
                <h2>NAME</h2>
                <div className="icons">
                  <a href="#" target="_blank" className="btn btn-soc">
                    <FaXTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn btn-soc">
                    <FaXTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn btn-soc">
                    <FaXTwitter />
                  </a>
                  <a href="#" target="_blank" className="btn btn-soc">
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
            <div className="ww btn">
              <RiMailFill /> <p>WORK WITH PLACEHOLDER</p>
            </div>
          </div>
          <div className="pc">
            <p className="b">
              Sometimes it feels like time isn’t real — not in the cosmic sense,
              but in the everyday way that Tuesday melts into Wednesday, and
              your coffee goes cold while you blink. You try to hold on to a
              thought, a plan, maybe even a version{" "}
            </p>
            <div className="eb">
              <img src="/g/cpc2.png" alt="" className="a" />
            </div>
          </div>
        </div>
      </section>

      <div className="tal-vid">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/din8MpMohyg?si=9-pl3ctbbm37ypBD"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
