'use client';

import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import About from '@/components/About';
'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Works from '@/components/Works';
import Skills from '@/components/Skills';
import Journey from '@/components/Journey';
import Footer from '@/components/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  return (
    <>
      <Navbar name={portfolioData.name} />
      <main className="main-container">
        <div className="content-wrapper">
          <Hero
            name={portfolioData.name}
            currentRole={portfolioData.currentRole}
            tagline={portfolioData.tagline}
          />
          <Works projects={portfolioData.projects} />
          <Skills skills={portfolioData.skills} />
          <Journey
            about={portfolioData.about}
            experience={portfolioData.experience}
            currentRole={portfolioData.currentRole}
          />
          <Footer contactEmail={portfolioData.contact.email} />
        </div>
      </main>
    </>
  );
}