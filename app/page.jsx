"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";

export default function Home() {
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
          "[bject Object]undefinedUnknow command. Type \"help\" for available commands.undefined"
        );
      } else {
        setDisplayText("[bject Object]undefined"); // Default text when input doesn't match "help"
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Always Visible Text */}
      <div style={styles.alwaysVisibleText}>{displayText}</div>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <input
          type="text"
          placeholder="Enter command..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.searchInput}
        />
      </div>

      {/* Video */}
      <video style={styles.video} autoPlay muted loop playsInline>
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
  
  // Always visible text styles
  alwaysVisibleText: {
    position: "absolute",
    top: "50px",
    left: "15rem",
    color: "#4CAF50",
    fontSize: "18px",
    fontFamily: "monospace",
    textAlign: "left",
    whiteSpace: "nowrap",
    overflow: "visible",
    zIndex: 21,
  },

  // Searchbar styles
  searchBar: {
    position: "absolute",
    top: "80px",
    left: "15rem",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#000",
    border: "2px solid #4CAF50",
    borderRadius: "0px",
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
    padding: "5px",
  },

  menuButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    backgroundColor: "#4CAF50",
    border: "none",
    width: "60px",
    height: "60px",
    borderRadius: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.2)",
    zIndex: 10,
  },
  menu: {
    position: "absolute",
    top: "150px",
    right: "20px",
    backgroundColor: "black",
    border: "2px solid #4CAF50",
    color: "#4CAF50",
    padding: "10px 20px",
    zIndex: 9,
    borderRadius: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
    width: "300px",
  },
  menuList: {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontSize: "18px",
    fontFamily: "monospace",
    textAlign: "left",
    width: "100%",
  },
  menuItem: {
    cursor: "pointer",
    transition: "color 0.3s",
    color: "#4CAF50",
    padding: "5px 0",
  },
};
