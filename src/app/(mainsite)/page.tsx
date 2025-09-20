import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import CenterText from "./(components)/centerText/CenterText";
import TiltHeader from "./(components)/tiltHeader/TiltHeader";
import "./home.scss";
import NewsList from "./home/NewsList";
import { GoTriangleRight } from "react-icons/go";
import Link from "next/link";
export default function Home() {
  return (
    <main id="p_home">
      <section id="banner">
        <img src="/g/a1.webp" alt="" />
      </section>
      <CenterText
        sh="Uncensored, Unfiltered, Unforgettable"
        h="REDEFINING EN AV-AGENCIES.."
        content={
          <>
            <p>
              Sometimes it feels like time isn’t real — not in the cosmic sense,
              but in the everyday way that Tuesday melts into Wednesday, and
              your coffee goes cold while you blink. You try to hold on to a
              thought, a plan, maybe even a version{" "}
            </p>
            <p>
              ,and your coffee goes cold while you blink. You try to hold on to
              a thought, a plan, maybe even a version, a plan, maybe even a
              version
            </p>
          </>
        }
      />
      <section id="news-list">
        <TiltHeader h="NEWS" tiltDir="right" target="/news" />
        <NewsList />
      </section>
      <section id="tl">
        <TiltHeader h="TALENTS" tiltDir="left" target="/talents" />
        <div className="td">
          <div className="confine">
            <div className="data">
              <p className="sh">GENERATION 0</p>
              <h2 className="h">
                PLACEHOLDER NAME
                <Link href="/talents/slug" className="triangle btn"></Link>
              </h2>
            </div>
            <div className="display">
              <div className="audio btn">
                <p>Voice line here!</p>
                <img src="/g/psound.svg" alt="" className="audiobtn" />
              </div>
              <img src="/g/talart.png" alt="" className="ta" />
            </div>
          </div>
        </div>
      </section>
      <div className="td-s">
        <div className="card btn">
          <img src="/g/talico.png" alt="" />
          <p>Placeholder Name</p>
        </div>
        <div className="card btn">
          <img src="/g/talico.png" alt="" />
          <p>Placeholder Name</p>
        </div>
        <div className="card btn">
          <img src="/g/talico.png" alt="" />
          <p>Placeholder Name</p>
        </div>
        <div className="card btn">
          <img src="/g/talico.png" alt="" />
          <p>Placeholder Name</p>
        </div>
        <div className="card btn">
          <img src="/g/talico.png" alt="" />
          <p>Placeholder Name</p>
        </div>
        <div className="card btn">
          <img src="/g/talico.png" alt="" />
          <p>Placeholder Name</p>
        </div>
        <div className="card btn">
          <img src="/g/talico.png" alt="" />
          <p>Placeholder Name</p>
        </div>
      </div>
      <div id="staff">
        <TiltHeader h="STAFF" tiltDir="right" />
        <div className="sl">
          <a href="#" target="_blank" className="s btn">
            <img src="/g/spch.png" alt="" className="pfp" />
            <h2>NAME</h2>
            <p>ROLE</p>
          </a>
          <a href="#" target="_blank" className="s btn">
            <img src="/g/spch.png" alt="" className="pfp" />
            <h2>NAME</h2>
            <p>ROLE</p>
          </a>
          <a href="#" target="_blank" className="s btn">
            <img src="/g/spch.png" alt="" className="pfp" />
            <h2>NAME</h2>
            <p>ROLE</p>
          </a>
          <a href="#" target="_blank" className="s btn">
            <img src="/g/spch.png" alt="" className="pfp" />
            <h2>NAME</h2>
            <p>ROLE</p>
          </a>
          <a href="#" target="_blank" className="s btn">
            <img src="/g/spch.png" alt="" className="pfp" />
            <h2>NAME</h2>
            <p>ROLE</p>
          </a>
        </div>
      </div>

      <section id="home-foot">
        <img src="/g/logo_w.png" alt="" className="logo" />
        <div className="button-list">
          <Link href={"#"} className="btn">
            SHOP
          </Link>
          <Link href={"#"} className="btn">
            SCHEDULE
          </Link>
          <Link href={"#"} className="btn">
            JOBS
          </Link>
          <Link href={"#"} className="btn">
            CONTACTS
          </Link>
        </div>
      </section>
    </main>
  );
}
