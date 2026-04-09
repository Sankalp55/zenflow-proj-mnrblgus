import { ContactForm } from '@/components/blocks/ContactForm'
import { BentoGrid, BentoGridItem } from '@/components/ui/effects/BentoGrid'
import { ParallaxScroll } from '@/components/ui/effects/ParallaxScroll'
import { CTASparkles } from '@/components/blocks/CTASparkles'

export default function ContactPage() {
  return (
    <div>
      <section className="py-16 md:py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <p className="text-sm text-muted-foreground">Contact</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">BOOK YOUR FIRST CLASS</h1>
            <p className="mt-4 text-muted-foreground">
              Send your availability and goals. We’ll reply with the best class + plan for you. If you’re new to yoga or
              returning after time off, we’ll start you with options that feel strong and doable.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
              >
                Fill the Form
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-card px-5 py-3 font-semibold text-foreground hover:shadow-sm transition-shadow"
              >
                View Pricing
              </a>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6">
              <div className="font-semibold">Response time</div>
              <p className="mt-2 text-sm text-muted-foreground">
                We typically reply within 24 hours (often sooner). If you’re trying to book same-day, include the class
                window you want and we’ll do our best to fit you in.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-muted p-6">
            <div className="font-semibold">Before you hit send</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>
                Tell us your <span className="text-foreground font-medium">primary goal</span> (strength, mobility,
                stress, recovery).
              </li>
              <li>
                Share your <span className="text-foreground font-medium">availability</span> (days/times).
              </li>
              <li>
                Mention any <span className="text-foreground font-medium">injuries or limitations</span> so we can coach
                the right options.
              </li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Client-side only. If anything fails to submit, you can email us directly at{' '}
              <a className="underline underline-offset-4 hover:text-foreground" href="mailto:hello@emberflow.yoga">
                hello@emberflow.yoga
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted" id="contact-form">
        <div className="max-w-7xl mx-auto">
          <ContactForm
            headline="CONTACT FORM"
            subheadline="Client-side only. If submission fails, use the mailto link below and we’ll still get you booked."
            contactInfo={[
              { label: 'Email', value: 'hello@emberflow.yoga' },
              { label: 'Hours', value: 'Weekdays 6am–8pm • Weekends 8am–2pm' },
              { label: 'Location', value: 'Downtown District (exact address provided by email)' },
            ]}
          />

          <div className="mt-6 rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6">
            <div className="font-semibold">Mailto fallback</div>
            <p className="mt-2 text-sm text-muted-foreground">
              If the form doesn’t work on your device, email us directly:
            </p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:hello@emberflow.yoga?subject=New%20inquiry%20from%20Emberflow%20site&body=Goal%3A%20%0AAvailability%3A%20%0A%0AMessage%3A%0A%0A%0AContact%3A%0A"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-muted px-5 py-3 font-semibold text-foreground hover:shadow-sm transition-shadow"
              >
                Email hello@emberflow.yoga
              </a>
              <a
                href="/classes"
                className="inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
              >
                Browse Classes
              </a>
            </div>
            <p className="mt-3 text-xs text-muted-foreground" id="newsletter">
              Newsletter signup note: if you want the “Weekly Flow Drop,” write “Newsletter” in your message and we’ll
              add you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8" id="studio-info">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">STUDIO DETAILS</h2>
            <p className="mt-3 text-muted-foreground">Everything you need before you arrive.</p>
          </div>

          <div className="mt-10">
            <BentoGrid>
              <BentoGridItem title="LOCATION" description="Downtown District • Address shared in booking confirmation." />
              <BentoGridItem title="HOURS" description="Weekdays 6am–8pm • Weekends 8am–2pm" />
              <BentoGridItem title="AMENITIES" description="Mats available • Lockers • Filtered water" />
              <BentoGridItem title="FIRST CLASS" description="Arrive 10 minutes early • Tell coach any injuries" />
            </BentoGrid>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 px-4 md:px-8 bg-muted" id="map">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">FIND YOUR WAY IN</h2>
            <p className="mt-3 text-muted-foreground">
              Drop in early—your nervous system will thank you. We use a static map image (no API) and a simple link to
              open directions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6">
              <div className="font-semibold">Static map</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Replace this image with your own exported map screenshot once your address is finalized.
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="mt-4 block overflow-hidden rounded-xl border border-border"
              >
                {/* Static asset placeholder path; replace with your real image in /public */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/emberflow/static-map.jpg"
                  alt="Map preview for Emberflow Yoga Studio"
                  className="w-full h-auto"
                />
              </a>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground px-5 py-3 font-semibold"
              >
                Open in Google Maps
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Tip: set the link to your exact place URL once you claim your listing.
              </p>
            </div>

            <div>
              <div className="rounded-2xl border border-border bg-card/90 backdrop-blur shadow-sm p-6">
                <div className="font-semibold">What you’ll see</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  A clean, low-light room built for focus. Check in, grab a mat if you need one, and settle in. If
                  you’re early, we’ll help you choose a spot and answer questions before class starts.
                </p>
              </div>

              <div className="mt-6">
                <ParallaxScroll
                  images={[
                    '/images/emberflow/entry.jpg',
                    '/images/emberflow/studio-room.jpg',
                  ]}
                />
              </div>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: 'Entrance + check-in', caption: 'Street-level entry with red neon sign.' },
                  { title: 'Studio room', caption: 'Low light, high focus, clean lines.' },
                ].map((i) => (
                  <div
                    key={i.title}
                    className="rounded-2xl border border-border bg-muted p-6 hover:shadow-sm transition-shadow"
                  >
                    <div className="font-semibold">{i.title}</div>
                    <p className="mt-2 text-sm text-muted-foreground">{i.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASparkles
        headline="YOUR MAT IS READY"
        description="One message away from a stronger, calmer week."
        ctaLabel="Send My Message"
        ctaHref="#contact-form"
      />
    </div>
  )
}
