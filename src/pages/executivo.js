import React, { useState } from 'react';
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel'
import ButtonWhatsapp from '../components/ButtonWhatsapp';
import styles from '../../styles/cardapio_item.module.scss'
import stylesButton from '../components/ButtonWhatsapp/styles.module.scss'
import { Modal, Text} from "@nextui-org/react";
import { BsArrowLeft } from 'react-icons/bs'


function Executivo() {

  const detailsPage = {
    header: {
      title: "MENU EXECUTIVO",
      description: "Acompanham com batata fritas"
    },


    content: [
      {
        id: 1,
        name: "Adoço batata e bebida",
        imageUrl: "/hamburgers/adoco.jpg",
        price: "10,95€",
        description: "Pão, 140g carne, maionese Golden, bacon, ovo, cheddar e cebola frita"
      },
    ]
  }

  const { header, content, extraContent } = detailsPage;

  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <>
      <Head>
    <title>Hambúrgueres - Golden Burger Lisboa</title>
    <meta name="description" content="Golden Burger é um espaço 100% amigável e todos os clientes são bem-vindos." />
      </Head>

      <header className={styles.header}>
        <Link href="/">
          <a>
            <BsArrowLeft size={32} color="#fff" />
          </a>
        </Link>
        <div className={styles.containerImageLogo}>
          <Image width={150} height={150} src="/logo.png" alt="Logo Golden Burger" />
        </div>
        <h3 className={styles.title}>{header.title}</h3>
        <span className={styles.description}>{header.description}</span>
        <button onClick={handler} className={styles.challange}>CLIQUE PARA VER O DESAFIO</button>
        <Modal 
          noPadding 
          animated={true}
          open={visible} 
          onClose={closeHandler} 
          className={styles.modal}
          >
        <Modal.Header
          css={{
            position: "absolute", 
            width: "100%", 
            zIndex: "$1", 
            bottom: 0, 
            right: 0, 
            background:"#F3A11A",
            fontWeight: "bold",
            fontSize: "16px",
            padding: ".5rem"
          }}
        >
          <Text color="#fff" className={styles.textModal}>
          Godzilla -  COMENDO EM 5 MIN É DE GRAÇA!
          </Text>
        </Modal.Header>
        <button className={styles.closeButtonModal} onClick={closeHandler}>
              x
          </button>
        <Modal.Body>
          <Image
            showSkeleton
            className={styles.imageModal}
            src="/hamburgers/godzilla1.jpg"
            width={400}
            height={400}
          />
        </Modal.Body>
      </Modal>
      </header>

      <main>

        <Carousel className={styles.carrousel}>
          {content.map(item => {
            return (
              item.imageUrl && (
                <Carousel.Item interval={2000} key={item.id} className={styles.itemCarrousel}>
                <div className={styles.overlay}></div>
                <Image
                  layout='responsive'
                  className={styles.imageItemSlideshow}
                  width={1000}
                  height={1000}
                  src={item.imageUrl}
                  alt={item.name}
                />
                <Carousel.Caption className={styles.descriptionItemSlideshow}>
                  <h3>{item.name} - {item.price}</h3>
                </Carousel.Caption>
              </Carousel.Item>
              )
            )
          })}
        </Carousel>

        <section className={styles.containerItemCardapio}>
          {content.map(item => {
            return(
              <div className={styles.itemCardapio} key={item.id}>
                <h3>{item.name} - {item.price}</h3>
                <span>{item.description}</span>
              </div>
            )
          })}
        </section>
        <Link href="https://api.whatsapp.com/message/FTJZRMZA6OFEJ1?autoload=1&app_absent=0">
          <a target="_blank">
          <ButtonWhatsapp content="Faça seu pedido" className={stylesButton.bottomButton}/>
          </a>
        </Link>
      </main>
      <Footer/>
    </>
  );
}

export default Executivo;