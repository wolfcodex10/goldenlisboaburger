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
                 name: "Batata frita wedges",
                 price: "2€"
             },
             {
                id: 2,
                name: "Batata cheddar e bacon",
                price: "3,75€"
             },
             {
                id: 3,
                name: "Batata Doce frita",
                price: "3,75€"
             },
             {
                id: 4,
                name: "Golden fritas",
                price: "4,5€"
             },
             {
                id: 5,
                name: "Aros de cebola 5 unidades",
                price: "3€"
             },
             {
                id: 6,
                name: "Aros de cebola 9 unidades",
                price: "5€"
             },
             {
                id: 7,
                name: "Nuggets de frango 5 unidades",
                price: "3€"
             },
             {
                id: 8,
                name: "Nuggets de frango 9 unidades",
                price: "5€"
             },
             {
                id: 9,
                name: "Nuggets de queijo e chili 5 unidades",
                price: "4,5€"
             },
             {
                id: 10,
                name: "Nuggets de queijo e chili 9 unidades",
                price: "7,5€"
             },
             {
                id: 11,
                name: "Mozzarella Sticks 5 unidades",
                price: "4,5€"
             },
             {
                id: 12,
                name: "Mozzarella Sticks 9 unidades",
                price: "7,5€"
             },
             {
                id: 13,
                name: "Salada mista",
                details: "Tomate cherry, rúcula, alface e molho teriyaki",
                price: "3,5€"
             },
             {
                id: 14,
                name: "Asas de frango bbq",
                details: "5 unidades com barbecue e sementes de sésamo", 
                price: "6€"
             },
             {
                id: 15,
                name: "Asas de frango bbq",
                details: "9 unidades com barbecue e sementes de sésamo", 
                price: "10€"
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
        <title>SOBREMESAS - Golden Burger Lisboa</title>
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