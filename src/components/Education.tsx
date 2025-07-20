import React from 'react';
import { useTranslation } from 'src/hooks';
import Section from 'src/components/Section';

const Education: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t.educationTitle}>
      <div className="space-y-4 text-sm">
        <div>
          <h3 className="font-semibold text-gray-800">{t.engineering}</h3>
          <p className="text-gray-600">Instituto Tecnológico Metropolitano</p>
          <p className="text-gray-500">{t.engineeringStatus}</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{t.techDegree}</h3>
          <p className="text-gray-600">Instituto Tecnológico Metropolitano</p>
          <p className="text-gray-500">2024</p>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800">{t.highSchool}</h3>
          <p className="text-gray-600">{t.highSchoolInst}</p>
          <p className="text-gray-500">2018</p>
        </div>
      </div>
    </Section>
  );
};

export default Education;
