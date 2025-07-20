import React from 'react';
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import Section from 'src/components/Section';
import { useTranslation } from 'src/hooks/useTranslation';

const Contact: React.FC = () => {
  const { t } = useTranslation();

  const contactItems = [
    {
      icon: MapPin,
      label: t.location
    },
    {
      icon: Phone,
      label: t.phone
    },
    {
      icon: Mail,
      label: t.email
    },
    {
      icon: ExternalLink,
      label: t.linkedin,
      link: 'https://www.linkedin.com/in/harrison-alonso-arroyave-gaviria-4ba07b358'
    }
  ];

  return (
    <div className="space-y-6">
      <Section title={t.contactTitle} icon={ExternalLink} className="text-xl">
        <ul className="space-y-3 text-sm text-gray-700">
          {contactItems.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <item.icon size={16} />
              {item.link ? (
                <a
                  href={item.link}
                  className="hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
};

export default Contact;
