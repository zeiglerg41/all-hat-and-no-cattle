<?php
/**
 * Plugin Name: All Hat and No Cattle Content Manager
 * Description: Custom post types and fields for the All Hat and No Cattle website
 * Version: 1.0
 * Author: Your Name
 */

// Exit if accessed directly
if (!defined('ABSPATH')) {
    exit;
}

class AllHatNoCattle_ContentManager {
    
    /**
     * Constructor
     */
    public function __construct() {
        // Register custom post types
        add_action('init', array($this, 'register_custom_post_types'));
        
        // Register REST API fields
        add_action('rest_api_init', array($this, 'register_rest_fields'));
        
        // Add admin menu
        add_action('admin_menu', array($this, 'add_admin_menu'));
        
        // Enqueue admin scripts
        add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
        
        // Add CORS headers
        add_action('init', array($this, 'add_cors_headers'));
    }
    
    /**
     * Register custom post types
     */
    public function register_custom_post_types() {
        // Designs Custom Post Type
        register_post_type('designs', array(
            'labels' => array(
                'name' => 'Designs',
                'singular_name' => 'Design',
                'menu_name' => 'Designs',
                'add_new' => 'Add New Design',
                'add_new_item' => 'Add New Design',
                'edit_item' => 'Edit Design',
                'new_item' => 'New Design',
                'view_item' => 'View Design',
                'search_items' => 'Search Designs',
                'not_found' => 'No designs found',
                'not_found_in_trash' => 'No designs found in trash'
            ),
            'public' => true,
            'has_archive' => true,
            'menu_icon' => 'dashicons-art',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'designs',
            'rewrite' => array('slug' => 'designs')
        ));
        
        // Silhouettes Custom Post Type
        register_post_type('silhouettes', array(
            'labels' => array(
                'name' => 'Silhouettes',
                'singular_name' => 'Silhouette',
                'menu_name' => 'Silhouettes',
                'add_new' => 'Add New Silhouette',
                'add_new_item' => 'Add New Silhouette',
                'edit_item' => 'Edit Silhouette',
                'new_item' => 'New Silhouette',
                'view_item' => 'View Silhouette',
                'search_items' => 'Search Silhouettes',
                'not_found' => 'No silhouettes found',
                'not_found_in_trash' => 'No silhouettes found in trash'
            ),
            'public' => true,
            'has_archive' => true,
            'menu_icon' => 'dashicons-format-image',
            'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'silhouettes',
            'rewrite' => array('slug' => 'silhouettes')
        ));
        
        // Carousel Items Custom Post Type
        register_post_type('carousel_items', array(
            'labels' => array(
                'name' => 'Carousel Items',
                'singular_name' => 'Carousel Item',
                'menu_name' => 'Carousel Items',
                'add_new' => 'Add New Item',
                'add_new_item' => 'Add New Carousel Item',
                'edit_item' => 'Edit Carousel Item',
                'new_item' => 'New Carousel Item',
                'view_item' => 'View Carousel Item',
                'search_items' => 'Search Carousel Items',
                'not_found' => 'No carousel items found',
                'not_found_in_trash' => 'No carousel items found in trash'
            ),
            'public' => true,
            'has_archive' => false,
            'menu_icon' => 'dashicons-images-alt',
            'supports' => array('title', 'editor', 'thumbnail', 'custom-fields'),
            'show_in_rest' => true,
            'rest_base' => 'carousel_items',
            'rewrite' => array('slug' => 'carousel_items')
        ));
    }
    
    /**
     * Register REST API fields
     */
    public function register_rest_fields() {
        // Price field for Designs
        register_rest_field('designs', 'price', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'price', true);
            },
            'update_callback' => function($value, $post) {
                update_post_meta($post->ID, 'price', $value);
            },
            'schema' => array(
                'type' => 'string',
                'description' => 'Price of the design'
            )
        ));
        
        // Category field for Designs
        register_rest_field('designs', 'category', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'category', true);
            },
            'update_callback' => function($value, $post) {
                update_post_meta($post->ID, 'category', $value);
            },
            'schema' => array(
                'type' => 'string',
                'description' => 'Category of the design'
            )
        ));
        
        // Banner image for Home page
        register_rest_field('page', 'banner_image', array(
            'get_callback' => function($post) {
                return get_post_meta($post['id'], 'banner_image', true);
            },
            'update_callback' => function($value, $post) {
                update_post_meta($post->ID, 'banner_image', $value);
            },
            'schema' => array(
                'type' => 'string',
                'description' => 'Banner image for the home page'
            )
        ));
        
        // Carousel items for Home page
        register_rest_field('page', 'carousel_items', array(
            'get_callback' => function($post) {
                $carousel_items = get_post_meta($post['id'], 'carousel_items', true);
                return !empty($carousel_items) ? $carousel_items : array();
            },
            'update_callback' => function($value, $post) {
                update_post_meta($post->ID, 'carousel_items', $value);
            },
            'schema' => array(
                'type' => 'array',
                'description' => 'Carousel items for the home page'
            )
        ));
    }
    
    /**
     * Add admin menu
     */
    public function add_admin_menu() {
        add_menu_page(
            'Website Content',
            'Website Content',
            'manage_options',
            'all-hat-no-cattle',
            array($this, 'admin_page'),
            'dashicons-admin-customizer',
            20
        );
    }
    
    /**
     * Admin page
     */
    public function admin_page() {
        ?>
        <div class="wrap">
            <h1>All Hat and No Cattle Website Manager</h1>
            
            <div class="notice notice-info">
                <p>Use this page to manage content for your React website. Changes you make here will automatically appear on your website.</p>
            </div>
            
            <h2 class="nav-tab-wrapper">
                <a href="#content-guide" class="nav-tab nav-tab-active">Content Guide</a>
                <a href="#design-tips" class="nav-tab">Design Tips</a>
            </h2>
            
            <div id="content-guide" class="tab-content" style="display: block;">
                <div class="postbox">
                    <div class="inside">
                        <h3>How to Update Your Website Content</h3>
                        <p>Your website content is organized into different sections that you can easily update:</p>
                        
                        <h4>Pages</h4>
                        <ol>
                            <li>Go to <a href="<?php echo admin_url('edit.php?post_type=page'); ?>">Pages</a> in the WordPress admin</li>
                            <li>Edit the "Home" page to update your homepage content</li>
                            <li>Edit the "About" page to update your about page content</li>
                        </ol>
                        
                        <h4>Designs</h4>
                        <ol>
                            <li>Go to <a href="<?php echo admin_url('edit.php?post_type=designs'); ?>">Designs</a> in the WordPress admin</li>
                            <li>Add or edit designs (don't forget to set a featured image)</li>
                            <li>Fill in the "Price" and "Category" fields in the Design details box</li>
                        </ol>
                        
                        <h4>Silhouettes</h4>
                        <ol>
                            <li>Go to <a href="<?php echo admin_url('edit.php?post_type=silhouettes'); ?>">Silhouettes</a> in the WordPress admin</li>
                            <li>Add or edit silhouettes (don't forget to set a featured image)</li>
                        </ol>
                        
                        <h4>Carousel Items</h4>
                        <ol>
                            <li>Go to <a href="<?php echo admin_url('edit.php?post_type=carousel_items'); ?>">Carousel Items</a> in the WordPress admin</li>
                            <li>Add or edit carousel items (don't forget to set a featured image)</li>
                            <li>These will appear in the carousel on your homepage</li>
                        </ol>
                    </div>
                </div>
            </div>
            
            <div id="design-tips" class="tab-content" style="display: none;">
                <div class="postbox">
                    <div class="inside">
                        <h3>Design Tips</h3>
                        
                        <h4>Images</h4>
                        <ul>
                            <li>Use high-quality images with good lighting</li>
                            <li>For designs and silhouettes, use a consistent aspect ratio (e.g. square or 3:2)</li>
                            <li>Ideal image sizes:
                                <ul>
                                    <li>Banner: 1920×600 pixels</li>
                                    <li>Designs: 800×800 pixels</li>
                                    <li>Carousel: 1200×800 pixels</li>
                                </ul>
                            </li>
                        </ul>
                        
                        <h4>Text Content</h4>
                        <ul>
                            <li>Keep titles short and descriptive</li>
                            <li>Use the WordPress editor to format text (headings, paragraphs, lists)</li>
                            <li>You can embed YouTube videos and other media using the WordPress editor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
            jQuery(document).ready(function($) {
                // Tab navigation
                $('.nav-tab').on('click', function(e) {
                    e.preventDefault();
                    var target = $(this).attr('href');
                    
                    // Hide all tab content
                    $('.tab-content').hide();
                    
                    // Show target tab content
                    $(target).show();
                    
                    // Update active tab
                    $('.nav-tab').removeClass('nav-tab-active');
                    $(this).addClass('nav-tab-active');
                });
            });
        </script>
        <?php
    }
    
    /**
     * Enqueue admin scripts
     */
    public function enqueue_admin_scripts($hook) {
        // Add custom meta boxes for design details, carousel items, etc.
        
        if ($hook == 'post.php' || $hook == 'post-new.php') {
            $screen = get_current_screen();
            
            if ($screen->post_type == 'designs') {
                // Enqueue scripts for design details
                wp_enqueue_script('design-details', plugin_dir_url(__FILE__) . 'js/design-details.js', array('jquery'), '1.0', true);
            }
            
            if ($screen->post_type == 'page' && $screen->id == 'page') {
                // Enqueue scripts for page specific fields
                wp_enqueue_script('page-fields', plugin_dir_url(__FILE__) . 'js/page-fields.js', array('jquery'), '1.0', true);
                wp_enqueue_media();
            }
        }
    }
    
    /**
     * Add CORS headers
     */
    public function add_cors_headers() {
        // Add CORS headers to allow the React app to access the WordPress API
        
        // Only add headers for REST API requests
        if (isset($_SERVER['HTTP_ORIGIN']) && strpos($_SERVER['REQUEST_URI'], '/wp-json/') !== false) {
            header('Access-Control-Allow-Origin: *');
            header('Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE');
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Allow-Headers: Authorization, Content-Type');
            
            // Handle preflight OPTIONS requests
            if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
                status_header(200);
                exit();
            }
        }
    }
}

// Initialize the plugin
new AllHatNoCattle_ContentManager(); 