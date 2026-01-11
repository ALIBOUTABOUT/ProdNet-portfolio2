import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Actors from './components/Actors';
import Screenshots from './components/Screenshots';
import Vision from './components/Vision';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SideNav from './components/SideNav';
import './styles/global.css';

/**
 * Main Application Component
 * 
 * Structure:
 * 1. Hero - Title, tagline, demo video CTA
 * 2. Overview - Problem and solution
 * 3. Actors - Platform stakeholders (Farmer, Investor, Expert)
 * 4. Screenshots - Application interface previews
 * 5. Vision - Future roadmap features
 * 6. Team - Founding team members
 * 7. Contact - Get in touch
 */
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="app">
        <Header />
        <SideNav />
        <main>
          <Hero />
          <Overview />
          <Actors />
          <Screenshots />
          <Vision />
          <Team />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default App;
