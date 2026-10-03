"use client"

import { motion } from "framer-motion"
import {
  Sparkles,
  Heart,
  Gem,
  Leaf,
  ShieldCheck,
  Award,
  ArrowRight,
  Quote,
} from "lucide-react"
import { useRouter } from "@/lib/router"
import { siteConfig } from "@/lib/site"
import { Button } from "@/components/ui/button"

const stats = [
  { value: "10,000+", label: "Happy Customers" },
  { value: "100%", label: "Sustainable Fabrics" },
  { value: "Studio", label: "Quality Guarantee" },
  { value: "4.9★", label: "Average Rating" },
]

const values = [
  {
    icon: Gem,
    title: "Sustainable Fabrics",
    body: "Every roll of fabric is ethically sourced and certified organic linen, pure silk, or recycled cotton. We partner only with responsible mills.",
  },
  {
    icon: Award,
    title: "Studio Crafted",
    body: "Each piece is hand-cut and tailored by master artisans in our Mumbai studio — never mass-produced, always crafted with precision.",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious Dyeing",
    body: "We use non-toxic, eco-friendly dyes and low-impact water washing processes to keep our footprint light.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guarantee",
    body: "Every LUXORA garment comes with guaranteed durable stitching, premium finishes, and hassle-free returns.",
  },
]

const milestones = [
  { year: "2019", text: "LUXORA founded in a small Bandra design studio with 3 master tailors." },
  { year: "2021", text: "Launched our signature Pure Linen Edit collection." },
  { year: "2023", text: "Opened our flagship studio in Mumbai. 10,000+ orders shipped nationwide." },
  { year: "2025", text: "Transitioned to 100% certified sustainable fabrics and zero-waste pattern drafting." },
]

export function AboutView() {
  const { navigate } = useRouter()
  return (
    <div className="container-luxe py-12 lg:py-20">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
          Our Story
        </p>
        <h1 className="font-serif text-4xl lg:text-6xl text-ink leading-tight text-balance">
          Fashion made to be{" "}
          <span className="text-gold-gradient italic">worn, styled & loved</span>{" "}
          for a lifetime.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          LUXORA was born in 2019 from a simple belief — that luxury fashion
          shouldn't be reserved for rare occasions. It should be lived in. Each silhouette
          is handcrafted in our Mumbai studio to celebrate everyday moments and
          memorable occasions alike.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Button
            onClick={() => navigate({ name: "shop" })}
            className="bg-ink text-cream hover:bg-ink/90 rounded-full h-12 px-8"
          >
            Explore Collection
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={() => navigate({ name: "contact" })}
            variant="outline"
            className="rounded-full h-12 px-8 border-ink text-ink hover:bg-ink hover:text-cream"
          >
            Visit Our Studio
          </Button>
        </div>
      </motion.section>

      {/* Stats */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card border border-border rounded-2xl p-6 text-center shadow-luxe"
          >
            <p className="font-serif text-3xl lg:text-4xl text-gold-gradient">
              {s.value}
            </p>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </p>
          </motion.div>
        ))}
      </motion.section>

      {/* Image + Story */}
      <section className="mt-20 lg:mt-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxe"
        >
          <img
            src="/images/lifestyle/atelier.jpg"
            alt="LUXORA studio craftsman tailoring a silhouette"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 text-cream">
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent">
              Mumbai Studio
            </p>
            <p className="font-serif text-xl mt-1">
              Where every silhouette begins
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-4">
            The Craft
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink leading-tight">
            From our hands to yours.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Every LUXORA piece begins as a sketch on paper, followed by precise
              pattern draping and careful cutting of pure natural fabrics.
              Our master tailors — some with 25+ years of bespoke craft — stitch
              and finish every seam by hand with meticulous care.
            </p>
            <p>
              We don't do fast fashion. We make timeless wardrobe investments.
              Silhouettes designed to be worn today, styled effortlessly tomorrow,
              and cherished for seasons to come.
            </p>
            <p>
              That's why every piece ships with our quality guarantee —
              crafted with premium French seams, reinforced stitching, and made
              to feel bespoke from the moment you slip it on.
            </p>
          </div>
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-ink">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="font-serif italic">
              "Wear it. Style it. Layer it. Live in it."
            </span>
          </div>
        </motion.div>
      </section>

      {/* Values grid */}
      <section className="mt-20 lg:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3">
            What We Stand For
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink">
            Values woven into every garment
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-luxe transition-shadow"
            >
              <div className="h-12 w-12 rounded-full bg-champagne flex items-center justify-center mb-4">
                <v.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-serif text-lg text-ink">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {v.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-20 lg:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent mb-3">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-ink">
            From a Bandra studio to your wardrobe
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-border sm:-translate-x-1/2" />
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative pl-12 sm:pl-0 sm:w-1/2 sm:px-8 mb-8 ${
                i % 2 === 0 ? "sm:ml-0 sm:text-right" : "sm:ml-auto"
              }`}
            >
              <div
                className={`absolute top-1 h-3 w-3 rounded-full bg-gold-gradient ring-4 ring-background left-[10px] sm:left-auto ${
                  i % 2 === 0
                    ? "sm:-right-[7px] sm:left-auto"
                    : "sm:-left-[7px]"
                }`}
              />
              <div className="bg-card border border-border rounded-xl p-5 shadow-luxe">
                <p className="font-serif text-2xl text-gold-gradient">
                  {m.year}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonial */}
      <section className="mt-20 lg:mt-28 max-w-4xl mx-auto">
        <div className="bg-ink text-cream rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-luxe-radial opacity-30" />
          <div className="relative">
            <Quote className="h-10 w-10 text-accent mx-auto mb-6" />
            <p className="font-serif text-2xl lg:text-3xl leading-snug text-balance">
              "I've bought three pieces from LUXORA now — a linen dress for my
              vacation, a tailored blazer for meetings, and a silk blouse for evening
              dinners. Each one feels bespoke, like it was tailored just for me.
              The fabric quality and fit are unreal for the price."
            </p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center text-ink font-serif">
                A
              </div>
              <div className="text-left">
                <p className="font-medium">Ananya R.</p>
                <p className="text-xs text-cream/60">Mumbai · Verified Buyer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20 lg:mt-28 text-center">
        <Heart className="h-8 w-8 text-accent mx-auto mb-4" />
        <h2 className="font-serif text-3xl lg:text-4xl text-ink">
          Find a piece worth styling
        </h2>
        <p className="mt-3 text-muted-foreground max-w-md mx-auto">
          Explore our latest collections, handcrafted for everyday luxury.
        </p>
        <Button
          onClick={() => navigate({ name: "shop" })}
          className="mt-6 bg-gold-gradient text-ink hover:opacity-90 rounded-full h-12 px-8"
        >
          Shop the Collection
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </section>
    </div>
  )
}
