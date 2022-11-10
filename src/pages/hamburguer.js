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
        name: "Smash (NOVO)",
        imageUrl: "",
        price: "8,5€",
        description: "Pão, 70g carne, cheddar, bacon e molho golden"
      },

      {
        id: 2,
        name: "Bacon Cheese Double",
        imageUrl: "/hamburgers/bacon-chese-double.jpg",
        price: "10,95€",
        description: "Pão brioche, 2x 70g carne, 2x cheddar, 2x bacon e molho Golden"
      },

      {
        id: 3,
        name: "Abelha e a vaca (NOVO)",
        imageUrl: "",
        price: "10,95€",
        description: "Pão brioche, 2x 70g carne, 2x cheddar, 2x bacon e molho Golden"
      },

      {
        id: 4,
        name: "Sangra sempre",
        price: "14,5€",
        description: "Pão brioche, 140g carne, molho de carne da casa (contém cebola), ovo, queijo edam, fiambre, chourição, cenoura, alface, batata palha, milho, maionese e ketchup"
      },

      {
        id: 5,
        name: "Sangra sempre Duplo",
        price: "15,95€",
        description: "Pão brioche, 2x 140g carne, molho de carne da casa (contém cebola), ovo, 2x queijo edam, 2x fiambre, 2x chourição, cenoura, alface, batata palha, milho, maionese e ketchup"
      },

      {
        id: 6,
        name: "Adoço",
        imageUrl: "/hamburgers/adoco.jpg",
        price: "13,95€",
        description: "Pão brioche, 140g carne, maionese Golden, bacon, ovo, cheddar e cebola frita"
      },

      {
        id: 7,
        name: "King Kong",
        price: "15,95€",
        description: "Pão brioche, 4x 70g carne, aros de cebola, maionese Golden, cheddar e bacon"
      },

      {
        id: 8,
        name: "São Domingos",
        price: "13,50€",
        description: "Pão brioche, 140g carne, cheddar, bacon, cebola caramelizada (contém frutos silvestres) e molho Golden"
      },

      {
        id: 9,
        name: "Double chicken",
        imageUrl: "/hamburgers/double-chicken.jpg",
        price: "15,75€",
        description: "Pão brioche, 2x frango panado, alface, tomate, milho, maionese e molho teriyaki"
      }, 

      {
        id: 10,
        name: "Golden vegetariano",
        imageUrl: "/hamburgers/burger-vegetariano.jpg",
        price: "12,50€",
        description: "Pão brioche, molho Golden, panado de vegetais, cheddar e cebola caramelizada (contém frutos silvestres)."
      }, 

      {
        id: 11,
        name: "X-Salada 4 Canes",
        price: "16,5€",
        description: "Pão brioche, alface, tomate, queijo cheddar, queijo edam, cebola roxa, 4x 70g carne, bacon, ovo e maionese de coentro"
      }, 

      {
        id: 12,
        name: "Godzilla",
        imageUrl: "/hamburgers/godzilla1.jpg",
        price: "30€",
        description: "Pão brioche, 4x 175g carne, 4x ovo, 8x bacon, 8x cheddar, cebola roxa e molho Golden"
      }
    ],
    extraContent: {
      title: "Extras",
      item: [
        {
          id: 1,
          name: "Carne 70g",
          price: "2,15€",
        },
  
        {
          id: 2,
          name: "Carne 140g",
          price: "4,25€",
        },
  
        {
          id: 3,
          name: "Frango panado",
          price: "5€",
        },
  
        {
          id: 4,
          name: "Alface / Tomate / Cebola",
          price: "0,50€",
        },
  
        {
          id: 5,
          name: "Aros de cebola (2)",
          price: "1€",
        },
  
        {
          id: 6,
          name: "Ovo",
          price: "1€",
        },
  
        {
          id: 7,
          name: "Bacon",
          price: "1€",
        },
  
        {
          id: 8,
          name: "Queijo Edam ou cheddar",
          price: "1€",
        },
  
        {
          id: 9,
          name: "Cebola caramelizada",
          price: "1€",
        },
  
        {
          id: 10,
          name: "Molhos",
          price: "1€",
        },
      ]
    }
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
          <hr style={{
                  backgroundColor: "#F3A11A",
                  height: "3px",
                  zIndex: "300",
                  padding: "0px important",
                  opacity: '.5'
                }} />
                
          <h3 style={{
            color: "#F3A11A",
            fontWeight: "bold"
                }}>{extraContent.title}</h3>
          {extraContent.item.map(item => {
            return(
              <div className={styles.itemCardapio} key={item.id}>
                <h3>{item.name} - {item.price}</h3>
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