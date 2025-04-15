// WordPress Content API Integration
// This file connects your React app to WordPress content

import { WP_API, CONTENT_SETTINGS, CACHE_SETTINGS } from './config';

// Define types for WordPress API responses
export interface WordPressDesign {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  meta?: {
    price?: string;
    category?: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url?: string;
    }>;
  };
}

export interface WordPressPage {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  meta?: {
    banner_image?: string;
    carousel_items?: Array<{
      title: string;
      description: string;
      image: string;
    }>;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url?: string;
    }>;
  };
}

export interface WordPressSilhouette {
  id: number;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url?: string;
    }>;
  };
}

export interface DesignItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  category: string;
}

export interface AboutContent {
  title: string;
  content: string;
  featuredImage: string;
}

export interface SilhouetteItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface HomeContent {
  title: string;
  content: string;
  bannerImage: string;
  carouselItems: Array<{
    title: string;
    description: string;
    image: string;
  }>;
}

// Helper function to handle caching
function getFromCache<T>(key: string): T | null {
  if (!CACHE_SETTINGS.ENABLE_CACHE) return null;
  
  try {
    const cachedData = localStorage.getItem(key);
    if (!cachedData) return null;
    
    const { data, timestamp } = JSON.parse(cachedData);
    const expirationTime = CACHE_SETTINGS.CACHE_EXPIRATION * 60 * 1000;
    
    if (Date.now() - timestamp > expirationTime) {
      localStorage.removeItem(key);
      return null;
    }
    
    return data as T;
  } catch (error) {
    console.error('Error retrieving from cache:', error);
    return null;
  }
}

// Helper function to save to cache
function saveToCache<T>(key: string, data: T): void {
  if (!CACHE_SETTINGS.ENABLE_CACHE) return;
  
  try {
    localStorage.setItem(key, JSON.stringify({
      data,
      timestamp: Date.now(),
    }));
  } catch (error) {
    console.error('Error saving to cache:', error);
  }
}

// Helper function for API requests with timeout
async function fetchWithTimeout(url: string, timeout = CONTENT_SETTINGS.REQUEST_TIMEOUT): Promise<Response> {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
}

// Fetch designs/products from WordPress custom post type
export async function fetchDesigns(): Promise<DesignItem[]> {
  const cacheKey = 'wp_designs';
  const cachedDesigns = getFromCache<DesignItem[]>(cacheKey);
  
  if (cachedDesigns) {
    return cachedDesigns;
  }
  
  try {
    const response = await fetchWithTimeout(`${WP_API.BASE}${WP_API.ENDPOINTS.DESIGNS}?${WP_API.PARAMS.EMBED}`);
    const data: WordPressDesign[] = await response.json();
    
    const designs = data.map(item => ({
      id: item.id.toString(),
      title: item.title?.rendered || '',
      description: item.content?.rendered || '',
      imageUrl: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
      price: item.meta?.price || '',
      category: item.meta?.category || ''
    }));
    
    saveToCache(cacheKey, designs);
    return designs;
  } catch (error) {
    console.error('Error fetching designs:', error);
    return [];
  }
}

// Fetch about page content
export async function fetchAboutContent(): Promise<AboutContent | null> {
  const cacheKey = 'wp_about';
  const cachedAbout = getFromCache<AboutContent>(cacheKey);
  
  if (cachedAbout) {
    return cachedAbout;
  }
  
  try {
    const response = await fetchWithTimeout(`${WP_API.BASE}${WP_API.ENDPOINTS.PAGES}?${WP_API.PARAMS.SLUG('about')}&${WP_API.PARAMS.EMBED}`);
    const data: WordPressPage[] = await response.json();
    
    if (data.length > 0) {
      const aboutContent = {
        title: data[0].title.rendered,
        content: data[0].content.rendered,
        featuredImage: data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
      };
      
      saveToCache(cacheKey, aboutContent);
      return aboutContent;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

// Fetch silhouettes from WordPress custom post type
export async function fetchSilhouettes(): Promise<SilhouetteItem[]> {
  const cacheKey = 'wp_silhouettes';
  const cachedSilhouettes = getFromCache<SilhouetteItem[]>(cacheKey);
  
  if (cachedSilhouettes) {
    return cachedSilhouettes;
  }
  
  try {
    const response = await fetchWithTimeout(`${WP_API.BASE}${WP_API.ENDPOINTS.SILHOUETTES}?${WP_API.PARAMS.EMBED}`);
    const data: WordPressSilhouette[] = await response.json();
    
    const silhouettes = data.map(item => ({
      id: item.id.toString(),
      title: item.title.rendered,
      description: item.content.rendered,
      imageUrl: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
    }));
    
    saveToCache(cacheKey, silhouettes);
    return silhouettes;
  } catch (error) {
    console.error('Error fetching silhouettes:', error);
    return [];
  }
}

// Fetch homepage content (banners, carousel items, etc.)
export async function fetchHomeContent(): Promise<HomeContent | null> {
  const cacheKey = 'wp_home';
  const cachedHome = getFromCache<HomeContent>(cacheKey);
  
  if (cachedHome) {
    return cachedHome;
  }
  
  try {
    const response = await fetchWithTimeout(`${WP_API.BASE}${WP_API.ENDPOINTS.PAGES}?${WP_API.PARAMS.SLUG('home')}&${WP_API.PARAMS.EMBED}`);
    const data: WordPressPage[] = await response.json();
    
    if (data.length > 0) {
      const homeContent = {
        title: data[0].title.rendered,
        content: data[0].content.rendered,
        bannerImage: data[0].meta?.banner_image || '',
        carouselItems: data[0].meta?.carousel_items || []
      };
      
      saveToCache(cacheKey, homeContent);
      return homeContent;
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching home content:', error);
    return null;
  }
} 