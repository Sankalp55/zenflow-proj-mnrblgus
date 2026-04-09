import { PricingTable } from '@/components/blocks/PricingTable'
import { FeaturesCards3D } from '@/components/blocks/FeaturesCards3D'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function PricingPage() {
  return (
    <div>
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Pricing</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">PRICING THAT FEELS SIMPLE</h1>
            <p className="mt-4 text-muted-foreground">
              Choose a plan that matches your week. Upgrade anytime. Emberflow memberships are built around consistency:
              repeatable class blocks, coaching-first cues, and recovery that’s part of the system—not an afterthought.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
              >
                Start with Foundation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 font-semibold text-foreground hover:shadow-sm transition-shadow"
              >
                Ask a Question
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6">
              <div className="font-semibold">What most members choose</div>
              <p className="mt-2 text-sm text-muted-foreground">
                If you want a steady rhythm without living at the studio,{' '}
                <span className="text-foreground font-medium">Foundation</span> is the sweet spot: enough frequency to
                feel progress, plus priority booking and a guest pass to bring a friend.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted p-6">
            <div className="font-semibold">Plan guidance (quick)</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground font-medium">1x/week:</span> Foundation works if you’ll use ~6–8
                classes/month.
              </li>
              <li>
                <span className="text-foreground font-medium">2–4x/week:</span> Unlimited is usually the best value and
                supports recovery sessions.
              </li>
              <li>
                <span className="text-foreground font-medium">Traveling / occasional:</span> Drop-In keeps it flexible.
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Not sure? Send your schedule and goal—we’ll recommend a plan and first class that you can actually repeat.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted" id="membership-tiers">
        <div className="max-w-7xl mx-auto">
          <PricingTable
            headline="MEMBERSHIP TIERS"
            subheadline="Tight tiers, bold value."
            tiers={[
              {
                name: 'DROP-IN',
                price: '$22',
                period: 'per class',
                features: ['Any class type', 'Mat rental included', 'Same-day booking'],
                ctaLabel: 'Choose Drop-In',
                ctaHref: '/contact',
              },
              {
                name: 'FOUNDATION',
                price: '$89',
                period: 'per month',
                features: ['8 classes / month', 'Priority booking window', '1 guest pass / month'],
                ctaLabel: 'Choose Foundation',
                ctaHref: '/contact',
                highlighted: true,
              },
              {
                name: 'UNLIMITED',
                price: '$139',
                period: 'per month',
                features: ['Unlimited classes', 'Workshops -10%', '2 guest passes / month'],
                ctaLabel: 'Choose Unlimited',
                ctaHref: '/contact',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8" id="comparison">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">COMPARE PLANS</h2>
            <p className="mt-3 text-muted-foreground">See what’s included at a glance.</p>
          </div>

          <div className="mt-10 overflow-x-auto rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm">
            <table className="min-w-[720px] w-full text-sm">
              <thead className="bg-muted">
                <tr>
                  <th className="text-left p-4 font-semibold">Feature</th>
                  <th className="text-left p-4 font-semibold">DROP-IN</th>
                  <th className="text-left p-4 font-semibold">FOUNDATION</th>
                  <th className="text-left p-4 font-semibold">UNLIMITED</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  { feature: 'Classes per month', values: ['1', '8', 'Unlimited'] },
                  { feature: 'Priority booking', values: ['—', 'Yes', 'Yes+'] },
                  { feature: 'Guest passes', values: ['—', '1', '2'] },
                  { feature: 'Workshop discount', values: ['—', '—', '10%'] },
                  { feature: 'Mat rental', values: ['Included', 'Included', 'Included'] },
                ].map((row) => (
                  <tr key={row.feature} className="hover:bg-muted/40">
                    <td className="p-4 font-medium">{row.feature}</td>
                    {row.values.map((v, idx) => (
                      <td key={idx} className="p-4 text-muted-foreground">
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            “Yes+” priority booking means the earliest access window during high-demand weeks and workshops.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted" id="value-props">
        <div className="max-w-7xl mx-auto">
          <FeaturesCards3D
            badge="Value"
            headline="WHY MEMBERS STAY"
            subheadline="The system is simple: show up, progress, recover."
            features={[
              { title: 'COACHING-FIRST', description: 'Technique cues, not vague vibes. You’ll know what to do and why.' },
              {
                title: 'PROGRESSIVE SEQUENCING',
                description: 'Patterns repeat so your body learns. You’ll feel the difference week to week.',
              },
              {
                title: 'RECOVERY BUILT-IN',
                description: 'Mobility + yin + breathwork are part of the weekly flow—not optional extras.',
              },
              {
                title: 'TIGHT COMMUNITY',
                description: 'High energy, welcoming room, no ego. You’ll feel seen without being singled out.',
              },
            ]}
          />
        </div>
      </section>

      <CTASparkles
        headline="READY TO LOCK IN A ROUTINE?"
        description="Tell us your goals and schedule—we’ll recommend the best plan and first class."
        ctaLabel="Get My Recommendation"
        ctaHref="/contact"
      />
    </div>
  )
}
