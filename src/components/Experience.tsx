import React from 'react';
import { Code, Calendar } from 'lucide-react';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslation';

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t.experienceTitle} icon={Code}>
      <div className="border-l-4 border-blue-600 pl-4">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{t.position}</h3>
          <span className="text-blue-600 font-medium">@ {t.company}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-500 mb-3">
          <Calendar size={16} />
          <span>{t.period}</span>
        </div>

        <div className="mb-4">
          <h4 className="font-medium text-gray-700 mb-2">{t.responsibilities}</h4>
          <ul className="space-y-1 text-gray-600">
            <li>• {t.resp1}</li>
            <li>• {t.resp2}</li>
            <li>• {t.resp3}</li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Experience;
