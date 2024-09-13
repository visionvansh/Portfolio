import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "C:/Users/vansh/OneDrive/Desktop/code/src/style.js";
import { github } from "C:/Users/vansh/OneDrive/Desktop/code/src/assets/assets";
import { SectionWrapper } from "C:/Users/vansh/OneDrive/Desktop/code/src/hoc/index.jsx";
import { projects } from "C:/Users/vansh/OneDrive/Desktop/code/src/constants/index.js";
import { fadeIn, textVariant } from "C:/Users/vansh/OneDrive/Desktop/code/src/utils/motion.js";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <p className="text-center text-s brightness-100 text-yellow-300 rounded-md font-sans font-extrabold antialiased hover:subpixel-antialiased text-transform: uppercase transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Click Here To Get This Service</p>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        
        <h2 className={`${styles.sectionHeadText}`}>My Services.</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Boost your online presence with Ayshman’s top-notch services! Whether you need advanced video editing, full-stack web development, stunning thumbnail designs, or Instagram theme page management, Ayshman has you covered. Get professional, high-quality solutions that will make your content stand out and engage your audience. Let’s create something amazing together! 🚀.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");