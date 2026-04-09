import { HeroBeams } from '@/components/blocks/HeroBeams'
import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { PricingTable } from '@/components/blocks/PricingTable'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'

export default function HomePage() {
  return (
    <div>
      <HeroBeams
        headline="EMBODIED. ELECTRIC."
        highlightText="YOUR PRACTICE."
        subheadline="A high-contrast yoga studio built for real life: strength, mobility, breathwork, and recovery—under one roof. Clear coaching, smart progressions, and a vibe that keeps you consistent."
        primaryCta={{ label: 'Book a Free Intro', href: '/contact' }}
        secondaryCta={{ label: 'View Class Schedule', href: '/classes' }}
      />

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Classes"
            headline="TODAY’S FLOW, PLANNED TO THE MINUTE"
            subheadline="Pick your intensity. Stack your week. Show up. Each class is coached with options—so you can scale up, scale down, and still leave feeling like you trained."
            features={[
              {
                title: 'POWER VINYASA',
                description:
                  'Heat-building flow with strength blocks and athletic pacing. Expect push/pull patterns, core integration, and a finish that feels like a clean exhale. 45–60 min • Intermediate',
              },
              {
                title: 'MOBILITY + CORE',
                description:
                  'Joint prep, deep core, and controlled range—great for lifters and runners. We build resilience through repeatable drills you can actually feel in daily movement. 45 min • All levels',
              },
              {
                title: 'YIN RESET',
                description:
                  'Long holds to decompress hips, spine, and shoulders. A nervous system downshift that supports recovery, sleep, and training longevity. 60 min • Beginner-friendly',
              },
              {
                title: 'BREATHWORK LAB',
                description:
                  'Guided breath protocols for focus, calm, and recovery. Learn tools you can use before meetings, after workouts, or when stress spikes. 30 min • All levels',
              },
            ]}
          />

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <a
              href="/classes"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
            >
              See Full Schedule
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 font-semibold text-foreground hover:shadow-sm transition-shadow"
            >
              Ask a Coach
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TeamGrid
            headline="COACHES WHO COACH"
            subheadline="Clear cues, smart progressions, and a room that feels bold without feeling intimidating. We’ll meet you where you are—and keep you moving forward."
            members={[
              {
                name: 'MAYA K.',
                role: 'Power Vinyasa • Strength Integration',
                bio: 'Athletic sequencing with precision alignment and intensity you can scale. Maya’s classes blend strength blocks with breath pacing so you leave feeling powerful—not wrecked.',
              },
              {
                name: 'JON R.',
                role: 'Mobility • Core • Recovery',
                bio: 'Mobility-first practice for bodies that train hard and sit a lot. Jon focuses on hip and spine control, anti-rotation core work, and repeatable drills that stick.',
              },
              {
                name: 'LENA S.',
                role: 'Yin • Breathwork',
                bio: 'Downshift your system with calm structure and deep tissue release. Lena teaches long-hold yin and practical breath protocols for recovery, sleep, and steadier focus.',
              },
            ]}
          />

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
            >
              Meet the Studio
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="MEMBERSHIPS THAT MOVE WITH YOU"
            subheadline="No fluff. Pick a tier, book your mat, and build consistency. All plans include access to Mobility + Breathwork sessions."
            tiers={[
              {
                name: 'DROP-IN',
                price: '$22',
                period: 'per class',
                features: ['Any single class', 'Mat rental included', 'Cancel anytime'],
                ctaLabel: 'Get a Drop-In',
                ctaHref: '/pricing',
              },
              {
                name: 'FOUNDATION',
                price: '$89',
                period: 'per month',
                features: ['8 classes / month', 'Priority booking', '1 guest pass'],
                ctaLabel: 'Choose Foundation',
                ctaHref: '/pricing',
                highlighted: true,
              },
              {
                name: 'UNLIMITED',
                price: '$139',
                period: 'per month',
                features: ['Unlimited classes', 'Workshops -10%', 'Bring-a-friend 2x/mo'],
                ctaLabel: 'Go Unlimited',
                ctaHref: '/pricing',
              },
            ]}
          />
          <p className="mt-6 text-sm text-muted-foreground">
            Note: Your plan should fit your life. If you’re unsure, tell us your schedule and goals—our coaches will
            recommend a starting point you can actually repeat.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">REAL PROGRESS. REAL PEOPLE.</h2>
            <p className="mt-3 text-muted-foreground">
              Strength, posture, energy, and calm—tracked over weeks, not days. These are the kinds of wins members
              report when they show up consistently and train with intent.
            </p>
          </div>

          <div className="mt-10">
            <ParallaxScroll
              images={[
                '/images/emberflow/progress-1.jpg',
                '/images/emberflow/progress-2.jpg',
                '/images/emberflow/progress-3.jpg',
                '/images/emberflow/progress-4.jpg',
                '/images/emberflow/progress-5.jpg',
                '/images/emberflow/progress-6.jpg',
              ]}
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: '4-Week Mobility Shift', caption: 'Hips + ankles opened; deeper squat comfort.' },
              { title: '6-Week Core Control', caption: 'Less back tension; better trunk stability.' },
              { title: '30-Day Consistency', caption: 'Sleep improved; stress baseline dropped.' },
              { title: 'Shoulder Range Return', caption: 'Pain-free overhead reach with smart progressions.' },
              { title: 'Breathwork Focus', caption: 'Sharper focus and calmer workouts.' },
              { title: 'Yin Recovery Routine', caption: 'Faster recovery between training days.' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="font-semibold">{item.title}</div>
                <p className="mt-2 text-sm text-muted-foreground">{item.caption}</p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <a
              href="/about#stories"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 font-semibold text-foreground hover:shadow-sm transition-shadow"
            >
              See Member Stories
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="THE STUDIO THAT STICKS"
            subheadline="High energy, zero intimidation. Members come for the vibe—and stay for the coaching and progress."
            testimonials={[
              {
                quote:
                  'The cues are insanely clear. I got stronger and my shoulders finally feel good again.',
                name: 'Ari P.',
                role: 'Unlimited Member',
                company: 'Emberflow',
              },
              {
                quote:
                  'Mobility + Core fixed what years of stretching never did—structure and progression.',
                name: 'Sam D.',
                role: 'Foundation Member',
                company: 'Emberflow',
              },
              {
                quote:
                  'The vibe is bold but welcoming. Breathwork nights are my weekly reset button.',
                name: 'Nina L.',
                role: 'Drop-In Regular',
                company: 'Emberflow',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="READY TO MOVE WITH FIRE?"
        description="Book a free intro and we’ll match you to the right first class based on your goals, training background, and schedule."
        ctaLabel="Book a Free Intro"
        ctaHref="/contact"
      />
    </div>
  )
}
