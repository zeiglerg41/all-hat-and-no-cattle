import React, { useState, useRef, useEffect } from 'react';
import { Scissors, ChevronRight, ChevronLeft } from 'lucide-react';

type PieceType = 'jacket' | 'pants' | 'vest' | 'shirt';

interface CommissionFormData {
  name: string;
  email: string;
  pieceType: PieceType;
  notes: string;
}

function Home() {
  const [formData, setFormData] = useState<CommissionFormData>({
    name: '',
    email: '',
    pieceType: 'jacket',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      {/* Hero Section with Photo Collage Background */}
      <section className="relative min-h-screen">
        {/* Photo Collage Background */}
        <div className="absolute inset-0 grid grid-cols-3 md:grid-cols-4 grid-rows-2 gap-2 opacity-20 dark:opacity-15">
          {[
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
            'https://images.unsplash.com/photo-1594938291221-94f18cbb5660',
            'https://images.unsplash.com/photo-1617137968427-85924c800a22',
            'https://images.unsplash.com/photo-1598522325074-042db73aa4e6',
            'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7',
            'https://images.unsplash.com/photo-1582418702059-97ebafb35d09',
            'https://images.unsplash.com/photo-1589310243389-96a5483213a8',
            'https://images.unsplash.com/photo-1576566588028-4147f3842f27',
          ].map((url, index) => (
            <div 
              key={index} 
              className="overflow-hidden"
              style={{
                transform: `rotate(${Math.random() * 6 - 3}deg) scale(${0.9 + Math.random() * 0.2})`,
                transition: 'all 0.5s ease',
              }}
            >
              <img 
                src={`${url}?auto=format&fit=crop&w=800&q=80`}
                alt="Portfolio piece" 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 text-center h-screen">
          <div className="bg-primary-light/70 dark:bg-primary-dark/80 p-8 rounded-sm backdrop-blur-md">
            <h1 className="text-5xl md:text-7xl mb-8 text-text-light dark:text-text-dark font-light">
              Custom Southwestern Apparel
            </h1>
            <p className="mb-8 text-xl text-text-light/90 dark:text-text-dark/90 max-w-2xl mx-auto">
              Handcrafted garments with authentic southwestern style, designed and made with meticulous attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-transparent border border-accent-light dark:border-accent-dark text-accent-light dark:text-accent-dark hover:bg-accent-light/10 dark:hover:bg-accent-dark/10 px-8 py-3 rounded-sm transition-all duration-300"
              >
                VIEW PORTFOLIO
              </button>
              <button 
                onClick={() => document.getElementById('commission')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-accent-light dark:bg-accent-dark hover:bg-opacity-90 text-primary-light dark:text-primary-dark px-8 py-3 rounded-sm transition-all duration-300"
              >
                REQUEST A CUSTOM PIECE
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent-light dark:text-accent-dark">
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </div>
      </section>

      {/* Featured Work Section with Interactive Carousel */}
      <section className="py-16 bg-secondary-light/50 dark:bg-secondary-dark/50 overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-4 text-text-light dark:text-text-dark">Featured Work</h2>
          <p className="text-center mb-12 max-w-2xl mx-auto text-text-light/80 dark:text-text-dark/80">
            Browse through our latest southwestern-inspired creations
          </p>

          {/* Interactive Carousel */}
          <FeaturedCarousel />
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 overflow-x-hidden">
        <h2 className="text-4xl text-center mb-12 text-text-light dark:text-text-dark">Our Creations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {[
            'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
            'https://images.unsplash.com/photo-1594938291221-94f18cbb5660',
            'https://images.unsplash.com/photo-1617137968427-85924c800a22',
            'https://images.unsplash.com/photo-1598522325074-042db73aa4e6',
            'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7',
            'https://images.unsplash.com/photo-1582418702059-97ebafb35d09',
          ].map((url, index) => (
            <div 
              key={index} 
              className="aspect-[3/4] overflow-hidden rounded-sm shadow-lg dark:shadow-text-dark/10"
            >
              <img 
                src={`${url}?auto=format&fit=crop&w=800&q=80`}
                alt="Portfolio piece" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Commission Form Section */}
      <section id="commission" className="py-20 px-4 bg-secondary-light dark:bg-secondary-dark overflow-x-hidden max-w-[100vw]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-3xl text-center mb-8 md:mb-12 text-text-light dark:text-text-dark font-heading break-words">
            Request a Custom Piece
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6 w-full">
            <div>
              <label htmlFor="name" className="block mb-2 text-text-light dark:text-text-dark">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-primary-light dark:bg-primary-dark border border-text-light/20 dark:border-text-dark/20 p-3 rounded-sm focus:outline-none focus:border-accent-light dark:focus:border-accent-dark text-text-light dark:text-text-dark"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-text-light dark:text-text-dark">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-primary-light dark:bg-primary-dark border border-text-light/20 dark:border-text-dark/20 p-3 rounded-sm focus:outline-none focus:border-accent-light dark:focus:border-accent-dark text-text-light dark:text-text-dark"
                required
              />
            </div>
            <div>
              <label htmlFor="pieceType" className="block mb-2 text-text-light dark:text-text-dark">Piece Type</label>
              <select
                id="pieceType"
                value={formData.pieceType}
                onChange={(e) => setFormData({ ...formData, pieceType: e.target.value as PieceType })}
                className="w-full bg-primary-light dark:bg-primary-dark border border-text-light/20 dark:border-text-dark/20 p-3 rounded-sm focus:outline-none focus:border-accent-light dark:focus:border-accent-dark text-text-light dark:text-text-dark"
                required
              >
                <option value="jacket">Jacket</option>
                <option value="pants">Pants</option>
                <option value="vest">Vest</option>
                <option value="shirt">Shirt</option>
              </select>
            </div>
            <div>
              <label htmlFor="notes" className="block mb-2 text-text-light dark:text-text-dark">Notes</label>
              <textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-primary-light dark:bg-primary-dark border border-text-light/20 dark:border-text-dark/20 p-3 rounded-sm focus:outline-none focus:border-accent-light dark:focus:border-accent-dark text-text-light dark:text-text-dark h-32"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent-light dark:bg-accent-dark hover:bg-opacity-90 text-primary-light dark:text-primary-dark py-3 sm:py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Scissors className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="break-normal">Submit Request</span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

// Featured Work Carousel Component
interface FeaturedItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

function FeaturedCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const featuredItems: FeaturedItem[] = [
    {
      id: 'feat-1',
      title: 'Desert Sunset Jacket',
      description: 'Hand-stitched with a gradient pattern inspired by southwestern sunsets.',
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea',
      category: 'Jackets',
    },
    {
      id: 'feat-2',
      title: 'Cactus Blossom Collection',
      description: 'Detailed embroidery on sustainable fabrics, celebrating desert flora.',
      image: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660',
      category: 'Collections',
    },
    {
      id: 'feat-3',
      title: 'Mesa Verde Overcoat',
      description: 'Inspired by ancient pueblo dwellings, featuring geometric patterns and earthy tones.',
      image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22',
      category: 'Outerwear',
    },
    {
      id: 'feat-4',
      title: 'Navajo-Inspired Weave',
      description: 'Modern apparel with traditional Navajo-inspired patterns and techniques.',
      image: 'https://images.unsplash.com/photo-1598522325074-042db73aa4e6',
      category: 'Limited Edition',
    },
  ];

  // Auto advance carousel
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current === featuredItems.length - 1 ? 0 : current + 1));
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [featuredItems.length, isPaused]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current === featuredItems.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? featuredItems.length - 1 : current - 1));
  };

  return (
    <div 
      className="relative overflow-hidden rounded-md shadow-xl max-w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={carouselRef}
    >
      {/* Main carousel container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-[500px] md:h-[600px] w-full"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {featuredItems.map((item, index) => (
          <div key={item.id} className="min-w-full relative w-full">
            <img 
              src={`${item.image}?auto=format&fit=crop&w=1200&q=80`}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-4 sm:p-6 md:p-12">
              <span className="text-accent-light dark:text-accent-dark text-sm font-medium mb-2">{item.category}</span>
              <h3 className="text-white text-xl sm:text-2xl md:text-4xl font-light mb-2 md:mb-3 break-words">{item.title}</h3>
              <p className="text-white/80 md:max-w-2xl mb-4 md:mb-6 text-sm sm:text-base break-words">{item.description}</p>
              <div>
                <button className="bg-accent-light/90 dark:bg-accent-dark/90 hover:bg-accent-light dark:hover:bg-accent-dark text-primary-light dark:text-primary-dark px-4 sm:px-6 py-2 rounded-sm transition-colors text-sm sm:text-base">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel controls */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {featuredItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex ? 'bg-accent-light dark:bg-accent-dark w-6' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;