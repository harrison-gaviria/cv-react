import React from 'react';
import { Code, Database, Cloud, Bot, Shield, Languages } from 'lucide-react';
import Section from 'src/components/Section';
import SkillBadge from 'src/components/SkillBadge';
import { useTranslation } from 'src/hooks/useTranslation';
import { skillsData } from 'src/data';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon?: React.ComponentType<{ size: number }>;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ title, skills, icon: Icon }) => (
  <div>
    <h3 className="font-medium text-gray-700 mb-2 flex items-center gap-1">
      {Icon && <Icon size={16} />}
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <SkillBadge key={index} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      <Section title={t.languagesTitle} icon={Languages} className="text-xl">
        <div className="space-y-4">
          <div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-700">{t.spanish}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">{t.english}</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section title={t.skillsTitle} icon={Code} className="text-xl">
        <div className="space-y-4">
          <SkillCategory title={t.frontend} skills={skillsData.frontend} />
          <SkillCategory title={t.backend} skills={skillsData.backend} />
          <SkillCategory title={t.languages} skills={skillsData.languages} />
          <SkillCategory title={t.databases} skills={skillsData.databases} icon={Database} />
          <SkillCategory title={t.devops} skills={skillsData.devops} icon={Cloud} />
          <SkillCategory title={t.ai} skills={skillsData.ai} icon={Bot} />
        </div>
      </Section>
      <Section title={t.additional} icon={Shield} className="text-xl">
        <div className="space-y-4 text-left">
          <div>
            <ul className="space-y-2 text-sm text-gray-600">
              {t.additionalSkills.map((skill: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </div>
)}

export default Skills;
