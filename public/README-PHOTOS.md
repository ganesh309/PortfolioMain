# Adding Your Personal Photos

## Required Photos

To complete your portfolio, you need to add 2 personal photos:

### 1. Hero Section Photo (`/path-to-your-photo.jpg`)
- **Location**: Hero section (top of the page)
- **Recommended size**: 400x400 pixels (square)
- **Style**: Professional headshot or portrait
- **Format**: JPG or PNG
- **Tips**: 
  - Use good lighting
  - Professional attire
  - Clear background or blurred background
  - Smile and look confident

### 2. About Section Photo (`/path-to-your-about-photo.jpg`)
- **Location**: About Me section
- **Recommended size**: 600x400 pixels (landscape)
- **Style**: You working, coding, or in a professional environment
- **Format**: JPG or PNG
- **Tips**:
  - Show you in action (coding, at desk, etc.)
  - Professional environment
  - Good lighting
  - Can be more casual than hero photo

## How to Add Photos

1. **Save your photos** in the `public` folder of your project
2. **Name them appropriately** (e.g., `hero-photo.jpg`, `about-photo.jpg`)
3. **Update the file paths** in the code:
   - In `Hero.tsx`: Change `/path-to-your-photo.jpg` to `/hero-photo.jpg`
   - In `About.tsx`: Change `/path-to-your-about-photo.jpg` to `/about-photo.jpg`

## Example File Structure
```
public/
├── hero-photo.jpg          (your main profile photo)
├── about-photo.jpg         (your working/casual photo)
└── vite.svg
```

## Photo Optimization Tips
- Keep file sizes under 500KB for faster loading
- Use tools like TinyPNG to compress images
- Ensure photos are high quality but optimized for web

## Alternative: Using Stock Photos Temporarily
If you don't have professional photos yet, you can temporarily use professional stock photos from Pexels:
- Hero: `https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400`
- About: `https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800`