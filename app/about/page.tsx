import { FeaturesGrid } from '@/components/blocks/FeaturesGrid'
import { TeamGrid } from '@/components/blocks/TeamGrid'
import { TestimonialsAnimated } from '@/components/blocks/TestimonialsAnimated'
import { CTASparkles } from '@/components/blocks/CTASparkles'
import { TracingBeam } from '@/components/ui/effects/TracingBeam'

export default function AboutPage() {
  return (
    <div>
      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-muted-foreground tracking-widest">
              ABOUT
            </p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
              A STUDIO BUILT LIKE A TRAINING ROOM
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ember blends yoga tradition with modern coaching: strength,
              mobility, breath, and recovery—delivered with clarity and
              intensity. We’re here for people who want to feel capable in their
              bodies, not perform for the room.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our classes are structured like a plan: warm-up with purpose,
              progressive sequences that challenge without chaos, and a finish
              that helps your nervous system actually absorb the work. Whether
              you’re a beginner, a lifter, a runner, or just stressed and
              stiff—this is training you can repeat.
            </p>

            <div className="mt-8">
              <a
                href="#team"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                MEET THE COACHES
              </a>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/70 backdrop-blur supports-[backdrop-filter]:bg-card/50 p-6">
            <p className="text-sm font-semibold">What “high-focus” means here</p>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>
                • Coaching-first cues: clear setup, clear breath, clear intent.
              </li>
              <li>
                • Options built-in: regressions and progressions every session.
              </li>
              <li>
                • Strong + calm: intensity without chaos, recovery without
                drifting.
              </li>
              <li>
                • Consistency wins: small improvements that compound over weeks.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="mission" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TracingBeam>
            <div className="max-w-6xl mx-auto">
              <FeaturesGrid
                badge="METHOD"
                headline="OUR METHOD"
                subheadline="Simple principles, repeated weekly, that compound into real change—on the mat and in your day."
                features={[
                  {
                    title: 'BREATH',
                    description:
                      'Breath is pacing, stability, and stress control. We teach it as a tool you can use in hard poses—and hard meetings.',
                  },
                  {
                    title: 'STRENGTH',
                    description:
                      'Progressive holds and transitions that build usable power. Strong hips, stable shoulders, and a core that supports your spine.',
                  },
                  {
                    title: 'MOBILITY',
                    description:
                      'End-range control that sticks outside the studio. We don’t chase stretch—we build capacity in the range you earn.',
                  },
                  {
                    title: 'RECOVERY',
                    description:
                      'Downshift the nervous system so your training actually works. Recovery is a skill, not a reward.',
                  },
                ]}
              />
            </div>
          </TracingBeam>
        </div>
      </section>

      <section id="team" className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <TeamGrid
            headline="THE TEAM"
            subheadline="Coaches with real coaching backgrounds—focused on form, progressions, and safety. You’ll get strong cues, honest options, and a plan you can repeat."
            members={[
              {
                name: 'MAYA RIVERA',
                role: 'Strength Vinyasa',
                bio: 'Athletic flow, measurable progressions, and core-first sequencing. Maya’s classes are structured, intense, and surprisingly calming.',
              },
              {
                name: 'JON PARK',
                role: 'Mobility Lab',
                bio: 'Joint prep, controlled range, and sustainable flexibility. Jon’s approach is equal parts technical and practical—built for real life.',
              },
              {
                name: 'ELENA KIM',
                role: 'Restore + Breath',
                bio: 'Breathwork, recovery, and nervous system regulation. Elena teaches downshifting as a skill you can practice and keep.',
              },
              {
                name: 'SAMIR PATEL',
                role: 'Foundations',
                bio: 'Technique, alignment, and confidence-building for beginners. Samir makes the basics feel powerful—and repeatable.',
              },
            ]}
          />
        </div>
      </section>

      <section id="community" className="py-16 md:py-28 px-4 md:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <TestimonialsAnimated
            headline="COMMUNITY WINS"
            subheadline="Small improvements that add up: less pain, better posture, calmer days. The goal isn’t perfection—it’s progress you can feel."
            testimonials={[
              {
                quote:
                  'My lower back finally feels supported. The strength work is legit.',
                name: 'Alex M.',
                role: 'Member',
              },
              {
                quote:
                  'I’m more mobile in my lifts and calmer in my meetings. Didn’t expect both.',
                name: 'Nina G.',
                role: 'Member',
              },
              {
                quote:
                  'The studio vibe is intense but welcoming—no awkwardness.',
                name: 'Chris L.',
                role: 'Member',
              },
            ]}
          />
        </div>
      </section>

      <section className="py-16 md:py-28 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <CTASparkles
            headline="GET THE WEEKLY RESET"
            description="One short email: mobility drill, breath cue, and class highlights. Client-side only—use this link to draft a message and we’ll add you manually (or integrate your email provider later)."
            ctaLabel="JOIN NEWSLETTER"
            ctaHref="/contact?intent=newsletter"
          />
        </div>
      </section>
    </div>
  )
}
