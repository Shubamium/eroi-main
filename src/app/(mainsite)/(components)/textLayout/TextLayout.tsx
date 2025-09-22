import React from "react";

type Props = {
  banner: string;
  h?: string;
  // Replace with Rich Text
  p?: string;
  children?: React.ReactNode;
};
import "./textLayout.scss";

export default function TextLayout({ banner, h, p, children }: Props) {
  return (
    <div className="text-layout">
      <img src={banner} alt="" className="mb" />

      <article id="content">
        <h1 className="headline">{h}</h1>
        <p className="p">{p}</p>
        {children}
      </article>
    </div>
  );
}
