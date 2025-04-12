import React from 'react';

function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22%3E%3Cpath d=%22M30 5L35 20H45L37.5 29.5L40 45L30 37.5L20 45L22.5 29.5L15 20H25L30 5Z%22 fill=%22%23c74e3e%22 fill-opacity=%220.05%22/%3E%3C/svg%3E')]">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl mb-6 text-accent-light dark:text-accent-dark font-heading" style={{ textShadow: '1px 1px 0px var(--color-sand)' }}>
            The Story Behind<br /> All Hat and No Cattle
          </h1>
          <div className="w-24 h-1 mx-auto my-6 bg-accent-light dark:bg-accent-dark"></div>
          <p className="text-xl mb-8 text-text-light/90 dark:text-text-dark/90 max-w-3xl mx-auto">
            Crafting authentic southwestern apparel with a modern twist - where tradition meets innovation.
          </p>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="saloon-border p-6 bg-secondary-light/30 dark:bg-secondary-dark/30">
              <img 
                src="https://images.unsplash.com/photo-1590838290859-656255f80f1e?auto=format&fit=crop&w=800&q=80" 
                alt="Southwestern landscape" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl mb-6 text-accent-light dark:text-accent-dark font-heading">Our Origins</h2>
              <p className="mb-4 text-text-light/90 dark:text-text-dark/90">
                All Hat and No Cattle began in the heart of the Southwest, inspired by the region's rich textile traditions and the beauty of its landscapes. Our founder's passion for craftsmanship and dedication to authentic materials set the foundation for what would become a celebration of southwestern style.
              </p>
              <p className="mb-4 text-text-light/90 dark:text-text-dark/90">
                The name "All Hat and No Cattle" embraces the paradox of modern fashion - we create pieces with genuine substance beneath their striking appearance. Each garment tells a story of the land, people, and traditions that inspire us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 px-4 bg-secondary-light/20 dark:bg-secondary-dark/20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-center mb-12 text-text-light dark:text-text-dark font-heading" style={{ textShadow: '0.5px 0.5px 0px var(--color-sand)' }}>
            Our Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M15.5 6.5l.828-.828a4 4 0 0 1 5.657 5.657L11.5 21.814a4 4 0 0 1-5.657 0l-2.828-2.828a4 4 0 0 1 0-5.657L13.5 2.843a4 4 0 0 1 5.657 0l.828.828" />
                  <path d="M13.5 10.5L8.757 5.757" />
                </svg>
              </div>
              <h3 className="text-xl mb-3 text-accent-light dark:text-accent-dark font-heading">Craftsmanship</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                Every stitch matters. We take pride in meticulously crafting each piece with attention to the smallest details, ensuring quality and durability.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-clay)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2L4 10l8 10 8-10z" />
                </svg>
              </div>
              <h3 className="text-xl mb-3 text-accent-light dark:text-accent-dark font-heading">Authenticity</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                We draw inspiration from genuine southwestern traditions, respecting heritage while creating contemporary pieces that resonate with modern sensibilities.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-sage)] flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="M8 12h8" />
                  <path d="M12 16V8" />
                </svg>
              </div>
              <h3 className="text-xl mb-3 text-accent-light dark:text-accent-dark font-heading">Sustainability</h3>
              <p className="text-text-light/80 dark:text-text-dark/80">
                We honor the land that inspires us by using sustainable materials and ethical production methods, creating garments meant to last generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-center mb-6 text-text-light dark:text-text-dark font-heading" style={{ textShadow: '0.5px 0.5px 0px var(--color-sand)' }}>
            Our Process
          </h2>
          <p className="text-center mb-12 max-w-3xl mx-auto text-text-light/80 dark:text-text-dark/80">
            From concept to creation, every step in our process is guided by respect for tradition and a commitment to quality
          </p>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-accent-light/20 dark:bg-accent-dark/20 -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12">
              <TimelineItem 
                title="Design & Inspiration" 
                description="Every piece begins with deep research into southwestern patterns, colors, and traditions, blended with contemporary design principles."
                position="left"
              />
              <TimelineItem 
                title="Material Selection" 
                description="We carefully source sustainable, high-quality materials that honor the region's textile heritage while providing durability and comfort."
                position="right"
              />
              <TimelineItem 
                title="Crafting & Construction" 
                description="Our skilled artisans bring designs to life, employing both traditional techniques and modern methods to create garments of exceptional quality."
                position="left"
              />
              <TimelineItem 
                title="Final Touches" 
                description="Each piece undergoes rigorous quality control and receives the finishing details that make All Hat and No Cattle garments truly special."
                position="right"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-accent-light/10 dark:bg-accent-dark/10 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="var(--color-terracotta)">
            <path d="M30 5L35 20H45L37.5 29.5L40 45L30 37.5L20 45L22.5 29.5L15 20H25L30 5Z" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl mb-6 text-text-light dark:text-text-dark font-heading">
            Experience the Southwest in Every Stitch
          </h2>
          <p className="text-xl mb-8 text-text-light/90 dark:text-text-dark/90">
            Ready to add authentic southwestern style to your wardrobe?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/designs" className="bg-accent-light dark:bg-accent-dark text-white px-8 py-3 rounded-sm hover:bg-opacity-90 transition-all duration-300 font-heading tracking-wide">
              EXPLORE OUR DESIGNS
            </a>
            <a href="/#custom-requests" className="bg-transparent border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark px-8 py-3 rounded-sm hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 transition-all duration-300 font-heading tracking-wide">
              REQUEST CUSTOM PIECE
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

// Helper component for timeline items
function TimelineItem({ title, description, position }: { title: string; description: string; position: 'left' | 'right' }) {
  return (
    <div className={`flex items-center ${position === 'right' ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className="w-1/2 px-6">
        <div className={`${position === 'right' ? 'text-right' : 'text-left'}`}>
          <h3 className="text-xl mb-2 text-accent-light dark:text-accent-dark font-heading">{title}</h3>
          <p className="text-text-light/80 dark:text-text-dark/80">{description}</p>
        </div>
      </div>
      <div className="relative flex-shrink-0">
        <div className="w-4 h-4 rounded-full bg-accent-light dark:bg-accent-dark border-4 border-primary-light dark:border-primary-dark z-10 relative"></div>
      </div>
      <div className="w-1/2"></div>
    </div>
  );
}

export default About; 