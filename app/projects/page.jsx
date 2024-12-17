"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // State for search input
  const [displayText, setDisplayText] = useState("[bject Object]undefined");

  // Toggle function for opening/closing the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/closed
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (searchInput.toLowerCase() === "help") {
        setDisplayText(
          '[bject Object]undefinedUnknown command. Type "help" for available commands.undefined'
        );
      } else {
        setDisplayText("[bject Object]undefined"); // Default text when input doesn't match "help"
      }
    }
  };

  // Hover state for all images
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div style={styles.container}>
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

      {/* Afbeeldingen naast elkaar met horizontale scroll */}
      <div style={styles.imageContainer}>
        {['mac2.png', 'mac2.png', 'mac2.png', 'mac2.png'].map((image, index) => (
          <img
            key={index}
            src={`/afbeeldingen/${image}`} // Dynamic image path
            alt={`Image ${index + 1}`}
            style={{
              ...styles.image,
              marginLeft: index === 0 ? "40px" : "20px", // Only first image gets extra margin
              backgroundColor: hoveredIndex === index ? "#ffffff" : "transparent", // Background color on hover
              ...(hoveredIndex === index ? styles.imageHover : {}), // Apply hover effect only to hovered image
            }}
            onMouseEnter={() => setHoveredIndex(index)} // Hover start for this image
            onMouseLeave={() => setHoveredIndex(null)} // Hover stop
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

  // Image container for horizontal scroll
  imageContainer: {
    display: "flex",
    overflowX: "auto", // Enable horizontal scrolling
    gap: "10px", // Space between images
    padding: "10px",
    scrollbarWidth: "none", // Hide the scrollbar in Firefox
  },

  // Custom styling to hide scrollbar in webkit browsers (like Chrome, Safari)
  "::webkit-scrollbar": {
    display: "none", // Hide scrollbar in Webkit browsers (Chrome, Safari)
  },

  // Styling for individual images
  image: {
    width: "660px",
    height: "660px",
    objectFit: "cover", // Ensure the images scale correctly
    margin: "20px", // Added margin around each image
    transition: "transform 0.3s ease, background-color 0.3s ease", // Smooth transition for scaling and background color
  },

  // Hover effect to scale the image smaller
  imageHover: {
    transform: "scale(0.9)", // Scales down the image to 90% of its original size
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
    gap: "15px", // Consistent spacing between items
    alignItems: "flex-start",
  },
  menuItem: {
    cursor: "pointer",
    padding: "0", // Remove any extra padding
    lineHeight: "1.2", // Adjust line height
    color: "#4CAF50",
  },
};

