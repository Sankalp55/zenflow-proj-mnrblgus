import React from 'react'

import { PageHero } from '@/components/blocks/PageHero'
import { FeaturePillars } from '@/components/blocks/FeaturePillars'
import { CTASection } from '@/components/blocks/CTASection'

export default function AboutPage() {
  return (
    <main>
      <PageHero
        headline="About"
        subheadline="A simple system for consistent progress."
      />

      <FeaturePillars
        headline="The method"
        subheadline="Four pillars that keep you consistent—so progress feels inevitable."
        features={[
          {
            icon: '🫁',
            title: 'BREATH',
            description:
              'Breath pacing for focus during effort and calm after. You’ll learn when to drive, when to soften, and how to recover fast.',
          },
          {
            icon: '🧠',
            title: 'MINDSET',
            description:
              'Clear cues and simple rules that reduce friction. Less overthinking, more doing—especially on low-motivation days.',
          },
          {
            icon: '🏃',
            title: 'MOVEMENT',
            description:
              'Strength, mobility, and conditioning that fits your life. We build capacity without burning you out.',
          },
          {
            icon: '📈',
            title: 'PROGRESS',
            description:
              'Track what matters, adjust quickly, and keep momentum. Small wins compound into big change.',
          },
        ]}
      />

      <CTASection />
    </main>
  )
}
