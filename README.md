# Modern Portfolio

A modern professional portfolio developed with React, Vite, Tailwind CSS and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and elegant interface with dark theme
- **Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Fluid transitions and animations with Framer Motion
- **Performance**: Built with Vite for fast development and optimized builds
- **Accessible**: Implemented with accessibility best practices
- **SEO Optimized**: Meta tags and structure optimized for search engines
- **PWA Ready**: Progressive Web App with service worker and manifest

## 🛠️ Technologies

- **React 18** - JavaScript library for user interfaces
- **Vite** - Modern and fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Modern icons
- **React Intersection Observer** - Scroll detection for animations
- **Vite PWA Plugin** - Progressive Web App functionality

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ItalloVasconcelos/portfolio-V2.git
   cd portfolio-V2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the project in development mode**
   ```bash
   npm run dev
   ```

4. **Access the project**
   Open your browser and go to `http://localhost:3000`

## 🎨 Customization

### 1. Personal Data

Edit the `src/data/portfolio.js` file to customize:

- Personal information (name, title, description)
- Professional experience
- Projects completed
- Social media links
- Contact information

### 2. Colors and Styling

The project uses Tailwind CSS with custom theme. To change colors:

- Edit `tailwind.config.js`
- Modify colors in the `theme.extend.colors` object
- Main colors are `primary` (green) and `secondary` (gray)

### 3. Project Images

Add your project images to the `public/` folder and update the paths in `src/data/portfolio.js`

## 📱 Portfolio Sections

- **Hero/Sidebar**: Initial presentation with navigation
- **About**: Personal and professional information
- **Experience**: Professional history with details
- **Skills**: Technical skills organized by category
- **Projects**: Showcase of completed projects
- **Contact**: Ways to get in touch

## 🚀 Deploy

### Vercel Deploy (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deploy"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Deploy automatically with zero configuration

### Build for Production

```bash
npm run build
```

### Build Preview

```bash
npm run preview
```

### Other Deploy Options

- **Netlify**: Direct Git deployment with automatic builds
- **GitHub Pages**: Use GitHub Actions workflow
- **Firebase Hosting**: For Google Cloud hosting

## 📄 Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates the production build
- `npm run preview` - Previews the production build
- `npm run lint` - Runs the code linter
- `npm run vercel-build` - Build command for Vercel

## 🔧 Project Structure

```
portfolio-V2/
├── public/
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── _redirects         # Netlify redirects
├── src/
│   ├── components/        # React components
│   ├── data/             # Portfolio data
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── vercel.json           # Vercel configuration
├── vite.config.js        # Vite configuration
└── tailwind.config.js    # Tailwind configuration
```

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is under the MIT license. See the `LICENSE` file for more details.

## 💡 Tips

- Keep information always updated
- Use optimized images for better performance
- Test on different devices and browsers
- Consider adding Google Analytics for metrics
- Implement a blog if you want to share knowledge

## 🌟 Live Demo

Visit the live portfolio at: [https://itallosaviodev.com](https://itallosaviodev.com)

---

Built with ❤️ using React and Tailwind CSS