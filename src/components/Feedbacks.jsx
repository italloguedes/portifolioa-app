import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { testimonials } from "../constants";
import { text } from "framer-motion/client";

const FeedbackCard = ({
  name,
  designation,
  testimonial,
  company,
  index,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="xs:w-[320px] w-full p-10 rounded-3xl bg-black-200"
    >
      <p className="text-white font-black text-[48px]">"</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[21px]">{testimonial}</p>
      </div>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="text-blue-400">@</span>
            {name}
          </p>
          <p>
            {designation} of {company}
          </p>
        </div>

        <div>
          <img src={image} alt={`Feedback by:- ${name}`} className="w-10 h-10 rounded-full object-cover" />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px] ">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div className="" variants={textVariant()}>
          <p className={styles.sectionSubText}>WHAT OTHERS SAY</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`${styles.padding} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard {...testimonial} index={index} key={testimonial.name} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");  
