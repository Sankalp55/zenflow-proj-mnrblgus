import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { StickyScroll as StickyScrollReveal } from '@/components/ui/effects/StickyScrollReveal'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ClassesPage() {
  return (
    <div>
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Classes</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              CLASS SCHEDULE, BUILT FOR CONSISTENCY
            </h1>
            <p className="mt-4 text-muted-foreground">
              Choose your lane—power, mobility, yin, or breathwork—and book in seconds. Emberflow classes are designed
              to be repeatable: patterns come back, skills build, and your body learns what “better” feels like.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
              >
                Book a Class
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 font-semibold text-foreground hover:shadow-sm transition-shadow"
              >
                View Memberships
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6">
              <div className="font-semibold">Good first picks</div>
              <p className="mt-2 text-sm text-muted-foreground">
                New to Emberflow? Start with <span className="text-foreground font-medium">Foundations</span>,{' '}
                <span className="text-foreground font-medium">Yin Reset</span>, or{' '}
                <span className="text-foreground font-medium">Mobility + Core</span>. You’ll get clear coaching and
                options without feeling rushed.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6">
            <div className="flex items-center justify-between gap-4">
              <div className="font-semibold">Sample Weekly Board</div>
              <a
                className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground"
                href="/contact"
              >
                Request exact times
              </a>
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { day: 'Mon', blocks: ['6:15a Power', '12:10p Mobility', '6:00p Power'] },
                { day: 'Tue', blocks: ['7:00a Mobility', '12:10p Breathwork', '6:15p Foundations'] },
                { day: 'Wed', blocks: ['6:15a Power', '12:10p Mobility', '6:00p Flow + Conditioning'] },
                { day: 'Thu', blocks: ['7:00a Mobility', '12:10p Breathwork', '6:30p Yin Reset'] },
                { day: 'Fri', blocks: ['6:30a Power (Express)', '5:45p Yin Reset'] },
                { day: 'Weekend', blocks: ['Sat Long Flow', 'Sun Recovery Stack'] },
              ].map((card) => (
                <div
                  key={card.day}
                  className="rounded-xl border border-border bg-muted p-4 hover:shadow-sm transition-shadow"
                >
                  <div className="font-semibold">{card.day}</div>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    {card.blocks.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              This is a visual example for planning. For the latest schedule, send your availability and we’ll confirm
              the best class options by email.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted" id="schedule">
        <div className="max-w-7xl mx-auto">
          <FeaturesGrid
            badge="Weekly Rhythm"
            headline="WEEKLY RHYTHM"
            subheadline="A repeatable schedule so you can plan and progress—without guessing what to do next."
            features={[
              { title: 'MON / WED', description: 'Power Vinyasa + Mobility + Core • AM + PM blocks' },
              { title: 'TUE / THU', description: 'Mobility + Core + Breathwork Lab • Lunch + evening' },
              { title: 'FRI', description: 'Power Vinyasa (express) + Yin Reset • 45 min + 60 min' },
              { title: 'SAT / SUN', description: 'Long-form flow + Recovery stacks • Weekend intensives' },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8" id="class-types">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">CHOOSE YOUR PRACTICE</h2>
            <p className="mt-3 text-muted-foreground">
              Every class has a purpose—and a progression path. If you tell us your training background and goal, we’ll
              point you to the best first class and a plan that matches your week.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid>
              <BentoGridItem
                title="POWER VINYASA"
                description="Strength + sweat with scalable intensity. Expect athletic pacing, strong cueing, and a clean recovery finish."
              />
              <BentoGridItem
                title="MOBILITY + CORE"
                description="Control + range for resilient movement. Great for lifters, runners, desk bodies, and anyone who wants mobility that sticks."
              />
              <BentoGridItem
                title="YIN RESET"
                description="Long holds to restore tissue and calm. A downshift for sleep, stress, and recovery between training days."
              />
              <BentoGridItem
                title="BREATHWORK LAB"
                description="Protocols for focus, calm, and recovery. Learn tools you can use immediately—before work, after workouts, or when stress spikes."
              />
              <BentoGridItem
                title="FOUNDATIONS"
                description="Beginner-friendly alignment and flow basics. Ideal if you want confident form before intensity."
              />
              <BentoGridItem
                title="FLOW + CONDITIONING"
                description="Intervals blended into vinyasa patterns. A training-style class that’s still mindful, controlled, and coached."
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted" id="what-to-expect">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">WHAT TO EXPECT</h2>
            <p className="mt-3 text-muted-foreground">
              Fast check-in. Clear coaching. No awkwardness. Here’s how a typical Emberflow class flows—from the first
              breath to the final downshift.
            </p>
          </div>

          <div className="mt-10">
            <StickyScrollReveal
              content={[
                {
                  title: 'ARRIVE 10 MIN EARLY',
                  description:
                    'Grab your spot, set up, and settle your breath. If it’s your first time, tell the coach what you’re working on (and any injuries).',
                },
                {
                  title: 'SMART WARM-UP',
                  description:
                    'Joint prep and core activation before intensity. We build heat progressively so your body feels ready—not rushed.',
                },
                {
                  title: 'PROGRESSIONS + OPTIONS',
                  description:
                    'Every sequence includes regressions and upgrades. You’ll never be stuck choosing between “too easy” and “too much.”',
                },
                {
                  title: 'RECOVERY FINISH',
                  description:
                    'Downshift with breath and a short guided reset. You leave energized, but also calmer—like your nervous system got the memo.',
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8" id="faq">
        <div className="max-w-7xl mx-auto">
          <FAQAccordion
            headline="QUICK FAQ"
            subheadline="Everything you need to start strong."
            items={[
              {
                question: 'Do I need to be flexible?',
                answer:
                  'No. Mobility improves with consistent practice. We coach options for every body and focus on control first—so range builds safely and actually lasts.',
              },
              {
                question: 'What should I bring?',
                answer:
                  'Comfortable clothes and water. Mats are available; bring your own if you prefer. If you sweat a lot in Power Vinyasa, a small towel helps.',
              },
              {
                question: 'Is this beginner-friendly?',
                answer:
                  'Yes—start with Foundations, Yin Reset, or Mobility + Core. Coaches will guide you with cues and options so you feel confident from day one.',
              },
              {
                question: 'How do I book?',
                answer:
                  'Use the contact form to request your first class. Share your availability and goal, and we’ll confirm the best option by email within 24 hours.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="BOOK YOUR FIRST CLASS—WITHOUT OVERTHINKING IT"
        description="Tell us your goal and availability. We’ll match you to a class that fits your body and your week."
        ctaLabel="Book a Class"
        ctaHref="/contact"
      />
    </div>
  )
}
