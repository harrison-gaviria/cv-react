import React from 'react';
import { Award } from 'lucide-react';
import { useTranslation } from 'src/hooks';
import { getCertifications } from 'src/data';
import Section from 'src/components/Section';

const Certifications: React.FC = () => {
  const { t, language } = useTranslation();

  return (
    <Section title={t.certificationsTitle} icon={Award}>
      <div className="space-y-3">
        {getCertifications(language).map((cert, index) => (
          <div key={index} className="border-b border-gray-100 pb-3 last:border-b-0 last:pb-0">
            <a
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm transition-colors"
            >
              {cert.name}
            </a>
            {cert.institution && (
              <p className="text-gray-500 text-xs">{cert.institution}</p>
            )}
            <p className="text-gray-400 text-xs">{cert.year}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Certifications;