import React from "react";
import ContactLayout from "../(components)/contactLayout/ContactLayout";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="inquiries">
      <ContactLayout
        mt="BUSINESS INQUIRIES"
        ah="LETS WORK TOGETHER!"
        role={true}
        st="SELECT YOUR INQUIRY TYPE"
      />
    </main>
  );
}
