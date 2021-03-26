import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaRegFilePdf,
} from 'react-icons/fa';

const Footer = () => {
  const resume = useStaticQuery(graphql`
    query MyQuery {
      file(relativePath: { eq: "nikki_quibin_resume.pdf" }) {
        publicURL
      }
    }
  `);
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-16 px-10 text-center text-white bg-purple-700">
      <footer data-aos="fade-down">
        <h2>I'm available for freelance work! Let's get in touch.</h2>
        <ul className="flex justify-center items-center p-5">
          <li className="mx-2">
            <a
              href="https://linkedin.com/in/nikki-louis-quibin-539ba796/"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700"
            >
              <FaLinkedin className="text-3xl" />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="https://github.com/NQuibin"
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700"
            >
              <FaGithub className="text-3xl" />
            </a>
          </li>
          <li className="mx-2">
            <a
              href="mailto:nikki.quibin@gmail.com"
              className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700"
            >
              <FaRegEnvelope className="text-3xl" />
            </a>
          </li>
          <li className="mx-2">
            <a
              href={resume.file.publicURL}
              target="_blank"
              rel="noreferrer"
              className="inline-block p-2 rounded-full hover:bg-white hover:text-purple-700"
            >
              <FaRegFilePdf className="text-3xl" />
            </a>
          </li>
        </ul>
        <small>
          © {currentYear} <b>Nikki Quibin</b>. All rights reserved.
        </small>
      </footer>
    </div>
  );
};

export default Footer;
