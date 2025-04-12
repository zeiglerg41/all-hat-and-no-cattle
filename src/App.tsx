import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import Designs from './pages/Prototypes';
import Silhouettes from './pages/Silhouettes';
import About from './pages/About';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
  toggleDarkMode: () => void;
}

function Navigation({ isMenuOpen, setIsMenuOpen, isDark, toggleDarkMode }: NavigationProps) {
  const location = useLocation();
  const [scrolled, setScrolled] = React.useState(false);

  // Handle scroll effect for navigation
  React.useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-primary-light/95 dark:bg-primary-dark/95 py-2 shadow-md' : 'bg-primary-light/60 dark:bg-primary-dark/60 py-4'
    } backdrop-blur-sm border-b border-text-light/10 dark:border-text-dark/10`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className={`text-accent-light dark:text-accent-dark transition-all duration-300 ${scrolled ? 'text-2xl' : 'text-3xl'} flex items-center`}>
            {/* Logo with Southwestern Style */}
            <div className={`relative transition-all duration-300 ${
              scrolled ? 'w-12 h-12' : 'w-16 h-16'
            } mr-3 flex-shrink-0`}>
              <div className="absolute inset-0 bg-[var(--color-sand)] rounded-full flex items-center justify-center">
                <span className="font-heading text-primary-dark font-bold text-lg" style={{ transform: 'rotate(-5deg)' }}>AH</span>
              </div>
              <div className="absolute inset-0 border-2 border-[var(--color-terracotta)] rounded-full" style={{ borderStyle: 'dashed' }}></div>
            </div>
            <span className="font-heading" style={{ textShadow: '0.5px 0.5px 0px var(--color-sand)' }}>
              All Hat and No Cattle
            </span>
          </Link>
          
          <div className="flex items-center gap-6">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-accent-light dark:text-accent-dark hover:opacity-80 transition-opacity p-2 rounded-full border border-accent-light/30 dark:border-accent-dark/30"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-accent-light dark:text-accent-dark p-2 border border-accent-light/30 dark:border-accent-dark/30 rounded-sm"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <NavLink to="/about" location={location} />
              <NavLink to="/designs" location={location} />
              <NavLink to="/silhouettes" location={location} />
              <NavLink to="/#custom-requests" location={location} isHash />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-light/95 dark:bg-primary-dark/95 backdrop-blur-sm border-b border-text-light/10 dark:border-text-dark/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className={`block px-4 py-3 text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 font-heading ${
                location.pathname === '/about' 
                  ? 'bg-text-light/5 dark:bg-text-dark/5 border-l-2 border-accent-light dark:border-accent-dark pl-6' 
                  : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/designs"
              className={`block px-4 py-3 text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 font-heading ${
                location.pathname === '/designs' 
                  ? 'bg-text-light/5 dark:bg-text-dark/5 border-l-2 border-accent-light dark:border-accent-dark pl-6' 
                  : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Designs
            </Link>
            <Link
              to="/silhouettes"
              className={`block px-4 py-3 text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 font-heading ${
                location.pathname === '/silhouettes' 
                  ? 'bg-text-light/5 dark:bg-text-dark/5 border-l-2 border-accent-light dark:border-accent-dark pl-6' 
                  : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Silhouettes
            </Link>
            <Link
              to="/#custom-requests"
              className={`block px-4 py-3 text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 font-heading ${
                location.hash === '#custom-requests' 
                  ? 'bg-text-light/5 dark:bg-text-dark/5 border-l-2 border-accent-light dark:border-accent-dark pl-6' 
                  : ''
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Custom Requests
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Helper component for navigation links
function NavLink({ to, location, isHash = false }: { to: string; location: ReturnType<typeof useLocation>; isHash?: boolean }) {
  const path = to.startsWith('/#') ? to.substring(2) : to.substring(1);
  const displayText = path.charAt(0).toUpperCase() + path.slice(1).replace('-', ' ');
  const isActive = isHash 
    ? location.hash === `#${path}` 
    : location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`group relative text-text-light dark:text-text-dark hover:text-accent-light dark:hover:text-accent-dark transition-all duration-300 font-heading tracking-wide ${
        isActive ? 'text-accent-light dark:text-accent-dark' : ''
      }`}
    >
      <span className="relative px-1">
        {displayText}
        <span className={`absolute -left-1 -right-1 bottom-0 h-0.5 bg-accent-light dark:bg-accent-dark transform origin-left transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        }`}></span>
      </span>
      {isActive && (
        <span className="absolute -left-4 top-1/2 -translate-y-1/2 text-accent-light dark:text-accent-dark text-xs">★</span>
      )}
    </Link>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDark, setIsDark] = React.useState(() => {
    if (typeof window !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return false;
  });

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Southwestern-inspired color theme
  React.useEffect(() => {
    // Add custom CSS variables for a southwestern color palette
    document.documentElement.style.setProperty('--color-terracotta', '#c74e3e');
    document.documentElement.style.setProperty('--color-sand', '#d8c09d');
    document.documentElement.style.setProperty('--color-sage', '#7c9b72');
    document.documentElement.style.setProperty('--color-turquoise', '#4a8f9e');
    document.documentElement.style.setProperty('--color-clay', '#9a6b56');
    
    // Apply the accent color based on the theme
    if (isDark) {
      document.documentElement.style.setProperty('--color-accent', 'var(--color-turquoise)');
    } else {
      document.documentElement.style.setProperty('--color-accent', 'var(--color-terracotta)');
    }
    
    // Add custom fonts for southwestern saloon vibes
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Rye&family=Playfair+Display:wght@400;700&family=Source+Serif+Pro:wght@300;400;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    // Apply the fonts
    document.documentElement.style.setProperty('--font-heading', "'Rye', 'Playfair Display', serif");
    document.documentElement.style.setProperty('--font-body', "'Source Serif Pro', serif");
    
    // Apply styles to headings in the document
    const style = document.createElement('style');
    style.textContent = `
      h1, h2, h3 {
        font-family: var(--font-heading);
        letter-spacing: 0.02em;
      }
      body {
        font-family: var(--font-body);
      }
      .saloon-border {
        border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cpath d='M0,0 L100,0 L100,100 L0,100 Z' fill='none' stroke='%23c74e3e' stroke-width='8' stroke-dasharray='20,10' /%3E%3C/svg%3E") 1;
        border-width: 4px;
        border-style: solid;
      }
    `;
    document.head.appendChild(style);
  }, [isDark]);

  return (
    <Router>
      <div className="min-h-screen bg-primary-light dark:bg-primary-dark text-text-light dark:text-text-dark transition-colors duration-200">
        {/* Decorative southwestern pattern - top edge */}
        <div className="fixed top-0 left-0 w-full h-2 z-50 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%228%22 viewBox=%220 0 80 8%22%3E%3Cpath d=%22M0,0 L10,4 L0,8 L10,4 L20,8 L30,4 L40,8 L50,4 L60,8 L70,4 L80,8 L80,0 Z%22 fill=%22%23c74e3e%22/%3E%3C/svg%3E')] bg-repeat-x"></div>
        
        <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDark={isDark} toggleDarkMode={toggleDarkMode} />
        
        {/* Main Content */}
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/silhouettes" element={<Silhouettes />} />
          </Routes>
        </main>

        {/* Footer with southwestern pattern */}
        <footer className="bg-secondary-light dark:bg-secondary-dark py-8 px-4 relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl text-accent-light dark:text-accent-dark mb-4 font-heading">All Hat and No Cattle</h3>
                <p className="text-text-light/80 dark:text-text-dark/80">
                  Handcrafted southwestern apparel with authentic style and quality craftsmanship.
                </p>
              </div>
              <div>
                <h3 className="text-xl text-accent-light dark:text-accent-dark mb-4 font-heading">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-text-light/80 dark:text-text-dark/80 hover:text-accent-light dark:hover:text-accent-dark transition-colors">Home</Link></li>
                  <li><Link to="/about" className="text-text-light/80 dark:text-text-dark/80 hover:text-accent-light dark:hover:text-accent-dark transition-colors">About</Link></li>
                  <li><Link to="/designs" className="text-text-light/80 dark:text-text-dark/80 hover:text-accent-light dark:hover:text-accent-dark transition-colors">Designs</Link></li>
                  <li><Link to="/silhouettes" className="text-text-light/80 dark:text-text-dark/80 hover:text-accent-light dark:hover:text-accent-dark transition-colors">Silhouettes</Link></li>
                  <li><Link to="/#custom-requests" className="text-text-light/80 dark:text-text-dark/80 hover:text-accent-light dark:hover:text-accent-dark transition-colors">Custom Requests</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl text-accent-light dark:text-accent-dark mb-4 font-heading">Contact</h3>
                <address className="not-italic text-text-light/80 dark:text-text-dark/80">
                  <p>Email: info@allhatnocattle.com</p>
                  <p>Phone: (555) 123-4567</p>
                  <p>Location: Santa Fe, New Mexico</p>
                </address>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-text-light/10 dark:border-text-dark/10 text-center text-text-light/60 dark:text-text-dark/60">
              <p>&copy; {new Date().getFullYear()} All Hat and No Cattle. All rights reserved.</p>
            </div>
          </div>
          
          {/* Decorative southwestern pattern - bottom */}
          <div className="absolute bottom-0 left-0 w-full h-2 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2280%22 height=%228%22 viewBox=%220 0 80 8%22%3E%3Cpath d=%22M0,8 L10,4 L0,0 L10,4 L20,0 L30,4 L40,0 L50,4 L60,0 L70,4 L80,0 L80,8 Z%22 fill=%22%23c74e3e%22/%3E%3C/svg%3E')] bg-repeat-x"></div>
        </footer>
      </div>
    </Router>
  );
}

export default App;