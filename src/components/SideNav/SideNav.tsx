import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import styles from './SideNav.module.css';

/** Navigation items */
const NAV_ITEMS = [
  { id: 'hero', label: 'Home' },
  { id: 'overview', label: 'Overview' },
  { id: 'actors', label: 'Actors' },
  { id: 'screenshots', label: 'App' },
  { id: 'vision', label: 'Vision' },
  { id: 'team', label: 'Team' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Side navigation component
 * Floating vertical nav on the left side
 */
const SideNav: React.FC = () => {
  const { isRTL } = useLanguage();
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling down a bit
      setIsVisible(window.scrollY > 200);

      // Determine active section
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = window.innerWidth < 768 ? 80 : 100; // Account for mobile header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`${styles.sideNav} ${isVisible ? styles.visible : ''} ${isRTL ? styles.rtl : ''}`}
      aria-label="Section navigation"
    >
      <div className={styles.track}>
        {NAV_ITEMS.map((item, index) => (
          <button
            key={item.id}
            className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
            onClick={() => scrollToSection(item.id)}
            aria-label={`Go to ${item.label}`}
            aria-current={activeSection === item.id ? 'true' : undefined}
          >
            <span className={styles.dot} />
            <span className={styles.label}>{item.label}</span>
            <span className={styles.number}>0{index + 1}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default SideNav;
