import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { GiStairsGoal, GiMedallist, GiMightyForce } from 'react-icons/gi';
import Section from '@components/section';

const About = () => {
  const values = [
    {
      name: 'Relentlessly Learning',
      description: 'Keep on levelling up and hone my skills.',
      icon: GiStairsGoal,
    },
    {
      name: 'Pursue Excellence',
      description: 'Always strive to deliver the best product.',
      icon: GiMedallist,
    },
    {
      name: 'Grit',
      description: 'Never give up! Persevere and be resilient.',
      icon: GiMightyForce,
    },
  ];

  return (
    <Section title="Who I Am">
      <article className="flex flex-wrap items-center justify-center pb-10 md:flex-nowrap md:p-6 md:mx-auto md:text-center">
        <div
          className="rounded-full shadow-2xl bg-purple-700 mb-10 md:mb-0"
          data-aos="zoom-in-up"
        >
          <StaticImage
            src="../images/nikki-quibin-headshot.jpeg"
            alt="nikki quibin headshot"
            placeholder="blurred"
            className="w-64 h-64"
            imgStyle={{ borderRadius: '100%' }}
          />
        </div>
        <div className="md:w-1/2 md:px-6 lg:w-5/12" data-aos="fade-up">
          <p className="mb-4">
            <span role="img" aria-label="wave emoji">
              👋
            </span>
            {` Welcome!`}
          </p>
          <p className="mb-4">
            I'm a full stack software engineer focusing on web development.
            Coding is one of my favourite things to do since it allows me to
            build beautiful and awesome applications. I'm eager to keep learning
            to improve my craft and collaborating with developers of all levels.
          </p>
          <p>
            Below are the values I've adopted and adhere to from the amazing
            companies I've worked with.
          </p>
        </div>
      </article>
      <article className="pb-10 md:p-6 md:w-full">
        <ul>
          {values.map((value, index) => {
            const ValueIcon = value.icon;
            return (
              <li
                key={index}
                className="flex justify-center mb-4 px-2 last:mb-0 md:inline-flex md:w-1/3 md:mb-0"
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
              >
                <section className="text-center">
                  <ValueIcon className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-purple-500">{value.name}</h4>
                  <p>{value.description}</p>
                </section>
              </li>
            );
          })}
        </ul>
      </article>
    </Section>
  );
};

export default About;
