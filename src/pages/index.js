import Head from 'next/head'
import Button from '../components/Button'
import styles from '../../styles/home.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer'

import { Animated } from "react-animated-css";
import { FiFacebook, FiInstagram } from 'react-icons/fi'
import { GrLocation } from 'react-icons/gr'
import { motion } from "framer-motion";

export default function Home() {

  const container = {
    hidden: { opacity: 1},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {       
        duration: 1
      }
    }
  };

  return (
    <>
      <Head>
        <title>Cardápio online - Golden Burger Lisboa</title>
        <meta name="description" content="Golden Burger é um espaço 100% amigável e todos os clientes são bem-vindos." />
      </Head>

      <motion.main
        className={styles.mainContainer}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <img className={styles.background} src="/background-home.png"

        />
          <Image
            className={styles.logo}
            width={150}
            height={150}
            src="/logo.png"
            alt="Logo Golden Burger"
          />
          <Animated
          className={styles.itemOne}
          animationIn="slideInLeft"
          animationOut="slideInLeft"
          animationInDuration={600}
          animationOutDuration={600}
          animationInDelay={0}
          isVisible={true}>

          <Link href="/executivo">
            <a>
              <Button content="MENU EXECUTIVO"/>
            </a>
          </Link>
        </Animated>
          <Animated
          className={styles.itemOne}
          animationIn="slideInLeft"
          animationOut="slideInLeft"
          animationInDuration={600}
          animationOutDuration={600}
          animationInDelay={100}
          isVisible={true}
          >

          <Link href="/entradas">
            <a>
              <Button content="ENTRADAS"/>
            </a>
          </Link>
        </Animated>
        <Animated
          className={styles.item2}
          animationIn="slideInLeft"
          animationOut="slideInLeft"
          animationInDuration={600}
          animationOutDuration={600}
          animationInDelay={200}
          isVisible={true}
        >
          <Link href="/hamburguer">
            <a>
              <Button content="HAMBÚRGUERES"  />
            </a>
          </Link>
        </Animated>

        <Animated
          className={styles.item3}
          animationIn="slideInLeft"
          animationOut="slideInLeft"
          animationInDuration={600}
          animationOutDuration={600}
          animationInDelay={300}
          isVisible={true}
        >
          <Link href="/bebidas">
            <a>
              <Button content="BEBIDAS" />
            </a>
          </Link>
        </Animated>

        <Animated
          className={styles.item4}
          animationIn="slideInLeft"
          animationOut="slideInLeft"
          isVisible={true}
          animationInDuration={600}
          animationOutDuration={600}
          animationInDelay={400}
          >
          <Link href="/sobremesas">
            <a>
              <Button content="SOBREMESAS"/>
            </a>
          </Link>
        </Animated>

        <Animated
          className={styles.item5}
          animationIn="slideInLeft"
          animationOut="slideInLeft"
          isVisible={true}
          animationInDuration={600}
          animationOutDuration={600}
          animationInDelay={500}  
          >
          <Link href="/acompanhamentos">
            <a>
              <Button content="ACOMPANHAMENTOS"/>
            </a>
          </Link>
        </Animated>

        <Animated
          className={styles.item6}
          animationIn="slideInLeft"
          animationOut="slideInLeft"
          isVisible={true}
          animationInDuration={600}
          animationOutDuration={600}
          animationInDelay={600}
          >
          <Link href="https://goldenburger.pt">
            <a target="_blank">
              <Button content="TAKE AWAY"/>
            </a>
          </Link>
        </Animated>

        <span className={styles.textHome}>Descubra aqui nossos sabores! </span>

        <section className={styles.socialMediaSection}>
          <Link href="https://instagram.com/goldenburgerlisboa?igshid=YmMyMTA2M2Y=">
            <a target="_blank">
              <div className={styles.icon}>
                <FiInstagram size={26} color="#0F0F0F" />
              </div>
            </a>
          </Link>

          <Link href="https://www.google.com/maps/place/Golden+Burger+Lisboa,+Lg.+Maur%C3%ADcio+de+Oliveira+3c,+1500-552+Lisboa,+Portugal/data=!4m2!3m1!1s0xd1933322b2ba40f:0x913513636d034da1?utm_source=mstt_1&entry=gps">
            <a target="_blank">
              <div className={styles.icon}>
                <GrLocation size={26} color="#0F0F0F" />
              </div>
            </a>
          </Link>
        </section>
      </motion.main>

      <Footer />

    </>
  )
}
