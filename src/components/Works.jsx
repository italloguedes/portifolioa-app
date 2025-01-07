import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";

const ProjectCard = ({
  name,
  description,
  image,
  source_code_link,
  tags,
  index,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5 * index, 0.75)}>
      <ParallaxTilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full p-5 sm:w-[360px] ] rounded-2xl bg-tertiary"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 cadr-img_hover gap-2">
          <div
              className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open("https://ecommerce-app-tlto.onrender.com/", "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>

            {/* // for Live demo purpose (show case) */}


          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={`tag-${index}`}
              className={`${tag.color} px-2 py-1 rounded-md text-[12px]`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </ParallaxTilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>My Work</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projects.</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0 - 1, 1)}
          className="mt-3 text-secondary text-[21px] max-w-3xl leading-[30px]"
        >
          Welcome to my project showcase, where innovation meets seamless
          execution. As a proficient full-stack developer specializing in the
          MERN stack (MongoDB, Express.js, React, Node.js), I am dedicated to
          building dynamic, responsive, and scalable web applications that solve
          real-world problems. I have worked on a variety of projects, ranging
          from frontend development to backend development development. Here are
          some of the projects I have worked on. You can find more of my
          projects on my GitHub and Livedemos in it.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
