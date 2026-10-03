import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting LUXORA database seeding...')

  // 1. Clean existing records in reverse dependency order
  await prisma.trackingEvent.deleteMany()
  await prisma.orderItem.deleteMany()
  await prisma.order.deleteMany()
  await prisma.review.deleteMany()
  await prisma.product.deleteMany()
  await prisma.collection.deleteMany()
  await prisma.category.deleteMany()
  await prisma.newsletter.deleteMany()
  await prisma.contactMessage.deleteMany()

  console.log('Cleared existing database tables.')

  // 2. Categories
  const categoriesData = [
    {
      slug: 'dresses',
      name: 'Dresses',
      description: 'Curated silhouette dresses crafted in breathable linen, organic cotton, and silk.',
      image: '/images/categories/dresses.jpg',
    },
    {
      slug: 'tops',
      name: 'Tops',
      description: 'Effortless blouses, crop tops, and tailored shirts for daily elegance.',
      image: '/images/categories/tops.jpg',
    },
    {
      slug: 'outerwear',
      name: 'Outerwear',
      description: 'Structured blazers, trench coats, and cozy knit cardigans.',
      image: '/images/categories/outerwear.jpg',
    },
    {
      slug: 'bottoms',
      name: 'Bottoms',
      description: 'Wide-leg trousers, pleated skirts, and tailored denim.',
      image: '/images/categories/bottoms.jpg',
    },
    {
      slug: 'accessories',
      name: 'Accessories',
      description: 'Handcrafted woven totes, printed silk scarves, and leather belts.',
      image: '/images/categories/accessories.jpg',
    },
  ]

  const categories: Record<string, string> = {}
  for (const cat of categoriesData) {
    const created = await prisma.category.create({ data: cat })
    categories[cat.slug] = created.id
  }
  console.log(`Created ${Object.keys(categories).length} categories.`)

  // 3. Collections
  const collectionsData = [
    {
      slug: 'linen-edit',
      name: 'The Linen Edit',
      tagline: 'Breathable, relaxed silhouettes in pure organic linen.',
      description: 'Crafted from 100% certified European flax linen, each piece is pre-washed for effortless drape and summer comfort.',
      image: '/images/collections/linen-edit.jpg',
    },
    {
      slug: 'festive-edit',
      name: 'The Festive Edit',
      tagline: 'Embroidered kurtas, shimmer dresses & statement jackets.',
      description: 'Rich jewel tones, intricate handcrafted embroidery, and celebratory celebratory silhouettes designed for memorable evenings.',
      image: '/images/collections/festive-edit.jpg',
    },
    {
      slug: 'essentials',
      name: 'Everyday Essentials',
      tagline: 'Quiet luxury for everyday wear.',
      description: 'Refined minimalist staples designed for effortless everyday layering and perennial chic.',
      image: '/images/collections/essentials.jpg',
    },
  ]

  const collections: Record<string, string> = {}
  for (const col of collectionsData) {
    const created = await prisma.collection.create({ data: col })
    collections[col.slug] = created.id
  }
  console.log(`Created ${Object.keys(collections).length} collections.`)

  // 4. Products
  const productsData = [
    // --- DRESSES ---
    {
      slug: 'linen-midi-dress',
      name: 'Linen Wrap Midi Dress',
      description: 'Cut from breathable European flax linen, this relaxed wrap midi dress features a flattering V-neckline, self-tie waist, and softly draped skirt. Designed for effortless transitions from sunlit afternoons to twilight gatherings.',
      price: 4999,
      compareAt: 6499,
      metal: '100% Linen',
      material: 'Pre-washed European Flax Linen',
      gemstone: 'XS, S, M, L',
      weight: 'Relaxed Wrap Fit',
      categorySlug: 'dresses',
      collectionSlug: 'linen-edit',
      images: ['/images/products/dress-linen-midi-1.jpg', '/images/products/dress-linen-midi-2.jpg'],
      rating: 4.9,
      reviewCount: 18,
      stock: 24,
      isBestseller: true,
      isNewArrival: false,
      tags: ['linen', 'dress', 'summer', 'bestseller', 'wrap'],
    },
    {
      slug: 'silk-maxi-dress',
      name: 'Emerald Silk Flute Maxi Dress',
      description: 'An ode to quiet opulence. Woven from 100% mulberry silk with delicate gold embroidery along the neckline, this flowing maxi dress skims the silhouette gracefully for celebratory evenings.',
      price: 7499,
      compareAt: 9999,
      metal: 'Pure Silk',
      material: '100% Mulberry Silk (22 Momme)',
      gemstone: 'S, M, L',
      weight: 'Flowing Silhouette',
      categorySlug: 'dresses',
      collectionSlug: 'festive-edit',
      images: ['/images/products/dress-silk-maxi-1.jpg', '/images/products/dress-silk-maxi-2.jpg'],
      rating: 5.0,
      reviewCount: 24,
      stock: 16,
      isBestseller: true,
      isNewArrival: false,
      tags: ['silk', 'maxi', 'festive', 'evening', 'bestseller'],
    },
    {
      slug: 'ruched-mini-dress',
      name: 'Ruched Organic Cotton Slip Dress',
      description: 'Tailored in certified organic cotton jersey with side ruching that flatters natural movement. Minimalist elegance that styles effortlessly beneath an oversized blazer or alone with leather slides.',
      price: 3499,
      compareAt: 4499,
      metal: 'Organic Cotton',
      material: 'GOTS-Certified Organic Cotton',
      gemstone: 'XS, S, M, L',
      weight: 'Slim Contour Fit',
      categorySlug: 'dresses',
      collectionSlug: 'essentials',
      images: ['/images/products/dress-ruched-mini-1.jpg', '/images/products/dress-ruched-mini-2.jpg'],
      rating: 4.7,
      reviewCount: 9,
      stock: 20,
      isBestseller: false,
      isNewArrival: true,
      tags: ['cotton', 'mini', 'staple', 'new'],
    },
    {
      slug: 'embroidered-party-dress',
      name: 'Zari Embroidered Organza Gown',
      description: 'Crafted in ethereal silk organza with hand-done antique gold zari embroidery by our Mumbai studio artisans. Features billowing sheer sleeves and a sculpted waistline.',
      price: 8999,
      compareAt: 11999,
      metal: 'Pure Silk',
      material: 'Silk Organza with Metallic Thread',
      gemstone: 'S, M, L',
      weight: 'Flared Gown Fit',
      categorySlug: 'dresses',
      collectionSlug: 'festive-edit',
      images: ['/images/products/dress-zari-party-1.jpg', '/images/products/dress-zari-party-2.jpg'],
      rating: 4.9,
      reviewCount: 15,
      stock: 12,
      isBestseller: false,
      isNewArrival: true,
      tags: ['zari', 'festive', 'organza', 'luxury'],
    },

    // --- TOPS ---
    {
      slug: 'cropped-linen-blouse',
      name: 'Cropped Linen Wrap Blouse',
      description: 'Lightweight and airy, this cropped blouse is tailored in premium pure linen with exaggerated cuffs and a flattering wrap tie closure. Pairs seamlessly with high-waisted linen trousers.',
      price: 2499,
      compareAt: 3299,
      metal: '100% Linen',
      material: 'Breathable Natural Linen',
      gemstone: 'XS, S, M, L',
      weight: 'Relaxed Cropped Fit',
      categorySlug: 'tops',
      collectionSlug: 'linen-edit',
      images: ['/images/products/top-linen-blouse-1.jpg', '/images/products/top-linen-blouse-2.jpg'],
      rating: 4.8,
      reviewCount: 22,
      stock: 30,
      isBestseller: true,
      isNewArrival: false,
      tags: ['linen', 'top', 'blouse', 'summer', 'bestseller'],
    },
    {
      slug: 'silk-button-down-shirt',
      name: 'Classic Silk Crepe Shirt',
      description: 'An indispensable investment piece. Cut from feather-soft silk crepe de chine with genuine mother-of-pearl buttons, a French collar, and relaxed dropped shoulders.',
      price: 3999,
      compareAt: 5299,
      metal: 'Pure Silk',
      material: 'Silk Crepe de Chine',
      gemstone: 'S, M, L, XL',
      weight: 'Relaxed Classic Fit',
      categorySlug: 'tops',
      collectionSlug: 'essentials',
      images: ['/images/products/top-silk-shirt-1.jpg', '/images/products/top-silk-shirt-2.jpg'],
      rating: 4.9,
      reviewCount: 14,
      stock: 25,
      isBestseller: false,
      isNewArrival: false,
      tags: ['silk', 'shirt', 'workwear', 'luxury'],
    },
    {
      slug: 'ribbed-cotton-tee',
      name: 'Sculpted Ribbed Pima Tee',
      description: 'Crafted from long-staple Peruvian pima cotton with a compact rib knit that holds its shape wash after wash. The ultimate high-end base layer.',
      price: 1499,
      compareAt: 1999,
      metal: 'Organic Cotton',
      material: '100% Pima Cotton',
      gemstone: 'XS, S, M, L, XL',
      weight: 'Fitted Contour',
      categorySlug: 'tops',
      collectionSlug: 'essentials',
      images: ['/images/products/top-ribbed-tee-1.jpg', '/images/products/top-ribbed-tee-2.jpg'],
      rating: 4.7,
      reviewCount: 31,
      stock: 50,
      isBestseller: true,
      isNewArrival: false,
      tags: ['cotton', 't-shirt', 'essential', 'bestseller'],
    },
    {
      slug: 'puff-sleeve-crop-top',
      name: 'Puff-Sleeve Jacquard Crop Top',
      description: 'Woven in intricate tonal jacquard with dramatic gathered puff sleeves and a squared neckline. Designed to bring statement grandeur to high-rise bottoms.',
      price: 2999,
      compareAt: 3999,
      metal: 'Pure Silk',
      material: 'Silk Blend Jacquard',
      gemstone: 'S, M, L',
      weight: 'Structured Tailored Fit',
      categorySlug: 'tops',
      collectionSlug: 'festive-edit',
      images: ['/images/products/top-puff-crop-1.jpg', '/images/products/top-puff-crop-2.jpg'],
      rating: 4.8,
      reviewCount: 11,
      stock: 18,
      isBestseller: false,
      isNewArrival: true,
      tags: ['jacquard', 'festive', 'top', 'new'],
    },

    // --- OUTERWEAR ---
    {
      slug: 'structured-wool-blazer',
      name: 'Tailored Double-Breasted Wool Blazer',
      description: 'Architectural shoulders, peaked lapels, and horn buttons. Tailored from premium Australian merino wool with a viscose lining for smooth layering over knits or slip dresses.',
      price: 9999,
      compareAt: 13999,
      metal: 'Wool Blend',
      material: '100% Fine Merino Wool',
      gemstone: 'S, M, L',
      weight: 'Tailored Structured Fit',
      categorySlug: 'outerwear',
      collectionSlug: 'essentials',
      images: ['/images/products/outer-wool-blazer-1.jpg', '/images/products/outer-wool-blazer-2.jpg'],
      rating: 5.0,
      reviewCount: 29,
      stock: 15,
      isBestseller: true,
      isNewArrival: false,
      tags: ['wool', 'blazer', 'outerwear', 'bestseller', 'investment'],
    },
    {
      slug: 'cropped-denim-jacket',
      name: 'Vintage Wash Selvedge Denim Jacket',
      description: 'Spun from heavyweight selvedge denim in a natural indigo dye with antique brass hardware. Cropped boxy silhouette with reinforced patch pockets.',
      price: 5499,
      compareAt: 6999,
      metal: 'Denim',
      material: '13.5oz 100% Cotton Denim',
      gemstone: 'XS, S, M, L',
      weight: 'Boxy Cropped Fit',
      categorySlug: 'outerwear',
      collectionSlug: 'essentials',
      images: ['/images/products/outer-denim-jacket-1.jpg', '/images/products/outer-denim-jacket-2.jpg'],
      rating: 4.6,
      reviewCount: 13,
      stock: 22,
      isBestseller: false,
      isNewArrival: false,
      tags: ['denim', 'jacket', 'casual', 'outerwear'],
    },
    {
      slug: 'classic-trench-coat',
      name: 'Heritage Double-Breasted Trench Coat',
      description: 'A timeless outerwear icon. Tailored from water-resistant heavy cotton gabardine with tortoiseshell buckle belt, storm flaps, and epaulettes.',
      price: 11999,
      compareAt: 15999,
      metal: 'Organic Cotton',
      material: 'Weatherproof Cotton Gabardine',
      gemstone: 'S, M, L, XL',
      weight: 'Relaxed Longline Fit',
      categorySlug: 'outerwear',
      collectionSlug: 'linen-edit',
      images: ['/images/products/outer-trench-coat-1.jpg', '/images/products/outer-trench-coat-2.jpg'],
      rating: 4.9,
      reviewCount: 19,
      stock: 14,
      isBestseller: true,
      isNewArrival: false,
      tags: ['trench', 'outerwear', 'classic', 'bestseller'],
    },
    {
      slug: 'knit-cardigan',
      name: 'Ribbed Cashmere Blend Cardigan',
      description: 'Spun from an ultra-soft blend of Mongolian cashmere and fine merino wool. Features a deep V-neckline, ribbed trims, and real horn buttons for cozy luxury.',
      price: 4499,
      compareAt: 5999,
      metal: 'Wool Blend',
      material: '70% Merino Wool, 30% Cashmere',
      gemstone: 'Free Size',
      weight: 'Slouchy Relaxed Fit',
      categorySlug: 'outerwear',
      collectionSlug: 'essentials',
      images: ['/images/products/outer-knit-cardigan-1.jpg', '/images/products/outer-knit-cardigan-2.jpg'],
      rating: 4.8,
      reviewCount: 8,
      stock: 20,
      isBestseller: false,
      isNewArrival: true,
      tags: ['cashmere', 'cardigan', 'knitwear', 'new'],
    },

    // --- BOTTOMS ---
    {
      slug: 'wide-leg-linen-trousers',
      name: 'High-Waist Pleated Linen Trousers',
      description: 'High-waisted with deep front pleats and fluid wide legs that pool elegantly over footwear. Pre-washed for that lived-in linen drape.',
      price: 3999,
      compareAt: 4999,
      metal: '100% Linen',
      material: 'Pure Washed Flax Linen',
      gemstone: '26, 28, 30, 32',
      weight: 'Wide-Leg High-Rise',
      categorySlug: 'bottoms',
      collectionSlug: 'linen-edit',
      images: ['/images/products/bottom-linen-trousers-1.jpg', '/images/products/bottom-linen-trousers-2.jpg'],
      rating: 4.9,
      reviewCount: 26,
      stock: 35,
      isBestseller: true,
      isNewArrival: false,
      tags: ['linen', 'trousers', 'wide-leg', 'bestseller'],
    },
    {
      slug: 'pleated-midi-skirt',
      name: 'Satin Sunburst Pleated Skirt',
      description: 'A kaleidoscope of accordion pleats in lustrous heavy satin. Features an elasticized inner waistband for effortless comfort and fluid grace.',
      price: 3499,
      compareAt: 4499,
      metal: 'Pure Silk',
      material: 'Heavy Luster Satin',
      gemstone: 'XS, S, M, L',
      weight: 'A-Line Flowing Fit',
      categorySlug: 'bottoms',
      collectionSlug: 'festive-edit',
      images: ['/images/products/bottom-pleated-skirt-1.jpg', '/images/products/bottom-pleated-skirt-2.jpg'],
      rating: 4.8,
      reviewCount: 16,
      stock: 20,
      isBestseller: false,
      isNewArrival: false,
      tags: ['skirt', 'pleated', 'satin', 'festive'],
    },
    {
      slug: 'high-rise-straight-jeans',
      name: 'High-Rise Straight Selvedge Jeans',
      description: 'Pure vintage character. Non-stretch 100% cotton denim cut with an ultra-flattering high rise, fitted hip, and classic straight leg opening.',
      price: 4499,
      compareAt: 5999,
      metal: 'Denim',
      material: '100% Cotton Selvedge Denim',
      gemstone: '26, 28, 30, 32, 34',
      weight: 'High-Rise Straight Leg',
      categorySlug: 'bottoms',
      collectionSlug: 'essentials',
      images: ['/images/products/bottom-straight-jeans-1.jpg', '/images/products/bottom-straight-jeans-2.jpg'],
      rating: 4.9,
      reviewCount: 35,
      stock: 40,
      isBestseller: true,
      isNewArrival: false,
      tags: ['denim', 'jeans', 'straight', 'bestseller'],
    },
    {
      slug: 'tailored-shorts',
      name: 'Pleated Bermuda Tailored Shorts',
      description: 'A sophisticated take on summer dressing. High-rise with sharp pressed creases, side pockets, and an elongated knee-skimming Bermuda cut.',
      price: 2499,
      compareAt: 3299,
      metal: 'Organic Cotton',
      material: 'Cotton Twill Suiting',
      gemstone: '26, 28, 30, 32',
      weight: 'Tailored Bermuda Fit',
      categorySlug: 'bottoms',
      collectionSlug: 'essentials',
      images: ['/images/products/bottom-tailored-shorts-1.jpg', '/images/products/bottom-tailored-shorts-2.jpg'],
      rating: 4.7,
      reviewCount: 7,
      stock: 25,
      isBestseller: false,
      isNewArrival: true,
      tags: ['shorts', 'tailored', 'summer', 'new'],
    },

    // --- ACCESSORIES ---
    {
      slug: 'woven-tote-bag',
      name: 'Hand-Braided Leather & Jute Tote',
      description: 'Handcrafted by coastal artisans using natural jute braided with vegetable-tanned calfskin leather handles. Ample room for daily essentials, laptop, and market finds.',
      price: 3499,
      compareAt: 4499,
      metal: '100% Linen',
      material: 'Natural Jute & Italian Leather',
      gemstone: 'One Size',
      weight: 'Spacious Daily Tote',
      categorySlug: 'accessories',
      collectionSlug: 'essentials',
      images: ['/images/products/acc-woven-tote-1.jpg', '/images/products/acc-woven-tote-2.jpg'],
      rating: 4.9,
      reviewCount: 28,
      stock: 20,
      isBestseller: true,
      isNewArrival: false,
      tags: ['bag', 'tote', 'handcrafted', 'bestseller'],
    },
    {
      slug: 'silk-printed-scarf',
      name: 'Botanical Print Mulberry Silk Scarf',
      description: 'Illustrated by hand with heritage Indian flora and hand-rolled at the edges. Woven in 100% mulberry silk twill with a luxurious matte sheen.',
      price: 1999,
      compareAt: 2799,
      metal: 'Pure Silk',
      material: '100% Mulberry Silk Twill',
      gemstone: '90cm x 90cm',
      weight: 'Square Scarf',
      categorySlug: 'accessories',
      collectionSlug: 'festive-edit',
      images: ['/images/products/acc-silk-scarf-1.jpg', '/images/products/acc-silk-scarf-2.jpg'],
      rating: 4.8,
      reviewCount: 19,
      stock: 30,
      isBestseller: false,
      isNewArrival: false,
      tags: ['silk', 'scarf', 'accessory', 'print'],
    },
    {
      slug: 'leather-belt',
      name: 'Classic Saddle Leather Belt',
      description: 'Crafted in supple vegetable-tanned saddle leather with an antique brushed solid brass buckle. Designed to age with a rich, unique patina.',
      price: 2499,
      compareAt: 3299,
      metal: 'Organic Cotton',
      material: 'Full-Grain Saddle Leather',
      gemstone: 'S (28-30), M (32-34), L (36-38)',
      weight: 'Adjustable 30mm Width',
      categorySlug: 'accessories',
      collectionSlug: 'essentials',
      images: ['/images/products/acc-leather-belt-1.jpg', '/images/products/acc-leather-belt-2.jpg'],
      rating: 4.7,
      reviewCount: 12,
      stock: 35,
      isBestseller: false,
      isNewArrival: true,
      tags: ['belt', 'leather', 'classic', 'new'],
    },
    {
      slug: 'bucket-hat',
      name: 'Structured Pure Linen Bucket Hat',
      description: 'Crafted from double-layered heavyweight washed linen with reinforced stitching on the brim. Blocks sunlight while maintaining a relaxed, effortlessly chic profile.',
      price: 1499,
      compareAt: 1999,
      metal: '100% Linen',
      material: '100% European Washed Linen',
      gemstone: 'Standard Fit (57-58cm)',
      weight: 'Structured Casual',
      categorySlug: 'accessories',
      collectionSlug: 'linen-edit',
      images: ['/images/products/acc-bucket-hat-1.jpg', '/images/products/acc-bucket-hat-2.jpg'],
      rating: 4.6,
      reviewCount: 8,
      stock: 25,
      isBestseller: false,
      isNewArrival: true,
      tags: ['hat', 'linen', 'summer', 'new'],
    },
  ]

  for (const p of productsData) {
    const { categorySlug, collectionSlug, images, tags, ...rest } = p
    const product = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categories[categorySlug],
        collectionId: collectionSlug ? collections[collectionSlug] : null,
        images: JSON.stringify(images),
        tags: JSON.stringify(tags),
      },
    })

    // Create 2 realistic reviews for each product
    await prisma.review.createMany({
      data: [
        {
          productId: product.id,
          author: 'Priya M.',
          rating: 5,
          title: 'Exquisite craftsmanship & perfect fit',
          body: 'The fabric quality is unreal. You can immediately feel the weight and drape of the natural fibers. This has quickly become a cornerstone of my wardrobe.',
          verified: true,
        },
        {
          productId: product.id,
          author: 'Devika S.',
          rating: 5,
          title: 'True quiet luxury',
          body: 'Shipped quickly in beautiful minimal packaging. The tailoring details like French seams and horn buttons make it feel bespoke. Will definitely buy again!',
          verified: true,
        },
      ],
    })
  }
  console.log(`Created ${productsData.length} fashion products with reviews.`)

  // 5. Create a Demo Order for Order Tracking testing
  const demoOrder = await prisma.order.create({
    data: {
      orderNumber: 'LUX-774921',
      email: 'ananya@example.com',
      phone: '+91 98765 43210',
      firstName: 'Ananya',
      lastName: 'Sharma',
      address: 'Flat 402, Sea View Apartments, Bandra West',
      apartment: 'Apt 402',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400050',
      country: 'India',
      subtotal: 9999,
      shipping: 0,
      total: 9999,
      paymentMethod: 'card',
      paymentStatus: 'paid',
      status: 'shipped',
      trackingId: 'TRK98321045IN',
      carrier: 'Blue Dart Express',
      notes: 'Please leave with reception if unavailable.',
    },
  })

  // Add order items
  const firstProduct = await prisma.product.findFirst({ where: { slug: 'structured-wool-blazer' } })
  if (firstProduct) {
    await prisma.orderItem.create({
      data: {
        orderId: demoOrder.id,
        productId: firstProduct.id,
        name: firstProduct.name,
        price: firstProduct.price,
        quantity: 1,
        image: '/images/products/outer-wool-blazer-1.jpg',
        metal: firstProduct.metal,
      },
    })
  }

  // Add tracking events
  await prisma.trackingEvent.createMany({
    data: [
      {
        orderId: demoOrder.id,
        status: 'placed',
        title: 'Order Placed',
        description: "We've received your order.",
        location: 'Mumbai Studio',
        timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
      {
        orderId: demoOrder.id,
        status: 'confirmed',
        title: 'Order Confirmed',
        description: 'Payment verified, preparing your garment.',
        location: 'Mumbai Studio',
        timestamp: new Date(Date.now() - 18 * 60 * 60 * 1000),
      },
      {
        orderId: demoOrder.id,
        status: 'packed',
        title: 'Packed with Care',
        description: 'Inspected, packaged in bespoke garment box & ready to ship.',
        location: 'Mumbai Studio',
        timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000),
      },
      {
        orderId: demoOrder.id,
        status: 'shipped',
        title: 'Shipped',
        description: 'On its way from our Mumbai studio.',
        location: 'Mumbai Hub',
        timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
      },
    ],
  })
  console.log('Created demo order LUX-774921 with tracking events.')

  console.log('✨ LUXORA database seeding finished successfully!')
}

main()
  .catch((e) => {
    console.error('Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
