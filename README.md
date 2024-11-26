# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This website is deployed using Netlify for continuous deployment and hosting.

### Deployment Setup

1. **Prerequisites**
   - GitHub repository: https://github.com/gudlucsam/personal-website
   - Node.js and npm installed
   - Netlify account

2. **Local Development**
   ```bash
   # Install dependencies
   npm install

   # Run development server
   npm start
   ```

3. **Build**
   ```bash
   # Create production build
   npm run build
   ```

### Netlify Deployment

1. **Initial Setup**
   - Sign up/login to [Netlify](https://www.netlify.com/)
   - Click "Add new site" > "Import an existing project"
   - Choose "Deploy with GitHub"
   - Select the repository: `gudlucsam/personal-website`

2. **Build Settings**
   - Branch to deploy: `main`
   - Base directory: (leave empty)
   - Build command: `npm run build`
   - Publish directory: `build`

3. **Domain Configuration**
   - After deployment, go to Site settings > Domain management
   - Click "Change site name" to set a custom subdomain
   - Format: `your-chosen-name.netlify.app`

4. **Continuous Deployment**
   - Automatically deploys when changes are pushed to main branch
   - Build logs available in the Netlify dashboard
   - Deploy previews for pull requests

### Environment Variables
   - Any sensitive data should be added in Netlify's Environment Variables section
   - Site settings > Build & deploy > Environment

### Custom Domain Setup (Optional)
1. Purchase a domain from a domain registrar
2. Add custom domain in Netlify:
   - Site settings > Domain management > Add custom domain
   - Follow DNS configuration instructions
   - Netlify automatically handles SSL/HTTPS

### Deployment Configuration
The `netlify.toml` file in the root directory contains deployment settings:
```toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

This ensures proper routing for the React application and correct build settings.

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Adding New Blog Posts

To add a new blog post to the website:

1. Navigate to `src/data/blogPosts.js`
2. Add a new object to the `blogPosts` array following this structure:

```javascript
{
  id: "unique-post-id",  // Use a unique identifier
  title: "Your Blog Post Title",
  date: "YYYY-MM-DD",    // Date in ISO format
  excerpt: "A brief summary of your blog post (1-2 sentences)",
  content: `
    Your full blog post content here. 
    You can use markdown syntax for formatting:
    
    # Headers
    ## Subheaders
    
    - Bullet points
    - Lists
    
    \`\`\`javascript
    // Code blocks
    const example = "Hello World";
    \`\`\`
    
    > Blockquotes
    
    **Bold text** and *italic text*
  `,
  tags: ["tag1", "tag2"],  // Relevant categories for your post
  readTime: "X min read"   // Estimated reading time
}
```

3. The post will automatically appear in:
   - The blog list page
   - Recent posts section on the home page (if it's one of the 3 most recent)
   - The individual blog post page will be generated automatically

### Best Practices for Blog Posts

1. **Images**
   - Store blog images in `public/images/blog/`
   - Reference them in your content using: `/images/blog/your-image.jpg`

2. **Formatting**
   - Use markdown for consistent formatting
   - Break long posts into sections with headers
   - Include code snippets where relevant

3. **Tags**
   - Use existing tags when possible
   - Keep tags relevant to the content
   - Use lowercase for consistency

4. **Content Guidelines**
   - Keep excerpts concise (150-200 characters)
   - Include relevant code examples
   - Add proper attribution for any external content
   - Proofread before publishing
