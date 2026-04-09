import { HeroSpotlight } from '@/components/blocks/HeroSpotlight'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { InfiniteMovingCards } from '@/components/ui/effects/InfiniteMovingCards'

export default function HomePage() {
  return (
    <div>
      <HeroSpotlight
        headline="EMBER YOGA. POWERED BY BREATH."
        subheadline="High-contrast, high-focus yoga classes that blend strength, mobility, and stillness—built for real schedules and real bodies. Train with intent, recover on purpose, and leave with momentum."
        primaryCta={{ label: 'VIEW CLASS SCHEDULE', href: '/classes' }}
        secondaryCta={{ label: 'START A 7-DAY PASS', href: '/pricing' }}
      />

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="CLASSES"
            headline="TODAY’S FLOW, BUILT LIKE A TRAINING PLAN"
            subheadline="Choose a class by goal—strength, recovery, or deep mobility. Each block progresses week-to-week so your practice compounds instead of resetting every session."
            features={[
              {
                title: 'IGNITE VINYASA',
                description:
                  'Heat + pace. Athletic vinyasa with core intervals, strong transitions, and breath-led intensity. Expect a clear warm-up, a peak sequence, then a downshift.',
              },
              {
                title: 'FOUNDATION FLOW',
                description:
                  'Form-first alignment and transitions. Perfect for beginners, returners, and anyone rebuilding consistency. You’ll learn the “why” behind the shapes.',
              },
              {
                title: 'MOBILITY LAB',
                description:
                  'Hips, hamstrings, shoulders. Loaded stretches and controlled end-range work—built to translate to running, lifting, and long days at a desk.',
              },
              {
                title: 'RESTORE + RESET',
                description:
                  'Downshift the nervous system. Long holds, breathwork, and guided relaxation so you recover better and sleep deeper—without needing a “perfect” week.',
              },
            ]}
          />

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="/classes"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              SEE FULL SCHEDULE
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              ASK ABOUT PRIVATE SESSIONS
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TeamGrid
            headline="COACHES WHO CUE LIKE ATHLETES"
            subheadline="Clear instruction. Zero fluff. Big energy—without the ego. We coach options for real bodies and real constraints, and we care more about repeatable progress than perfect poses."
            members={[
              {
                name: 'MAYA RIVERA',
                role: 'Strength Vinyasa Coach',
                bio: 'Power sequencing, clean transitions, and smart progressions for real-world strength. Known for precise cues and a calm-but-challenging pace.',
              },
              {
                name: 'JON PARK',
                role: 'Mobility Specialist',
                bio: 'End-range control and joint prep for runners, lifters, and desk bodies. You’ll leave with drills that actually fit into your week.',
              },
              {
                name: 'ELENA KIM',
                role: 'Breath + Restore Guide',
                bio: 'Nervous system resets, longer holds, and practical breathwork you’ll use on stressful days—and before sleep.',
              },
            ]}
          />

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              MEET THE STUDIO
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="MEMBERSHIPS THAT MOVE WITH YOU"
            subheadline="Pick a tier, book in seconds, and build momentum. Cancel anytime. (Checkout links are placeholders—connect your payment provider when ready.)"
            tiers={[
              {
                name: 'STARTER PASS',
                price: '$29',
                period: '7 days',
                features: [
                  'Unlimited classes for 7 days',
                  'One free mat rental',
                  'New member onboarding',
                ],
                ctaLabel: 'GET THE PASS',
                ctaHref: '/pricing',
                highlighted: true,
              },
              {
                name: 'FLOW',
                price: '$99',
                period: 'month',
                features: [
                  '8 classes / month',
                  'Priority booking',
                  'Member-only workshops pricing',
                ],
                ctaLabel: 'CHOOSE FLOW',
                ctaHref: '/pricing',
              },
              {
                name: 'UNLIMITED',
                price: '$149',
                period: 'month',
                features: [
                  'Unlimited classes',
                  'Guest pass (1 / month)',
                  'Unlimited mat rentals',
                ],
                ctaLabel: 'GO UNLIMITED',
                ctaHref: '/pricing',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              REAL PEOPLE. REAL RANGE.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Strength, posture, mobility, and calm—tracked over weeks, not days.
              These visuals are placeholders; swap in your own member photos when
              you’re ready.
            </p>
          </div>

          <div className="mt-10">
            <ParallaxScroll
              images={[
                '/images/transformation-hips.jpg',
                '/images/transformation-posture.jpg',
                '/images/transformation-restore.jpg',
                '/images/transformation-hips.jpg',
                '/images/transformation-posture.jpg',
                '/images/transformation-restore.jpg',
              ]}
            />
          </div>

          <div className="mt-10">
            <a
              href="/about#community"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            >
              SEE MEMBER STORIES
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="THE ENERGY IS DIFFERENT HERE"
            subheadline="Fast booking. Clear coaching. You leave feeling changed—because you trained with intent and recovered with purpose."
            testimonials={[
              {
                quote:
                  'I came for flexibility and stayed for the strength. The cues are so precise I finally feel stable in every pose.',
                name: 'Renee S.',
                role: 'Member • 3 months',
              },
              {
                quote:
                  'Mobility Lab fixed my shoulders more than anything I’ve tried. It’s challenging in the best way.',
                name: 'Dylan T.',
                role: 'Member • 6 months',
              },
              {
                quote:
                  'Restore + Reset is my weekly nervous system reboot. I sleep better the same night—every time.',
                name: 'Priya K.',
                role: 'Member • 1 year',
              },
            ]}
          />

          <div className="mt-12">
            <InfiniteMovingCards
              items={[
                {
                  quote:
                    'The pacing is perfect—hard work, then a real downshift. I leave feeling trained, not trashed.',
                  name: 'Casey W.',
                  title: 'Ignite regular',
                },
                {
                  quote:
                    'Foundation Flow gave me confidence. I finally understand transitions instead of guessing.',
                  name: 'Morgan L.',
                  title: 'New to yoga',
                },
                {
                  quote:
                    'Mobility Lab changed my squat depth and my posture at my desk. That’s the win.',
                  name: 'Tariq N.',
                  title: 'Lifter',
                },
                {
                  quote:
                    'Restore is the first class that made “relaxation” feel practical. I use the breath cues daily.',
                  name: 'Jamie R.',
                  title: 'High-stress job',
                },
              ]}
              direction="left"
              speed="normal"
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="READY TO FEEL STRONGER IN YOUR OWN BODY?"
            description="Start with the 7-day pass or book your first class today. We’ll help you pick the right format for your goals and your schedule."
            ctaLabel="START 7-DAY PASS"
            ctaHref="/pricing"
          />
          <div className="mt-4 text-center">
            <a
              href="/classes"
              className="text-sm font-semibold text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              BOOK A CLASS
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
