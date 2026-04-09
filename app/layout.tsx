import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavbarSticky } from '@/components/blocks/NavbarSticky'
import { FooterMultiColumn } from '@/components/blocks/FooterMultiColumn'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ember Yoga Studio — Strength, Mobility, Breath',
  description:
    'Ember Yoga Studio blends athletic vinyasa, mobility training, and restorative breathwork. View classes, explore memberships, and start with a 7-day pass.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground`}>
        <NavbarSticky
          logo="EMBER YOGA"
          navItems={[
            { label: 'HOME', href: '/' },
            { label: 'CLASSES', href: '/classes' },
            { label: 'PRICING', href: '/pricing' },
            { label: 'ABOUT', href: '/about' },
            { label: 'CONTACT', href: '/contact' },
          ]}
          ctaLabel="GET STARTED"
          ctaHref="/pricing"
        />
        <main>{children}</main>
        <FooterMultiColumn
          brand="EMBER YOGA"
          description="Breathe louder. Move stronger. Ember is a high-focus yoga studio built like a training room—strength-forward flows, mobility work that sticks, and recovery sessions that downshift your nervous system."
          columns={[
            {
              title: 'Classes',
              links: [
                { label: 'Class Schedule', href: '/classes' },
                { label: 'Class Types', href: '/classes#class-types' },
                { label: 'What to Expect', href: '/classes#what-to-expect' },
                { label: 'Schedule FAQ', href: '/classes#faq' },
              ],
            },
            {
              title: 'Pricing',
              links: [
                { label: 'Starter Pass', href: '/pricing#tiers' },
                { label: 'Membership Tiers', href: '/pricing#tiers' },
                { label: 'Drop-in + Packs', href: '/pricing#drop-in' },
                { label: 'Pricing FAQ', href: '/pricing#faq' },
              ],
            },
            {
              title: 'Studio',
              links: [
                { label: 'Our Method', href: '/about#mission' },
                { label: 'Team', href: '/about#team' },
                { label: 'Community Wins', href: '/about#community' },
              ],
            },
            {
              title: 'Contact',
              links: [
                { label: 'Send a Message', href: '/contact#form' },
                { label: 'Studio Details', href: '/contact#details' },
                { label: 'Private Sessions', href: '/contact?intent=private' },
              ],
            },
          ]}
          copyright="© 2026 EMBER YOGA. All rights reserved."
        />
      </body>
    </html>
  )
}
