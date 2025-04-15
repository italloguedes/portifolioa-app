import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";
import ParallaxTilt from "react-parallax-tilt";

const ProjectCard = ({
  name,
  live_demo,
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
        className="w-full p-5 sm:w-[360px] rounded-2xl bg-tertiary"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 gap-2">
            <div
              className="bg-red-600 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(live_demo, "_blank")}
            >
              <img
                src={github}
                alt="live demo"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
            <div
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              onClick={() => window.open(source_code_link, "_blank")}
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
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
        <p className={`${styles.sectionSubText} text-center`}>Portfólio</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Projetos.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[21px] max-w-3xl leading-[30px]"
        >
          Bem-vindo à minha vitrine de projetos! Sou desenvolvedor full-stack com
          foco em soluções modernas usando tecnologias como Next.js, Stripe,
          inteligência artificial e integração com WordPress. Tenho experiência
          criando produtos digitais escaláveis, incluindo micro SaaS, e-commerces
          completos com checkout integrado e aplicações baseadas em IA hospedadas
          na Vercel. 
          <br />
          <br />
          Aqui estão alguns dos meus projetos favoritos — você pode ver mais no
          meu GitHub ou testar os live demos disponíveis.
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
