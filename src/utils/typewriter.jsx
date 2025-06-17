import React from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = ({ strings = ["Welcome!"], pause = 2500 }) => {
  return (
    <h1>
      <Typewriter
        onInit={(typewriter) => {
          strings.forEach((str, idx) => {
            typewriter.typeString(str).pauseFor(pause).deleteAll();
          });

          typewriter.start();
        }}
      />
    </h1>
  );
};

export default TypewriterEffect;
