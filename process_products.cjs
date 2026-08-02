const fs = require('fs');
const path = require('path');

const importPath = 'C:\\Users\\DREAM\\Pictures\\products-import.json';
const cleanedDir = 'C:\\Users\\DREAM\\Pictures\\products_cleaned';
const outputPath = 'C:\\Users\\DREAM\\Pictures\\products_new.json';
const baseUrl = 'https://golden-meraki-app.vercel.app';

function replaceText(str) {
  if (typeof str !== 'string') return str;
  // Replace domain
  let res = str.replace(/shubhanjalistore\.com/gi, 'Golden Meraki');
  // Replace store name
  res = res.replace(/shubhanjali\s*store/gi, 'Golden Meraki');
  // Replace just the word
  res = res.replace(/shubhanjali/gi, 'Golden Meraki');
  return res;
}

function traverseAndReplace(obj) {
  if (typeof obj === 'string') {
    return replaceText(obj);
  } else if (Array.isArray(obj)) {
    return obj.map(traverseAndReplace);
  } else if (obj !== null && typeof obj === 'object') {
    const newObj = {};
    for (const [key, value] of Object.entries(obj)) {
      // Don't replace in slugs typically, but the user said "anywhere". Let's preserve slug format if needed, but if slug had shubhanjali it would be shubhanjali-xyz.
      // A slug shouldn't have uppercase or spaces.
      if (key === 'slug' && typeof value === 'string') {
          newObj[key] = value.replace(/shubhanjali/gi, 'goldenmeraki');
      } else {
          newObj[key] = traverseAndReplace(value);
      }
    }
    return newObj;
  }
  return obj;
}

function processProducts() {
  const rawData = fs.readFileSync(importPath, 'utf8');
  const products = JSON.parse(rawData);

  const newProducts = products.map(product => {
    // Process texts
    const processed = traverseAndReplace(product);
    
    // Now process images
    const slug = processed.slug;
    const productImagesDir = path.join(cleanedDir, slug);
    let newImages = [];

    if (fs.existsSync(productImagesDir)) {
      const files = fs.readdirSync(productImagesDir);
      // Sort naturally (1, 2, 3... 10)
      files.sort((a, b) => {
        const numA = parseInt(a.split('.')[0]) || 0;
        const numB = parseInt(b.split('.')[0]) || 0;
        return numA - numB;
      });
      newImages = files.map(file => `${baseUrl}/images/products/${slug}/${file}`);
    } else {
      // Fallback to existing images array if folder doesn't exist
      if (Array.isArray(processed.images)) {
        newImages = processed.images.map(img => {
          if (img.startsWith('http')) return img;
          return `${baseUrl}${img}`;
        });
      }
    }
    processed.images = newImages;
    return processed;
  });

  fs.writeFileSync(outputPath, JSON.stringify(newProducts, null, 2));
  console.log(`Processed ${products.length} products. Output saved to ${outputPath}`);
}

processProducts();
