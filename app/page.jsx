"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import "./styles.css";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [displayText, setDisplayText] = useState("[bject Object]undefined");
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchInput.toLowerCase() === "help") {
        setDisplayText('[bject Object]undefinedUnknown command. Type "help" for available commands.undefined');
      } else if (searchInput.toLowerCase() === "projects") {
        router.push("/projects");
        setDisplayText("Navigating to projects...");
      } else {
        setDisplayText("[bject Object]undefined");
      }
    }
  };

  return (
    <div style={styles.container}>
      {/* Status Lights */}
      <div className="statusLights" style={styles.statusLights}>
        <div style={styles.lightRed}></div>
        <div style={styles.lightYellow}></div>
        <div style={styles.lightGreen}></div>
      </div>

      {/* Always Visible Text */}
      <div className="alwaysVisibleText" style={styles.alwaysVisibleText}>
        {displayText}
      </div>

      {/* Search Bar */}
      <div className="searchBar" style={styles.searchBar}>
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

      {/* Menu Button */}
      <button style={styles.menuButton} onClick={toggleMenu}>
        <Terminal size={40} color="black" />
      </button>

      {/* Menu */}
      {isMenuOpen && (
        <div style={styles.menu}>
          <ul style={styles.menuList}>
            <Link href="/">
              <span style={styles.menuItem}>home</span>
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
    top: "100px",
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
    gap: "15px",
    alignItems: "flex-start",
  },
  menuItem: {
    cursor: "pointer",
    padding: "0",
    lineHeight: "1.2",
  },
};
