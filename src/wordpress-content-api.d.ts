declare module './wordpress-content-api' {
  export interface DesignItem {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    category: string;
  }
  
  export function fetchDesigns(): Promise<DesignItem[]>;
  export function fetchAboutContent(): Promise<any>;
  export function fetchSilhouettes(): Promise<any>;
  export function fetchHomeContent(): Promise<any>;
} 