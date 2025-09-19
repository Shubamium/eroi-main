"use client";
import React, { useEffect } from "react";

type Props = {};
import "./loading.scss";
export default function Loading({}: Props) {
  const [loading, setLoading] = React.useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 7000);
  }, []);
  return (
    <div id="loading" className={loading ? "hide" : ""}>
      <div className="slogan">
        <p>UNCENSORED.</p>
        <p>UNFILTERED.</p>
        <p>UNFORGETTABLE.</p>
      </div>
      <img src="/g/logo_w.png" alt="" className="logo" />
      <div className="loading-bar">
        <div className="fill"></div>
      </div>
    </div>
  );
}
