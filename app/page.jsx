"use client";

import { useState } from "react";
import { Terminal } from "lucide-react"; // Zorg ervoor dat 'lucide-react' is geïnstalleerd!

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div style={styles.container}>
      {/* Video */}
      <video
        style={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/afbeeldingen/luc.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Knop rechtsboven */}
      <button style={styles.menuButton} onClick={toggleMenu}>
        <Terminal size={40} color="black" />
      </button>

      {/* Menu */}
      {isMenuOpen && (
        <div style={styles.menu}>
          <ul style={styles.menuList}>
            <li style={styles.menuItem}>home</li>
            <li style={styles.menuItem}>about</li>
            <li style={styles.menuItem}>projects</li>
            <li style={styles.menuItem}>contact</li>
            <li style={styles.menuItem}>help</li>
          </ul>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    position: "relative",
    height: "100vh",
    width: "100vw",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  video: {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    height: "180%",
    objectFit: "contain",
  },

  menuButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "#4CAF50", // Groen
    border: "none",
    width: "60px", // Maak de knop kleiner
    height: "60px", // Maak de knop kleiner
    borderRadius: "0", // Verwijder border radius
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
  },
  
  menu: {
    position: "absolute",
    top: "100px", // Ruimte tussen de knop en het menu
    right: "20px", // Uitlijnen met de knop
    backgroundColor: "black", // Achtergrondkleur
    border: "2px solid #4CAF50", // Groen kader
    color: "#4CAF50", // Groen tekstkleur
    padding: "10px 20px", // Binnenruimte rondom de nav-links
    zIndex: 9,
    borderRadius: "0", // Geen afgeronde hoeken
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start", // Links uitlijnen van de tekst
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    width: "250px", // Breder maken van het kader
  },
  
  
  menuList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "10px", // Ruimte tussen nav-links
    fontSize: "18px",
    fontFamily: "monospace",
    textAlign: "left", // Links uitlijnen van de tekst
    width: "100%", // Zorg dat de tekstlinks de volledige breedte hebben
  },
  
  menuItem: {
    cursor: "pointer",
    transition: "color 0.3s",
    color: "#4CAF50",
    padding: "5px 0", // Ruimte rondom de tekst
  },
  
};
