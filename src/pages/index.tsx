import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Headers from 'components/Headers'
import Hero from 'components/Hero'
import About from 'components/About'
import Skills from 'components/Skills'
import Experience from 'components/Experience'
import Projects from 'components/Projects'
import Contact from 'components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Primeumaton &raquo; Adelakun Emmanuel</title>
        <meta name='keywords' content="Primeumaton,Adelakun Emmanuel,cyber security,
        Emmanuel Ayodele adelakun,primeumaton limited,Emmanuel adelakun,Emmanuel Adelakun cyber security,
        Emmanuel adelakun programming, Adelakun Emmanuel Cyber Security, Adelakun Emmanuel Programming,
        Adelakun Emmanuel Programmer Nigeria, Adelakun Emmanuel Nigeria, 
        Nigeria Best Programmer, Nigeria Programmer, Nigeria Cyber Security,
        Nigerian Best Programmer, Nigerian Programmer, Nigerian Cyber Security" />
        <meta name="description" content="Primeumaton Limited &raquo; Adelakun Emmanuel." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Headers />
      
      {/*Hero*/}
      <section id='hero' className=' snap-start'>
        <Hero />
      </section>

      {/*About*/}
      <section id='about' className='snap-center'>
        <About />
      </section>


      {/*Experience*/}
      <section id='experience' className=' snap-end'>
        <Experience />
      </section>


      {/*Skills*/}
      <section id='skills' className='snap-end'>
        <Skills />
      </section>


      {/*Projects*/}
      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      {/*Contact Us*/}
      <section id='contact' className='snap-end'>
        <Contact />
      </section>

    </div>
  )
}
