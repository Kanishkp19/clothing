import fs from 'fs'
import path from 'path'
import sharp from 'sharp'

const artifactDir = '/Users/kanishk_pandey/.gemini/antigravity-ide/brain/7ba7c559-9025-41ca-ba59-f1d4c768d68d'
const projectRoot = '/Users/kanishk_pandey/Desktop/clothing /jewel'
const publicImages = path.join(projectRoot, 'public', 'images')

const artifacts = {
  hero1: path.join(artifactDir, 'hero_model_linen_1791029621854.jpg'),
  hero2: path.join(artifactDir, 'hero_autumn_edit_1791029659668.jpg'),
  hero3: path.join(artifactDir, 'hero_studio_craft_1791029681128.jpg'),
  catDresses: path.join(artifactDir, 'cat_dresses_1791029706255.jpg'),
  catTops: path.join(artifactDir, 'cat_tops_1791029724261.jpg'),
  catOuterwear: path.join(artifactDir, 'cat_outerwear_1791029743191.jpg'),
  catBottoms: path.join(artifactDir, 'cat_bottoms_1791029841912.jpg'),
  catAccessories: path.join(artifactDir, 'cat_accessories_1791029865827.jpg'),
  colLinen: path.join(artifactDir, 'col_linen_edit_1791029890067.jpg'),
  colFestive: path.join(artifactDir, 'col_festive_edit_1791029910033.jpg'),
  colEssentials: path.join(artifactDir, 'col_essentials_1791029936880.jpg'),
  studio: path.join(artifactDir, 'lifestyle_studio_1791029985829.jpg'),
}

async function safeCrop(src, dest, { left, top, width, height }, targetWidth = 600, targetHeight = 750) {
  try {
    const meta = await sharp(src).metadata()
    const l = Math.max(0, Math.min(left, meta.width - 50))
    const t = Math.max(0, Math.min(top, meta.height - 50))
    const w = Math.min(width, meta.width - l)
    const h = Math.min(height, meta.height - t)

    await sharp(src)
      .extract({ left: l, top: t, width: w, height: h })
      .resize(targetWidth, targetHeight, { fit: 'cover' })
      .jpeg({ quality: 90 })
      .toFile(dest)
  } catch (e) {
    console.warn(`Crop fallback for ${dest}:`, e.message)
    await sharp(src)
      .resize(targetWidth, targetHeight, { fit: 'cover' })
      .jpeg({ quality: 90 })
      .toFile(dest)
  }
}

async function run() {
  console.log('Processing images...')

  // 1. Hero
  const heroDir = path.join(publicImages, 'hero')
  fs.mkdirSync(heroDir, { recursive: true })
  fs.copyFileSync(artifacts.hero1, path.join(heroDir, 'hero-1.jpg'))
  fs.copyFileSync(artifacts.hero2, path.join(heroDir, 'hero-2.jpg'))
  fs.copyFileSync(artifacts.hero3, path.join(heroDir, 'hero-3.jpg'))
  console.log('Copied hero images')

  // 2. Categories
  const catDir = path.join(publicImages, 'categories')
  fs.mkdirSync(catDir, { recursive: true })
  fs.copyFileSync(artifacts.catDresses, path.join(catDir, 'dresses.jpg'))
  fs.copyFileSync(artifacts.catDresses, path.join(catDir, 'rings.jpg')) // fallback
  fs.copyFileSync(artifacts.catTops, path.join(catDir, 'tops.jpg'))
  fs.copyFileSync(artifacts.catTops, path.join(catDir, 'necklaces.jpg')) // fallback
  fs.copyFileSync(artifacts.catOuterwear, path.join(catDir, 'outerwear.jpg'))
  fs.copyFileSync(artifacts.catOuterwear, path.join(catDir, 'earrings.jpg')) // fallback
  fs.copyFileSync(artifacts.catBottoms, path.join(catDir, 'bottoms.jpg'))
  fs.copyFileSync(artifacts.catBottoms, path.join(catDir, 'mangalsutra.jpg')) // fallback
  fs.copyFileSync(artifacts.catAccessories, path.join(catDir, 'accessories.jpg'))
  fs.copyFileSync(artifacts.catAccessories, path.join(catDir, 'bracelets.jpg')) // fallback
  console.log('Copied category images')

  // 3. Collections
  const colDir = path.join(publicImages, 'collections')
  fs.mkdirSync(colDir, { recursive: true })
  fs.copyFileSync(artifacts.colLinen, path.join(colDir, 'linen-edit.jpg'))
  fs.copyFileSync(artifacts.colLinen, path.join(colDir, 'champagne-gold.jpg')) // fallback
  fs.copyFileSync(artifacts.colFestive, path.join(colDir, 'festive-edit.jpg'))
  fs.copyFileSync(artifacts.colEssentials, path.join(colDir, 'essentials.jpg'))
  fs.copyFileSync(artifacts.colEssentials, path.join(colDir, 'minimalist.jpg')) // fallback
  console.log('Copied collection images')

  // 4. Lifestyle
  const lifeDir = path.join(publicImages, 'lifestyle')
  fs.mkdirSync(lifeDir, { recursive: true })
  fs.copyFileSync(artifacts.studio, path.join(lifeDir, 'atelier.jpg'))
  fs.copyFileSync(artifacts.studio, path.join(lifeDir, 'studio.jpg'))
  
  await safeCrop(artifacts.hero1, path.join(lifeDir, 'model-1.jpg'), { left: 450, top: 50, width: 450, height: 600 }, 800, 800)
  await safeCrop(artifacts.hero2, path.join(lifeDir, 'model-2.jpg'), { left: 350, top: 40, width: 500, height: 650 }, 800, 800)
  console.log('Copied lifestyle images')

  // 5. Products
  const prodDir = path.join(publicImages, 'products')
  fs.mkdirSync(prodDir, { recursive: true })

  const productConfigs = [
    // 1. Linen wrap midi dress
    { name: 'dress-linen-midi-1.jpg', src: artifacts.catDresses, crop: { left: 300, top: 150, width: 450, height: 560 } },
    { name: 'dress-linen-midi-2.jpg', src: artifacts.catDresses, crop: { left: 360, top: 80, width: 340, height: 425 } },

    // 2. Silk maxi dress
    { name: 'dress-silk-maxi-1.jpg', src: artifacts.colFestive, crop: { left: 320, top: 170, width: 440, height: 550 } },
    { name: 'dress-silk-maxi-2.jpg', src: artifacts.colFestive, crop: { left: 380, top: 280, width: 380, height: 475 } },

    // 3. Ruched mini dress
    { name: 'dress-ruched-mini-1.jpg', src: artifacts.hero2, crop: { left: 400, top: 280, width: 280, height: 350 } },
    { name: 'dress-ruched-mini-2.jpg', src: artifacts.catTops, crop: { left: 380, top: 200, width: 300, height: 375 } },

    // 4. Embroidered party dress
    { name: 'dress-zari-party-1.jpg', src: artifacts.colFestive, crop: { left: 300, top: 320, width: 450, height: 560 } },
    { name: 'dress-zari-party-2.jpg', src: artifacts.colFestive, crop: { left: 410, top: 160, width: 300, height: 375 } },

    // 5. Cropped linen blouse
    { name: 'top-linen-blouse-1.jpg', src: artifacts.colLinen, crop: { left: 240, top: 360, width: 200, height: 250 } },
    { name: 'top-linen-blouse-2.jpg', src: artifacts.colLinen, crop: { left: 400, top: 365, width: 200, height: 250 } },

    // 6. Silk button-down shirt
    { name: 'top-silk-shirt-1.jpg', src: artifacts.colEssentials, crop: { left: 350, top: 280, width: 340, height: 425 } },
    { name: 'top-silk-shirt-2.jpg', src: artifacts.colEssentials, crop: { left: 400, top: 200, width: 240, height: 300 } },

    // 7. Ribbed cotton tee
    { name: 'top-ribbed-tee-1.jpg', src: artifacts.catBottoms, crop: { left: 350, top: 170, width: 320, height: 400 } },
    { name: 'top-ribbed-tee-2.jpg', src: artifacts.catOuterwear, crop: { left: 440, top: 200, width: 180, height: 225 } },

    // 8. Puff-sleeve crop top
    { name: 'top-puff-crop-1.jpg', src: artifacts.catTops, crop: { left: 370, top: 210, width: 300, height: 375 } },
    { name: 'top-puff-crop-2.jpg', src: artifacts.catTops, crop: { left: 410, top: 80, width: 260, height: 325 } },

    // 9. Structured wool blazer
    { name: 'outer-wool-blazer-1.jpg', src: artifacts.hero2, crop: { left: 390, top: 210, width: 260, height: 325 } },
    { name: 'outer-wool-blazer-2.jpg', src: artifacts.hero1, crop: { left: 430, top: 240, width: 200, height: 250 } },

    // 10. Cropped denim jacket
    { name: 'outer-denim-jacket-1.jpg', src: artifacts.catOuterwear, crop: { left: 430, top: 210, width: 190, height: 240 } },
    { name: 'outer-denim-jacket-2.jpg', src: artifacts.hero1, crop: { left: 430, top: 220, width: 180, height: 225 } },

    // 11. Classic trench coat
    { name: 'outer-trench-coat-1.jpg', src: artifacts.catOuterwear, crop: { left: 360, top: 200, width: 340, height: 425 } },
    { name: 'outer-trench-coat-2.jpg', src: artifacts.catOuterwear, crop: { left: 390, top: 90, width: 280, height: 350 } },

    // 12. Knit cardigan
    { name: 'outer-knit-cardigan-1.jpg', src: artifacts.hero2, crop: { left: 380, top: 210, width: 280, height: 350 } },
    { name: 'outer-knit-cardigan-2.jpg', src: artifacts.catTops, crop: { left: 360, top: 210, width: 320, height: 400 } },

    // 13. Wide-leg linen trousers
    { name: 'bottom-linen-trousers-1.jpg', src: artifacts.catBottoms, crop: { left: 370, top: 380, width: 350, height: 440 } },
    { name: 'bottom-linen-trousers-2.jpg', src: artifacts.catBottoms, crop: { left: 340, top: 440, width: 400, height: 500 } },

    // 14. Pleated midi skirt
    { name: 'bottom-pleated-skirt-1.jpg', src: artifacts.hero2, crop: { left: 400, top: 430, width: 280, height: 350 } },
    { name: 'bottom-pleated-skirt-2.jpg', src: artifacts.catDresses, crop: { left: 400, top: 400, width: 350, height: 440 } },

    // 15. High-rise straight jeans
    { name: 'bottom-straight-jeans-1.jpg', src: artifacts.catOuterwear, crop: { left: 440, top: 440, width: 240, height: 300 } },
    { name: 'bottom-straight-jeans-2.jpg', src: artifacts.hero1, crop: { left: 440, top: 440, width: 200, height: 250 } },

    // 16. Tailored shorts
    { name: 'bottom-tailored-shorts-1.jpg', src: artifacts.colEssentials, crop: { left: 380, top: 440, width: 280, height: 350 } },
    { name: 'bottom-tailored-shorts-2.jpg', src: artifacts.colEssentials, crop: { left: 400, top: 440, width: 240, height: 300 } },

    // 17. Woven tote bag
    { name: 'acc-woven-tote-1.jpg', src: artifacts.catAccessories, crop: { left: 80, top: 170, width: 450, height: 560 } },
    { name: 'acc-woven-tote-2.jpg', src: artifacts.catDresses, crop: { left: 340, top: 570, width: 140, height: 175 } },

    // 18. Silk printed scarf
    { name: 'acc-silk-scarf-1.jpg', src: artifacts.catAccessories, crop: { left: 260, top: 550, width: 480, height: 400 } },
    { name: 'acc-silk-scarf-2.jpg', src: artifacts.catAccessories, crop: { left: 300, top: 540, width: 380, height: 380 } },

    // 19. Leather belt
    { name: 'acc-leather-belt-1.jpg', src: artifacts.catAccessories, crop: { left: 650, top: 640, width: 280, height: 260 } },
    { name: 'acc-leather-belt-2.jpg', src: artifacts.catBottoms, crop: { left: 420, top: 380, width: 180, height: 100 } },

    // 20. Bucket hat
    { name: 'acc-bucket-hat-1.jpg', src: artifacts.colLinen, crop: { left: 470, top: 750, width: 220, height: 180 } },
    { name: 'acc-bucket-hat-2.jpg', src: artifacts.catDresses, crop: { left: 340, top: 570, width: 140, height: 175 } },
  ]

  for (const p of productConfigs) {
    const dest = path.join(prodDir, p.name)
    await safeCrop(p.src, dest, p.crop, 600, 750)
    console.log(`Generated: ${p.name}`)
  }

  // Also overwrite existing old jewelry product files with new fashion images so old URLs never show jewelry
  const oldFiles = fs.readdirSync(prodDir)
  for (const oldFile of oldFiles) {
    if (oldFile.startsWith('ring-') || oldFile.startsWith('ear-') || oldFile.startsWith('neck-') || oldFile.startsWith('brac-') || oldFile.startsWith('mang-')) {
      const sample = path.join(prodDir, 'dress-linen-midi-1.jpg')
      if (fs.existsSync(sample)) {
        fs.copyFileSync(sample, path.join(prodDir, oldFile))
      }
    }
  }
  console.log('Overwrote all old product images with fashion images')
  console.log('All image processing complete!')
}

run().catch(console.error)
