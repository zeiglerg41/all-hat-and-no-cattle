// WordPress Content API Integration
// This file connects your React app to WordPress content

// Replace with your WordPress site URL
const WP_SITE_URL = 'https://your-wordpress-site.com';
const WP_API_URL = `${WP_SITE_URL}/wp-json/wp/v2`;

// Fetch designs/products from WordPress custom post type
export async function fetchDesigns() {
  try {
    const response = await fetch(`${WP_API_URL}/designs?_embed`);
    const data = await response.json();
    
    return data.map(item => ({
      id: item.id,
      title: item.title.rendered,
      description: item.content.rendered,
      imageUrl: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
      price: item.meta?.price || '',
      category: item.meta?.category || ''
    }));
  } catch (error) {
    console.error('Error fetching designs:', error);
    return [];
  }
}

// Fetch about page content
export async function fetchAboutContent() {
  try {
    const response = await fetch(`${WP_API_URL}/pages?slug=about`);
    const data = await response.json();
    
    if (data.length > 0) {
      return {
        title: data[0].title.rendered,
        content: data[0].content.rendered,
        featuredImage: data[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching about content:', error);
    return null;
  }
}

// Fetch silhouettes from WordPress custom post type
export async function fetchSilhouettes() {
  try {
    const response = await fetch(`${WP_API_URL}/silhouettes?_embed`);
    const data = await response.json();
    
    return data.map(item => ({
      id: item.id,
      title: item.title.rendered,
      description: item.content.rendered,
      imageUrl: item._embedded?.['wp:featuredmedia']?.[0]?.source_url || ''
    }));
  } catch (error) {
    console.error('Error fetching silhouettes:', error);
    return [];
  }
}

// Fetch homepage content (banners, carousel items, etc.)
export async function fetchHomeContent() {
  try {
    const response = await fetch(`${WP_API_URL}/pages?slug=home`);
    const data = await response.json();
    
    if (data.length > 0) {
      return {
        title: data[0].title.rendered,
        content: data[0].content.rendered,
        bannerImage: data[0].meta?.banner_image || '',
        carouselItems: data[0].meta?.carousel_items || []
      };
    }
    
    return null;
  } catch (error) {
    console.error('Error fetching home content:', error);
    return null;
  }
} 