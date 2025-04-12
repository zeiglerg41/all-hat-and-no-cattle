import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Design {
  id: string;
  name: string;
  type: 'jacket' | 'pants' | 'vest' | 'shirt';
  price: number;
  image: string;
  description: string;
}

// Category type for type safety
type CategoryType = 'jacket' | 'pants' | 'vest' | 'shirt' | 'all';

const designs: Design[] = [
  // Jackets
  {
    id: 'design-1',
    name: 'Santa Fe Worker Jacket',
    type: 'jacket',
    price: 850,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    description: 'Classic workwear-inspired jacket with southwestern patterns and custom brass hardware.',
  },
  {
    id: 'design-3',
    name: 'Taos Chore Coat',
    type: 'jacket',
    price: 795,
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
    description: 'Utilitarian chore coat with turquoise-inspired embroidery details and hidden internal pocket.',
  },
  // Pants
  {
    id: 'design-2',
    name: 'Mesa High-Rise Trousers',
    type: 'pants',
    price: 650,
    image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660',
    description: 'Tailored high-rise trousers with side adjusters and extended waistband in earthy tones.',
  },
  // Vests
  {
    id: 'design-4',
    name: 'Coyote Leather Vest',
    type: 'vest',
    price: 725,
    image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6',
    description: 'Hand-stitched leather vest with traditional embroidery patterns and western-style fasteners.',
  },
  // Shirts
  {
    id: 'design-5',
    name: 'Saguaro Western Shirt',
    type: 'shirt',
    price: 550,
    image: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7',
    description: 'Classic western-style shirt with pearl snaps and subtle cactus-inspired embroidery.',
  },
];

// Order of display
const categoryOrder: CategoryType[] = ['jacket', 'pants', 'vest', 'shirt'];

// Group designs by type
const designsByType = categoryOrder.reduce((acc, type) => {
  acc[type] = designs.filter(design => design.type === type);
  return acc;
}, {} as Record<CategoryType, Design[]>);

function Designs() {
  // State to track active category filter
  const [activeFilter, setActiveFilter] = useState<CategoryType | null>(null);
  
  // Refs for section scrolling with type safety
  const sectionRefs: Record<CategoryType, React.RefObject<HTMLDivElement>> = {
    all: useRef<HTMLDivElement>(null),
    jacket: useRef<HTMLDivElement>(null),
    pants: useRef<HTMLDivElement>(null),
    vest: useRef<HTMLDivElement>(null),
    shirt: useRef<HTMLDivElement>(null),
  };

  // Check URL hash on mount for direct navigation
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const category = hash.replace('#', '') as CategoryType;
      if (categoryOrder.includes(category) || category === 'all') {
        setTimeout(() => {
          scrollToSection(category === 'all' ? null : category);
        }, 100);
      }
    }
  }, []);

  // Scroll to section when filter changes
  const scrollToSection = (categoryType: CategoryType | null) => {
    if (categoryType === null) {
      sectionRefs.all.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without reload
      window.history.pushState(null, '', `#all`);
    } else {
      sectionRefs[categoryType].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Update URL without reload
      window.history.pushState(null, '', `#${categoryType}`);
    }
    setActiveFilter(categoryType);
  };
  
  return (
    <div className="py-20 px-4 max-w-[100vw] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" ref={sectionRefs.all}>
          <h1 className="text-5xl mb-6 text-accent-light dark:text-accent-dark font-heading" style={{ textShadow: '0.5px 0.5px 0px var(--color-sand)' }}>
            Southwestern Design Collection
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-6 bg-accent-light dark:bg-accent-dark"></div>
          <p className="text-center mb-8 max-w-2xl mx-auto text-text-light/80 dark:text-text-dark/80">
            Browse our selection of southwestern-inspired garments by type. Each design can be customized to your preferences
            while maintaining the core elements that define our distinctive style.
          </p>
          
          {/* Category navigation */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mt-8 sticky top-20 z-30 py-4 bg-primary-light/90 dark:bg-primary-dark/90 backdrop-blur-sm rounded-sm">
            <button 
              className={`px-4 py-2 text-sm md:text-base md:px-6 rounded-sm font-heading tracking-wide transition-all duration-300 ${
                activeFilter === null 
                  ? 'bg-accent-light dark:bg-accent-dark text-white'
                  : 'border border-accent-light/50 dark:border-accent-dark/50 text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10'
              }`}
              onClick={() => scrollToSection(null)}
            >
              All Designs
            </button>
            {categoryOrder.map(type => (
              <button 
                key={type} 
                className={`px-4 py-2 text-sm md:text-base md:px-6 rounded-sm font-heading tracking-wide transition-all duration-300 capitalize ${
                  activeFilter === type 
                    ? 'bg-accent-light dark:bg-accent-dark text-white'
                    : 'border border-accent-light/50 dark:border-accent-dark/50 text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10'
                }`}
                onClick={() => scrollToSection(type)}
              >
                {type === 'pants' ? 'Pants' : `${type}s`}
              </button>
            ))}
          </div>
        </div>
        
        {/* Display designs by category */}
        {categoryOrder.map(category => {
          const categoryDesigns = designsByType[category];
          if (!categoryDesigns || categoryDesigns.length === 0) return null;
          
          return (
            <div key={category} ref={sectionRefs[category]} id={`section-${category}`} className="mb-20 scroll-mt-32">
              <div className="flex items-center mb-8">
                <h2 className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-heading capitalize">
                  {category === 'pants' ? 'Pants' : `${category}s`}
                </h2>
                <div className="ml-4 h-0.5 flex-grow bg-accent-light/20 dark:bg-accent-dark/20"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                {categoryDesigns.map((design) => (
                  <div key={design.id} className="group bg-secondary-light/30 dark:bg-secondary-dark/30 rounded-sm overflow-hidden shadow-lg dark:shadow-text-dark/10 hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-[3/4] overflow-hidden relative">
                      <img
                        src={`${design.image}?auto=format&fit=crop&w=800&q=80`}
                        alt={design.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 right-3 bg-accent-light dark:bg-accent-dark text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider font-heading">
                        {design.type}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl text-text-light dark:text-text-dark mb-2 font-heading">{design.name}</h3>
                      <p className="text-sm mb-4 text-text-light/80 dark:text-text-dark/80">{design.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-accent-light dark:text-accent-dark font-medium font-heading">Starting at ${design.price}</span>
                        <Link
                          to={`/#commission?type=${design.type}&design=${design.id}`}
                          className="bg-accent-light dark:bg-accent-dark hover:bg-opacity-90 text-primary-light dark:text-primary-dark px-4 py-2 rounded-sm transition-all duration-300 font-heading tracking-wide text-sm"
                        >
                          Customize
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Back to Top Button */}
              <div className="mt-12 text-center">
                <button 
                  onClick={() => {
                    sectionRefs.all.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    setActiveFilter(null);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2 bg-secondary-light/50 dark:bg-secondary-dark/50 hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 border border-accent-light/30 dark:border-accent-dark/30 rounded-sm text-accent-light dark:text-accent-dark font-heading transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 15-6-6-6 6"/>
                  </svg>
                  Back to Categories
                </button>
              </div>
            </div>
          );
        })}

        {/* Further explanation section */}
        <div className="mt-20 bg-secondary-light/20 dark:bg-secondary-dark/20 p-8 rounded-sm">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl mb-4 text-text-light dark:text-text-dark font-heading">How It Works</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-light dark:bg-accent-dark text-white flex items-center justify-center flex-shrink-0 font-heading">1</div>
                <div>
                  <h3 className="text-lg text-accent-light dark:text-accent-dark font-heading">Choose Your Design</h3>
                  <p className="text-text-light/80 dark:text-text-dark/80">Browse our collection and select a base design that speaks to your style.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-light dark:bg-accent-dark text-white flex items-center justify-center flex-shrink-0 font-heading">2</div>
                <div>
                  <h3 className="text-lg text-accent-light dark:text-accent-dark font-heading">Customize It</h3>
                  <p className="text-text-light/80 dark:text-text-dark/80">Select fabrics, colors, patterns, and details to make the piece uniquely yours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-light dark:bg-accent-dark text-white flex items-center justify-center flex-shrink-0 font-heading">3</div>
                <div>
                  <h3 className="text-lg text-accent-light dark:text-accent-dark font-heading">Perfect Fit</h3>
                  <p className="text-text-light/80 dark:text-text-dark/80">Provide your measurements for a garment crafted specifically for your body.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-accent-light dark:bg-accent-dark text-white flex items-center justify-center flex-shrink-0 font-heading">4</div>
                <div>
                  <h3 className="text-lg text-accent-light dark:text-accent-dark font-heading">Crafted with Care</h3>
                  <p className="text-text-light/80 dark:text-text-dark/80">Each piece is meticulously handcrafted and delivered to your doorstep.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link
                to="/#custom-requests"
                className="inline-block bg-transparent border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 px-6 py-3 rounded-sm transition-all duration-300 font-heading tracking-wide"
              >
                REQUEST A DIFFERENT DESIGN
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Designs;