import { PricingTable } from '@/components/blocks/PricingTable'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'

export default function PricingPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-muted-foreground tracking-widest">
            PRICING
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            PRICING THAT SUPPORTS CONSISTENCY
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Start small or go all-in. Every plan includes coach guidance and
            simple booking. If you’re not sure where to begin, the Starter Pass
            is the fastest way to feel the studio—then you can choose Flow or
            Unlimited based on your weekly rhythm.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="#tiers"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              GET STARTER PASS
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              ASK A QUESTION
            </a>
          </div>
        </div>
      </section>

      <section id="tiers" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="MEMBERSHIP TIERS"
            subheadline="Compare plans at a glance. Designed for consistency—pause or cancel anytime."
            tiers={[
              {
                name: 'STARTER PASS',
                price: '$29',
                period: '7 days',
                features: [
                  'Unlimited classes',
                  'One free mat rental',
                  'New member onboarding',
                ],
                ctaLabel: 'START NOW',
                ctaHref: '/contact?intent=starter',
                highlighted: true,
              },
              {
                name: 'FLOW',
                price: '$99',
                period: 'month',
                features: [
                  '8 classes / month',
                  'Priority booking',
                  'Workshop member pricing',
                ],
                ctaLabel: 'CHOOSE FLOW',
                ctaHref: '/contact?intent=flow',
              },
              {
                name: 'UNLIMITED',
                price: '$149',
                period: 'month',
                features: [
                  'Unlimited classes',
                  'Guest pass monthly',
                  'Unlimited mat rentals',
                ],
                ctaLabel: 'GO UNLIMITED',
                ctaHref: '/contact?intent=unlimited',
              },
            ]}
          />

          <p className="mt-6 text-sm text-muted-foreground">
            Checkout links are placeholders (client-side only). Connect Stripe,
            Mindbody, Momence, or your preferred provider when you’re ready.
          </p>
        </div>
      </section>

      <section id="drop-in" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              DROP-IN + PACKS
            </h2>
            <p className="mt-3 text-muted-foreground">
              Flexible options for travel weeks and busy seasons. Packs are
              great if you want structure without a monthly renewal.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid className="mx-auto">
              <BentoGridItem title="DROP-IN" description="$22 per class" />
              <BentoGridItem
                title="5-CLASS PACK"
                description="$95 • Expires in 3 months"
              />
              <BentoGridItem
                title="10-CLASS PACK"
                description="$170 • Expires in 6 months"
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="NO LONG CONTRACTS. NO GUILT."
            description="Pause or cancel anytime. We’d rather earn your consistency than lock it in. If you’re deciding between Flow and Unlimited, tell us your weekly availability and we’ll recommend the best fit."
            ctaLabel="TALK TO US"
            ctaHref="/contact"
          />
        </div>
      </section>

      <section id="faq" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="PRICING FAQ"
            subheadline="Transparent answers—no fine print energy."
            items={[
              {
                question: 'Do memberships auto-renew?',
                answer:
                  'Yes. Monthly memberships renew automatically until canceled. We keep it simple—no long contracts.',
              },
              {
                question: 'Can I freeze my membership?',
                answer:
                  'Yes. Contact us and we’ll pause it for travel, injury recovery, or busy seasons. We’ll help you restart smoothly.',
              },
              {
                question: 'Are workshops included?',
                answer:
                  'Workshops are separate, with discounted pricing for members. They’re designed as deep dives (mobility, inversions, breathwork) rather than add-ons.',
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}
