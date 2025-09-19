import React from "react";

type Props = {
  sh: string;
  h: string;
  content?: React.ReactNode;
};
import "./centerText.scss";
export default function CenterText({ sh, h, content }: Props) {
  return (
    <div className="center-text">
      <hr />
      <p className="sh">{sh}</p>
      <h2 className="h">{h}</h2>
      {content && <div className="content">{content}</div>}
    </div>
  );
}
