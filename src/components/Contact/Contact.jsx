import React from "react";
import SoMeIcons from "../SoMeIcons/SoMeIcons";
import { wrapper } from "../../constants";

const Contact = () => (
  <section className="section">
    <div className={wrapper}>
      <div>
        <p className="stealth hiddenFade text-2xl sm:text-5xl text-right">
          Contact & Links
        </p>
        <p className="stealth hiddenFade text-sm sm:text-2xl text-right text-amber-300">
          Contact me or check me out on other platforms.
        </p>
      </div>
      <SoMeIcons />
    </div>
  </section>
);

export default Contact;
