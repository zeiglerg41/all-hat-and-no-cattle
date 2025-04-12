import React from 'react';
import { Link } from 'react-router-dom';

interface OutfitItem {
  type: 'jacket' | 'pants' | 'vest' | 'shirt';
  name: string;
  features: string[];
}

interface Outfit {
  id: string;
  name: string;
  description: string;
  style: string;
  mainImage: string;
  detailImage?: string;
  price: number; // Starting price for the outfit
  items: OutfitItem[];
}

const outfits: Outfit[] = [
  {
    id: 'outfit-1',
    name: 'Santa Fe Sunset',
    description: 'A versatile southwestern ensemble combining structured workwear with relaxed desert comfort.',
    style: 'Casual Workwear',
    mainImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
    detailImage: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660',
    price: 1450,
    items: [
      {
        type: 'jacket',
        name: 'Santa Fe Worker Jacket',
        features: [
          'Warm terracotta dyed cotton canvas',
          'Southwestern pattern inner lining',
          'Custom brass hardware',
          'Traditional pointed collar'
        ]
      },
      {
        type: 'pants',
        name: 'Mesa High-Rise Trousers',
        features: [
          'Natural cotton twill',
          'Extended waistband with side adjusters',
          'Relaxed fit with slight taper',
          'Reinforced knee panels'
        ]
      }
    ]
  },
  {
    id: 'outfit-2',
    name: 'Taos Trail',
    description: 'A rugged yet refined combination that transitions effortlessly from outdoor exploration to evening gatherings.',
    style: 'Adventure-Ready',
    mainImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
    price: 1345,
    items: [
      {
        type: 'jacket',
        name: 'Taos Chore Coat',
        features: [
          'Waxed canvas with water-resistant finish',
          'Turquoise-inspired embroidery details',
          'Hidden internal pockets',
          'Articulated sleeves for movement'
        ]
      },
      {
        type: 'pants',
        name: 'Anasazi Trail Pants',
        features: [
          'Durable cotton-canvas blend',
          'Straight leg with gusseted crotch',
          'Hidden zip pocket for valuables',
          'Subtle geometric stitching detail'
        ]
      }
    ]
  },
  {
    id: 'outfit-3',
    name: 'Desert Dusk',
    description: 'An elevated take on southwestern style, perfect for special occasions with a distinctive regional character.',
    style: 'Refined Southwestern',
    mainImage: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6',
    price: 1675,
    items: [
      {
        type: 'vest',
        name: 'Coyote Leather Vest',
        features: [
          'Hand-stitched full-grain leather',
          'Traditional embroidery patterns',
          'Western-style fasteners',
          'Patterned silk back panel'
        ]
      },
      {
        type: 'shirt',
        name: 'Saguaro Western Shirt',
        features: [
          'Lightweight cotton with subtle sheen',
          'Pearl snap closures',
          'Cactus-inspired embroidery',
          'Western yoke detail'
        ]
      },
      {
        type: 'pants',
        name: 'Sonoran Dress Trousers',
        features: [
          'Wool-cotton blend in deep earth tone',
          'Clean front with hidden closure',
          'Medium rise with extended tab',
          'Subtle flared hem'
        ]
      }
    ]
  }
];

function Silhouettes() {
  return (
    <div className="py-20 px-4 max-w-[100vw] overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl mb-6 text-accent-light dark:text-accent-dark font-heading" style={{ textShadow: '0.5px 0.5px 0px var(--color-sand)' }}>
            Shop The Look
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-6 bg-accent-light dark:bg-accent-dark"></div>
          <p className="text-center mb-8 max-w-2xl mx-auto text-text-light/80 dark:text-text-dark/80">
            Experience complete southwestern ensembles, thoughtfully paired to create distinctive styles.
            Each look can be customized or purchased as a coordinated set.
          </p>
        </div>

        <div className="space-y-24">
          {outfits.map((outfit) => (
            <div key={outfit.id} className="group">
              {/* Outfit Header */}
              <div className="flex items-center mb-6 flex-wrap">
                <h2 className="text-2xl md:text-3xl text-text-light dark:text-text-dark font-heading">
                  {outfit.name}
                </h2>
                <div className="ml-4 h-0.5 flex-grow bg-accent-light/20 dark:bg-accent-dark/20"></div>
                <span className="text-accent-light dark:text-accent-dark font-heading ml-2 md:ml-4 whitespace-nowrap">
                  ${outfit.price}
                </span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 group">
                {/* Main Image - 3 columns on large screens */}
                <div className="lg:col-span-3 aspect-[4/3] overflow-hidden rounded-sm shadow-lg dark:shadow-text-dark/10">
                  <img
                    src={`${outfit.mainImage}?auto=format&fit=crop&w=1200&q=80`}
                    alt={outfit.name}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700"
                  />
                </div>
                
                {/* Outfit Details - 2 columns on large screens */}
                <div className="lg:col-span-2 flex flex-col">
                  <div className="bg-secondary-light/30 dark:bg-secondary-dark/30 p-4 md:p-6 rounded-sm h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-4">
                        <span className="inline-block bg-accent-light/10 dark:bg-accent-dark/10 text-accent-light dark:text-accent-dark px-3 py-1 text-sm font-medium rounded-sm mb-3">
                          {outfit.style}
                        </span>
                        <p className="text-text-light/90 dark:text-text-dark/90 mb-6">
                          {outfit.description}
                        </p>
                      </div>
                      
                      <h3 className="text-xl text-accent-light dark:text-accent-dark mb-3 font-heading">Includes:</h3>
                      <div className="space-y-4 mb-8">
                        {outfit.items.map((item, index) => (
                          <div key={index}>
                            <h4 className="font-heading flex items-center flex-wrap">
                              <span className="w-2 h-2 bg-accent-light dark:bg-accent-dark rounded-full mr-2"></span>
                              {item.name}
                              <span className="text-text-light/50 dark:text-text-dark/50 text-sm ml-2 capitalize">
                                ({item.type})
                              </span>
                            </h4>
                            <ul className="ml-4 mt-1 text-sm grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1">
                              {item.features.map((feature, i) => (
                                <li key={i} className="text-text-light/70 dark:text-text-dark/70 flex items-start">
                                  <span className="mr-1 text-accent-light dark:text-accent-dark">•</span>
                                  <span className="flex-1">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        to={`/#commission?outfit=${outfit.id}`}
                        className="bg-accent-light dark:bg-accent-dark hover:bg-opacity-90 text-primary-light dark:text-primary-dark px-6 py-3 rounded-sm transition-all duration-300 text-center font-heading tracking-wide flex-1"
                      >
                        Order This Look
                      </Link>
                      <Link
                        to={`/#commission?outfit=${outfit.id}&customize=true`}
                        className="bg-transparent border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 px-6 py-3 rounded-sm transition-all duration-300 text-center font-heading tracking-wide flex-1"
                      >
                        Customize
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="mt-20 bg-secondary-light/30 dark:bg-secondary-dark/30 p-6 md:p-8 rounded-sm text-center">
          <h2 className="text-xl md:text-2xl mb-4 text-text-light dark:text-text-dark font-heading">Need Something Different?</h2>
          <p className="mb-6 max-w-2xl mx-auto text-text-light/80 dark:text-text-dark/80">
            Can't find exactly what you're looking for? We can create a custom look tailored to your specific preferences and style.
          </p>
          <Link
            to="/#custom-requests"
            className="inline-block bg-accent-light dark:bg-accent-dark hover:bg-opacity-90 text-primary-light dark:text-primary-dark px-6 py-3 rounded-sm transition-all duration-300 font-heading tracking-wide"
          >
            Request Custom Look
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Silhouettes;