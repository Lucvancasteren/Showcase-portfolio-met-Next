"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

      <div style={styles.imageContainer}>
        {['mac2.png', 'qmusic2.png', 'claudy.png', 'mac2.png'].map((image, index) => (
          <img
            key={index}
            src={`/afbeeldingen/${image}`}
            alt={`Image ${index + 1}`}
            className={`w-[660px] h-[660px] object-cover transition-all duration-300 ease-in-out
              ${index === 0 ? 'md:ml-10' : 'md:ml-5'}
              ${hoveredIndex === index ? 'bg-white scale-90' : 'bg-transparent'}
              md:w-[660px] md:h-[660px] w-full h-auto`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        ))}
      </div>
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

  // For hiding the scrollbar
  imageContainer: {
    display: "flex",
    gap: "10px", // Space between images
    padding: "10px",
    overflowX: "auto", // Allows horizontal scroll
    scrollbarWidth: "none", // Firefox
    flexDirection: "row", // Default horizontal direction on desktop
  },

  "::webkit-scrollbar": {
    display: "none", // Hides the scrollbar in Webkit browsers (Chrome, Safari)
  },

  // Media query to handle mobile screens
  "@media (max-width: 768px)": {
    imageContainer: {
      flexDirection: "column", // Stack images vertically on mobile
      overflowX: "hidden", // Disable horizontal scroll on mobile
    },
  },
};
