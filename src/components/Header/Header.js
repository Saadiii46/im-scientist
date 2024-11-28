import React, { useState, useRef, useEffect } from 'react';
import styles from './Header.module.css';  
import { BiMenuAltRight } from 'react-icons/bi';
import { motion } from 'framer-motion';
import logo from '../../../public/Images/logo.png';
import Link from 'next/link';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpened(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className={styles['h-wrapper']}>
      <div className={`${styles['flexCenter']} ${styles['h-container']}`}>
        <img src={logo.src} alt="logo" width={100} />
        
        {/* Mobile View Menu */}
        <motion.div
          ref={menuRef}
          className={`${styles['flexCenter']} ${styles['h-menu']} ${menuOpened ? styles['opened'] : ''}`}
          initial={{ x: '0%' }}
          animate={{ x: menuOpened ? '100%' : '0%' }}
          transition={{ type: 'spring', stiffness: 50 }}
        >
          <Link href="#home">Home</Link>
          <Link href="#about">About Us</Link>
          <Link href="#online-contest">Online Contest</Link>
          <Link href="#online-outline">Online Outline</Link>
          <Link href="#past-papers">Past Papers</Link>
          <Link href="#fonts">Fonts</Link>
          <Link href="#results">Results</Link>
          <button className={styles.buttons}>
            <Link href="#enroll">Enroll</Link>
          </button>
        </motion.div>

        {/* Menu Icon for Mobile */}
        <div className={styles['menu-icon']} onClick={toggleMenu}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
