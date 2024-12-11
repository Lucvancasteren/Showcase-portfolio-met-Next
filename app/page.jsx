"use client";

import Head from 'next/head';
import Image from 'next/image';
import '../styles/styles.css'; // Zorg ervoor dat je CSS in de juiste map staat
import { useState } from 'react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <Head>
        <title>Creative Portfolio</title>
        <link 
          href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@400;600&display=swap" 
          rel="stylesheet"
        />
      </Head>

      <header className="flex justify-between items-center p-8 fixed w-full z-[100] font-stick-no-bills">
        <img src="/afbeeldingen/LogoWit.png" alt="Logo" className="w-12 h-12" />
        <button className="border border-[#2ecc71] text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer transition font-['Stick No Bills']">
          AVAILABLE FOR WORK
          <span className="inline-block w-2 h-2 bg-[#2ecc71] rounded-full"></span>
        </button>
        <div 
          className="relative cursor-pointer md:flex z-[300] mr-20"
          onClick={toggleMenu}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center w-12 h-12 bg-[#26548A] rounded-full">
            {!menuOpen ? (
              <>
                <span className="block w-6 h-0.5 bg-white mb-1"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
              </>
            ) : (
              <span className="block text-white text-2xl">&times;</span>
            )}
          </div>
        </div>
      </header>

      <nav className={`fixed top-0 right-0 h-full w-[250px] bg-black text-white flex flex-col items-center justify-center gap-8 z-[200] transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div 
          className="absolute top-4 right-4 cursor-pointer z-[300]"
          onClick={toggleMenu}
        >
          <div className="flex items-center justify-center w-12 h-12 bg-[#26548A] rounded-full">
            <span className="block text-white text-2xl">&times;</span>
          </div>
        </div>
        <a href="#home" className="menu-item">home</a>
        <a href="#work" className="menu-item">work</a>
        <a href="#about" className="menu-item">about</a>
      </nav>

      <main className="hero">
        <Image src="/afbeeldingen/model.png" alt="Profile" width={700} height={950} className="profile-image" />
        <div className="floating-text" id="text1">LUC</div>
        <div className="floating-text" id="text2">VAN</div>
        <div className="floating-text" id="text3">CASTEREN</div>

        <div className="taglines">
          <div className="tagline"><span className="code">CODE</span> WITH PURPOSE.</div>
          <div className="tagline"><span className="design">DESIGN</span> WITH PASSION</div>
        </div>
      </main>
    </>
  );
}