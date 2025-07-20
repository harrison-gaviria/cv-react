import React from 'react';
import { LanguageProvider } from 'src/contexts';
import { ThemeProvider } from 'src/contexts/ThemeContext';
import {
  Header,
  Profile,
  Experience,
  Projects,
  Skills,
  Education,
  Certifications,
  PersonalInformation,
} from 'src/components';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
          <Header />
          <main className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8 text-left">
                <Profile />
                <Education />
                <Experience />
                <Projects />
                <Certifications />
              </div>

              <div className="space-y-6">
                <PersonalInformation />
                <Skills />
              </div>
            </div>
          </main>
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
