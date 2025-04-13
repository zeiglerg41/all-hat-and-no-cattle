# Deployment Guide: Hosting React App on WordPress

This guide explains how to deploy your "All Hat and No Cattle" React app to an existing WordPress site.

## Step 1: Build Your React Application

1. Make sure all your changes are committed
2. Build your production-ready application:

```bash
# Navigate to your project folder
cd /path/to/AllHatandNoCattle

# Install dependencies (if not already installed)
npm install

# Build the production version
npm run build
```

This will create a `dist` folder with optimized production files.

## Step 2: Upload to WordPress Hosting

### Option 1: Using FTP/SFTP

1. Connect to your WordPress hosting using FTP/SFTP (FileZilla, Cyberduck, etc.)
2. Upload the contents of the `dist` folder to a subdirectory on your server:
   - For a subdomain: upload to `/public_html/subdomain-folder/`
   - For a subdirectory: upload to `/public_html/react-app/`

### Option 2: Using cPanel File Manager

1. Log in to your WordPress hosting cPanel
2. Open File Manager
3. Navigate to your public_html directory
4. Create a new folder (e.g., `react-app`)
5. Upload the contents of your local `dist` folder to this new folder

## Step 3: Configure WordPress to Serve Your React App

### Option 1: Using a Subdomain

1. Create a subdomain in your hosting control panel (e.g., app.yourdomain.com)
2. Point the subdomain to the directory where you uploaded your React app
3. Make sure your React Router is configured with the proper base URL

### Option 2: Using a Subdirectory with `.htaccess`

Create or edit an `.htaccess` file in your `/public_html/react-app/` directory with:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /react-app/
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /react-app/index.html [L]
</IfModule>
```

### Option 3: Using WordPress Page Template

If you want to embed your React app within WordPress:

1. Create a new PHP file in your theme directory called `template-react.php`
2. Add this content:

```php
<?php
/**
 * Template Name: React App
 */

get_header();
?>

<div id="react-app"></div>
<script>
    // Set WordPress site_url as a global variable for your React app
    window.wpSiteUrl = '<?php echo get_site_url(); ?>';
</script>

<?php
// Enqueue React app scripts and styles from your uploaded files
$react_base_url = get_site_url() . '/react-app';

// Script and style files (adjust filenames based on your build output)
$files = scandir(ABSPATH . 'react-app');
foreach ($files as $file) {
    if (preg_match('/\.js$/', $file)) {
        echo '<script src="' . $react_base_url . '/' . $file . '"></script>';
    }
    if (preg_match('/\.css$/', $file)) {
        echo '<link rel="stylesheet" href="' . $react_base_url . '/' . $file . '">';
    }
}

get_footer();
```

3. Create a new page in WordPress admin
4. Set the template to "React App"

## Step 4: Update React Router Base URL (if needed)

If your React app is not at the root of your domain, update your Router in App.tsx:

```jsx
// Change from
<Router>
  {/* ... */}
</Router>

// To (replace 'react-app' with your subdirectory name)
<Router basename="/react-app">
  {/* ... */}
</Router>
```

## Step 5: Handle API Requests (if applicable)

If your React app makes API requests to WordPress:

1. Use the WordPress REST API
2. Set up CORS headers in your WordPress site's .htaccess or via a plugin

## Troubleshooting

1. **404 Errors**: Make sure your .htaccess is properly configured for React Router
2. **CORS Issues**: Install a CORS plugin in WordPress or configure your server's headers
3. **Asset Loading**: Check all paths in your built files are correct (may need to adjust in vite.config.js)

## Additional WordPress Integration Options

1. **WordPress REST API Plugin**: Use plugins like "WP REST API" to expose custom endpoints
2. **WordPress as a Headless CMS**: Consider using WordPress solely as a content backend

## Security Considerations

1. Keep WordPress and all plugins updated
2. Use HTTPS for all connections
3. Consider implementing authentication for API requests

## Quick Deployment Using the Build Script

We've included a helpful build script that automates the configuration process:

1. Edit the `build-for-wordpress.sh` script and set the `WORDPRESS_PATH` variable to your WordPress subdirectory (e.g., `/react-app`).
2. Make the script executable: `chmod +x build-for-wordpress.sh`
3. Run the script: `./build-for-wordpress.sh`
4. Upload the generated `dist` folder contents (or the `wordpress-deploy.zip` file) to your WordPress hosting.

## FAQ

### 1. Why is my React Router not working on WordPress?

If you're experiencing 404 errors when navigating to routes directly, there are two common issues:

- **Base URL Not Set**: Make sure the `basename` prop in your `<Router>` component matches your subdirectory
- **Missing .htaccess**: Ensure you've added the proper .htaccess file to handle client-side routing

### 2. How do I update my deployed app?

Simply run the build script again and re-upload the new dist files to your WordPress host, replacing the old files.

### 3. Can I use WordPress content in my React app?

Yes! You can use the WordPress REST API to fetch posts and other content. Add this to your React components:

```jsx
useEffect(() => {
  // Replace with your WordPress domain
  fetch('https://your-wordpress-site.com/wp-json/wp/v2/posts')
    .then(response => response.json())
    .then(posts => {
      console.log(posts);
      // Use the posts data in your component
    });
}, []);
```

### 4. My assets (images, CSS) aren't loading correctly

Check that:
- All asset paths are relative, not absolute
- The `base` path in vite.config.ts matches your WordPress subdirectory
- You've uploaded all files from the dist folder

### 5. How do I test my production build locally?

Run: `npm run preview` to test your production build locally before uploading to WordPress. 