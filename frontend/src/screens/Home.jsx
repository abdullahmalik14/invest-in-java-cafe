import React from 'react'
import Header from '../components/Header'
import HeroicSection from '../components/HeroicSection'
import SectionTwoSlider from '../components/SectionTwoSlider'
import PartnersSection from '../components/PartnersSection'
import JavaSection from '../components/JavaSection'
import QualitySection from '../components/QualitySection'
import BenefitsSection from '../components/BenefitsSection'
import InvestWithUs from '../components/InvestWithUs'
import InvitationSection from '../components/InvitationSection'
import CalculateCost from '../components/CalculateCost'
import About from '../components/About'
import KnowUs from '../components/KnowUs'
import Our2024InNumber from '../components/Our2024InNumber'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <br />
      <HeroicSection/>
      <SectionTwoSlider/>
      <PartnersSection/>
      <JavaSection/>
      <QualitySection/>
      <BenefitsSection/>
      <InvestWithUs/>
      <InvitationSection/>
      <CalculateCost/>
      <About/>
      <KnowUs/>
      <Our2024InNumber/>
      <FAQ/>
      <Footer/>
    </>
  )
}

export default Home
