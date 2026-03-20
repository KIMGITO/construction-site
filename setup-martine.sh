#!/bin/bash

# Martine Construction React Website - Folder Structure Setup
echo "🚀 Creating folder structure for Martine Construction..."

# Create main project directory
# mkdir -p martine-construction
# cd martine-construction

# Create public directory structure
echo "📁 Creating public directory structure..."
mkdir -p public/images/team

# Create src directory structure
echo "📁 Creating src directory structure..."
mkdir -p src/assets/{fonts,icons,styles}
mkdir -p src/components/{common,layout,home,about,services,projects,contact,seo}
mkdir -p src/pages
mkdir -p src/hooks
mkdir -p src/context
mkdir -p src/services
mkdir -p src/utils
mkdir -p src/data

# Create empty files in public
echo "📄 Creating empty public files..."
touch public/index.html
touch public/favicon.ico
touch public/manifest.json
touch public/robots.txt
touch public/sitemap.xml
touch public/images/logo.png
touch public/images/og-image.jpg
touch public/images/home-hero.jpg
touch public/images/about-header.jpg
touch public/images/services-header.jpg
touch public/images/projects-header.jpg
touch public/images/contact-header.jpg
touch public/images/team/john-martine.jpg
touch public/images/team/sarah-martine.jpg
touch public/images/team/mike-johnson.jpg
touch public/images/team/lisa-chen.jpg

# Create component files
echo "📄 Creating empty component files..."

# Common components
touch src/components/common/Button.js
touch src/components/common/Button.css
touch src/components/common/Card.js
touch src/components/common/Card.css
touch src/components/common/Modal.js
touch src/components/common/Modal.css
touch src/components/common/Loader.js
touch src/components/common/Loader.css

# Layout components
touch src/components/layout/Navbar.js
touch src/components/layout/Navbar.css
touch src/components/layout/Footer.js
touch src/components/layout/Footer.css
touch src/components/layout/Header.js
touch src/components/layout/Header.css
touch src/components/layout/ScrollToTop.js

# Home components
touch src/components/home/HeroSection.js
touch src/components/home/HeroSection.css
touch src/components/home/WhyChooseUs.js
touch src/components/home/WhyChooseUs.css
touch src/components/home/ServicesPreview.js
touch src/components/home/ServicesPreview.css
touch src/components/home/FeaturedProjects.js
touch src/components/home/FeaturedProjects.css
touch src/components/home/Testimonials.js
touch src/components/home/Testimonials.css
touch src/components/home/CTASection.js
touch src/components/home/CTASection.css

# About components
touch src/components/about/TeamSection.js
touch src/components/about/TeamSection.css
touch src/components/about/ValuesSection.js
touch src/components/about/ValuesSection.css
touch src/components/about/StatsSection.js
touch src/components/about/StatsSection.css

# Services components
touch src/components/services/ServiceCard.js
touch src/components/services/ServiceCard.css
touch src/components/services/ServicesList.js
touch src/components/services/ServicesList.css

# Projects components
touch src/components/projects/ProjectCard.js
touch src/components/projects/ProjectCard.css
touch src/components/projects/ProjectFilter.js
touch src/components/projects/ProjectFilter.css
touch src/components/projects/ProjectGallery.js
touch src/components/projects/ProjectGallery.css

# Contact components
touch src/components/contact/ContactForm.js
touch src/components/contact/ContactForm.css
touch src/components/contact/ContactInfo.js
touch src/components/contact/ContactInfo.css
touch src/components/contact/Map.js
touch src/components/contact/Map.css

# SEO components
touch src/components/seo/SEO.js
touch src/components/seo/StructuredData.js
touch src/components/seo/Analytics.js

# Create page files
echo "📄 Creating empty page files..."
touch src/pages/Home.js
touch src/pages/Home.css
touch src/pages/About.js
touch src/pages/About.css
touch src/pages/Services.js
touch src/pages/Services.css
touch src/pages/Projects.js
touch src/pages/Projects.css
touch src/pages/Contact.js
touch src/pages/Contact.css
touch src/pages/NotFound.js
touch src/pages/NotFound.css

# Create hook files
echo "📄 Creating empty hook files..."
touch src/hooks/useScrollPosition.js
touch src/hooks/useWindowSize.js
touch src/hooks/useIntersectionObserver.js
touch src/hooks/useForm.js

# Create context files
echo "📄 Creating empty context files..."
touch src/context/ThemeContext.js
touch src/context/AuthContext.js

# Create service files
echo "📄 Creating empty service files..."
touch src/services/api.js
touch src/services/contactService.js
touch src/services/projectService.js

# Create utility files
echo "📄 Creating empty utility files..."
touch src/utils/constants.js
touch src/utils/helpers.js
touch src/utils/validators.js
touch src/utils/generateSitemap.js
touch src/utils/animations.js

# Create data files
echo "📄 Creating empty data files..."
touch src/data/projects.js
touch src/data/services.js
touch src/data/testimonials.js
touch src/data/team.js

# Create root source files
echo "📄 Creating empty root source files..."
touch src/App.js
touch src/App.css
touch src/index.js
touch src/index.css
touch src/routes.js

# Create asset style files
touch src/assets/styles/variables.css

# Create environment and config files
echo "📄 Creating environment and config files..."
touch .env
touch .env.production
touch .gitignore
touch jsconfig.json
touch README.md

# Create package.json (basic)
cat > package.json << 'EOF'
{
  "name": "martine-construction",
  "version": "1.0.0",
  "description": "Martine Construction Company Website",
  "private": true,
  "dependencies": {},
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
EOF

# Create basic .gitignore
cat > .gitignore << 'EOF'
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
EOF

# Create jsconfig.json
cat > jsconfig.json << 'EOF'
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"],
      "@hooks/*": ["hooks/*"],
      "@utils/*": ["utils/*"],
      "@services/*": ["services/*"],
      "@assets/*": ["assets/*"],
      "@context/*": ["context/*"],
      "@data/*": ["data/*"]
    }
  }
}
EOF

echo "✅ Folder structure and empty files created successfully!"
echo "📂 Location: $(pwd)"
echo ""
echo "Next steps:"
echo "1. cd martine-construction"
echo "2. npm install react react-dom react-scripts react-router-dom framer-motion react-icons react-helmet-async axios"
echo "3. npm start"