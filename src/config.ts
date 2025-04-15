/**
 * Configuration for WordPress Integration
 * 
 * This file contains the configuration settings for connecting to WordPress.
 * Update these values to match your WordPress installation.
 */

// WordPress site URL
// Change this to your actual WordPress site URL
export const WORDPRESS_URL = 'https://your-wordpress-site.com';

// WordPress API paths
export const WP_API = {
  // Base API URL
  BASE: `${WORDPRESS_URL}/wp-json/wp/v2`,
  
  // Endpoint paths
  ENDPOINTS: {
    DESIGNS: '/designs',
    SILHOUETTES: '/silhouettes',
    CAROUSEL_ITEMS: '/carousel_items',
    PAGES: '/pages',
  },
  
  // Query parameters
  PARAMS: {
    EMBED: '_embed=true',
    SLUG: (slug: string) => `slug=${slug}`,
  }
};

// Content fallback settings
export const CONTENT_SETTINGS = {
  // Whether to use static fallback content if WordPress API fails
  USE_FALLBACK: true,
  
  // Timeout for WordPress API requests (in milliseconds)
  REQUEST_TIMEOUT: 5000,
};

// Cache settings
export const CACHE_SETTINGS = {
  // Whether to cache WordPress content in localStorage
  ENABLE_CACHE: true,
  
  // Cache expiration time (in minutes)
  CACHE_EXPIRATION: 60,
}; 