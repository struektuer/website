import * as React from "react"
import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform, animate } from "framer-motion"
import { Helmet } from "react-helmet";

import Logo from '../images/logo.svg'
import icon1 from '../images/icon1.svg'
import icon2 from '../images/icon2.svg'
import icon3 from '../images/icon3.svg'
import icon4 from '../images/icon4.svg'
import icon5 from '../images/icon5.svg'
import rr from '../images/rr.gif'

// import './reset.scss'
import './index.scss'

const IndexPage = () => {
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => Math.round(latest))

  const items = [icon1, icon2, icon3, icon4, icon5]
  const [counter, setCounter] = useState(0)
  // let counter = 0

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);

    counter == items.length && setCounter(0)

    return () => {
      clearInterval(interval);
    };

    // const controls = animate(count, items.length, { duration: 2 })
    // return controls.stop
  }, [counter])

  const variants = {
    visible: {
      opacity: 1,
      transition: {
        ease: "linear",
        duration: 0.1,
        repeat: Infinity,
        repeatDelay: 1,
        repeatType: "mirror",
      },
    },
    hidden: { opacity: 0 },
  }


  return (
    <main>
      <Helmet
        htmlAttributes={{
          lang: "en-us",
        }}
      >
        <title>Strüktür</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <header>
        <div className="icons">
          {/* <motion.img
            initial="hidden"
            animate="visible"
            variants={variants}
            id="icon1"
            className="icon"
            src={icon1}
            alt="Strüktür Icon"
          /> */}

          {/* <motion.div
            transition={{ duration: 5 }}
          >
            {rounded}</motion.div> */}
          <motion.img id="icon4" className="icon" src={rr} alt="Strüktür Icon" />
          {/* <img id="icon3" className="icon" src={icon3} alt="Strüktür Icon" />
          <img id="icon5" className="icon" src={icon5} alt="Strüktür Icon" />
          <img id="icon2" className="icon" src={icon2} alt="Strüktür Icon" /> */}
        </div>

        <div>
          <img id="logo" src={Logo} alt="Strüktür Logo" />
        </div>
      </header>
      <div className="content">
        <div className="about">
          <p>
STRÜKTÜR is a Berlin-based non-profit situated at the intersection of artistic and research-based practices, engaging with entangled geographies of Turkey and beyond.
It initiates and develops formats for inquiry across projects, residencies, and public programmes, shaping how knowledge is produced and opening discursive spaces that challenge and reshape existing infrastructures. 
This extends into writing as an independent line of inquiry.
            <br />  <br />
          </p>
        </div>
        <div className="call">
          <p>
Artistic Research Residency 2024
 <br />
STRÜKTÜR’s Artistic Research Residency (October–December 2024), in partnership with ABA Air Berlin Alexanderplatz, featured Onur Hamilton Karaoğlu as its first resident artist. 
<a href="https://airberlinalexanderplatz.de/profile/RzrrdEL6GXZKe7Aey4JzMyYQq4y2" target="_blank" rel="noopener noreferrer">
  → Explore the residency
</a>
   <br />
            <br />
  The Rehearsal & The Playbook
 <br />
Goethe-Institut Visual Arts Project Fund 2025
A long-term research and public programme that approaches rehearsal as a processual mode of inquiry, unfolding through artistic productions, discursive sessions with invited scholars, and commissioned writing—extending into The Playbook.
<a href="https://savvy-contemporary.com/en/events/2025/the-rehearsal-the-playbook/" target="_blank" rel="noopener noreferrer">
  → Explore the residency
</a>
    <br />
            <br />
  Reading Room
  <br />
  Commissioned writing bringing together voices across disciplines, forming its own line of inquiry.
   <br />
  Carlos Kong
The Repertoire of Migrant-Situated Knowledge: On the Art of Cana Bilir-Meier
<a href="https://drive.google.com/file/d/1c8IqaQznVMnieRSbXJKBwgYtjczd2rfg/view/" target="_blank" rel="noopener noreferrer">
  → → Read
</a>
  <br />
    Övgü Gökçe
Weird Absurd Whatever: A Memoir for the Future
<a href="https://drive.google.com/file/d/17wcBaVNALYHkR-yUfHuSpA2b7Y5VP2sM/view?usp=share_link" target="_blank" rel="noopener noreferrer">
  → → Read
</a>
  <br />
 Gökcan Demirkazık
On Onur Hamilton Karaoğlu’s In Vain (2022/2024)

<a href="https://drive.google.com/file/d/15X8XId6Fbz6OvoOHv9wRceKW_xkhZKOs/view?usp=sharing" target="_blank" rel="noopener noreferrer">
  → → Read
</a>
  <br />
          </p>
        </div>

        <div>
          <p>
            Board Members<br /><br />
          Gözde Gazioğlu | Chair, Board<br />
           Tuna Ortaylı  | Board<br />        
  Prof. Dr. Füsun Türetken | Chair, Board<br />
 
       
          </p>
        </div>

        <div>
          <p>
            Contact &nbsp;
            <a href="mailto:info@struektuer.org">
              info@struektuer.org
            </a> <br />

            Instagram &nbsp;
            <a href="https://www.instagram.com/struektuer/">
              @struektuer
            </a> <br />
          </p>
        </div>

        {/* <div></div> */}
        {/* <div></div>
        <div></div> */}
     
      </div>
    </main >
  )
}

export default IndexPage

export const Head = () => <title>Strüktür Home Page</title>
