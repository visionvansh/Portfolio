import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "C:/Users/vansh/OneDrive/Desktop/code/src/style.js";
import { services } from "C:/Users/vansh/OneDrive/Desktop/code/src/constants/index.js";
import { SectionWrapper } from "C:/Users/vansh/OneDrive/Desktop/code/src/hoc/index.jsx";
import { fadeIn, textVariant } from "C:/Users/vansh/OneDrive/Desktop/code/src/utils/motion.js";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hi, I’m Ayshman, a passionate and skilled professional specializing in advanced video editing, thumbnail designing, 3D web designing, and managing Instagram theme pages. With a keen eye for detail and a flair for creativity, I transform ideas into visually stunning and engaging content. Whether it’s crafting eye-catching YouTube thumbnails, designing immersive 3D websites, or managing Instagram theme pages, I bring a unique blend of technical expertise and artistic vision to every project.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");