import "@fortawesome/fontawesome-free/css/all.min.css";
import { styles } from "../styles"
// const Footer = () => {
const currentDate = new Date();
const formattedDate = `${currentDate.getFullYear()}`;
//   return (
//     <footer className={`${styles.paddingX} flex w-full  items-center py-5 bottom-0 bg-primary justify-center text-xl`}><h1>&copy;2024-{formattedDate} Madiso Melese.  All Rights Reserved.</h1>
//     </footer>
//   )
// }

// export default Footer

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black-100  text-white pt-12">
      <div className="container mx-auto">
        <h2 className={`${styles.sectionHeadText} sm:hidden my-8 t`}>Our Social Media</h2>
        <div className="flex flex-col sm:flex-row  mb-4 space-y-2 sm:space-y-0 sm:space-x-4 text-4xl gap-16 sm:justify-center justify-start items-start sm:items-center ml-12">
          <a
            href="https://github.com/MadisoMelese"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i title="GitHub" className="fab fa-github text-gray-500"></i>{" "}
            <span className="sm:hidden text-2xl">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i title="LinkedIn" className="fab fa-linkedin text-blue-700"></i>
            <span className="sm:hidden text-2xl"> LinkedIn</span>
          </a>
          <a
            href="https://telegram.me/@Madisha54"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i title="Telegram" className="fab fa-telegram text-blue-400"></i>{" "}
            <span className="sm:hidden text-2xl"> Telegram</span>
          </a>
          <a
            href="mailto:madishamadiso00@gmail.com"
            className="hover:text-gray-400"
          >
            <i title="Email" className="fas fa-envelope text-red-500"></i>
            <span className="sm:hidden text-2xl"> Email</span>
          </a>
          <a
            href="https://wa.me/+251954233154"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i title="WhatsApp" className="fab fa-whatsapp text-green-500"></i>
            <span className="sm:hidden text-2xl"> WhatsApp</span>
          </a>
          <a
            href="https://www.instagram.com/madisha542"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            <i title="Instagram" className="fab fa-instagram text-pink-600"></i>
            <span className="sm:hidden text-2xl"> Instagram</span>
          </a>
        </div>
        <p className="mt-12 text-2xl flex justify-center text-secondary">&copy; 2024-{formattedDate} Madiso Melese. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
