import { CopyrightSection } from "./sections/copyright"
import FooterSection from "./sections/footer"
import { HeroSection } from "./sections/hero"
import HerosSection from "./sections/heros"
import INeedCandooSection from "./sections/i-need-candoo"
import LearnSomethingNewSection from "./sections/learn-something-new"
import { NavBar } from "./sections/navbar"
import NewsLetterSection from "./sections/newsletter"
import SafetyAndSecurity from "./sections/safety-security"
import WhatWeDoSection from "./sections/what-we-do"

function App() {

  return (
    <>
      <NavBar />
      <HeroSection type="we-make-technology" />
      <LearnSomethingNewSection />
      <SafetyAndSecurity />
      <WhatWeDoSection />
      <INeedCandooSection />
      <HerosSection />
      <NewsLetterSection />
      <FooterSection />
      <CopyrightSection/>
    </>
  )
}

export default App
