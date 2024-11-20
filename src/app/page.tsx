"use client";



import About from '@/components/About/About'
import Contact from "@/components/Contact/Contact";
import Hero from '@/components/Hero/Hero';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import React from 'react'
import { useEffect} from "react";



function Page() {
  return (
    <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
          <About />

              




    </main>
  )
}

export default Page
