export const siteConfig = {
  name: "LUXORA",
  tagline: "Curated Fashion · Handcrafted Style",
  description:
    "Curated silhouettes, sustainable fabrics & handcrafted luxury fashion — designed in Mumbai.",
  url: "https://luxora.in",
  email: "hello@luxora.in",
  phone: "+91 98765 43210",
  address: "LUXORA Studio, Bandra West, Mumbai 400050, India",
  social: {
    instagram: "https://instagram.com/luxora.in",
    facebook: "https://facebook.com/luxora.in",
    pinterest: "https://pinterest.com/luxora.in",
    youtube: "https://youtube.com/@luxora",
  },
  shipping: {
    freeOver: 2999,
    flatRate: 99,
    codAvailable: true,
  },
  currency: "INR",
  currencySymbol: "₹",
} as const

export const formatPrice = (amount: number, currency = siteConfig.currency) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/#shop" },
  { label: "Dresses", href: "/#shop?category=dresses" },
  { label: "Tops", href: "/#shop?category=tops" },
  { label: "Outerwear", href: "/#shop?category=outerwear" },
  { label: "Bottoms", href: "/#shop?category=bottoms" },
  { label: "Accessories", href: "/#shop?category=accessories" },
  { label: "Track Order", href: "/#track" },
] as const
