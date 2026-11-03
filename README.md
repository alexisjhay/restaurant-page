<h1>Restaurant Page</h1>

<p>A fun, fictional restaurant website built with JavaScript, HTML, and CSS.</p>

<h2>Live Demo</h2>

<p><a href="https://alexisjhay.github.io/restaurant-page/">View Restaurant Page</a></p>

<h2>Features</h2>

<ul>
  <li>Dynamic page rendering using JavaScript</li>
  <li>Home, Menu, and About pages</li>
  <li>Interactive navigation between pages</li>
  <li>Menu items organized by category</li>
  <li>Modular JavaScript structure</li>
  <li>Webpack bundling and asset management</li>
  <li>Separate development and production configurations</li>
  <li>Shared Webpack configuration using Webpack Merge</li>
  <li>npm scripts for development, production builds, and deployment</li>
</ul>

<h2>Built With</h2>

<ul>
  <li>HTML5</li>
  <li>CSS3</li>
  <li>JavaScript (ES6 Modules)</li>
  <li>Webpack</li>
  <li>Webpack Merge</li>
  <li>npm</li>
</ul>

<h2>Getting Started</h2>

<h3>Installation</h3>

<ol>
  <li>
    Clone the repository:
    <pre><code>git clone https://github.com/alexisjhay/restaurant-page.git</code></pre>
  </li>
  <li>
    Navigate to the project directory:
    <pre><code>cd restaurant-page</code></pre>
  </li>
  <li>
    Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
</ol>

<h3>Development</h3>

<p>Start the development server:</p>

<pre><code>npm run dev</code></pre>

<h3>Build</h3>

<p>Generate an optimized production build:</p>

<pre><code>npm run build</code></pre>

<p>The generated files will be placed in the <code>dist/</code> directory.</p>

<h3>Deployment</h3>

<p>Deploy the production build to GitHub Pages:</p>

<pre><code>npm run deploy</code></pre>

<p>The deployment script pushes the contents of the <code>dist/</code> directory to the <code>gh-pages</code> branch.</p>

<h2>Project Structure</h2>

<pre><code>restaurant-page/
├── src/
│   ├── assets/
│   ├── css/
│   ├── module/
│   ├── index.js
│   └── template.html
├── dist/
├── package.json
├── package-lock.json
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── .gitignore</code></pre>

<h2>Deployment</h2>

<p>Deployed using GitHub Pages through the <code>gh-pages</code> branch, with Git subtree for deployment.</p>
