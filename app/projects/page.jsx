"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";


export default function projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [displayText, setDisplayText] = useState("[bject Object]undefined");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchInput.toLowerCase() === "help") {
        setDisplayText(
          '[bject Object]undefinedUnknow command. Type "help" for available commands.undefined'
        );
      } else {
        setDisplayText("[bject Object]undefined"); // Default text when input doesn't match "help"
      }
    }
  };

  return (
    <div style={styles.container}>

      {/* Menu Button */}
      <button style={styles.menuButton} onClick={toggleMenu}>
        <Terminal size={40} color="black" />
      </button>

      {/* Menu */}
      {isMenuOpen && (
        <div style={styles.menu}>
          <ul style={styles.menuList}>
          <Link href="/">
              <span>home</span>
            </Link>
            <li style={styles.menuItem}>about</li>
            <li style={styles.menuItem}>
            <Link href="/projects">projects</Link>
            </li>
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

  statusLights: {
    position: "absolute",
    top: "70px",
    left: "15rem",
    display: "flex",
    gap: "10px",
    zIndex: 22,
  },
  lightRed: { width: "15px", height: "15px", backgroundColor: "#FF605C", borderRadius: "50%" },
  lightYellow: { width: "15px", height: "15px", backgroundColor: "#FFBD44", borderRadius: "50%" },
  lightGreen: { width: "15px", height: "15px", backgroundColor: "#00CA4E", borderRadius: "50%" },

  alwaysVisibleText: {
    position: "absolute",
    top: "100px",
    left: "15rem",
    color: "#4CAF50",
    fontSize: "18px",
    fontFamily: "monospace",
    zIndex: 21,
  },

  searchBar: {
    position: "absolute",
    top: "140px",
    left: "15rem",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    border: "2px solid #4CAF50",
    padding: "5px 10px",
    zIndex: 20,
    width: "60%",
  },
  searchInput: {
    background: "#000",
    color: "#4CAF50",
    border: "none",
    outline: "none",
    fontSize: "16px",
    fontFamily: "monospace",
    width: "100%",
  },

  menuButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "#4CAF50",
    border: "none",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    zIndex: 10,
  },
  menu: {
    position: "absolute",
    top: "100px", // Verklein de afstand naar de menu-knop (van 150px naar 100px)
    right: "20px",
    backgroundColor: "black",
    border: "2px solid #4CAF50",
    color: "#4CAF50",
    padding: "10px 20px",
    zIndex: 9,
    width: "300px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  
  menuList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "15px", // Gelijke ruimte tussen de items
    alignItems: "flex-start", // Zorg dat de tekst links blijft uitgelijnd
  },
  menuItem: {
    cursor: "pointer",
    padding: "0", // Verwijder padding hier
    lineHeight: "1.2", // Regelafstand zonder impact op grootte
  },
  
  
}  