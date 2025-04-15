import React from "react";
import ParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { services } from "../constants";
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
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full p-[1px] rounded-[20px] shadow-card green-pink-gradient"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[310px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <div className="text-white text-[20px] text-center font-bold">
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
          <a href="#about">Sobre mim</a>
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", " ", 0.1, 1)}
        className="mt-8 text-secondary text-[21px] max-w-3xl leading-[30px]"
      >
        Sou um estudante de programação focado em desenvolvimento backend. 
        Atualmente estou estudando Python, FastAPI, JavaScript com Next.js, além de HTML e CSS. 
        Tenho experiência com bancos de dados como Supabase e MySQL. 
        Estou sempre em busca de aprender novas tecnologias e evoluir como desenvolvedor.
      </motion.p>

      <div className="mt-16 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
