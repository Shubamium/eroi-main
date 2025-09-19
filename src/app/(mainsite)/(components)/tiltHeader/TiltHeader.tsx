import Link from "next/link";
import React from "react";

type Props = {
  tiltDir: "left" | "right";
  target: string;
  h: string;
};
import "./tiltHeader.scss";
export default function TiltHeader({ tiltDir, target, h }: Props) {
  return (
    <div className={`tilt-header ${tiltDir}`}>
      <div className="confine">
        <div className="l">
          <h2>{h}</h2>
          <div className="triangle"></div>
        </div>
        <div className="r">
          <Link href={target} className="btn btn-more">
            MORE+
          </Link>
        </div>
      </div>
    </div>
  );
}
