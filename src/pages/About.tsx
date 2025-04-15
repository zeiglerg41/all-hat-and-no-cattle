import React from 'react';

function About() {
  return (
    <div className="py-20 px-4 max-w-[100vw] overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-6 text-accent-light dark:text-accent-dark font-heading" style={{ textShadow: '0.5px 0.5px 0px var(--color-sand)' }}>
            About
          </h1>
          <div className="w-24 h-0.5 mx-auto mb-6 bg-accent-light dark:bg-accent-dark"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="order-2 md:order-1">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-lg">
                Welcome to All Hat No Cattle, my name is Blake Irwin. I have been fueled by a lifelong passion for heritage American workwear and the stories behind it. This fascination led me to the art of sewing, a hands-on way to connect with the traditions of rugged, durable clothing. What started as curiosity became a commitment to learning every stitch, seam, and detail – allowing me to create my own timeless pieces.
              </p>
              <p className="text-lg">
                Along the way, I started to receive more and more interest from my friends and family, which quickly turned into encouragement to start selling my designs. Thing is, I don't know the first thing about marketing, web design, graphic design, or running a business. But that's the great thing about community, when you surround yourself with good people, they can help fill in the gaps.
              </p>
              <p className="text-lg">
                So here we are. With a little help from a lot of people, I've started the journey of making handmade, bespoke heritage workwear for people who share my passion. I have a lot of help, but when it comes to the fabric, construction, design, fit, and finish of anything stamped with the All Hat No Cattle name, it is all me.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="aspect-[4/5] bg-secondary-light/30 dark:bg-secondary-dark/30 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1614252235316-8c857f344bed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Blake Irwin in the workshop" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-secondary-light/30 dark:bg-secondary-dark/30 p-6 rounded-sm shadow-md">
            <h3 className="text-xl mb-4 text-accent-light dark:text-accent-dark font-heading">My Approach</h3>
            <p>I believe in creating garments that tell a story, with every stitch reflecting my dedication to quality and attention to detail. Each piece I create is a personal interpretation of timeless style.</p>
          </div>
          <div className="bg-secondary-light/30 dark:bg-secondary-dark/30 p-6 rounded-sm shadow-md">
            <h3 className="text-xl mb-4 text-accent-light dark:text-accent-dark font-heading">Materials</h3>
            <p>I source only the finest materials with a focus on durability and authenticity. From selvedge denim to heavyweight canvas, I select fabrics that honor heritage while standing up to modern demands.</p>
          </div>
          <div className="bg-secondary-light/30 dark:bg-secondary-dark/30 p-6 rounded-sm shadow-md">
            <h3 className="text-xl mb-4 text-accent-light dark:text-accent-dark font-heading">Handcrafted Process</h3>
            <p>Every garment I make is cut, sewn, and finished by my hands. This personal touch means I can ensure exceptional quality while creating a truly unique piece tailored to you.</p>
          </div>
        </div>
        
        <div className="border-t border-accent-light/20 dark:border-accent-dark/20 pt-12 mb-12">
          <div className="text-center">
            <h2 className="text-3xl mb-8 text-accent-light dark:text-accent-dark font-heading">My Workshop</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-video bg-secondary-light/30 dark:bg-secondary-dark/30 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593126929108-ade9fbd82b0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Workshop with sewing equipment" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-video bg-secondary-light/30 dark:bg-secondary-dark/30 overflow-hidden rounded-sm shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Fabrics and patterns" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl mb-6 text-accent-light dark:text-accent-dark font-heading">Interested in a Custom Piece?</h2>
          <p className="mb-8 max-w-2xl mx-auto">I'd love to create something specifically for you. Every commission is a collaborative process where your vision meets my craftsmanship.</p>
          <a 
            href="/#custom-requests" 
            className="inline-block bg-accent-light dark:bg-accent-dark text-white px-8 py-3 rounded-sm hover:bg-opacity-90 transition-colors duration-300 font-heading tracking-wide"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
}

export default About; 