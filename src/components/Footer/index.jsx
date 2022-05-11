import Link from 'next/link';
import styles from './styles.module.scss'

function Footer() {
  return (
      <footer className={styles.containerFooter}>
          <span>
            GOLDEN BURGER © 2022 • Created by <Link href='https://www.instagram.com/ikauan.costa/' ><a target="_blank">Kauan Costa</a></Link>
          </span>
      </footer>
  );
}

export default Footer;