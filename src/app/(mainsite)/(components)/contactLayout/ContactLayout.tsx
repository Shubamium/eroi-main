import React from "react";

import "./contactLayout.scss";
import BasicForm from "../basicForm/BasicForm";

type Props = {
  mt: string;
  ah: string;
  st?: string;
  role?: boolean;
};

export default function ContactLayout({ mt, ah, role, st }: Props) {
  return (
    <div className="contact-layout">
      <section id="ch">
        <img src="/g/a2.webp" alt="" className="mb" />
        <h2>{mt}</h2>
      </section>
      <div className="confine">
        <h2 className="mt">{ah}</h2>
      </div>
      {role && (
        <>
          <div className="role-select">
            <div className="confine">
              <p className="p">{st}</p>
            </div>
            <div className="rs">
              <div className="confine">
                <button className={`btn btn-role active`}>
                  GRAPHIC DESIGNER
                </button>
                <button className={`btn btn-role `}>GRAPHIC DESIGNER</button>
                <button className={`btn btn-role `}>GRAPHIC DESIGNER</button>
                <button className={`btn btn-role `}>GRAPHIC DESIGNER</button>
                <button className={`btn btn-role `}>GRAPHIC DESIGNER</button>
              </div>
            </div>
            <div className="confine desc">
              <p className="p"> [INSERT NOTE] </p>
              <p className="desc p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique nemo porro tempore eos, voluptatibus, quo facilis
                nulla et numquam consequatur odit mollitia sequi voluptate?
                Assumenda totam quod similique vero aliquid, nemo architecto
                expedita cumque quas quidem? Natus quibusdam nam laudantium?
                Facilis animi, autem cum sunt mollitia quam! Nihil, optio est.
              </p>
            </div>
          </div>
        </>
      )}
      <div className="confine">
        <BasicForm />
      </div>
    </div>
  );
}
