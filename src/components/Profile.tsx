import React from 'react';
import { Globe } from 'lucide-react';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslation';

const Profile: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Section title={t.profileTitle} icon={Globe}>
      <div className="space-y-4 text-gray-600">
        <p>{t.profileDescription}</p>
        <p>{t.profileDescription2}</p>
      </div>
    </Section>
  );
};

export default Profile;
