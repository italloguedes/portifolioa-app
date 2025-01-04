import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
import { p } from "framer-motion/client";
// import { Parallax } from "react-parallax";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <ParallaxTilt
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
      scale={1}
      transitionSpeed={450}
      className="xs:w-[250px] w-full"
    >
      <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)}

      className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient">
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <div className="
        text-white 
        text-[20px] 
        text-center 
        font-bold"
        >
          {title}
        </div>

      </div>

       </motion.div> 
    </ParallaxTilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          <a href="#about" id="about">
            About Me
          </a>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", " ", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a full-stack web developer with a passion for creating beautiful
        and functional websites. I have experience in building web applications
        using JavaScript, React, Node.js, Express, and MongoDB. I am a quick
        learner and enjoy working in a fast-paced environment. I am always
        looking for new challenges and opportunities to grow as a developer.
      </motion.p>

      <div className="mt-4 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
