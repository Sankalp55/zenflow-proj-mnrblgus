import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { FAQAccordion } from '@/components/blocks/FAQAccordion'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ClassesPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm font-semibold text-muted-foreground tracking-widest">
              CLASSES
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              CLASS SCHEDULE
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              A weekly rhythm that balances intensity, mobility, and recovery—so
              you can keep showing up. Our programming is designed to be mixed:
              build strength with Ignite, keep joints happy with Mobility Lab,
              and protect your progress with Restore.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                JOIN WITH A PASS
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                ASK ABOUT PRIVATE SESSIONS
              </a>
            </div>

            <div className="mt-8 rounded-xl border border-border bg-card p-5">
              <p className="text-sm font-semibold">How booking works</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Choose a plan, pick a class time, reserve your spot. If you’re
                new, arrive 10 minutes early and we’ll set you up with props and
                options. No “must be flexible” energy—just coaching.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Weekly Grid (Sample)</p>
              <p className="text-xs text-muted-foreground">
                Replace with real times
              </p>
            </div>
            <div className="mt-5">
              <BentoGrid className="mx-auto">
                <BentoGridItem
                  title="MON"
                  description="6:30a Ignite • 12p Foundation • 6p Mobility Lab"
                />
                <BentoGridItem
                  title="TUE"
                  description="7a Foundation • 5:30p Ignite • 7p Restore"
                />
                <BentoGridItem
                  title="WED"
                  description="6:30a Mobility • 12p Ignite • 6p Foundation"
                />
                <BentoGridItem
                  title="THU"
                  description="7a Ignite • 5:30p Mobility • 7p Restore"
                />
                <BentoGridItem
                  title="FRI"
                  description="6:30a Foundation • 12p Mobility • 5:30p Ignite"
                />
                <BentoGridItem
                  title="SAT/SUN"
                  description="Weekend intensives + longer Restore blocks (rotating)"
                />
              </BentoGrid>
            </div>

            <div className="mt-6">
              <a
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                CONTACT FOR PRIVATE SESSIONS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="class-types" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="FORMATS"
            headline="CHOOSE YOUR TRAINING FOCUS"
            subheadline="Each format has a purpose. Mix them for the best results—strength to build capacity, mobility to keep range, recovery to keep the engine running."
            features={[
              {
                title: 'IGNITE VINYASA',
                description:
                  'Sweat, tempo, and strength intervals. Expect breath-led intensity and smart progressions that build week-to-week.',
              },
              {
                title: 'FOUNDATION FLOW',
                description:
                  'Alignment, stability, and confidence. Great for beginners and returners—especially if you want clear cues and repeatable fundamentals.',
              },
              {
                title: 'MOBILITY LAB',
                description:
                  'Controlled end-range work, joint prep, and longer drills for lasting change. You’ll feel it in your gait, your lifts, and your posture.',
              },
              {
                title: 'RESTORE + RESET',
                description:
                  'Long holds, breathwork, and guided downregulation. Ideal after hard training weeks, travel, or high-stress seasons.',
              },
            ]}
          />
        </div>
      </section>

      <section id="what-to-expect" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            headline="WHAT TO EXPECT"
            subheadline="Walk in ready. Leave with a plan. Our goal is to make your first class feel straightforward—and your tenth class feel measurably better."
            features={[
              {
                title: 'ARRIVE 10 MIN EARLY',
                description:
                  'We’ll set you up with props, show you the room, and help you choose options that match your body today.',
              },
              {
                title: 'CLEAR OPTIONS, NOT CONFUSION',
                description:
                  'Every sequence includes regressions and progressions so you can train safely without guessing.',
              },
              {
                title: 'BOOKING IS SIMPLE',
                description:
                  'Pick a class, reserve your spot, and you’re in. If you need help choosing a plan, message us—we reply within 1 business day.',
              },
            ]}
          />
        </div>
      </section>

      <section id="faq" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <FAQAccordion
            headline="SCHEDULE FAQ"
            subheadline="Quick answers before your first class."
            items={[
              {
                question: 'Do I need to be flexible to start?',
                answer:
                  'No. Flexibility is a result, not a requirement. We coach options for every level and emphasize stability and breath pacing first.',
              },
              {
                question: 'What should I bring?',
                answer:
                  'Comfortable clothes and water. Mats and props are available at the studio. If you have your own mat, bring it—either way works.',
              },
              {
                question: 'Can I switch class types week to week?',
                answer:
                  'Yes—mixing formats is encouraged. Most members feel best with a blend of strength-focused sessions plus mobility and recovery.',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="READY TO LOCK IN YOUR WEEKLY RHYTHM?"
            description="Grab a Starter Pass and try multiple class types in one week—then choose the membership that matches your schedule."
            ctaLabel="STARTER PASS"
            ctaHref="/pricing#tiers"
          />
        </div>
      </section>
    </div>
  )
}
