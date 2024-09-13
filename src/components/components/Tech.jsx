import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "C:/Users/vansh/OneDrive/Desktop/code/src/hoc/index.jsx";
import { technologies } from "C:/Users/vansh/OneDrive/Desktop/code/src/constants/index.js";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");