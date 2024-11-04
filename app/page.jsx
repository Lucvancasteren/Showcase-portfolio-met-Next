import Head from 'next/head';
import Image from 'next/image';
import '../styles/styles.css'; // Zorg ervoor dat je CSS in de juiste map staat

export default function Home() {
  return (
    <>
   <Head>
  <title>Creative Portfolio</title>
  <link href="https://fonts.googleapis.com/css2?family=Stick+No+Bills:wght@400;600&display=swap" rel="stylesheet" />
</Head>

<header className="flex justify-between items-center p-8 fixed w-full z-[100] font-stick-no-bills">
    <img src="/afbeeldingen/LogoWit.png" alt="Logo" className="w-12 h-12" />
    <button className="border border-[#2ecc71] text-white px-4 py-2 rounded-full flex items-center gap-2 cursor-pointer transition font-['Stick No Bills']">
        AVAILABLE FOR WORK
        <span className="inline-block w-2 h-2 bg-[#2ecc71] rounded-full"></span>
    </button>
    <div className="hidden flex-col gap-1 cursor-pointer md:flex">
        <span className="block w-6 h-0.5 bg-white"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
    </div>
</header>


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

      <nav className="menu" id="menu">
        <a href="#home" className="menu-item">home</a>
        <div className="menu-dot"></div>
        <a href="#work" className="menu-item">work</a>
        <div className="menu-dot"></div>
        <a href="#about" className="menu-item">about</a>
      </nav>
    </>
  );
}
