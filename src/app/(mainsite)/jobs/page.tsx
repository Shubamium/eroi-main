import React from "react";
import ContactLayout from "../(components)/contactLayout/ContactLayout";

type Props = {};

export default function page({}: Props) {
  return (
    <main id="jobs">
      <ContactLayout
        mt="JOBS"
        ah="WE ARE HIRING FOR..."
        role={true}
        st="SELECT YOUR ROLE"
      />
    </main>
  );
}
