import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Full Stack Web-Developer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 75,
      }}
      
    />
  );
}

export default Type;
