import { ContactForm } from '@/components/blocks/ContactForm'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-muted-foreground tracking-widest">
              CONTACT
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              CONTACT EMBER
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Questions, private sessions, or help choosing a plan—send a message
              and we’ll reply within 1 business day. If you’re new, tell us your
              training background and any limitations; we’ll recommend the best
              first class.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                SEND A MESSAGE
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-muted transition-colors"
              >
                VIEW PRICING
              </a>
            </div>

            <div className="mt-10 rounded-xl border border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 p-6">
              <p className="text-sm font-semibold">Fastest way to get help</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Include your preferred class times (morning / lunch / evening),
                your goal (strength, mobility, recovery), and any injuries. The
                more context you share, the more precise our recommendation.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-sm font-semibold">Before you hit send</p>
            <p className="mt-2 text-sm text-muted-foreground">
              This site uses a client-side contact flow (no server actions, no
              database). Your message will be prepared for email using our
              studio address.
            </p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="rounded-xl border border-border bg-muted p-4">
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-muted-foreground">
                  hello@emberyoga.example
                </p>
              </div>
              <div className="rounded-xl border border-border bg-muted p-4">
                <p className="font-semibold">Reply time</p>
                <p className="mt-1 text-muted-foreground">Within 1 business day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="SEND A MESSAGE"
            subheadline="Client-side form with validation. Submits to a mailto link by default—connect a provider later if you want."
            contactInfo={[
              { label: 'Email', value: 'hello@emberyoga.example' },
              { label: 'Phone', value: '(555) 012-3456 (text ok)' },
              { label: 'Hours', value: 'Mon–Fri 6:30a–8:00p • Sat–Sun 9:00a–2:00p' },
            ]}
          />

          <p className="mt-6 text-sm text-muted-foreground">
            Tip: If your email app doesn’t open automatically, copy the details
            and send to <span className="font-semibold">hello@emberyoga.example</span>.
          </p>
        </div>
      </section>

      <section id="details" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              STUDIO DETAILS
            </h2>
            <p className="mt-3 text-muted-foreground">
              Everything you need before you arrive. Replace the address with
              your real location when you’re ready.
            </p>
          </div>

          <div className="mt-10">
            <BentoGrid className="mx-auto">
              <BentoGridItem
                title="LOCATION"
                description="Downtown (replace with your address) • Parking nearby"
              />
              <BentoGridItem
                title="HOURS"
                description="Mon–Fri 6:30a–8:00p • Sat–Sun 9:00a–2:00p (varies by schedule)"
              />
              <BentoGridItem title="PHONE" description="(555) 012-3456 • Text ok" />
              <BentoGridItem
                title="EMAIL"
                description="hello@emberyoga.example • 1 business day reply"
              />
            </BentoGrid>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="FIRST CLASS NERVES? NORMAL."
            subheadline="We’ll guide you through it—step by step. Most people feel comfortable within the first five minutes."
            testimonials={[
              {
                quote:
                  'I was intimidated walking in. Five minutes later I felt supported and knew exactly what to do.',
                name: 'Jordan P.',
                role: 'New member',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="BOOK YOUR FIRST CLASS THIS WEEK"
            description="Momentum beats motivation. Choose a plan, then pick a class time that’s easy to keep."
            ctaLabel="CHOOSE A PLAN"
            ctaHref="/pricing"
          />
          <div className="mt-4 text-center">
            <a
              href="/classes"
              className="text-sm font-semibold text-foreground underline underline-offset-4 hover:opacity-80 transition-opacity"
            >
              VIEW CLASSES
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
