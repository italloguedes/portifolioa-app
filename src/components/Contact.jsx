import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({ ...form, [name] : value})
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_ukzemrf',
      'template_s9kyfog',
      {
        from_name: form.name,
        to_name: 'Itallo Guedes',
        from_email: form.email,
        to_email: 'tubfuy@gmail.com',
        message: form.message,
      },
      'db9CKFa0hvAewjBkj'
     ).then(()=>{
      setLoading(false)
      alert('Obrigado!! Reponderei assim que possivel.')
      setForm({
        name: '',
        email:'',
        message: ''
      })
     }, 
     (error) =>{
      setLoading(false)
      console.log(error)
      alert('Something went wrong')
     }
    )

  };

  // template_s9kyfog
  // service_ukzemrf
  // db9CKFa0hvAewjBkj     

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" id='contact'>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100  rounded-2xl p-8" 
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contato.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white">Seu nome</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Qual é o seu nome?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white">Seu Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white">Qual é sua mensagem?</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Qual é a sua mensagem?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary py-4 px-8 text-white rounded-xl shadow-md shadow-primary outline-none w-fit"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      <EarthCanvas />
      </motion.div>

    </div>
  );
};

export default SectionWrapper(Contact, "");
