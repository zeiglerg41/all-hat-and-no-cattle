import React from 'react';
import { Link } from 'react-router-dom';

interface Silhouette {
  id: string;
  name: string;
  type: 'jacket' | 'pants';
  description: string;
  features: string[];
  image: string;
}

const silhouettes: Silhouette[] = [
  {
    id: 'sil-1',
    name: 'Classic Work Jacket',
    type: 'jacket',
    description: 'A timeless silhouette inspired by vintage workwear, featuring a straight cut and practical pockets.',
    features: [
      'Point collar',
      'Button front closure',
      'Chest and hip pockets',
      'Adjustable cuffs',
    ],
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
  },
  {
    id: 'sil-2',
    name: 'Relaxed Trouser',
    type: 'pants',
    description: 'A comfortable, versatile cut with a slight taper and medium rise.',
    features: [
      'Extended waistband',
      'Side adjusters',
      'Slant pockets',
      'Back welt pockets',
    ],
    image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660',
  },
  {
    id: 'sil-3',
    name: 'Modern Chore Coat',
    type: 'jacket',
    description: 'A contemporary take on the traditional chore coat with refined details.',
    features: [
      'Spread collar',
      'Hidden placket',
      'Patch pockets',
      'Internal phone pocket',
    ],
    image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
  },
];

function Silhouettes() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-center mb-12 text-text-light dark:text-text-dark">Select Your Style</h1>
        <p className="text-center mb-12 max-w-2xl mx-auto text-text-light/80 dark:text-text-dark/80">
          Choose a southwestern-inspired silhouette as your starting point. Each can be tailored to your specifications
          while maintaining its distinctive characteristics.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {silhouettes.map((silhouette) => (
            <div key={silhouette.id} className="bg-secondary-light dark:bg-secondary-dark rounded-sm overflow-hidden shadow-lg dark:shadow-text-dark/10">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <img
                    src={`${silhouette.image}?auto=format&fit=crop&w=800&q=80`}
                    alt={silhouette.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl text-text-light dark:text-text-dark mb-2">{silhouette.name}</h3>
                  <p className="text-sm mb-4 text-text-light/80 dark:text-text-dark/80">{silhouette.description}</p>
                  <h4 className="text-accent-light dark:text-accent-dark text-sm mb-2 font-medium">Key Features:</h4>
                  <ul className="text-sm mb-6 space-y-1">
                    {silhouette.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-text-light/80 dark:text-text-dark/80">
                        <span className="w-1 h-1 bg-accent-light dark:bg-accent-dark rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/#commission?type=${silhouette.type}&silhouette=${silhouette.id}`}
                    className="inline-block bg-accent-light dark:bg-accent-dark hover:bg-opacity-90 text-primary-light dark:text-primary-dark px-6 py-2 rounded-sm transition-all duration-300"
                  >
                    Start with this Silhouette
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Silhouettes;