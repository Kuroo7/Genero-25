'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import './styles/Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const floatingBar = document.querySelector('.floating-bar');

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 600) {
        navbar?.classList.add('hide');
        floatingBar?.classList.add('scrolled');
      } else {
        navbar?.classList.remove('hide');
        floatingBar?.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const BubbleText = ({ text }) => {
    return (
      <p className="bubble-text">
        {text.split("").map((child, idx) => (
          <span className="hoverText" key={idx}>
            {child}
          </span>
        ))}
      </p>
    );
  };
  

  return (
    <div>
      <nav className="navbar" id="navbar">
        <a href="#"><Image src="/logo.png" alt="Logo" width={100} height={40} className="logo" /></a>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#"><BubbleText text="HOME" /></a></li>
          <li><a href="#"><BubbleText text="ABOUT" /></a></li>
          <li><a href="#"><BubbleText text="PAST" /></a></li>
          <li><a href="#"><BubbleText text="THIS&nbsp;YEAR" /></a></li>
          <li><a href="#"><BubbleText text="EVENTS" /></a></li>
          <li><a href="#"><BubbleText text="FAQ" /></a></li>
          <li><a href="#"><BubbleText text="SCHEDULE" /></a></li>
          <li><a href="#"><BubbleText text="TEAM" /></a></li>
          <li>
            <a href="#" className="get-ticket">
              <BubbleText text="GET&nbsp;TICKET" />
            </a>
          </li>
        </ul>
      </nav>

      <div className="floating-bar">
        <Image src="/logo.png" alt="Logo" width={90} height={36} className="floating-logo" />
        <div className="hamburger" id="hamburger" onClick={() => setMenuOpen((prev) => !prev)}>&#9776;</div>
      </div>

      <div style={{ height: '2000px', paddingTop: '120px' }}>
        {/* page content */}
      </div>
    </div>
  );
};

export default Navbar;