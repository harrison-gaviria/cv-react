import React from 'react';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslation';

interface ProjectItemProps {
  title: string;
  description: string;
  colorClass: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ title, description, colorClass }) => (
  <div className={`border-l-4 ${colorClass} pl-4`}>
    <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Projects: React.FC = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: t.project1,
      description: t.project1Desc,
      colorClass: 'border-green-500'
    },
    {
      title: t.project2,
      description: t.project2Desc,
      colorClass: 'border-yellow-500'
    },
    {
      title: t.project3,
      description: t.project3Desc,
      colorClass: 'border-purple-500'
    },
    {
      title: t.project4,
      description: t.project4Desc,
      colorClass: 'border-red-500'
    }
  ];

  return (
    <Section title={t.projectsTitle}>
      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectItem
            key={index}
            title={project.title}
            description={project.description}
            colorClass={project.colorClass}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
