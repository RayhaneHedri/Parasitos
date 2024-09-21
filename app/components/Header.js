// app/components/Header.js

import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.iconContainer}>
      <Image src="/assets/menu.png" alt="Logo" width={50} height={50} />
      </div>
      <div className={styles.logoContainer}>
      <Image src="/assets/logo website-01.png" alt="Logo" width={160} height={80} />
      </div>
      <nav className={styles.nav}>
      <div class="input-group rounded">
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div>
        <Link legacyBehavior href="/signin">
          <a className={styles.link2}>Sign in</a>
        </Link>
        <Link legacyBehavior href="/about">
          <a className={styles.link1}>Subscribe</a>
        </Link>
        
      </nav>
    </header>
  );
};

export default Header;