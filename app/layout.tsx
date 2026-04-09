import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarMinimal } from '@/components/blocks/NavbarMinimal'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emberflow Yoga Studio — Power, Mobility, Yin & Breathwork',
  description:
    'Emberflow is a bold, high-energy yoga studio offering Power Vinyasa, Mobility + Core, Yin Reset, and Breathwork. View classes, membership pricing, and book your first session.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <NavbarMinimal
          logo="EMBERFLOW"
          navItems={[
            { label: 'Home', href: '/' },
            { label: 'Classes', href: '/classes' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'About', href: '/about' },
            { label: 'Contact', href: '/contact' },
          ]}
          ctaLabel="Book a Free Intro"
          ctaHref="/contact"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="Emberflow Yoga Studio"
          description="Move with fire. Breathe with focus. Emberflow blends strength-driven vinyasa, mobility training, yin recovery, and breathwork so your practice actually supports real life."
          columns={[
            {
              title: 'Classes',
              links: [
                { label: 'Schedule & Class Types', href: '/classes' },
                { label: 'Power Vinyasa', href: '/classes#class-types' },
                { label: 'Mobility + Core', href: '/classes#class-types' },
                { label: 'Yin Reset', href: '/classes#class-types' },
                { label: 'Breathwork Lab', href: '/classes#class-types' },
              ],
            },
            {
              title: 'Membership',
              links: [
                { label: 'Pricing', href: '/pricing' },
                { label: 'Drop-In', href: '/pricing#membership-tiers' },
                { label: 'Foundation', href: '/pricing#membership-tiers' },
                { label: 'Unlimited', href: '/pricing#membership-tiers' },
              ],
            },
            {
              title: 'Studio',
              links: [
                { label: 'About Emberflow', href: '/about' },
                { label: 'Member Stories', href: '/about#stories' },
                { label: 'Contact', href: '/contact' },
              ],
            },
            {
              title: 'Get Started',
              links: [
                { label: 'Book a Free Intro', href: '/contact' },
                { label: 'Ask a Coach', href: '/contact' },
                { label: 'What to Expect', href: '/classes#what-to-expect' },
              ],
            },
          ]}
          copyright="© 2026 Emberflow Yoga Studio. All rights reserved."
        />
      </body>
    </html>
  )
}
