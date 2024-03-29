import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel'
import ButtonWhatsapp from '../components/ButtonWhatsapp';
import styles from '../../styles/cardapio_item.module.scss'
import stylesButton from '../components/ButtonWhatsapp/styles.module.scss'
import { BsArrowLeft } from 'react-icons/bs'


function Acompanhamentos() {

  const detailsPage = {
    header: {
      title: "ACOMPANHAMENTOS",
      description: "Vinhos, Cocktais, whisky e muitos mais"
    },

    content: [
     {
         title: "",
         imageUrl: "/acompanhamentos/batata.jpg",

         items: [
          {
            id: 1,
            name: "Batata frita simples",
            details: "Acompanha c/molho Golden e orégãos",
            price: "2,5€"
          },
          {
            id: 2,
            name: "Batata cheddar e bacon",
            details: "Molho cheddar, bacon e orégãos",
            price: "4,5€"
          },
          {
            id: 3,
            name: "Batata Doce frita",
            details: "Acompanha c/molho Golden e orégãos",
            price: "4,5€"
          },
          {
            id: 4,
            name: "Batata Doce frita c/ cheddar e bacon (NOVO",
            details: "Acompanha c/molho Golden e orégãos",
            price: "6,5€"
          },
          {
            id: 5,
            name: "Golden fritas 0.1",
            details: "Batata, maionese golden, frango panado cubos, molho teriyaki e orégãos",
            price: "5,5€"
          },
          {
            id: 6,
            name: "Golden fritas 0.2 (NOVO)",
            details: "Batata, mozzarella, carne, ketchup e orégãos",
            price: "6€"
          },
          {
            id: 7,
            name: "Batata com mozzarella (NOVO)",
            details: "Mozzarella ralada maçaricado",
            price: "3,5€"
          },
          {
            id: 8,
            name: "Salada mista",
            details: "Tomate cherry, alface, milho, cenoura e molho teriyaki",
            price: "3,95€"
          },
         ]
     },
     {
         imageUrl: "/acompanhamentos/frango.jpg"
     }
    ]
  }

  const { header, content } = detailsPage;


  return (
    <>
      <Head>
        <title>Acompanhamentos - Golden Burger Lisboa</title>
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
        <span style={{
            marginBottom: "1.6rem"
        }} className={styles.description}>{header.description}</span>
      </header>

      <main>

        <Carousel className={styles.carrousel}>
          {content.map(item => {
            return (
              item.imageUrl && (
                <Carousel.Item interval={2000} key={item.imageUrl} className={styles.itemCarrousel}>
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
        <section className={styles.containerItemCardapio} style={{
          gap: "0px"
        }}>
          {content.map(section => {
            return(
              <div  key={section.imageUrl}>
              <div className={styles.itemCardapio}>
                <h3 style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: '#F3A11A'
                }}>{section.title}</h3>
                {section.items && 
                                section.items.map(item => {
                                    return(
                                    <div key={item.id} style={{
                                      marginBottom: "5px",
                                    }}>
                                        <span style={{
                                            fontWeight: "600",
                                            display: "inline-block",
                                            color: "#fff",
                                        }}>{item.name} <p style={{
                                          color: "#e66700",
                                          display: "inline"
                                        }}>{item.type}</p>  -  { item.price}</span>
                                        {item.details != undefined && <br></br>}
                                        <p style={{
                                            display: "inline-block",
                                            fontSize: "14px",
                                            marginBottom: "0px",
                                            color: "#C8C8C8"
                                        }}>{item.details}</p>
                                                                    <hr style={{
                              backgroundColor: "#F3A11A",
                              padding: "0px important",
                            }}/>
                                    </div>
                                    )
                                })}
                
              </div>
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

export default Acompanhamentos;