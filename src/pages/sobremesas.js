import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Carousel from 'react-bootstrap/Carousel'
import ButtonWhatsapp from '../components/ButtonWhatsapp';
import styles from '../../styles/cardapio_item.module.scss'
import stylesButton from '../components/ButtonWhatsapp/styles.module.scss'
import { BsArrowLeft } from 'react-icons/bs'


function Sobremesas() {

  const detailsPage = {
    header: {
      title: "SOBREMESAS",
      description: "Milhshakes, Brownies, Mouses e muito mais"
    },

    content: [
     {
         title: "",
         imageUrl: "/sobremesas/bolo.jpg",

         items: [
             {
                 name: "Mouse de Oreo",
                 price: "4.95€"
             },
             {
                name: "Mouse de maracujá",
                price: "4,95€"
             },
             {
                name: "Duas bolas de gelado",
                details: "Chocolate | baunilha | morango",
                price: "4,5€"
             },
             {
                name: "Brownie da casa",
                details: "Brownie, gelado, canudinhos recheado e Nutella.",
                price: "5,5€"
             },
             {
                name: "Milhshake",
                details: "Batido Gelado e Nutella, chantilly, Nutella e canudinhos recheado.",
                price: "4,95€"
             },
             {
                name: "Grande chef. Milkshake",
                details: "Batido Gelado e Nutella, Brownie da casa, gelado, chantilly, Nutella e canudinhos recheado.",
                price: "7,5€"
             }
         ]
     },
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
                {section.items.map(item => {
                    return(
                    <div key={item.name} style={{
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

export default Sobremesas;