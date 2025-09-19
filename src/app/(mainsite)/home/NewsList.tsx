"use client";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

type Props = {};
import Slider from "react-slick";
export default function NewsList({}: Props) {
  return (
    <div className="np">
      {/* <div className="ctrl">
        <button className="btn btn-arrow">
          <BiChevronLeft />
        </button>
      </div> */}
      <Slider
        slidesPerRow={3}
        prevArrow={
          <div className="ctrl l">
            <button className="btn btn-arrow">
              <BiChevronLeft />
            </button>
          </div>
        }
        nextArrow={
          <div className="ctrl r ">
            <button className="btn btn-arrow">
              <BiChevronRight />
            </button>
          </div>
        }
        className="nl"
      >
        <div className="n btn">
          <img src="/g/prodpc.png" alt="" className="banner" />
          <p>News Title</p>
        </div>
        <div className="n btn">
          <img src="/g/prodpc.png" alt="" className="banner" />
          <p>News Title</p>
        </div>
        <div className="n btn">
          <img src="/g/prodpc.png" alt="" className="banner" />
          <p>News Title</p>
        </div>
        <div className="n btn">
          <img src="/g/prodpc.png" alt="" className="banner" />
          <p>News Title</p>
        </div>
        <div className="n btn">
          <img src="/g/prodpc.png" alt="" className="banner" />
          <p>News Title</p>
        </div>
        <div className="n btn">
          <img src="/g/prodpc.png" alt="" className="banner" />
          <p>News Title</p>
        </div>
      </Slider>
      {/* <div className="ctrl">
        <button className="btn btn-arrow">
          <BiChevronRight />
        </button>
      </div> */}
    </div>
  );
}
