import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel'
import ButtonWhatsapp from '../components/ButtonWhatsapp';
import styles from '../../styles/cardapio_item.module.scss'
import stylesButton from '../components/ButtonWhatsapp/styles.module.scss'
import { BsArrowLeft } from 'react-icons/bs'


function Bebidas() {

  const detailsPage = {
    header: {
      title: "BEBIDAS",
      description: "Vinhos, Cocktais, Whisky e muitos mais"
    },

    content: [
      //Bebidas
      {
        title: "Sumos, Refrigerantes e muito mais",
        imageUrl: "/bebidas/suco.jpg",

        items: [
          {
            id: 1,
            name: "Limonada",
            details: "Clássica, maracujá, frutos vermelhos",
            price: "3€"
          },
          {
            id: 2,
            name: "Refrigerantes",
            details: "Coca-Cola, Coca-Cola Zero, Sumal de anands, Fanta de laranja, Guaraná, ice tea pêssego, limão e manga",
            price: "2€"
          },
          {
            id: 3,
            name: "Sumo laranja natural",
            price: "2.5€"
          },
          {
            id: 4,
            name: "Café",
            price: "0.90€"
          }
        ]
      },
      //Água
      {
        title: "Água",
        items: [
          {
            id: 300,
            name: "Mineral",
            type: "(0,50cl)",
            price: "1,20€"
          },
          {
            id: 301,
            name: "Frize limão c/gás",
            type: "(0,25cl)",
            price: "1,50€"
          }
        ]
      },
      //Cervejas
      {
        title: "Cervejas",
        items: [
          {
            id: 400,
            name: "Sagres Mini",
            type: "(0,20cl)",
            price: "1,30€"
          },
          {
            id: 401,
            name: "Sagres Média",
            type: "(0,33cl)",
            price: "1,85€"
          },
          {
            id: 402,
            name: "Imperial",
            type: "(0,25cl)",
            price: "1,40€"
          },
          {
            id: 403,
            name: "Imperial",
            type: "(0,50cl)",
            price: "2,50€"
          },
          {
            id: 404,
            name: "Super bock",
            type: "(0,33cl)",
            price: "1,85€"
          }
        ]
      },
      //SOMERSBY
      {
        title: 'Somersby',
        items: [
          {
            id: 500,
            name: "Amora",
            details: "(0,33)",
            price: "2,50€"
          },
          {
            id: 501,
            name: "Macã",
            details: "(0,33)",
            price: "1,85€"
          },
        ]
      },
      //Cocktails
      {
        title: 'Cocktails',
        items: [
          {
            id: 5,
            name: "Caipirinha",
            details: "Clássica, maracujá, frutos vermelhos",
            price: "5€"
          },
          {
            id: 6,
            name: "Mojito",
            details: "Clássico, maracujá, rum, frutos vermelhos",
            price: "6€"
          },
          {
            id: 7,
            name: "O melhor do mundo",
            details: "Whisky, clara de ovo, açúcar e limão",
            price: "7€"
          }

        ]
      },
      //Vinhos
      {
        title: 'Vinhos',
        items: [
          {
            id: 8,
            name: "Tinto Douro - Esteva ",
            type: "(Copo)",
            price: "4€"
          },
          {
            id: 9,
            name: "Tinto Douro - Esteva",
            type: "(Garrafa)",
            price: "13€"
          },
          {
            id: 10,
            name: "Trinca Alentejo - Trica Bolotas ",
            type: "(Copo)",
            price: "4€"
          },
          {
            id: 11,
            name: "Trinca Alentejo - Trica Bolotas",
            type: "(Garrafa)",
            price: "14€"
          },
          {
            id: 14,
            name: "Vinho Branco",
            type: "(Copo)",
            price: "4€"
          },
          {
            id: 15,
            name: "Vinho Branco",
            type: "(Garrafa)",
            price: "12€"
          },
          {
            id: 16,
            name: "Rosé - Mateus",
            type: "(Copo)",
            price: "4€"
          },
          {
            id: 17,
            name: "Rosé - Mateus",
            type: "(Garrafa)",
            price: "13€"
          },
        ]
      },
    //Sangra espumante  
      {
        title: 'Sangria de espumante',
        items: [
          {
            id: 200,
            name: "Frutos vermelhos",
            type: "(Copo)",
            price: "5€"
          },
          {
            id: 201,
            name: "Frutos vermelhos",
            type: "(Jarrro 1,7L)",
            price: "17,99€"
          },
          {
            id: 202,
            name: "Maracujá",
            type: "(Copo)",
            price: "5€"
          },
          {
            id: 203,
            name: "Maracujá",
            type: "(Jarrro 1,7L)",
            price: "17,99€"
          },
          
          
        ]
      },
      //Champanhe
      {
        title: "Champanhe",
        items: [
          {
            id: 18,
            name: "Moët Chandon brut",
            price: "60€"
          }
        ]
      },
      // Whisky
      {
        title: "Whisky",
        items: [
          {
            id: 19,
            name: "Jameson",
            type: "(Copo)",
            price: "5€"
          },
          {
            id: 20,
            name: "Famous grouse",
            type: "(Copo)",
            price: "5€"
          }
        ]
      },
    ]
  }

  const { header, content } = detailsPage;


  return (
    <>
      <Head>
        <title>Bebidas - Golden Burger Lisboa</title>
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
                <Carousel.Item interval={2000} key={item.title} className={styles.itemCarrousel}>
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
            <ButtonWhatsapp content="Faça seu pedido" />
          </a>
        </Link>

        <section className={styles.containerItemCardapio} style={{
          gap: "0px"
        }}>
          {content.map(section => {
            return (
              <div key={section.title}>
                <div className={styles.itemCardapio} >
                  <h3 style={{
                    fontWeight: "bold",
                    display: 'block',
                    paddingTop: "14px",
                    paddingBottom: "20px",
                    color: '#fff'
                  }}>{section.title}</h3>
                  {section.items.map(item => {
                    return (
                      <div  key={item.id}>
                        
                        {(item.id != 1 && item.id !=5 && item.id !=8 && item.id !=18 && item.id !=19 && item.id!= 200 && item.id!= 300 && item.id!= 400 && item.id!= 500) &&
                         <hr style={{
                          backgroundColor: "#F3A11A",
                          padding: "0px important",
                        }} />
                        }

                        <div style={{
                          marginBottom: "5px",
                        }}>
                          <span style={{
                            fontWeight: "500",
                            display: "inline-block",
                            width: "100%",
                            color: "#f0f0f0",
                          }}>{item.name} <p style={{
                            color: "#F3A11A",
                            display: "inline"
                          }}>{item.type}</p>  -  {item.price}</span>
                          <p style={{
                            display: "block",
                            fontSize: "14px",
                            marginBottom: "0px",
                            color: "#C8C8C8"
                          }}>{item.details}</p>
                        </div>

                      </div>
                    )
                  })}

                </div>
                <hr style={{
                  backgroundColor: "#F3A11A",
                  height: "3px",
                  zIndex: "300",
                  padding: "0px important",
                  opacity: '.5'
                }} />
              </div>
            )
          })}
        </section>
        <Link href="https://api.whatsapp.com/message/FTJZRMZA6OFEJ1?autoload=1&app_absent=0">
          <a target="_blank">
            <ButtonWhatsapp content="Faça seu pedido" className={stylesButton.bottomButton} />
          </a>
        </Link>
      </main>
      <Footer />
    </>
  );
}

export default Bebidas;