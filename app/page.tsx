// import CoreValues from '@/components/core-values'
import Donors from '@/components/donors'
import Footer from '@/components/footer'
// import Governance from '@/components/governance'
import HeroSection from '@/components/hero-section'
import KeyAchievement from '@/components/key-achievement'
// import MissionVision from '@/components/mission-vision'
import Projects from '@/components/projects'
// import ThematicAreas from '@/components/thematic-areas'

export default async function Home() {
  return (
    <div>
      <HeroSection />
      {/* <MissionVision /> */}
      <KeyAchievement />
      {/* <Governance /> */}
      {/* <CoreValues /> */}
      {/* <ThematicAreas /> */}
      <Projects />
      <Donors />
      <Footer />
    </div>
  )
}
