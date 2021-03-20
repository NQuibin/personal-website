import React from 'react';
import { TiUserOutline, TiMap, TiCalendarOutline } from 'react-icons/ti';
import Section from '@components/section';
import Icon from '@components/icon';
import { experiences } from '@/constants/experiences';

const Experience = () => {
  return (
    <Section title="Where I've Worked" id="experience" bgClass="bg-purple-50">
      <div className="flex flex-wrap">
        {experiences.map((experience, index) => (
          <article
            className="pb-10 md:w-1/2 md:p-6 lg:w-1/3"
            key={index}
            data-aos="fade-up"
            data-aos-delay={(index + 1) * 100}
          >
            <h3 className="mb-4 text-purple-500">
              <a
                href={experience.link}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {experience.company}
              </a>
            </h3>
            <h4 className="text-base">
              <TiUserOutline className="mr-1 mb-0.5 inline-block text-2xl" />
              {experience.title}
            </h4>
            <h4 className="text-base">
              <TiMap className="mr-1 mb-0.5 inline-block text-2xl" />
              {experience.location}
            </h4>
            <h4 className="mb-4 text-base">
              <TiCalendarOutline className="mr-1 mb-0.5 inline-block text-2xl" />
              {experience.duration}
            </h4>
            <p className="mb-4">{experience.description}</p>
            <div className="flex">
              {experience.techStack.map((tech, index) => (
                <Icon
                  title="hello"
                  key={index}
                  icon={tech.name}
                  tooltip={tech.label}
                  className="w-8 h-8 mr-3"
                />
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Experience;
