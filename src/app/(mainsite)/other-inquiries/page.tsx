import React from "react";
import ContactLayout from "../(components)/contactLayout/ContactLayout";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="otherinq">
      <ContactLayout
        mt="OTHER INQUIRIES"
        ah="GOT OTHER QUESTIONS?"
        role={false}
      />
    </main>
  );
}
