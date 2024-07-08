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
            STRÜKTÜR is a Berlin-based association dedicated to forming and expanding the support structures for arts & artists from the geography of Turkey. Its mission lies at the heart of the collective production of migratory and diasporic knowledge and the creation of trans-communal exchange. Through residencies, publications, workshops, and public programs; STRÜKTÜR aims to root, grow, and disperse artistic research and diasporic thinking transcending borders, communities, and generations.
            <br />  <br />
          </p>
        </div>
        <div className="call">
          <p>
            Our first open call for an artist in residence and future programs will be announced in June 2024.
          </p>
        </div>

        <div>
          <p>
            Founded by <br />
            Bengisu Çağlayan <br />
            Gözde Gazioğlu (<span>Chair, Board Member</span>)  <br />
            Yelta Köm <br />
            Hatice Marx (<span>Board Member</span>) <br />
            Tuna Ortaylı Kazıcı (<span>Treasurer, Board Member</span>) <br />
            Vivien Tauchmann <br />
            Alper Turan <br />
            Prof. Dr. Füsun Türetken (<span>Chair, Board Member</span>)
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
        {/* <p>
          Executive Board <br />
          Prof. Dr. Füsun Türetken <br />
          Gözde Gazioğlu <br />
          Tuna Ortaylı Kazıcı <br />
          Hatice Marx
        </p> */}
      </div>
    </main >
  )
}

export default IndexPage

export const Head = () => <title>Strüktür Home Page</title>
