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


function Hamburgers() {

  const detailsPage = {
    header: {
      title: "HAMBÚRGERES",
      description: "Acompanham com batata fritas"
    },


    content: [
      {
        id: 1,
        name: "Bacon Chese Double",
        imageUrl: "/hamburgers/bacon-chese-double.jpg",
        price: "8,5€",
        description: "Pão brioche, 2x 70g carne, 2x cheddar, 2x bacon e molho Golden"
      },

      {
        id: 2,
        name: "Sangra sempre",
        price: "11,5€",
        description: "Pão brioche, 140g carne, molho de carne da casa (contém cebola), ovo, queijo edam, fiambre, chourição, cenoura, alface, batata palha, milho, maionese e ketchup"
      },

      {
        id: 3,
        name: "Sangra sempre Duplo",
        price: "13,95€",
        description: "Pão brioche, 2x 140g carne, molho de carne da casa (contém cebola), ovo, 2x queijo edam, 2x fiambre, 2x chourição, cenoura, alface, batata palha, milho, maionese e ketchup"
      },

      {
        id: 4,
        name: "Adoço",
        imageUrl: "/hamburgers/adoco.jpg",
        price: "11,5€",
        description: "Pão brioche, 140g carne, maionese Golden, bacon, ovo, cheddar e cebola frita"
      },

      {
        id: 5,
        name: "King Kong",
        price: "14,95€",
        description: "Pão brioche, 4x 70g carne, aros de cebola, maionese Golden, cheddar e bacon"
      },

      {
        id: 6,
        name: "São Domingos",
        price: "11,50€",
        description: "Pão brioce, 120 novilho, cheddar, bacon, cebola caramelizada (contém frutos silvestres) e molho Golden"
      },

      {
        id: 7,
        name: "Double chicken",
        imageUrl: "/hamburgers/double-chicken.jpg",
        price: "14,50€",
        description: "Pão brioce, 2x frango panado, alface iceberg, tomate, milho, maionese e molho teriyaki"
      }, 

      {
        id: 8,
        name: "Golden vegetariano",
        imageUrl: "/hamburgers/burger-vegetariano.jpg",
        price: "10,50€",
        description: "Pão brioce, molho Golden, panado de vegetais, cheddar e cebola caramelizada (contém frutos silvestres)."
      }, 

      {
        id: 9,
        name: "X-Salada 4 Canes",
        price: "14,95€",
        description: "Pão brioce, alface iceberg, tomate, queijo cheddar, queijo edam, cebola roxa, 4x 70g carne, bacon, ovo e maionese de coentro"
      }, 

      {
        id: 10,
        name: "Godzilla",
        imageUrl: "/hamburgers/godzilla1.jpg",
        price: "30€",
        description: "Pão brioche, 4x 175g carne, novilho, 4x ovo, 8x bacon, 8x cheddar, cebola roxa e molho Golden"
      }
    ]
  }

  const { header, content } = detailsPage;

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
        
        <Link href="https://api.whatsapp.com/message/FTJZRMZA6OFEJ1?autoload=1&app_absent=0">
          <a target="_blank">
          <ButtonWhatsapp content="Faça seu pedido"/>
          </a>
        </Link>

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

export default Hamburgers;