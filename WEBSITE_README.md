# Anvita's Corner – Personal Portfolio Website

Welcome to my playful, colorful personal website! This website introduces me, Anvita, and showcases my hobbies, interests, and achievements.

## 🌟 Features

- **Home Page** – Welcome splash with quick navigation to all sections
- **About Me** – Brief bio and personal introduction
- **Food** – Favorite cuisines from around the world (Indian, Italian, Mexican)
- **Sports** – Cricket passion and inspiration from Smriti Mandhana (with animated cricket batter!)
- **Hobbies & Activities** – Coding, robotics, piano, swimming, cricket
- **Favorites** – Tiger, Harry Potter, PE class, and more
- **Gallery** – Space for photos and memories (coming soon with real photos!)
- **Responsive Design** – Works beautifully on desktop, tablet, and mobile devices
- **Accessible** – WCAG AA compliant with keyboard navigation and alt text
- **Fun Animations** – Floating doodles, hover effects, and cricket animation

## 🎨 Design

### Color Palette
- **Primary Color:** Coral-pink (#FF6B9D)
- **Secondary Color:** Soft lavender (#A29BFE)
- **Accent Color:** Sky blue (#74B9FF)
- **Background:** Soft cream (#FFF9E6)

### Typography
- **Headings:** Rounded sans-serif (playful and modern)
- **Body:** Segoe UI / Open Sans (clean and readable)

### Style
- Playful and kid-friendly
- Rounded corners on buttons and cards
- Colorful icons and emoji decorations
- Ample whitespace for clarity

## 📁 File Structure

```
anvi2314.github.io/
├── index.html          # Home page (landing)
├── about.html          # About Me section
├── food.html           # Food & Cuisines
├── sports.html         # Sports & Cricket (with animation!)
├── hobbies.html        # Hobbies & Activities
├── favorites.html      # Favorite Things
├── gallery.html        # Gallery (placeholder for photos)
├── styles.css          # Main stylesheet with responsive design
├── animations.css      # Cricket animation styles
├── script.js           # Interactive elements & navigation
├── design.md           # Project design specification
├── README.md           # This file
└── LICENSE             # License information
```

## 🚀 Getting Started

### Local Development
1. Clone or download the repository
2. Open `index.html` in your web browser
3. Navigate through the pages using the menu at the top

### Viewing the Site
- **Desktop:** Open `index.html` in any modern web browser (Chrome, Firefox, Safari, Edge)
- **Mobile:** The site is fully responsive and works on smartphones and tablets

### No Build Tools Required!
This is a static website with pure HTML, CSS, and vanilla JavaScript. No installation or build steps needed—just open `index.html` and explore!

## 🌐 Deployment (GitHub Pages)

The website is designed to be hosted on **GitHub Pages**:

1. Your repository is already set up for GitHub Pages
2. The site is automatically published at: `https://anvi2314.github.io/`
3. Any changes pushed to the `main` branch will automatically update the live site

**To publish:**
- Commit your changes: `git add .` → `git commit -m "Update website"` → `git push`
- GitHub will automatically deploy the changes!

## 🎯 Key Features Explained

### Navigation Bar
- Fixed sticky navigation at the top
- Gradient background (pink to lavender)
- Active link indicator shows current page
- Responsive on all screen sizes

### Hero Section
- Eye-catching title and subtitle
- Call-to-action button ("Get to Know Me")
- Animated floating doodles in background
- Smooth entrance animations

### Preview Cards
- Four main sections: Hobbies, Food, Sports, Favorites
- Hover effects with smooth animations
- Icons and readable descriptions
- Links to detailed pages

### Cricket Animation (Sports Page)
- Animated SVG cricket batter
- Bat swinging animation
- Ball bouncing effect
- Responsive SVG that scales on all devices

### Responsive Design
- Mobile-first approach
- Works on screens from 320px (small phones) to 1920px+ (desktop)
- Hamburger menu ready (can be added easily)
- Touch-friendly buttons and links

### Accessibility
- WCAG AA color contrast compliance
- Keyboard navigation support
- Focus indicators for interactive elements
- Alt text ready for images
- Semantic HTML (headings, lists, sections)
- Respects `prefers-reduced-motion` for animations

## 🛠️ Customization Guide

### Change Colors
Edit the CSS variables in `styles.css` (lines 2-13):
```css
:root {
    --primary-color: #FF6B9D;      /* Change this */
    --secondary-color: #A29BFE;    /* Or this */
    --accent-color: #74B9FF;       /* Or this */
    --background-color: #FFF9E6;   /* And this */
    /* ... */
}
```

### Change Fonts
Update the `font-family` in `styles.css` (line 21):
```css
font-family: 'Your Font Name', Tahoma, Geneva, Verdana, sans-serif;
```

### Add Photos to Gallery
1. Add image files to the project folder (e.g., `images/photo1.jpg`)
2. Edit `gallery.html` and add `<img>` tags with alt text
3. Style with CSS if needed

### Add More Pages
1. Create a new HTML file (e.g., `projects.html`)
2. Copy the structure from any existing page (e.g., `about.html`)
3. Update the navigation menu in all files to include the new link

### Adjust Animations
Edit timing and effects in `styles.css` and `animations.css`:
- Change `animation: float 6s ease-in-out infinite;` (duration: `6s`)
- Modify `@keyframes` for different effects

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔒 Privacy & Safety

- ✅ No personal contact information displayed
- ✅ No tracking or analytics (can be added later if desired)
- ✅ No cookies or external dependencies
- ✅ Static content only (no user data collected)

## 📝 Next Steps

1. **Add Real Photos:**
   - Cricket match photos for the Sports page
   - Food photos for the Food page
   - Activity/hobby photos for the Gallery

2. **Enhance Gallery:**
   - Replace placeholder cards with real images
   - Add image descriptions and alt text
   - Consider a lightbox effect for larger images

3. **Optional Upgrades:**
   - Add a contact form (using Formspree or similar)
   - Add a blog section for updates
   - Integrate with Instagram or social media
   - Add more animations or interactive elements

4. **SEO & Meta:**
   - Update meta descriptions in each HTML file
   - Add structured data (schema.org) for better search results
   - Optimize images for fast loading

## 💜 About This Website

This website was created as a personal portfolio to introduce Anvita, showcase her passions, and share her interests with the world. It's a fun, colorful space that reflects her personality and achievements!

**Made with 💜 and lots of fun!**

---

**Questions or Suggestions?** Feel free to explore the code and customize it to make it truly yours!

Happy browsing! 🌟
